"use strict";
(self["webpackChunkStyle"] = self["webpackChunkStyle"] || []).push([["assets_js_theme_product_js"],{

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Product; }
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 Import all product specific js
 */








var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);

  function Product(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }

  var _proto = Product.prototype;

  _proto.onReady = function onReady() {
    var _this2 = this;

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator; // Init collapsible

    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    this.bulkPricingHandler();
    var $reviewForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.writeReview-form');
    if ($reviewForm.length === 0) return;
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]({
      $reviewForm: $reviewForm
    });
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);

      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }

      return false;
    });
    this.productReviewHandler();
    this.pdpVideo();
    this.recentlyViewedCookies(this.context);
  };

  _proto.getCookie = function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }

    return "";
  };

  _proto.recentlyViewedCookies = function recentlyViewedCookies(context) {
    var productId = context.productId,
        recently_viewed_expires_date = context.recently_viewed_expires_date,
        recently_viewed_product_limit = context.recently_viewed_product_limit;

    if (productId > 0) {
      var dateExp = new Date();
      dateExp.setDate(dateExp.getDate() + parseInt(recently_viewed_expires_date));
      var productIdsList = [];
      var exit_rv_cookie = this.getCookie('bc_recently_viewed');
      var exit_rv_cookie_spt = exit_rv_cookie.split(",");

      if (exit_rv_cookie_spt.length > 0 && exit_rv_cookie_spt.length == recently_viewed_product_limit) {
        return false;
      }

      if (document.cookie.indexOf('bc_recently_viewed') != -1) {
        productIdsList = exit_rv_cookie_spt;

        if (exit_rv_cookie_spt.indexOf(productId) === -1) {
          productIdsList.push(productId);
        }
      } else {
        productIdsList.push(productId);
      }

      if (productIdsList.length > 0) {
        document.cookie = "bc_recently_viewed=" + productIdsList + ";expires=" + dateExp.toGMTString() + "; path=/";
      }
    }
  };

  _proto.pdpVideo = function pdpVideo() {
    var hasVideo = $('.videomn');

    if (hasVideo.length > 0) {
      $('.videomn > a').each(function () {
        $(this).on('click', function () {
          var videoID = $(this).attr('data-video-id');
          var iframe = '<iframe id="player" class="lazyload" type="text/html" width="640" height="390" src="https://www.youtube.com/embed/' + videoID + '?rel=0" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
          $(this).addClass('is-active');
          $(this).parent('.videomn').children('a').removeClass('is-active');
          $("#player").remove();
          $(".productView-image").before(iframe).hide();
        });
      });
      $(".productView-thumbnail:not(.videomn), .slick-prev.slick-arrow").click(function () {
        $(".productView-images .videomn a").removeClass('is-active');
        $("#player").remove();
        $(".productView-image").show();
      });
    }
  };

  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };

  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };

  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };

  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoGallery": function() { return /* binding */ VideoGallery; },
