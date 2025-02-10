"use strict";
(self["webpackChunkStyle"] = self["webpackChunkStyle"] || []).push([["assets_js_theme_cart_js"],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Cart; }
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/cart-item-details */ "./assets/js/theme/common/cart-item-details.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Cart = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Cart, _PageManager);

  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Cart.prototype;

  _proto.onReady = function onReady() {
    this.$modal = null;
    this.$cartPageContent = $('[data-cart]');
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$cartAdditionalCheckoutBtns = $('[data-cart-additional-checkout-buttons]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

    this.$activeCartItemId = null;
    this.$activeCartItemBtnAction = null;
    this.setApplePaySupport();
    this.bindEvents();
  };

  _proto.setApplePaySupport = function setApplePaySupport() {
    if (window.ApplePaySession) {
      this.$cartPageContent.addClass('apple-pay-supported');
    }
  };

  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;

    var itemId = $target.data('cartItemid');
    this.$activeCartItemId = itemId;
    this.$activeCartItemBtnAction = $target.data('action');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1; // Does not quality for min/max quantity

    if (newQty < minQty) {
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(maxError);
    }

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();

      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;

        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };

  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this2 = this;

    if (preVal === void 0) {
      preVal = null;
    }

    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry; // Does not quality for min/max quantity

    if (!Number.isInteger(newQty)) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(this.context.invalidEntryMessage.replace('[ENTRY]', invalidEntry));
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(maxError);
    }

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();

      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;

        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };

  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        _this3.$overlay.hide();

        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };

  _proto.cartEditOptions = function cartEditOptions(itemId, productId) {
    var _this4 = this;

    var context = Object.assign({
      productForChangeId: productId
    }, this.context);
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();

    if (this.$modal === null) {
      this.$modal = $('#modal');
    }

    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    this.$modal.find('.modal-content').addClass('hide-content');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);

      var optionChangeHandler = function optionChangeHandler() {
        var $productOptionsContainer = $('[data-product-attributes-wrapper]', _this4.$modal);
        var modalBodyReservedHeight = $productOptionsContainer.outerHeight();

        if ($productOptionsContainer.length && modalBodyReservedHeight) {
          $productOptionsContainer.css('height', modalBodyReservedHeight);
        }
      };

      if (_this4.$modal.hasClass('open')) {
        optionChangeHandler();
      } else {
        _this4.$modal.one(_global_modal__WEBPACK_IMPORTED_MODULE_7__.ModalEvents.opened, optionChangeHandler);
      }

      _this4.productDetails = new _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__["default"](_this4.$modal, context);

      _this4.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].hooks.on('product-option-change', function (event, currentTarget) {
      var $form = $(currentTarget).find('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.optionChange(productId, $form.serialize(), function (err, result) {
        var data = result.data || {};

        if (err) {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(err);
          return false;
        }

        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }

        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };

  _proto.refreshContent = function refreshContent(remove) {
    var _this5 = this;

    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages',
        additionalCheckoutButtons: 'cart/additional-checkout-buttons'
      }
    };
    this.$overlay.show(); // Remove last item from cart? Reload

    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getContent(options, function (err, response) {
      _this5.$cartContent.html(response.content);

      _this5.$cartTotals.html(response.totals);

      _this5.$cartMessages.html(response.statusMessages);

      _this5.$cartAdditionalCheckoutBtns.html(response.additionalCheckoutButtons);

      $cartPageTitle.replaceWith(response.pageTitle);

      _this5.bindEvents();

      _this5.$overlay.hide();

      var quantity = $('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      $('body').trigger('cart-quantity-update', quantity);
      $("[data-cart-itemid='" + _this5.$activeCartItemId + "']", _this5.$cartContent).filter("[data-action='" + _this5.$activeCartItemBtnAction + "']").trigger('focus');
    });
  };

  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;

    var debounceTimeout = 400;

    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);

    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);

    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);

    var preVal; // cart update

    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault(); // update cart quantity

      cartUpdate($target);
    }); // cart qty manually updates

    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault(); // update cart quantity

      cartUpdateQtyTextChange($target, preVal);
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(string, {
        icon: 'warning',
        showCancelButton: true,
        onConfirm: function onConfirm() {
          // remove item from cart
          cartRemoveItem(itemId);
        }
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      var productId = $(event.currentTarget).data('productId');
      event.preventDefault(); // edit item in cart

      _this6.cartEditOptions(itemId, productId);
    });
  };

  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;

    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault(); // Empty code

      if (!code) {
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)($codeInput.data('error'));
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this7.refreshContent();
        } else {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
        }
      });
    });
  };

  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this8 = this;

    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();

      if (!(0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__["default"])(code)) {
        var validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(_this8.context);
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(validationDictionary.invalid_gift_certificate);
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this8.refreshContent();
        } else {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(resp.data.errors.join('\n'));
        }
      });
    });
  };

  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this9 = this;

    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);

        _this9.bindGiftWrappingForm();
      });
    });
  };

  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');

      if (!id) {
        return;
      }

      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();

      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');

    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');

      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }

    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };

  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents(); // initiate shipping estimator module

    var shippingErrorMessages = {
      country: this.context.shippingCountryErrorMessage,
      province: this.context.shippingProvinceErrorMessage
    };
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__["default"]($('[data-shipping-estimator]'), shippingErrorMessages);
  };

  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShippingEstimator; }
/* harmony export */ });
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");







var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element, shippingErrorMessages) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.isEstimatorFormOpened = false;
    this.shippingErrorMessages = shippingErrorMessages;
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }

  var _proto = ShippingEstimator.prototype;

  _proto.initFormValidation = function initFormValidation() {
    var _this = this;

    var shippingEstimatorAlert = $('.shipping-quotes');
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // estimator error messages are being injected in html as a result
      // of user submit; clearing and adding role on submit provides
      // regular announcement of these error messages
      if (shippingEstimatorAlert.attr('role')) {
        shippingEstimatorAlert.removeAttr('role');
      }

      shippingEstimatorAlert.attr('role', 'alert'); // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity

      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }

      if (_this.shippingValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };

  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.country
    }]);
  };

  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;

    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");

        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }

        cb(result);
      },
      errorMessage: this.shippingErrorMessages.province
    }]);
  }
  /**
   * Toggle between default shipping and ups shipping rates
   */
  ;

  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };

  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;

    var $last; // Requests the states for a country with AJAX

    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_5__.showAlertModal)(err);
        throw new Error(err);
      }

      var $field = $(field);

      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }

      if ($last) {
        _this3.shippingValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;

        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.Validators.cleanUpStateValidation(field);
      } // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us


      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };

  _proto.toggleEstimatorFormState = function toggleEstimatorFormState(toggleButton, buttonSelector, $toggleContainer) {
    var changeAttributesOnToggle = function changeAttributesOnToggle(selectorToActivate) {
      $(toggleButton).attr('aria-labelledby', selectorToActivate);
      $(buttonSelector).text($("#" + selectorToActivate).text());
    };

    if (!this.isEstimatorFormOpened) {
      changeAttributesOnToggle('estimator-close');
      $toggleContainer.removeClass('u-hidden');
    } else {
      changeAttributesOnToggle('estimator-add');
      $toggleContainer.addClass('u-hidden');
    }

    this.isEstimatorFormOpened = !this.isEstimatorFormOpened;
  };

  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var _this4 = this;

    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_4__["default"])();
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content); // bind the select button

        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();

      _this4.toggleEstimatorFormState(event.currentTarget, '.shipping-estimate-show__btn-name', $estimatorContainer);
    });
  };

  return ShippingEstimator;
}();



