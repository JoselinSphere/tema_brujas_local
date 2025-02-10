"use strict";
(self["webpackChunkStyle"] = self["webpackChunkStyle"] || []).push([["assets_js_theme_product_js"],{

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */







var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
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
      while (c.charAt(0) == ' ') c = c.substring(1);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ3lDO0FBQ0Y7QUFDZTtBQUNBO0FBQ0g7QUFDTTtBQUNmO0FBQUEsSUFFckJPLE9BQU8sMEJBQUFDLFlBQUE7RUFDeEIsU0FBQUQsUUFBWUUsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBRixZQUFBLENBQUFHLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0UsR0FBRyxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSTtJQUMvQkwsS0FBQSxDQUFLTSxXQUFXLEdBQUdDLENBQUMsQ0FBQyxzQ0FBc0MsQ0FBQztJQUM1RFAsS0FBQSxDQUFLUSxnQkFBZ0IsR0FBR0QsQ0FBQyxDQUFDLHVDQUF1QyxDQUFDO0lBQ2xFUCxLQUFBLENBQUtTLFdBQVcsR0FBR2IseURBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFDLE9BQUFJLEtBQUE7RUFDN0Q7RUFBQ1UsY0FBQSxDQUFBYixPQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBYSxNQUFBLEdBQUFkLE9BQUEsQ0FBQWUsU0FBQTtFQUFBRCxNQUFBLENBRURFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFBQSxJQUFBQyxNQUFBO0lBQ047SUFDQVAsQ0FBQyxDQUFDUSxRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLG9CQUFvQixFQUFFLFlBQU07TUFDdkMsSUFBSUYsTUFBSSxDQUFDWixHQUFHLENBQUNlLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxPQUFPZCxNQUFNLENBQUNlLE9BQU8sQ0FBQ0MsWUFBWSxLQUFLLFVBQVUsRUFBRTtRQUMvRmhCLE1BQU0sQ0FBQ2UsT0FBTyxDQUFDQyxZQUFZLENBQUMsSUFBSSxFQUFF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LENBQUMwRSxjQUFjLENBQUNVLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM1RCxDQUFDO0VBQUEsT0FBQWhCLFlBQUE7QUFBQTtBQUdVLFNBQVMxRixZQUFZQSxDQUFBLEVBQUc7RUFDbkMsSUFBTTJHLFNBQVMsR0FBRyxlQUFlO0VBQ2pDLElBQU1DLGFBQWEsR0FBRy9GLENBQUMsWUFBVThGLFNBQVMsTUFBRyxDQUFDO0VBRTlDQyxhQUFhLENBQUN4QyxJQUFJLENBQUMsVUFBQ3lDLEtBQUssRUFBRUMsT0FBTyxFQUFLO0lBQ25DLElBQU1DLEdBQUcsR0FBR2xHLENBQUMsQ0FBQ2lHLE9BQU8sQ0FBQztJQUN0QixJQUFNRSxhQUFhLEdBQUdELEdBQUcsQ0FBQ1QsSUFBSSxDQUFDSyxTQUFTLENBQUMsWUFBWWpCLFlBQVk7SUFFakUsSUFBSXNCLGFBQWEsRUFBRTtNQUNmO0lBQ0o7SUFFQUQsR0FBRyxDQUFDVCxJQUFJLENBQUNLLFNBQVMsRUFBRSxJQUFJakIsWUFBWSxDQUFDcUIsR0FBRyxDQUFDLENBQUM7RUFDOUMsQ0FBQyxDQUFDO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdHlsZS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0LmpzIiwid2VicGFjazovL1N0eWxlLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIEltcG9ydCBhbGwgcHJvZHVjdCBzcGVjaWZpYyBqc1xuICovXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IFJldmlldyBmcm9tICcuL3Byb2R1Y3QvcmV2aWV3cyc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuaW1wb3J0IHZpZGVvR2FsbGVyeSBmcm9tICcuL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeSc7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0gfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHRoaXMuJHJldmlld0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScpO1xuICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1idWxrLXByaWNpbmdcIl0nKTtcbiAgICAgICAgdGhpcy5yZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI21vZGFsLXJldmlldy1mb3JtJylbMF07XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xvc2UuZm5kdG4ucmV2ZWFsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEgJiYgdHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRvcjtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXMpO1xuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzLnNldFByb2R1Y3RWYXJpYW50KCk7XG5cbiAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XG5cbiAgICAgICAgdGhpcy5idWxrUHJpY2luZ0hhbmRsZXIoKTtcblxuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcblxuICAgICAgICBpZiAoJHJldmlld0Zvcm0ubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldyh7ICRyZXZpZXdGb3JtIH0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nLCAoKSA9PiB7XG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLmFyaWFEZXNjcmliZVJldmlld0lucHV0cygkcmV2aWV3Rm9ybSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcblxuICAgICAgICB0aGlzLnBkcFZpZGVvKCk7XG5cbiAgICAgICAgdGhpcy5yZWNlbnRseVZpZXdlZENvb2tpZXModGhpcy5jb250ZXh0KVxuICAgIH1cblxuICAgIGdldENvb2tpZShjbmFtZSkge1xuICAgICAgICB2YXIgbmFtZSA9IGNuYW1lICsgXCI9XCI7XG4gICAgICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYyA9IGNhW2ldO1xuICAgICAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykgYyA9IGMuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSAhPSAtMSkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgcmVjZW50bHlWaWV3ZWRDb29raWVzKGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0SWQsIHJlY2VudGx5X3ZpZXdlZF9leHBpcmVzX2RhdGUsIHJlY2VudGx5X3ZpZXdlZF9wcm9kdWN0X2xpbWl0fSA9IGNvbnRleHQ7XG4gICAgICAgIGlmKHByb2R1Y3RJZCA+IDApe1xuICAgICAgICAgICAgY29uc3QgZGF0ZUV4cCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBkYXRlRXhwLnNldERhdGUoZGF0ZUV4cC5nZXREYXRlKCkgKyBwYXJzZUludChyZWNlbnRseV92aWV3ZWRfZXhwaXJlc19kYXRlKSk7XG5cbiAgICAgICAgICAgIGxldCBwcm9kdWN0SWRzTGlzdCA9IFtdXG4gICAgICAgICAgICBjb25zdCBleGl0X3J2X2Nvb2tpZSA9IHRoaXMuZ2V0Q29va2llKCdiY19yZWNlbnRseV92aWV3ZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IGV4aXRfcnZfY29va2llX3NwdCA9IGV4aXRfcnZfY29va2llLnNwbGl0KFwiLFwiKTsgIFxuICAgICAgICAgICAgaWYoZXhpdF9ydl9jb29raWVfc3B0Lmxlbmd0aCA+IDAgJiYgZXhpdF9ydl9jb29raWVfc3B0Lmxlbmd0aCA9PSByZWNlbnRseV92aWV3ZWRfcHJvZHVjdF9saW1pdCl7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICAgICAgICBpZihkb2N1bWVudC5jb29raWUuaW5kZXhPZignYmNfcmVjZW50bHlfdmlld2VkJykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWRzTGlzdCA9IGV4aXRfcnZfY29va2llX3NwdDtcbiAgICAgICAgICAgICAgICBpZihleGl0X3J2X2Nvb2tpZV9zcHQuaW5kZXhPZihwcm9kdWN0SWQpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWRzTGlzdC5wdXNoKHByb2R1Y3RJZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWRzTGlzdC5wdXNoKHByb2R1Y3RJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwcm9kdWN0SWRzTGlzdC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgYmNfcmVjZW50bHlfdmlld2VkPSR7cHJvZHVjdElkc0xpc3R9O2V4cGlyZXM9JHtkYXRlRXhwLnRvR01UU3RyaW5nKCl9OyBwYXRoPS9gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGRwVmlkZW8oKSB7XG4gICAgICAgIGNvbnN0IGhhc1ZpZGVvID0gJCgnLnZpZGVvbW4nKTtcbiAgICAgICAgaWYgKGhhc1ZpZGVvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQoJy52aWRlb21uID4gYScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvSUQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdmlkZW8taWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWZyYW1lID0gJzxpZnJhbWUgaWQ9XCJwbGF5ZXJcIiBjbGFzcz1cImxhenlsb2FkXCIgdHlwZT1cInRleHQvaHRtbFwiIHdpZHRoPVwiNjQwXCIgaGVpZ2h0PVwiMzkwXCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIHZpZGVvSUQgKyAnP3JlbD0wXCIgZnJhbWVib3JkZXI9XCIwXCIgd2Via2l0QWxsb3dGdWxsU2NyZWVuIG1vemFsbG93ZnVsbHNjcmVlbiBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+JztcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCcudmlkZW9tbicpLmNoaWxkcmVuKCdhJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3BsYXllclwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0Vmlldy1pbWFnZVwiKS5iZWZvcmUoaWZyYW1lKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdFZpZXctdGh1bWJuYWlsOm5vdCgudmlkZW9tbiksIC5zbGljay1wcmV2LnNsaWNrLWFycm93XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0Vmlldy1pbWFnZXMgLnZpZGVvbW4gYVwiKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChcIiNwbGF5ZXJcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0Vmlldy1pbWFnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXJpYURlc2NyaWJlUmV2aWV3SW5wdXRzKCRmb3JtKSB7XG4gICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLWlucHV0XScpLmVhY2goKF8sIGlucHV0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IG1zZ1NwYW5JZCA9IGAkeyRpbnB1dC5hdHRyKCduYW1lJyl9LW1zZ2A7XG5cbiAgICAgICAgICAgICRpbnB1dC5zaWJsaW5ncygnc3BhbicpLmF0dHIoJ2lkJywgbXNnU3BhbklkKTtcbiAgICAgICAgICAgICRpbnB1dC5hdHRyKCdhcmlhLWRlc2NyaWJlZGJ5JywgbXNnU3BhbklkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvZHVjdFJldmlld0hhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLiRyZXZpZXdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidWxrUHJpY2luZ0hhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjYnVsa19wcmljaW5nJykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJHBsYXllciA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLXBsYXllcl0nKTtcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7fTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3VmlkZW8oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHtcbiAgICAgICAgICAgIGlkOiAkdGFyZ2V0LmRhdGEoJ3ZpZGVvSWQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJHBsYXllci5hdHRyKCdzcmMnLCBgLy93d3cueW91dHViZS5jb20vZW1iZWQvJHt0aGlzLmN1cnJlbnRWaWRlby5pZH1gKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8uJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld1ZpZGVvLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHBsdWdpbktleSA9ICd2aWRlby1nYWxsZXJ5JztcbiAgICBjb25zdCAkdmlkZW9HYWxsZXJ5ID0gJChgW2RhdGEtJHtwbHVnaW5LZXl9XWApO1xuXG4gICAgJHZpZGVvR2FsbGVyeS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiUmV2aWV3IiwiY29sbGFwc2libGVGYWN0b3J5IiwiUHJvZHVjdERldGFpbHMiLCJ2aWRlb0dhbGxlcnkiLCJjbGFzc2lmeUZvcm0iLCJtb2RhbEZhY3RvcnkiLCJQcm9kdWN0IiwiX1BhZ2VNYW5hZ2VyIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIiRyZXZpZXdMaW5rIiwiJCIsIiRidWxrUHJpY2luZ0xpbmsiLCJyZXZpZXdNb2RhbCIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsIl90aGlzMiIsImRvY3VtZW50Iiwib24iLCJpbmRleE9mIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJwcm9kdWN0RGV0YWlscyIsIkJDRGF0YSIsInByb2R1Y3RfYXR0cmlidXRlcyIsInNldFByb2R1Y3RWYXJpYW50IiwiYnVsa1ByaWNpbmdIYW5kbGVyIiwiJHJldmlld0Zvcm0iLCJsZW5ndGgiLCJyZXZpZXciLCJyZWdpc3RlclZhbGlkYXRpb24iLCJhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJwcm9kdWN0UmV2aWV3SGFuZGxlciIsInBkcFZpZGVvIiwicmVjZW50bHlWaWV3ZWRDb29raWVzIiwiZ2V0Q29va2llIiwiY25hbWUiLCJuYW1lIiwiY2EiLCJjb29raWUiLCJzcGxpdCIsImkiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwicHJvZHVjdElkIiwicmVjZW50bHlfdmlld2VkX2V4cGlyZXNfZGF0ZSIsInJlY2VudGx5X3ZpZXdlZF9wcm9kdWN0X2xpbWl0IiwiZGF0ZUV4cCIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInBhcnNlSW50IiwicHJvZHVjdElkc0xpc3QiLCJleGl0X3J2X2Nvb2tpZSIsImV4aXRfcnZfY29va2llX3NwdCIsInB1c2giLCJ0b0dNVFN0cmluZyIsImhhc1ZpZGVvIiwiZWFjaCIsInZpZGVvSUQiLCJhdHRyIiwiaWZyYW1lIiwiYWRkQ2xhc3MiLCJwYXJlbnQiLCJjaGlsZHJlbiIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwiYmVmb3JlIiwiaGlkZSIsImNsaWNrIiwic2hvdyIsIiRmb3JtIiwiZmluZCIsIl8iLCJpbnB1dCIsIiRpbnB1dCIsIm1zZ1NwYW5JZCIsInNpYmxpbmdzIiwidHJpZ2dlciIsImRlZmF1bHQiLCJWaWRlb0dhbGxlcnkiLCIkZWxlbWVudCIsIiRwbGF5ZXIiLCIkdmlkZW9zIiwiY3VycmVudFZpZGVvIiwiYmluZEV2ZW50cyIsInNlbGVjdE5ld1ZpZGVvIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImRhdGEiLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCJpbmRleCIsImVsZW1lbnQiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sInNvdXJjZVJvb3QiOiIifQ==