/* harmony export */   "default": function() { return /* binding */ videoGallery; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }

  var _proto = VideoGallery.prototype;

  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };

  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };

  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };

  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };

  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;

    if (isInitialized) {
      return;
    }

    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJPOzs7QUFDakIsbUJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDakIsb0NBQU1BLE9BQU47QUFDQSxVQUFLQyxHQUFMLEdBQVdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBM0I7QUFDQSxVQUFLQyxXQUFMLEdBQW1CQyxDQUFDLENBQUMsc0NBQUQsQ0FBcEI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QkQsQ0FBQyxDQUFDLHVDQUFELENBQXpCO0FBQ0EsVUFBS0UsV0FBTCxHQUFtQlYseURBQVksQ0FBQyxvQkFBRCxDQUFaLENBQW1DLENBQW5DLENBQW5CO0FBTGlCO0FBTXBCOzs7O1NBRURXLFVBQUEsbUJBQVU7QUFBQTs7QUFDTjtBQUNBSCxJQUFBQSxDQUFDLENBQUNJLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsb0JBQWYsRUFBcUMsWUFBTTtBQUN2QyxVQUFJLE1BQUksQ0FBQ1YsR0FBTCxDQUFTVyxPQUFULENBQWlCLGVBQWpCLE1BQXNDLENBQUMsQ0FBdkMsSUFBNEMsT0FBT1YsTUFBTSxDQUFDVyxPQUFQLENBQWVDLFlBQXRCLEtBQXVDLFVBQXZGLEVBQW1HO0FBQy9GWixRQUFBQSxNQUFNLENBQUNXLE9BQVAsQ0FBZUMsWUFBZixDQUE0QixJQUE1QixFQUFrQ0osUUFBUSxDQUFDSyxLQUEzQyxFQUFrRGIsTUFBTSxDQUFDQyxRQUFQLENBQWdCYSxRQUFsRTtBQUNIO0FBQ0osS0FKRDtBQU1BLFFBQUlDLFNBQUosQ0FSTSxDQVVOOztBQUNBdkIsSUFBQUEsK0RBQWtCO0FBRWxCLFNBQUt3QixjQUFMLEdBQXNCLElBQUl2QiwrREFBSixDQUFtQlcsQ0FBQyxDQUFDLGNBQUQsQ0FBcEIsRUFBc0Ms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QUNiLFNBQUtaLE9BQUwsQ0FBYWpCLFdBQWIsQ0FBeUIsV0FBekI7QUFDQSxTQUFLa0IsWUFBTCxDQUFrQlMsY0FBbEIsQ0FBaUM5QixRQUFqQyxDQUEwQyxXQUExQztBQUNILEdBN0JMOztBQUFBLFNBK0JJc0IsVUEvQkosR0ErQkksc0JBQWE7QUFDVCxTQUFLRixPQUFMLENBQWF0RSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLEtBQUt5RSxjQUFMLENBQW9CVSxJQUFwQixDQUF5QixJQUF6QixDQUF6QjtBQUNILEdBakNMOztBQUFBO0FBQUE7QUFvQ2UsU0FBU2xHLFlBQVQsR0FBd0I7QUFDbkMsTUFBTW1HLFNBQVMsR0FBRyxlQUFsQjtBQUNBLE1BQU1DLGFBQWEsR0FBRzFGLENBQUMsWUFBVXlGLFNBQVYsT0FBdkI7QUFFQUMsRUFBQUEsYUFBYSxDQUFDdkMsSUFBZCxDQUFtQixVQUFDd0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQ25DLFFBQU1DLEdBQUcsR0FBRzdGLENBQUMsQ0FBQzRGLE9BQUQsQ0FBYjtBQUNBLFFBQU1FLGFBQWEsR0FBR0QsR0FBRyxDQUFDVCxJQUFKLENBQVNLLFNBQVQsYUFBK0JqQixZQUFyRDs7QUFFQSxRQUFJc0IsYUFBSixFQUFtQjtBQUNmO0FBQ0g7O0FBRURELElBQUFBLEdBQUcsQ0FBQ1QsSUFBSixDQUFTSyxTQUFULEVBQW9CLElBQUlqQixZQUFKLENBQWlCcUIsR0FBakIsQ0FBcEI7QUFDSCxHQVREO0FBVUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdHlsZS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0LmpzIiwid2VicGFjazovL1N0eWxlLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXHJcbiAqL1xyXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgUmV2aWV3IGZyb20gJy4vcHJvZHVjdC9yZXZpZXdzJztcclxuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xyXG5pbXBvcnQgdmlkZW9HYWxsZXJ5IGZyb20gJy4vcHJvZHVjdC92aWRlby1nYWxsZXJ5JztcclxuaW1wb3J0IHsgY2xhc3NpZnlGb3JtIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XHJcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIHRoaXMuJHJldmlld0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScpO1xyXG4gICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLWJ1bGstcHJpY2luZ1wiXScpO1xyXG4gICAgICAgIHRoaXMucmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNtb2RhbC1yZXZpZXctZm9ybScpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbG9zZS5mbmR0bi5yZXZlYWwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdmFsaWRhdG9yO1xyXG5cclxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXHJcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXMpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcclxuXHJcbiAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVsa1ByaWNpbmdIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRyZXZpZXdGb3JtID0gY2xhc3NpZnlGb3JtKCcud3JpdGVSZXZpZXctZm9ybScpO1xyXG5cclxuICAgICAgICBpZiAoJHJldmlld0Zvcm0ubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJldmlldyA9IG5ldyBSZXZpZXcoeyAkcmV2aWV3Rm9ybSB9KTtcclxuXHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScsICgpID0+IHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yID0gcmV2aWV3LnJlZ2lzdGVyVmFsaWRhdGlvbih0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLmFyaWFEZXNjcmliZVJldmlld0lucHV0cygkcmV2aWV3Rm9ybSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wZHBWaWRlbygpO1xyXG5cclxuICAgICAgICB0aGlzLnJlY2VudGx5Vmlld2VkQ29va2llcyh0aGlzLmNvbnRleHQpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29va2llKGNuYW1lKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBjbmFtZSArIFwiPVwiO1xyXG4gICAgICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGMgPSBjYVtpXTtcclxuICAgICAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykgYyA9IGMuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWUpICE9IC0xKSByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZW50bHlWaWV3ZWRDb29raWVzKGNvbnRleHQpIHtcclxuICAgICAgICBjb25zdCB7IHByb2R1Y3RJZCwgcmVjZW50bHlfdmlld2VkX2V4cGlyZXNfZGF0ZSwgcmVjZW50bHlfdmlld2VkX3Byb2R1Y3RfbGltaXR9ID0gY29udGV4dDtcclxuICAgICAgICBpZihwcm9kdWN0SWQgPiAwKXtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZUV4cCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGRhdGVFeHAuc2V0RGF0ZShkYXRlRXhwLmdldERhdGUoKSArIHBhcnNlSW50KHJlY2VudGx5X3ZpZXdlZF9leHBpcmVzX2RhdGUpKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9kdWN0SWRzTGlzdCA9IFtdXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXRfcnZfY29va2llID0gdGhpcy5nZXRDb29raWUoJ2JjX3JlY2VudGx5X3ZpZXdlZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBleGl0X3J2X2Nvb2tpZV9zcHQgPSBleGl0X3J2X2Nvb2tpZS5zcGxpdChcIixcIik7ICBcclxuICAgICAgICAgICAgaWYoZXhpdF9ydl9jb29raWVfc3B0Lmxlbmd0aCA+IDAgJiYgZXhpdF9ydl9jb29raWVfc3B0Lmxlbmd0aCA9PSByZWNlbnRseV92aWV3ZWRfcHJvZHVjdF9saW1pdCl7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQuY29va2llLmluZGV4T2YoJ2JjX3JlY2VudGx5X3ZpZXdlZCcpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWRzTGlzdCA9IGV4aXRfcnZfY29va2llX3NwdDtcclxuICAgICAgICAgICAgICAgIGlmKGV4aXRfcnZfY29va2llX3NwdC5pbmRleE9mKHByb2R1Y3RJZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkc0xpc3QucHVzaChwcm9kdWN0SWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkc0xpc3QucHVzaChwcm9kdWN0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHByb2R1Y3RJZHNMaXN0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYGJjX3JlY2VudGx5X3ZpZXdlZD0ke3Byb2R1Y3RJZHNMaXN0fTtleHBpcmVzPSR7ZGF0ZUV4cC50b0dNVFN0cmluZygpfTsgcGF0aD0vYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwZHBWaWRlbygpIHtcclxuICAgICAgICBjb25zdCBoYXNWaWRlbyA9ICQoJy52aWRlb21uJyk7XHJcbiAgICAgICAgaWYgKGhhc1ZpZGVvLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgJCgnLnZpZGVvbW4gPiBhJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvSUQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdmlkZW8taWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZnJhbWUgPSAnPGlmcmFtZSBpZD1cInBsYXllclwiIGNsYXNzPVwibGF6eWxvYWRcIiB0eXBlPVwidGV4dC9odG1sXCIgd2lkdGg9XCI2NDBcIiBoZWlnaHQ9XCIzOTBcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgdmlkZW9JRCArICc/cmVsPTBcIiBmcmFtZWJvcmRlcj1cIjBcIiB3ZWJraXRBbGxvd0Z1bGxTY3JlZW4gbW96YWxsb3dmdWxsc2NyZWVuIGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCcudmlkZW9tbicpLmNoaWxkcmVuKCdhJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcGxheWVyXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdFZpZXctaW1hZ2VcIikuYmVmb3JlKGlmcmFtZSkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiLnByb2R1Y3RWaWV3LXRodW1ibmFpbDpub3QoLnZpZGVvbW4pLCAuc2xpY2stcHJldi5zbGljay1hcnJvd1wiKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0Vmlldy1pbWFnZXMgLnZpZGVvbW4gYVwiKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3BsYXllclwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdFZpZXctaW1hZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJGZvcm0pIHtcclxuICAgICAgICAkZm9ybS5maW5kKCdbZGF0YS1pbnB1dF0nKS5lYWNoKChfLCBpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcclxuICAgICAgICAgICAgY29uc3QgbXNnU3BhbklkID0gYCR7JGlucHV0LmF0dHIoJ25hbWUnKX0tbXNnYDtcclxuXHJcbiAgICAgICAgICAgICRpbnB1dC5zaWJsaW5ncygnc3BhbicpLmF0dHIoJ2lkJywgbXNnU3BhbklkKTtcclxuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBtc2dTcGFuSWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2R1Y3RSZXZpZXdIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnVsa1ByaWNpbmdIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjYnVsa19wcmljaW5nJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluay50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVmlkZW9HYWxsZXJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy4kcGxheWVyID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8tcGxheWVyXScpO1xyXG4gICAgICAgIHRoaXMuJHZpZGVvcyA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLWl0ZW1dJyk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7fTtcclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3ROZXdWaWRlbyhlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHtcclxuICAgICAgICAgICAgaWQ6ICR0YXJnZXQuZGF0YSgndmlkZW9JZCcpLFxyXG4gICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogJHRhcmdldCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNldE1haW5WaWRlbygpO1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNYWluVmlkZW8oKSB7XHJcbiAgICAgICAgdGhpcy4kcGxheWVyLmF0dHIoJ3NyYycsIGAvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3RoaXMuY3VycmVudFZpZGVvLmlkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xyXG4gICAgICAgIHRoaXMuJHZpZGVvcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8uJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy4kdmlkZW9zLm9uKCdjbGljaycsIHRoaXMuc2VsZWN0TmV3VmlkZW8uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZGVvR2FsbGVyeSgpIHtcclxuICAgIGNvbnN0IHBsdWdpbktleSA9ICd2aWRlby1nYWxsZXJ5JztcclxuICAgIGNvbnN0ICR2aWRlb0dhbGxlcnkgPSAkKGBbZGF0YS0ke3BsdWdpbktleX1dYCk7XHJcblxyXG4gICAgJHZpZGVvR2FsbGVyeS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgaXNJbml0aWFsaXplZCA9ICRlbC5kYXRhKHBsdWdpbktleSkgaW5zdGFuY2VvZiBWaWRlb0dhbGxlcnk7XHJcblxyXG4gICAgICAgIGlmIChpc0luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRlbC5kYXRhKHBsdWdpbktleSwgbmV3IFZpZGVvR2FsbGVyeSgkZWwpKTtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsIlJldmlldyIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIlByb2R1Y3REZXRhaWxzIiwidmlkZW9HYWxsZXJ5IiwiY2xhc3NpZnlGb3JtIiwibW9kYWxGYWN0b3J5IiwiUHJvZHVjdCIsImNvbnRleHQiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCIkcmV2aWV3TGluayIsIiQiLCIkYnVsa1ByaWNpbmdMaW5rIiwicmV2aWV3TW9kYWwiLCJvblJlYWR5IiwiZG9jdW1lbnQiLCJvbiIsImluZGV4T2YiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJwYXRobmFtZSIsInZhbGlkYXRvciIsInByb2R1Y3REZXRhaWxzIiwiQkNEYXRhIiwicHJvZHVjdF9hdHRyaWJ1dGVzIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJidWxrUHJpY2luZ0hhbmRsZXIiLCIkcmV2aWV3Rm9ybSIsImxlbmd0aCIsInJldmlldyIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsImFyaWFEZXNjcmliZVJldmlld0lucHV0cyIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwicGRwVmlkZW8iLCJyZWNlbnRseVZpZXdlZENvb2tpZXMiLCJnZXRDb29raWUiLCJjbmFtZSIsIm5hbWUiLCJjYSIsImNvb2tpZSIsInNwbGl0IiwiaSIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJwcm9kdWN0SWQiLCJyZWNlbnRseV92aWV3ZWRfZXhwaXJlc19kYXRlIiwicmVjZW50bHlfdmlld2VkX3Byb2R1Y3RfbGltaXQiLCJkYXRlRXhwIiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwicGFyc2VJbnQiLCJwcm9kdWN0SWRzTGlzdCIsImV4aXRfcnZfY29va2llIiwiZXhpdF9ydl9jb29raWVfc3B0IiwicHVzaCIsInRvR01UU3RyaW5nIiwiaGFzVmlkZW8iLCJlYWNoIiwidmlkZW9JRCIsImF0dHIiLCJpZnJhbWUiLCJhZGRDbGFzcyIsInBhcmVudCIsImNoaWxkcmVuIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJiZWZvcmUiLCJoaWRlIiwiY2xpY2siLCJzaG93IiwiJGZvcm0iLCJmaW5kIiwiXyIsImlucHV0IiwiJGlucHV0IiwibXNnU3BhbklkIiwic2libGluZ3MiLCJ0cmlnZ2VyIiwiVmlkZW9HYWxsZXJ5IiwiJGVsZW1lbnQiLCIkcGxheWVyIiwiJHZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImJpbmRFdmVudHMiLCJzZWxlY3ROZXdWaWRlbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJkYXRhIiwiJHNlbGVjdGVkVGh1bWIiLCJzZXRNYWluVmlkZW8iLCJzZXRBY3RpdmVUaHVtYiIsImJpbmQiLCJwbHVnaW5LZXkiLCIkdmlkZW9HYWxsZXJ5IiwiaW5kZXgiLCJlbGVtZW50IiwiJGVsIiwiaXNJbml0aWFsaXplZCJdLCJzb3VyY2VSb290IjoiIn0=