/***/ }),

/***/ "./assets/js/theme/common/cart-item-details.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/cart-item-details.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CartItemDetails; }
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _product_details_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details-base */ "./assets/js/theme/common/product-details-base.js");
/* harmony import */ var _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CartItemDetails = /*#__PURE__*/function (_ProductDetailsBase) {
  _inheritsLoose(CartItemDetails, _ProductDetailsBase);

  function CartItemDetails($scope, context, productAttributesData) {
    var _this;

    if (productAttributesData === void 0) {
      productAttributesData = {};
    }

    _this = _ProductDetailsBase.call(this, $scope, context) || this;
    var $form = $('#CartEditProductFieldsForm', _this.$scope);
    var $productOptionsElement = $('[data-product-attributes-wrapper]', $form);
    var hasOptions = $productOptionsElement.html().trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
    $productOptionsElement.on('change', function () {
      _this.setProductVariant();
    });
    var optionChangeCallback = _product_details_base__WEBPACK_IMPORTED_MODULE_2__.optionChangeDecorator.call(_assertThisInitialized(_this), hasDefaultOptions); // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view

    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var productId = _this.context.productForChangeId;
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', optionChangeCallback);
    } else {
      _this.updateProductAttributes(productAttributesData);
    }

    return _this;
  }

  var _proto = CartItemDetails.prototype;

  _proto.setProductVariant = function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');

      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }

      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }

      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });

        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }

        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }

      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;

        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          return;
        }

        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }

      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');

        if (checked) {
          var getSelectedOptionLabel = function getSelectedOptionLabel() {
            var productVariantslist = (0,_utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.convertIntoArray)(value.children);

            var matchLabelForCheckedInput = function matchLabelForCheckedInput(inpt) {
              return inpt.dataset.productAttributeValue === checked.value;
            };

            return productVariantslist.filter(matchLabelForCheckedInput)[0];
          };

          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().innerText.trim() : checked.labels[0].innerText;

            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }

          if (type === 'swatch') {
            var _label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().children[0] : checked.labels[0].children[0];

            if (_label) {
              options.push(optionTitle + ":" + _label.title);
            }
          }

          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }

          return;
        }

        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }

        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.modal-header-title');

    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;

      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.html().match(/'(.*?)'/)[1];
        var card = $("[data-name=\"" + productName + "\"]");
        card.attr('data-product-variant', productVariant);
      }
    }
  }
  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */
  ;

  _proto.updateProductAttributes = function updateProductAttributes(data) {
    _ProductDetailsBase.prototype.updateProductAttributes.call(this, data);

    this.$scope.find('.modal-content').removeClass('hide-content');
  };

  return CartItemDetails;
}(_product_details_base__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(cert) {
  if (typeof cert !== 'string' || cert.length === 0) {
    return false;
  } // Add any custom gift certificate validation logic here


  return true;
}

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");





/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */

function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_1___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });

  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');

  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }

  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }

  return $newElement;
}
/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */


function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_1___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });

  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');

  if ($newElement.length !== 0) {
    (0,_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.insertStateHiddenField)($newElement);
    $newElement.prev().find('small').hide();
  }

  return $newElement;
}
/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */


function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()($selectElement)) {
    statesArray.states.forEach(function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + (stateObj.label ? stateObj.label : stateObj.name) + "</option>");
      }
    });
    $selectElement.html(container.join(' '));
  }
}
/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }

  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }

  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();

    if (countryName === '') {
      return;
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__.showAlertModal)(context.state_error);
        return callback(err);
      }

      var $currentInput = $('[data-field-type="State"]');

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
}

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslationDictionary": function() { return /* binding */ createTranslationDictionary; }
/* harmony export */ });
var TRANSLATIONS = 'translations';

var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};

var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);

    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};
/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */


