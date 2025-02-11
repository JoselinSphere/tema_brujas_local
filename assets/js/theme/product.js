/*
 Import all product specific js
 */
import PageManager from './page-manager';
import Review from './product/reviews';
import collapsibleFactory from './common/collapsible';
import ProductDetails from './common/product-details';
import videoGallery from './product/video-gallery';
import { classifyForm } from './common/utils/form-utils';
import modalFactory from './global/modal';

export default class Product extends PageManager {
    constructor(context) {
        super(context);
        this.url = window.location.href;
        this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
        this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
        this.reviewModal = modalFactory('#modal-review-form')[0];
    }

    onReady() {
        // Listen for foundation modal close events to sanitize URL after review.
        $(document).on('close.fndtn.reveal', () => {
            if (this.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                window.history.replaceState(null, document.title, window.location.pathname);
            }
        });

        let validator;

        // Init collapsible
        collapsibleFactory();

        this.productDetails = new ProductDetails($('.productView'), this.context, window.BCData.product_attributes);
        this.productDetails.setProductVariant();

        videoGallery();

        this.bulkPricingHandler();

        const $reviewForm = classifyForm('.writeReview-form');

        if ($reviewForm.length === 0) return;

        const review = new Review({ $reviewForm });

        $('body').on('click', '[data-reveal-id="modal-review-form"]', () => {
            validator = review.registerValidation(this.context);
            this.ariaDescribeReviewInputs($reviewForm);
        });

        $reviewForm.on('submit', () => {
            if (validator) {
                validator.performCheck();
                return validator.areAll('valid');
            }

            return false;
        });

        this.productReviewHandler();

        this.pdpVideo();

        this.recentlyViewedCookies(this.context)
    }

    getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";
    }

    recentlyViewedCookies(context) {
        const { productId, recently_viewed_expires_date, recently_viewed_product_limit} = context;
        if(productId > 0){
            const dateExp = new Date();
            dateExp.setDate(dateExp.getDate() + parseInt(recently_viewed_expires_date));

            let productIdsList = []
            const exit_rv_cookie = this.getCookie('bc_recently_viewed');
            const exit_rv_cookie_spt = exit_rv_cookie.split(",");  
            if(exit_rv_cookie_spt.length > 0 && exit_rv_cookie_spt.length == recently_viewed_product_limit){ return false; }

            if(document.cookie.indexOf('bc_recently_viewed') != -1) {
                productIdsList = exit_rv_cookie_spt;
                if(exit_rv_cookie_spt.indexOf(productId) === -1) {
                    productIdsList.push(productId)
                }
            }else{
                productIdsList.push(productId);
            }
            if(productIdsList.length > 0){
                document.cookie = `bc_recently_viewed=${productIdsList};expires=${dateExp.toGMTString()}; path=/`;
            }
        }
    }

    // pdpVideo() {
    //     const hasVideo = $('.videomn');
    //     if (hasVideo.length > 0) {
    //         $('.videomn > a').each(function(){
    //             $(this).on('click', function(){
    //                 const videoID = $(this).attr('data-video-id');
    //                 const iframe = '<iframe id="player" class="lazyload" type="text/html" width="640" height="390" src="https://www.youtube.com/embed/' + videoID + '?rel=0" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
    //                 $(this).addClass('is-active');
    //                 $(this).parent('.videomn').children('a').removeClass('is-active');
    //                 $("#player").remove();
    //                 $(".productView-image").before(iframe).hide();
    //             });
    //         });
    //         $(".productView-thumbnail:not(.videomn), .slick-prev.slick-arrow").click(function(){
    //             $(".productView-images .videomn a").removeClass('is-active');
    //             $("#player").remove();
    //             $(".productView-image").show();
    //         })
    //     }
    // }

    pdpVideo() {
        const $videoThumbnail = $('.productView-thumbnail[data-video="true"]');
        const $mainImageContainer = $('.productView-img-container');
        const $mainImage = $('.productView-image--default');
        const $zoomContainer = $('[data-image-gallery-main]'); // Contenedor de zoom principal
    
        // Crear contenedor de video oculto si no existe
        if (!$('#videoContainer').length) {
            const videoContainer = $('<div id="videoContainer" class="productView-video-container" style="display: none;"></div>');
            const videoFrame = $('<iframe id="productVideo" width="100%" height="400" frameborder="0" allowfullscreen></iframe>');
            videoContainer.append(videoFrame);
            $mainImageContainer.append(videoContainer);
        }
    
        const $videoContainer = $('#videoContainer');
        const $videoFrame = $('#productVideo');
    
        // Desactivar el evento de zoom al mostrar el video
        const disableZoom = () => $zoomContainer.off('mousemove').off('mouseenter').off('mouseleave');
    
        // Reactivar el evento de zoom cuando se oculta el video
        const enableZoom = () => {
            // Reactiva el comportamiento del zoom que BigCommerce utiliza
            $zoomContainer.on('mousemove', zoomHandler).on('mouseenter', zoomHandler).on('mouseleave', zoomHandler);
        };
    
        // Evento de clic en la miniatura del video
        $videoThumbnail.on('click', function (event) {
            event.preventDefault(); // Evita que el foco se mueva al fondo de la página
    
            const videoId = $(this).find('a').attr('data-video-id');
            if (videoId) {
                const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=0`;
    
                // Ocultar imagen principal, desactivar zoom y mostrar video
                $mainImage.hide();
                disableZoom();
                $videoFrame.attr('src', videoUrl);
                $videoContainer.show();
    
                // Mantén el foco en el contenedor principal del producto
                $('html, body').scrollTop($mainImageContainer.offset().top);
            }
        });
    
        // Restaurar la imagen cuando se haga clic en otra miniatura
        $('.productView-thumbnail:not([data-video]), .slick-prev, .slick-next').on('click', function () {
            $videoContainer.hide();
            $videoFrame.attr('src', ''); // Limpia el video
            $mainImage.show();
            enableZoom();
        });
    }

    ariaDescribeReviewInputs($form) {
        $form.find('[data-input]').each((_, input) => {
            const $input = $(input);
            const msgSpanId = `${$input.attr('name')}-msg`;

            $input.siblings('span').attr('id', msgSpanId);
            $input.attr('aria-describedby', msgSpanId);
        });
    }

    productReviewHandler() {
        if (this.url.indexOf('#write_review') !== -1) {
            this.$reviewLink.trigger('click');
        }
    }

    bulkPricingHandler() {
        if (this.url.indexOf('#bulk_pricing') !== -1) {
            this.$bulkPricingLink.trigger('click');
        }
    }
}