var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
      validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
      validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXJ0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCUzs7Ozs7Ozs7O1NBQ2pCQyxVQUFBLG1CQUFVO0FBQ04sU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkMsQ0FBQyxDQUFDLGFBQUQsQ0FBekI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CRCxDQUFDLENBQUMscUJBQUQsQ0FBckI7QUFDQSxTQUFLRSxhQUFMLEdBQXFCRixDQUFDLENBQUMsb0JBQUQsQ0FBdEI7QUFDQSxTQUFLRyxXQUFMLEdBQW1CSCxDQUFDLENBQUMsb0JBQUQsQ0FBcEI7QUFDQSxTQUFLSSwyQkFBTCxHQUFtQ0osQ0FBQyxDQUFDLHlDQUFELENBQXBDO0FBQ0EsU0FBS0ssUUFBTCxHQUFnQkwsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FDWE0sSUFEVyxFQUFoQixDQVBNLENBUU87O0FBQ2IsU0FBS0MsaUJBQUwsR0FBeUIsSUFBekI7QUFDQSxTQUFLQyx3QkFBTCxHQUFnQyxJQUFoQztBQUVBLFNBQUtDLGtCQUFMO0FBQ0EsU0FBS0MsVUFBTDtBQUNIOztTQUVERCxxQkFBQSw4QkFBcUI7QUFDakIsUUFBSUUsTUFBTSxDQUFDQyxlQUFYLEVBQTRCO0FBQ3hCLFdBQUtiLGdCQUFMLENBQXNCYyxRQUF0QixDQUErQixxQkFBL0I7QUFDSDtBQUNKOztTQUVEQyxhQUFBLG9CQUFXQyxPQUFYLEVBQW9CO0FBQUE7O0FBQ2hCLFFBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxJQUFSLENBQWEsWUFBYixDQUFmO0FBQ0EsU0FBS1YsaUJBQUwsR0FBeUJTLE1BQXpCO0FBQ0EsU0FBS1Isd0JBQUwsR0FBZ0NPLE9BQU8sQ0FBQ0UsSUFBUixDQUFhLFFBQWIsQ0FBaEM7QUFFQSxRQUFNQyxHQUFH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LmpzIiwid2VicGFjazovL1N0eWxlLy4vYXNzZXRzL2pzL3RoZW1lL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yLmpzIiwid2VicGFjazovL1N0eWxlLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jYXJ0LWl0ZW0tZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9TdHlsZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZ2lmdC1jZXJ0aWZpY2F0ZS12YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vU3R5bGUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3N0YXRlLWNvdW50cnkuanMiLCJ3ZWJwYWNrOi8vU3R5bGUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgeyBiaW5kLCBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBjaGVja0lzR2lmdENlcnRWYWxpZCBmcm9tICcuL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBTaGlwcGluZ0VzdGltYXRvciBmcm9tICcuL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yJztcclxuaW1wb3J0IHsgZGVmYXVsdE1vZGFsLCBzaG93QWxlcnRNb2RhbCwgTW9kYWxFdmVudHMgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XHJcbmltcG9ydCBDYXJ0SXRlbURldGFpbHMgZnJvbSAnLi9jb21tb24vY2FydC1pdGVtLWRldGFpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgdGhpcy4kbW9kYWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJGNhcnRQYWdlQ29udGVudCA9ICQoJ1tkYXRhLWNhcnRdJyk7XHJcbiAgICAgICAgdGhpcy4kY2FydENvbnRlbnQgPSAkKCdbZGF0YS1jYXJ0LWNvbnRlbnRdJyk7XHJcbiAgICAgICAgdGhpcy4kY2FydE1lc3NhZ2VzID0gJCgnW2RhdGEtY2FydC1zdGF0dXNdJyk7XHJcbiAgICAgICAgdGhpcy4kY2FydFRvdGFscyA9ICQoJ1tkYXRhLWNhcnQtdG90YWxzXScpO1xyXG4gICAgICAgIHRoaXMuJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zID0gJCgnW2RhdGEtY2FydC1hZGRpdGlvbmFsLWNoZWNrb3V0LWJ1dHRvbnNdJyk7XHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhcnRdIC5sb2FkaW5nT3ZlcmxheScpXHJcbiAgICAgICAgICAgIC5oaWRlKCk7IC8vIFRPRE86IHRlbXBvcmFyeSB1bnRpbCByb3BlciBwdWxscyBpbiBoaXMgY2FydCBjb21wb25lbnRzXHJcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1JZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb24gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnNldEFwcGxlUGF5U3VwcG9ydCgpO1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFwcGxlUGF5U3VwcG9ydCgpIHtcclxuICAgICAgICBpZiAod2luZG93LkFwcGxlUGF5U2Vzc2lvbikge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQuYWRkQ2xhc3MoJ2FwcGxlLXBheS1zdXBwb3J0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FydFVwZGF0ZSgkdGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XHJcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1JZCA9IGl0ZW1JZDtcclxuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbiA9ICR0YXJnZXQuZGF0YSgnYWN0aW9uJyk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XHJcbiAgICAgICAgY29uc3Qgb2xkUXR5ID0gcGFyc2VJbnQoJGVsLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcclxuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xyXG4gICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWluRXJyb3InKTtcclxuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XHJcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycgPyBvbGRRdHkgKyAxIDogb2xkUXR5IC0gMTtcclxuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XHJcbiAgICAgICAgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwobWluRXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKG1heEVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsID0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xyXG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XHJcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcclxuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xyXG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHByZVZhbCAhPT0gbnVsbCA/IHByZVZhbCA6IG1pblF0eTtcclxuICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XHJcbiAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xyXG4gICAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KE51bWJlcigkZWwudmFsKCkpLCAxMCk7XHJcbiAgICAgICAgbGV0IGludmFsaWRFbnRyeTtcclxuXHJcbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxyXG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihuZXdRdHkpKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRFbnRyeSA9ICRlbC52YWwoKTtcclxuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodGhpcy5jb250ZXh0LmludmFsaWRFbnRyeU1lc3NhZ2UucmVwbGFjZSgnW0VOVFJZXScsIGludmFsaWRFbnRyeSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3UXR5IDwgbWluUXR5KSB7XHJcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKG1pbkVycm9yKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XHJcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKG1heEVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCkge1xyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1SZW1vdmUoaXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FydEVkaXRPcHRpb25zKGl0ZW1JZCwgcHJvZHVjdElkKSB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHsgcHJvZHVjdEZvckNoYW5nZUlkOiBwcm9kdWN0SWQsIC4uLnRoaXMuY29udGV4dCB9O1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiRtb2RhbCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRtb2RhbCA9ICQoJyNtb2RhbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9jb25maWd1cmUtcHJvZHVjdCcsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbW9kYWwub3BlbigpO1xyXG4gICAgICAgIHRoaXMuJG1vZGFsLmZpbmQoJy5tb2RhbC1jb250ZW50JykuYWRkQ2xhc3MoJ2hpZGUtY29udGVudCcpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMuY29uZmlndXJlSW5DYXJ0KGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lciA9ICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlcy13cmFwcGVyXScsIHRoaXMuJG1vZGFsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsQm9keVJlc2VydmVkSGVpZ2h0ID0gJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lci5sZW5ndGggJiYgbW9kYWxCb2R5UmVzZXJ2ZWRIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdE9wdGlvbnNDb250YWluZXIuY3NzKCdoZWlnaHQnLCBtb2RhbEJvZHlSZXNlcnZlZEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy4kbW9kYWwuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uQ2hhbmdlSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbW9kYWwub25lKE1vZGFsRXZlbnRzLm9wZW5lZCwgb3B0aW9uQ2hhbmdlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgQ2FydEl0ZW1EZXRhaWxzKHRoaXMuJG1vZGFsLCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXRpbHMuaG9va3Mub24oJ3Byb2R1Y3Qtb3B0aW9uLWNoYW5nZScsIChldmVudCwgY3VycmVudFRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9ICQoY3VycmVudFRhcmdldCkuZmluZCgnZm9ybScpO1xyXG4gICAgICAgICAgICBjb25zdCAkc3VibWl0ID0gJCgnaW5wdXQuYnV0dG9uJywgJGZvcm0pO1xyXG4gICAgICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJy5hbGVydE1lc3NhZ2VCb3gnKTtcclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgKGVyciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGEgfHwge307XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ3AuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaENvbnRlbnQocmVtb3ZlKSB7XHJcbiAgICAgICAgY29uc3QgJGNhcnRJdGVtc1Jvd3MgPSAkKCdbZGF0YS1pdGVtLXJvd10nLCB0aGlzLiRjYXJ0Q29udGVudCk7XHJcbiAgICAgICAgY29uc3QgJGNhcnRQYWdlVGl0bGUgPSAkKCdbZGF0YS1jYXJ0LXBhZ2UtdGl0bGVdJyk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdjYXJ0L2NvbnRlbnQnLFxyXG4gICAgICAgICAgICAgICAgdG90YWxzOiAnY2FydC90b3RhbHMnLFxyXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlOiAnY2FydC9wYWdlLXRpdGxlJyxcclxuICAgICAgICAgICAgICAgIHN0YXR1c01lc3NhZ2VzOiAnY2FydC9zdGF0dXMtbWVzc2FnZXMnLFxyXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbENoZWNrb3V0QnV0dG9uczogJ2NhcnQvYWRkaXRpb25hbC1jaGVja291dC1idXR0b25zJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGxhc3QgaXRlbSBmcm9tIGNhcnQ/IFJlbG9hZFxyXG4gICAgICAgIGlmIChyZW1vdmUgJiYgJGNhcnRJdGVtc1Jvd3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcnRDb250ZW50Lmh0bWwocmVzcG9uc2UuY29udGVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcnRUb3RhbHMuaHRtbChyZXNwb25zZS50b3RhbHMpO1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMuaHRtbChyZXNwb25zZS5zdGF0dXNNZXNzYWdlcyk7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zLmh0bWwocmVzcG9uc2UuYWRkaXRpb25hbENoZWNrb3V0QnV0dG9ucyk7XHJcblxyXG4gICAgICAgICAgICAkY2FydFBhZ2VUaXRsZS5yZXBsYWNlV2l0aChyZXNwb25zZS5wYWdlVGl0bGUpO1xyXG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgdGhpcy4kY2FydENvbnRlbnQpLmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XHJcblxyXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XHJcblxyXG4gICAgICAgICAgICAkKGBbZGF0YS1jYXJ0LWl0ZW1pZD0nJHt0aGlzLiRhY3RpdmVDYXJ0SXRlbUlkfSddYCwgdGhpcy4kY2FydENvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGBbZGF0YS1hY3Rpb249JyR7dGhpcy4kYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb259J11gKVxyXG4gICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZENhcnRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZGVib3VuY2VUaW1lb3V0ID0gNDAwO1xyXG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGUgPSBiaW5kKGRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XHJcbiAgICAgICAgY29uc3QgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UgPSBiaW5kKGRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IGNhcnRSZW1vdmVJdGVtID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRSZW1vdmVJdGVtLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcclxuICAgICAgICBsZXQgcHJlVmFsO1xyXG5cclxuICAgICAgICAvLyBjYXJ0IHVwZGF0ZVxyXG4gICAgICAgICQoJ1tkYXRhLWNhcnQtdXBkYXRlXScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XHJcbiAgICAgICAgICAgIGNhcnRVcGRhdGUoJHRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNhcnQgcXR5IG1hbnVhbGx5IHVwZGF0ZXNcclxuICAgICAgICAkKCcuY2FydC1pdGVtLXF0eS1pbnB1dCcsIHRoaXMuJGNhcnRDb250ZW50KS5vbignZm9jdXMnLCBmdW5jdGlvbiBvblF0eUZvY3VzKCkge1xyXG4gICAgICAgICAgICBwcmVWYWwgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIH0pLmNoYW5nZShldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgcXVhbnRpdHlcclxuICAgICAgICAgICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmNhcnQtcmVtb3ZlJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjYXJ0SXRlbWlkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY29uZmlybURlbGV0ZScpO1xyXG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbChzdHJpbmcsIHtcclxuICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgaXRlbSBmcm9tIGNhcnRcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWl0ZW0tZWRpdF0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1FZGl0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgncHJvZHVjdElkJyk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8vIGVkaXQgaXRlbSBpbiBjYXJ0XHJcbiAgICAgICAgICAgIHRoaXMuY2FydEVkaXRPcHRpb25zKGl0ZW1JZCwgcHJvZHVjdElkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kUHJvbW9Db2RlRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRjb3Vwb25Db250YWluZXIgPSAkKCcuY291cG9uLWNvZGUnKTtcclxuICAgICAgICBjb25zdCAkY291cG9uRm9ybSA9ICQoJy5jb3Vwb24tZm9ybScpO1xyXG4gICAgICAgIGNvbnN0ICRjb2RlSW5wdXQgPSAkKCdbbmFtZT1cImNvdXBvbmNvZGVcIl0nLCAkY291cG9uRm9ybSk7XHJcblxyXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcclxuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICRjb2RlSW5wdXQudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkY291cG9uRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNvZGVJbnB1dC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFbXB0eSBjb2RlXHJcbiAgICAgICAgICAgIGlmICghY29kZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKCRjb2RlSW5wdXQuZGF0YSgnZXJyb3InKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5Q29kZShjb2RlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCAkY2VydENvbnRhaW5lciA9ICQoJy5naWZ0LWNlcnRpZmljYXRlLWNvZGUnKTtcclxuICAgICAgICBjb25zdCAkY2VydEZvcm0gPSAkKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcclxuICAgICAgICBjb25zdCAkY2VydElucHV0ID0gJCgnW25hbWU9XCJjZXJ0Y29kZVwiXScsICRjZXJ0Rm9ybSk7XHJcblxyXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS50b2dnbGUoKTtcclxuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLnRvZ2dsZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1hZGQnKS50b2dnbGUoKTtcclxuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykudG9nZ2xlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRjZXJ0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNlcnRJbnB1dC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNoZWNrSXNHaWZ0Q2VydFZhbGlkKGNvZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHZhbGlkYXRpb25EaWN0aW9uYXJ5LmludmFsaWRfZ2lmdF9jZXJ0aWZpY2F0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5R2lmdENlcnRpZmljYXRlKGNvZGUsIChlcnIsIHJlc3ApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kR2lmdFdyYXBwaW5nRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWl0ZW0tZ2lmdHdyYXBdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1HaWZ0d3JhcCcpO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9naWZ0LXdyYXBwaW5nLWZvcm0nLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zKGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kR2lmdFdyYXBwaW5nRm9ybSgpIHtcclxuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9ICRzZWxlY3QudmFsKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gJHNlbGVjdC5kYXRhKCdpbmRleCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbGxvd01lc3NhZ2UgPSAkc2VsZWN0LmZpbmQoYG9wdGlvblt2YWx1ZT0ke2lkfV1gKS5kYXRhKCdhbGxvd01lc3NhZ2UnKTtcclxuXHJcbiAgICAgICAgICAgICQoYC5naWZ0V3JhcHBpbmctaW1hZ2UtJHtpbmRleH1gKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctaW1hZ2UtJHtpbmRleH0tJHtpZH1gKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWxsb3dNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLW1lc3NhZ2UtJHtpbmRleH1gKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLW1lc3NhZ2UtJHtpbmRleH1gKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlVmlld3MoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJCgnaW5wdXQ6cmFkaW9bbmFtZSA9XCJnaWZ0d3JhcHR5cGVcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG4gICAgICAgICAgICBjb25zdCAkc2luZ2xlRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctc2luZ2xlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRtdWx0aUZvcm0gPSAkKCcuZ2lmdFdyYXBwaW5nLW11bHRpcGxlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICdzYW1lJykge1xyXG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJG11bHRpRm9ybS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkc2luZ2xlRm9ybS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnW25hbWU9XCJnaWZ0d3JhcHR5cGVcIl0nKS5vbignY2xpY2snLCB0b2dnbGVWaWV3cyk7XHJcblxyXG4gICAgICAgIHRvZ2dsZVZpZXdzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmJpbmRDYXJ0RXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kUHJvbW9Db2RlRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIC8vIGluaXRpYXRlIHNoaXBwaW5nIGVzdGltYXRvciBtb2R1bGVcclxuICAgICAgICBjb25zdCBzaGlwcGluZ0Vycm9yTWVzc2FnZXMgPSB7XHJcbiAgICAgICAgICAgIGNvdW50cnk6IHRoaXMuY29udGV4dC5zaGlwcGluZ0NvdW50cnlFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHByb3ZpbmNlOiB0aGlzLmNvbnRleHQuc2hpcHBpbmdQcm92aW5jZUVycm9yTWVzc2FnZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IgPSBuZXcgU2hpcHBpbmdFc3RpbWF0b3IoJCgnW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXScpLCBzaGlwcGluZ0Vycm9yTWVzc2FnZXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xyXG5pbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4uL2NvbW1vbi9jb2xsYXBzaWJsZSc7XHJcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXBwaW5nRXN0aW1hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50LCBzaGlwcGluZ0Vycm9yTWVzc2FnZXMpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJywgdGhpcy4kZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNoaXBwaW5nRXJyb3JNZXNzYWdlcyA9IHNoaXBwaW5nRXJyb3JNZXNzYWdlcztcclxuICAgICAgICB0aGlzLmluaXRGb3JtVmFsaWRhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpO1xyXG4gICAgICAgIHRoaXMuYmluZEVzdGltYXRvckV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRGb3JtVmFsaWRhdGlvbigpIHtcclxuICAgICAgICBjb25zdCBzaGlwcGluZ0VzdGltYXRvckFsZXJ0ID0gJCgnLnNoaXBwaW5nLXF1b3RlcycpO1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gJ2Zvcm1bZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJztcclxuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSAuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0YCxcclxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0JywgdGhpcy4kZWxlbWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAvLyBlc3RpbWF0b3IgZXJyb3IgbWVzc2FnZXMgYXJlIGJlaW5nIGluamVjdGVkIGluIGh0bWwgYXMgYSByZXN1bHRcclxuICAgICAgICAgICAgLy8gb2YgdXNlciBzdWJtaXQ7IGNsZWFyaW5nIGFuZCBhZGRpbmcgcm9sZSBvbiBzdWJtaXQgcHJvdmlkZXNcclxuICAgICAgICAgICAgLy8gcmVndWxhciBhbm5vdW5jZW1lbnQgb2YgdGhlc2UgZXJyb3IgbWVzc2FnZXNcclxuICAgICAgICAgICAgaWYgKHNoaXBwaW5nRXN0aW1hdG9yQWxlcnQuYXR0cigncm9sZScpKSB7XHJcbiAgICAgICAgICAgICAgICBzaGlwcGluZ0VzdGltYXRvckFsZXJ0LnJlbW92ZUF0dHIoJ3JvbGUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2hpcHBpbmdFc3RpbWF0b3JBbGVydC5hdHRyKCdyb2xlJywgJ2FsZXJ0Jyk7XHJcbiAgICAgICAgICAgIC8vIFdoZW4gc3dpdGNoaW5nIGJldHdlZW4gY291bnRyaWVzLCB0aGUgc3RhdGUvcmVnaW9uIGlzIGR5bmFtaWNcclxuICAgICAgICAgICAgLy8gT25seSBwZXJmb3JtIGEgY2hlY2sgZm9yIGFsbCBmaWVsZHMgd2hlbiBjb3VudHJ5IGhhcyBhIHZhbHVlXHJcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBhcmVBbGwoJ3ZhbGlkJykgd2lsbCBjaGVjayBjb3VudHJ5IGZvciB2YWxpZGl0eVxyXG4gICAgICAgICAgICBpZiAoJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gKS52YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZFZhbGlkYXRpb24oKTtcclxuICAgICAgICB0aGlzLmJpbmRTdGF0ZVZhbGlkYXRpb24oKTtcclxuICAgICAgICB0aGlzLmJpbmRVUFNSYXRlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRWYWxpZGF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWAsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5SWQgPSBOdW1iZXIodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb3VudHJ5SWQgIT09IDAgJiYgIU51bWJlci5pc05hTihjb3VudHJ5SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMuY291bnRyeSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kU3RhdGVWYWxpZGF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXWApLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbGUgPSAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRlbGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZVZhbCA9ICRlbGUudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBlbGVWYWwgJiYgZWxlVmFsLmxlbmd0aCAmJiBlbGVWYWwgIT09ICdTdGF0ZS9wcm92aW5jZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMucHJvdmluY2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBkZWZhdWx0IHNoaXBwaW5nIGFuZCB1cHMgc2hpcHBpbmcgcmF0ZXNcclxuICAgICAqL1xyXG4gICAgYmluZFVQU1JhdGVzKCkge1xyXG4gICAgICAgIGNvbnN0IFVQU1JhdGVUb2dnbGUgPSAnLmVzdGltYXRvci1mb3JtLXRvZ2dsZVVQU1JhdGUnO1xyXG5cclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgVVBTUmF0ZVRvZ2dsZSwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtVXBzID0gJCgnLmVzdGltYXRvci1mb3JtLS11cHMnKTtcclxuICAgICAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm1EZWZhdWx0ID0gJCgnLmVzdGltYXRvci1mb3JtLS1kZWZhdWx0Jyk7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1VcHMudG9nZ2xlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcclxuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1EZWZhdWx0LnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpIHtcclxuICAgICAgICBsZXQgJGxhc3Q7XHJcblxyXG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcclxuICAgICAgICBzdGF0ZUNvdW50cnkodGhpcy4kc3RhdGUsIHRoaXMuY29udGV4dCwgeyB1c2VJZEZvclN0YXRlczogdHJ1ZSB9LCAoZXJyLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChlcnIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuZ2V0U3RhdHVzKHRoaXMuJHN0YXRlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkZmllbGQuYXR0cigncGxhY2Vob2xkZXInLCAnU3RhdGUvcHJvdmluY2UnKTtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxyXG4gICAgICAgICAgICAvLyBOb3QgYWxsIGNvdW50cmllcyByZXF1aXJlIHRoZSBwcm92aW5jZSB0byBiZSBmaWxsZWRcclxuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZW1vdmUgdGhpcyBjbGFzcyB3aGVuIHdlIHN3YXAgc2luY2Ugbm9kIHZhbGlkYXRpb24gZG9lc24ndCBjbGVhbnVwIGZvciB1c1xyXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVFc3RpbWF0b3JGb3JtU3RhdGUodG9nZ2xlQnV0dG9uLCBidXR0b25TZWxlY3RvciwgJHRvZ2dsZUNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZUF0dHJpYnV0ZXNPblRvZ2dsZSA9IChzZWxlY3RvclRvQWN0aXZhdGUpID0+IHtcclxuICAgICAgICAgICAgJCh0b2dnbGVCdXR0b24pLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsIHNlbGVjdG9yVG9BY3RpdmF0ZSk7XHJcbiAgICAgICAgICAgICQoYnV0dG9uU2VsZWN0b3IpLnRleHQoJChgIyR7c2VsZWN0b3JUb0FjdGl2YXRlfWApLnRleHQoKSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZCkge1xyXG4gICAgICAgICAgICBjaGFuZ2VBdHRyaWJ1dGVzT25Ub2dnbGUoJ2VzdGltYXRvci1jbG9zZScpO1xyXG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoYW5nZUF0dHJpYnV0ZXNPblRvZ2dsZSgnZXN0aW1hdG9yLWFkZCcpO1xyXG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZCA9ICF0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXN0aW1hdG9yRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JDb250YWluZXIgPSAkKCcuc2hpcHBpbmctZXN0aW1hdG9yJyk7XHJcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm0gPSAkKCcuZXN0aW1hdG9yLWZvcm0nKTtcclxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcclxuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2lkOiAkKCdbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXHJcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcclxuICAgICAgICAgICAgICAgIGNpdHk6ICQoJ1tuYW1lPVwic2hpcHBpbmctY2l0eVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcclxuICAgICAgICAgICAgICAgIHppcF9jb2RlOiAkKCdbbmFtZT1cInNoaXBwaW5nLXppcFwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRTaGlwcGluZ1F1b3RlcyhwYXJhbXMsICdjYXJ0L3NoaXBwaW5nLXF1b3RlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCcuc2hpcHBpbmctcXVvdGVzJykuaHRtbChyZXNwb25zZS5jb250ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBiaW5kIHRoZSBzZWxlY3QgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAkKCcuc2VsZWN0LXNoaXBwaW5nLXF1b3RlJykub24oJ2NsaWNrJywgY2xpY2tFdmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrRXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuc3VibWl0U2hpcHBpbmdRdW90ZShxdW90ZUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXNob3cnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRXN0aW1hdG9yRm9ybVN0YXRlKGV2ZW50LmN1cnJlbnRUYXJnZXQsICcuc2hpcHBpbmctZXN0aW1hdGUtc2hvd19fYnRuLW5hbWUnLCAkZXN0aW1hdG9yQ29udGFpbmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHNCYXNlLCB7IG9wdGlvbkNoYW5nZURlY29yYXRvciB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLWJhc2UnO1xyXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgaXNCcm93c2VySUUsIGNvbnZlcnRJbnRvQXJyYXkgfSBmcm9tICcuL3V0aWxzL2llLWhlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydEl0ZW1EZXRhaWxzIGV4dGVuZHMgUHJvZHVjdERldGFpbHNCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgY29udGV4dCwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0ge30pIHtcclxuICAgICAgICBzdXBlcigkc2NvcGUsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJyNDYXJ0RWRpdFByb2R1Y3RGaWVsZHNGb3JtJywgdGhpcy4kc2NvcGUpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZXMtd3JhcHBlcl0nLCAkZm9ybSk7XHJcbiAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uQ2hhbmdlQ2FsbGJhY2sgPSBvcHRpb25DaGFuZ2VEZWNvcmF0b3IuY2FsbCh0aGlzLCBoYXNEZWZhdWx0T3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IGF0dHJpYnV0ZXMuIEFsc28gdXBkYXRlIHRoZSBpbml0aWFsIHZpZXcgaW4gY2FzZSBpdGVtcyBhcmUgb29zXHJcbiAgICAgICAgLy8gb3IgaGF2ZSBkZWZhdWx0IHZhcmlhbnQgcHJvcGVydGllcyB0aGF0IGNoYW5nZSB0aGUgdmlld1xyXG4gICAgICAgIGlmICgoaXNFbXB0eShwcm9kdWN0QXR0cmlidXRlc0RhdGEpIHx8IGhhc0RlZmF1bHRPcHRpb25zKSAmJiBoYXNPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHRoaXMuY29udGV4dC5wcm9kdWN0Rm9yQ2hhbmdlSWQ7XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgb3B0aW9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvZHVjdFZhcmlhbnQoKSB7XHJcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gdmFsdWUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGV4dGFyZWEnICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2RhdGVTdHJpbmd9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3Quc2VsZWN0ZWRJbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdzd2F0Y2gnIHx8IHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFudHNsaXN0ID0gY29udmVydEludG9BcnJheSh2YWx1ZS5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQgPSBpbnB0ID0+IGlucHQuZGF0YXNldC5wcm9kdWN0QXR0cmlidXRlVmFsdWUgPT09IGNoZWNrZWQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0VmFyaWFudHNsaXN0LmZpbHRlcihtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0KVswXTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRSA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5pbm5lclRleHQudHJpbSgpIDogY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUUgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuY2hpbGRyZW5bMF0gOiBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgcHJvZHVjdFZhcmlhbnQgPSB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gMCA/IG9wdGlvbnMuc29ydCgpLmpvaW4oJywgJykgOiAndW5zYXRpc2ZpZWQnO1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSAkKCcubW9kYWwtaGVhZGVyLXRpdGxlJyk7XHJcblxyXG4gICAgICAgIGlmIChwcm9kdWN0VmFyaWFudCkge1xyXG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudCA9IHByb2R1Y3RWYXJpYW50ID09PSAndW5zYXRpc2ZpZWQnID8gJycgOiBwcm9kdWN0VmFyaWFudDtcclxuICAgICAgICAgICAgaWYgKHZpZXcuYXR0cignZGF0YS1ldmVudC10eXBlJykpIHtcclxuICAgICAgICAgICAgICAgIHZpZXcuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9IHZpZXcuaHRtbCgpLm1hdGNoKC8nKC4qPyknLylbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gJChgW2RhdGEtbmFtZT1cIiR7cHJvZHVjdE5hbWV9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBjYXJkLmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcclxuICAgICAgICBzdXBlci51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnLm1vZGFsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaGlkZS1jb250ZW50Jyk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcclxuICAgIGlmICh0eXBlb2YgY2VydCAhPT0gJ3N0cmluZycgfHwgY2VydC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGFueSBjdXN0b20gZ2lmdCBjZXJ0aWZpY2F0ZSB2YWxpZGF0aW9uIGxvZ2ljIGhlcmVcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IGluc2VydFN0YXRlSGlkZGVuRmllbGQgfSBmcm9tICcuL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XHJcblxyXG4vKipcclxuICogSWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgZnJvbSBiY2FwcCwgYSB0ZXh0IGZpZWxkIHdpbGwgYmUgc2VudC4gVGhpcyB3aWxsIGNyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIGhvbGQgb3B0aW9ucyBhZnRlciB0aGUgcmVtb3RlIHJlcXVlc3QuXHJcbiAqIEByZXR1cm5zIHtqUXVlcnl8SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlU3RhdGVSZXF1aXJlZChzdGF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcclxuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcclxuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlcGxhY2VtZW50QXR0cmlidXRlcyA9IHtcclxuICAgICAgICBpZDogYXR0cnMuaWQsXHJcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxyXG4gICAgICAgIGNsYXNzOiAnZm9ybS1zZWxlY3QnLFxyXG4gICAgICAgIG5hbWU6IGF0dHJzLm5hbWUsXHJcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxzZWxlY3Q+PC9zZWxlY3Q+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XHJcblxyXG4gICAgY29uc3QgJG5ld0VsZW1lbnQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcclxuICAgIGNvbnN0ICRoaWRkZW5JbnB1dCA9ICQoJ1tuYW1lKj1cIkZvcm1GaWVsZElzVGV4dFwiXScpO1xyXG5cclxuICAgIGlmICgkaGlkZGVuSW5wdXQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgJGhpZGRlbklucHV0LnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAvLyBTdHJpbmcgaXMgaW5qZWN0ZWQgZnJvbSBsb2NhbGl6ZXJcclxuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuYXBwZW5kKGA8c21hbGw+JHtjb250ZXh0LnJlcXVpcmVkfTwvc21hbGw+YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJG5ld0VsZW1lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJZiBhIGNvdW50cnkgd2l0aCBzdGF0ZXMgaXMgdGhlIGRlZmF1bHQsIGEgc2VsZWN0IHdpbGwgYmUgc2VudCxcclxuICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBzd2l0Y2ggdG8gYW4gaW5wdXQgZmllbGQgYW5kIGhpZGUgdGhlIHJlcXVpcmVkIGZpZWxkXHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlU3RhdGVPcHRpb25hbChzdGF0ZUVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcclxuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIGlkOiBhdHRycy5pZCxcclxuICAgICAgICAnZGF0YS1sYWJlbCc6IGF0dHJzWydkYXRhLWxhYmVsJ10sXHJcbiAgICAgICAgY2xhc3M6ICdmb3JtLWlucHV0JyxcclxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxyXG4gICAgICAgICdkYXRhLWZpZWxkLXR5cGUnOiBhdHRyc1snZGF0YS1maWVsZC10eXBlJ10sXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRlRWxlbWVudC5yZXBsYWNlV2l0aCgkKCc8aW5wdXQgLz4nLCByZXBsYWNlbWVudEF0dHJpYnV0ZXMpKTtcclxuXHJcbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xyXG5cclxuICAgIGlmICgkbmV3RWxlbWVudC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRuZXdFbGVtZW50KTtcclxuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcyB0aGUgYXJyYXkgb2Ygb3B0aW9ucyBmcm9tIHRoZSByZW1vdGUgcmVxdWVzdCB0byB0aGUgbmV3bHkgY3JlYXRlZCBzZWxlY3QgYm94LlxyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVzQXJyYXlcclxuICogQHBhcmFtIHtqUXVlcnl9ICRzZWxlY3RFbGVtZW50XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRPcHRpb25zKHN0YXRlc0FycmF5LCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gW107XHJcblxyXG4gICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCJcIj4ke3N0YXRlc0FycmF5LnByZWZpeH08L29wdGlvbj5gKTtcclxuXHJcbiAgICBpZiAoIV8uaXNFbXB0eSgkc2VsZWN0RWxlbWVudCkpIHtcclxuICAgICAgICBzdGF0ZXNBcnJheS5zdGF0ZXMuZm9yRWFjaCgoc3RhdGVPYmopID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudXNlSWRGb3JTdGF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5pZH1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIiR7c3RhdGVPYmoubmFtZX1cIj4ke3N0YXRlT2JqLmxhYmVsID8gc3RhdGVPYmoubGFiZWwgOiBzdGF0ZU9iai5uYW1lfTwvb3B0aW9uPmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRzZWxlY3RFbGVtZW50Lmh0bWwoY29udGFpbmVyLmpvaW4oJyAnKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge2pRdWVyeX0gc3RhdGVFbGVtZW50XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGVFbGVtZW50LCBjb250ZXh0ID0ge30sIG9wdGlvbnMsIGNhbGxiYWNrKSB7XHJcbiAgICAvKipcclxuICAgICAqIEJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciB0aHJlZSBwYXJhbWV0ZXJzIGluc3RlYWQgb2YgZm91clxyXG4gICAgICpcclxuICAgICAqIEF2YWlsYWJsZSBvcHRpb25zOlxyXG4gICAgICpcclxuICAgICAqIHVzZUlkRm9yU3RhdGVzIHtCb29sfSAtIEdlbmVyYXRlcyBzdGF0ZXMgZHJvcGRvd24gdXNpbmcgaWQgZm9yIHZhbHVlcyBpbnN0ZWFkIG9mIHN0cmluZ3NcclxuICAgICAqL1xyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuICAgIH1cclxuXHJcbiAgICAkKCdzZWxlY3RbZGF0YS1maWVsZC10eXBlPVwiQ291bnRyeVwiXScpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgY291bnRyeU5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAoY291bnRyeU5hbWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5jb3VudHJ5LmdldEJ5TmFtZShjb3VudHJ5TmFtZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoY29udGV4dC5zdGF0ZV9lcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJGN1cnJlbnRJbnB1dCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFfLmlzRW1wdHkocmVzcG9uc2UuZGF0YS5zdGF0ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBtYXkgaGF2ZSBiZWVuIHJlcGxhY2VkIHdpdGggYSBzZWxlY3QsIHJlc2VsZWN0IGl0XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0RWxlbWVudCA9IG1ha2VTdGF0ZVJlcXVpcmVkKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFkZE9wdGlvbnMocmVzcG9uc2UuZGF0YSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJHNlbGVjdEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IG1ha2VTdGF0ZU9wdGlvbmFsKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIG5ld0VsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcclxuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xyXG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xyXG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXHJcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxyXG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xyXG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XHJcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsImNoZWNrSXNHaWZ0Q2VydFZhbGlkIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwidXRpbHMiLCJTaGlwcGluZ0VzdGltYXRvciIsImRlZmF1bHRNb2RhbCIsInNob3dBbGVydE1vZGFsIiwiTW9kYWxFdmVudHMiLCJDYXJ0SXRlbURldGFpbHMiLCJDYXJ0Iiwib25SZWFkeSIsIiRtb2RhbCIsIiRjYXJ0UGFnZUNvbnRlbnQiLCIkIiwiJGNhcnRDb250ZW50IiwiJGNhcnRNZXNzYWdlcyIsIiRjYXJ0VG90YWxzIiwiJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zIiwiJG92ZXJsYXkiLCJoaWRlIiwiJGFjdGl2ZUNhcnRJdGVtSWQiLCIkYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb24iLCJzZXRBcHBsZVBheVN1cHBvcnQiLCJiaW5kRXZlbnRzIiwid2luZG93IiwiQXBwbGVQYXlTZXNzaW9uIiwiYWRkQ2xhc3MiLCJjYXJ0VXBkYXRlIiwiJHRhcmdldCIsIml0ZW1JZCIsImRhdGEiLCIkZWwiLCJvbGRRdHkiLCJwYXJzZUludCIsInZhbCIsIm1heFF0eSIsIm1pblF0eSIsIm1pbkVycm9yIiwibWF4RXJyb3IiLCJuZXdRdHkiLCJzaG93IiwiYXBpIiwiY2FydCIsIml0ZW1VcGRhdGUiLCJlcnIiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlbW92ZSIsInJlZnJlc2hDb250ZW50IiwiZXJyb3JzIiwiam9pbiIsImNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlIiwicHJlVmFsIiwiTnVtYmVyIiwiaW52YWxpZEVudHJ5IiwiaXNJbnRlZ2VyIiwiY29udGV4dCIsImludmFsaWRFbnRyeU1lc3NhZ2UiLCJyZXBsYWNlIiwiY2FydFJlbW92ZUl0ZW0iLCJpdGVtUmVtb3ZlIiwiY2FydEVkaXRPcHRpb25zIiwicHJvZHVjdElkIiwicHJvZHVjdEZvckNoYW5nZUlkIiwibW9kYWwiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJvcGVuIiwiZmluZCIsInByb2R1Y3RBdHRyaWJ1dGVzIiwiY29uZmlndXJlSW5DYXJ0IiwidXBkYXRlQ29udGVudCIsImNvbnRlbnQiLCJvcHRpb25DaGFuZ2VIYW5kbGVyIiwiJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyIiwibW9kYWxCb2R5UmVzZXJ2ZWRIZWlnaHQiLCJvdXRlckhlaWdodCIsImxlbmd0aCIsImNzcyIsImhhc0NsYXNzIiwib25lIiwib3BlbmVkIiwicHJvZHVjdERldGFpbHMiLCJiaW5kR2lmdFdyYXBwaW5nRm9ybSIsImhvb2tzIiwib24iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCIkZm9ybSIsIiRzdWJtaXQiLCIkbWVzc2FnZUJveCIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsInJlc3VsdCIsInB1cmNoYXNpbmdfbWVzc2FnZSIsInRleHQiLCJwcm9wIiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiJGNhcnRJdGVtc1Jvd3MiLCIkY2FydFBhZ2VUaXRsZSIsInRvdGFscyIsInBhZ2VUaXRsZSIsInN0YXR1c01lc3NhZ2VzIiwiYWRkaXRpb25hbENoZWNrb3V0QnV0dG9ucyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2V0Q29udGVudCIsImh0bWwiLCJyZXBsYWNlV2l0aCIsInF1YW50aXR5IiwidHJpZ2dlciIsImZpbHRlciIsImJpbmRDYXJ0RXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJldmVudERlZmF1bHQiLCJvblF0eUZvY3VzIiwidmFsdWUiLCJjaGFuZ2UiLCJzdHJpbmciLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsIm9uQ29uZmlybSIsImJpbmRQcm9tb0NvZGVFdmVudHMiLCIkY291cG9uQ29udGFpbmVyIiwiJGNvdXBvbkZvcm0iLCIkY29kZUlucHV0IiwiY29kZSIsImFwcGx5Q29kZSIsImJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMiLCIkY2VydENvbnRhaW5lciIsIiRjZXJ0Rm9ybSIsIiRjZXJ0SW5wdXQiLCJ0b2dnbGUiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsImludmFsaWRfZ2lmdF9jZXJ0aWZpY2F0ZSIsImFwcGx5R2lmdENlcnRpZmljYXRlIiwicmVzcCIsImJpbmRHaWZ0V3JhcHBpbmdFdmVudHMiLCJnZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyIsIiRzZWxlY3QiLCJpZCIsImluZGV4IiwiYWxsb3dNZXNzYWdlIiwidG9nZ2xlVmlld3MiLCIkc2luZ2xlRm9ybSIsIiRtdWx0aUZvcm0iLCJzaGlwcGluZ0Vycm9yTWVzc2FnZXMiLCJjb3VudHJ5Iiwic2hpcHBpbmdDb3VudHJ5RXJyb3JNZXNzYWdlIiwicHJvdmluY2UiLCJzaGlwcGluZ1Byb3ZpbmNlRXJyb3JNZXNzYWdlIiwic2hpcHBpbmdFc3RpbWF0b3IiLCJzdGF0ZUNvdW50cnkiLCJub2QiLCJWYWxpZGF0b3JzIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIiRlbGVtZW50IiwiJHN0YXRlIiwiaXNFc3RpbWF0b3JGb3JtT3BlbmVkIiwiaW5pdEZvcm1WYWxpZGF0aW9uIiwiYmluZFN0YXRlQ291bnRyeUNoYW5nZSIsImJpbmRFc3RpbWF0b3JFdmVudHMiLCJzaGlwcGluZ0VzdGltYXRvckFsZXJ0Iiwic2hpcHBpbmdWYWxpZGF0b3IiLCJzdWJtaXQiLCJ0YXAiLCJhdHRyIiwicmVtb3ZlQXR0ciIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImJpbmRWYWxpZGF0aW9uIiwiYmluZFN0YXRlVmFsaWRhdGlvbiIsImJpbmRVUFNSYXRlcyIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsImNvdW50cnlJZCIsImlzTmFOIiwiZXJyb3JNZXNzYWdlIiwiJGVsZSIsImVsZVZhbCIsIlVQU1JhdGVUb2dnbGUiLCIkZXN0aW1hdG9yRm9ybVVwcyIsIiRlc3RpbWF0b3JGb3JtRGVmYXVsdCIsInRvZ2dsZUNsYXNzIiwiJGxhc3QiLCJ1c2VJZEZvclN0YXRlcyIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJpcyIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUVzdGltYXRvckZvcm1TdGF0ZSIsInRvZ2dsZUJ1dHRvbiIsImJ1dHRvblNlbGVjdG9yIiwiJHRvZ2dsZUNvbnRhaW5lciIsImNoYW5nZUF0dHJpYnV0ZXNPblRvZ2dsZSIsInNlbGVjdG9yVG9BY3RpdmF0ZSIsIiRlc3RpbWF0b3JDb250YWluZXIiLCIkZXN0aW1hdG9yRm9ybSIsInBhcmFtcyIsImNvdW50cnlfaWQiLCJzdGF0ZV9pZCIsImNpdHkiLCJ6aXBfY29kZSIsImdldFNoaXBwaW5nUXVvdGVzIiwiY2xpY2tFdmVudCIsInF1b3RlSWQiLCJzdWJtaXRTaGlwcGluZ1F1b3RlIiwiUHJvZHVjdERldGFpbHNCYXNlIiwib3B0aW9uQ2hhbmdlRGVjb3JhdG9yIiwiaXNCcm93c2VySUUiLCJjb252ZXJ0SW50b0FycmF5IiwiJHNjb3BlIiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImhhc09wdGlvbnMiLCJ0cmltIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJzZXRQcm9kdWN0VmFyaWFudCIsIm9wdGlvbkNoYW5nZUNhbGxiYWNrIiwiY2FsbCIsInVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzIiwidW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyIsImVhY2giLCJvcHRpb25MYWJlbCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Iiwib3B0aW9uVGl0bGUiLCJzcGxpdCIsInJlcXVpcmVkIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yIiwicHVzaCIsImlzU2F0aXNmaWVkIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImV2ZXJ5Iiwic2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImRhdGVTdHJpbmciLCJtYXAiLCJ4IiwiY2hlY2tlZCIsImdldFNlbGVjdGVkT3B0aW9uTGFiZWwiLCJwcm9kdWN0VmFyaWFudHNsaXN0IiwibWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCIsImlucHQiLCJkYXRhc2V0IiwicHJvZHVjdEF0dHJpYnV0ZVZhbHVlIiwibGFiZWwiLCJsYWJlbHMiLCJ0aXRsZSIsInByb2R1Y3RWYXJpYW50Iiwic29ydCIsInZpZXciLCJwcm9kdWN0TmFtZSIsIm1hdGNoIiwiY2FyZCIsImNlcnQiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwibWFrZVN0YXRlUmVxdWlyZWQiLCJzdGF0ZUVsZW1lbnQiLCJhdHRycyIsIml0ZW0iLCJyZXQiLCJuYW1lIiwicmVwbGFjZW1lbnRBdHRyaWJ1dGVzIiwiY2xhc3MiLCIkbmV3RWxlbWVudCIsIiRoaWRkZW5JbnB1dCIsInByZXYiLCJhcHBlbmQiLCJtYWtlU3RhdGVPcHRpb25hbCIsImFkZE9wdGlvbnMiLCJzdGF0ZXNBcnJheSIsIiRzZWxlY3RFbGVtZW50IiwiY29udGFpbmVyIiwicHJlZml4Iiwic3RhdGVzIiwiZm9yRWFjaCIsInN0YXRlT2JqIiwiY2FsbGJhY2siLCJjb3VudHJ5TmFtZSIsImdldEJ5TmFtZSIsInN0YXRlX2Vycm9yIiwiJGN1cnJlbnRJbnB1dCIsIm5ld0VsZW1lbnQiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiaSIsIkpTT04iLCJwYXJzZSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwia2V5IiwicG9wIiwicmVkdWNlIiwiYWNjIl0sInNvdXJjZVJvb3QiOiIifQ==
