"use strict";
(self["webpackChunkStyle"] = self["webpackChunkStyle"] || []).push([["assets_js_theme_account_js"],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Account; }
/* harmony export */ });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var Account = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Account, _PageManager);

  function Account(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__.createTranslationDictionary)(context);
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }

  var _proto = Account.prototype;

  _proto.onReady = function onReady() {
    var $editAccountForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-edit-account-form]');
    var $addressForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-address-form]');
    var $inboxForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-inbox-form]');
    var $accountReturnForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('[data-account-return-form]');
    var $paymentMethodForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-payment-method-form]');
    var $reorderForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]');
    var $bigCommerce = window.BigCommerce;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context); // Injected via template

    this.passwordRequirements = this.context.passwordRequirements; // Instantiates wish list JS

    _wishlist__WEBPACK_IMPORTED_MODULE_4__["default"].load(this.context);

    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);

      if (this.$state.is('input')) {
        (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.insertStateHiddenField)(this.$state);
      }
    }

    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }

    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);

      if (this.$state.is('input')) {
        (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.insertStateHiddenField)(this.$state);
      }
    }

    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }

    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }

    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }

    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }

    if ($bigCommerce && $bigCommerce.accountPayments) {
      window.BigCommerce.accountPayments({
        widgetStyles: {
          base: {
            color: '#666666',
            cursor: 'pointer',
            display: 'block',
            fontSize: '1rem',
            lineHeight: '1.5',
            marginBottom: '0.5rem'
          },
          error: {
            color: 'red'
          },
          placeholder: {
            color: '#d8d8d8'
          },
          validated: {
            color: 'green'
          }
        },
        countries: this.context.countries
      });
    }

    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }
  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */
  ;

  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;

    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });

      if (!submitForm) {
        event.preventDefault();
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(_this2.context.selectItem);
      }
    });
  };

  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var _this3 = this;

    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($addressForm, this.context);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-address-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.announceInputErrorMessage
    });
    addressValidator.add(validationModel);

    if ($stateElement) {
      var $last; // Requests the states for a country with AJAX

      (0,_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }

        var $field = $(field);

        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }

        if ($last) {
          addressValidator.remove($last);
        }

        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setStateCountryValidation(addressValidator, field, _this3.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.cleanUpStateValidation(field);
        }
      });
    }

    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();

      if (addressValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false; // Iterate until we find a non-zero value in the dropdown for quantity

      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true; // Exit out of loop if we found at least one return

          return true;
        }
      });

      if (formSubmit) {
        return true;
      }

      (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(errorMessage);
      return event.preventDefault();
    });
  };

  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this4 = this;

    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, \"prefix\": \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($paymentMethodForm, this.context);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.announceInputErrorMessage
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last; // Requests the states for a country with AJAX

    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }

      var $field = $(field);

      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }

      if ($last) {
        paymentMethodValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setStateCountryValidation(paymentMethodValidator, field, _this4.validationDictionary.field_not_blank);
      } else {
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.cleanUpStateValidation(field);
      }
    }); // Use credit card number input listener to highlight credit card type

    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = (0,_common_payment_method__WEBPACK_IMPORTED_MODULE_9__.creditCardType)(target.value);

      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    }); // Set of credit card validation

    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    }); // Set of credit card format

    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Formatters.setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Formatters.setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]"); // Billing address validation

    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault(); // Perform final form validation

      paymentMethodValidator.performCheck();

      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {}); // Assign country and state code


        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this4.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });

        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });

        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state; // Default Instrument

        data.default_instrument = !!data.default_instrument; // Store credit card

        (0,_common_payment_method__WEBPACK_IMPORTED_MODULE_9__.storeInstrument)(_this4.context, data, function () {
          window.location.href = _this4.context.paymentMethodsUrl;
        }, function () {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(_this4.context.generic_error);
        });
      }
    });
  };

  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($editAccountForm, this.context);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: '${formEditSelector} input[type="submit"]',
      delay: 900
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector); // This only handles the custom fields, standard fields are added below

    editValidator.add(validationModel);

    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setEmailValidation(editValidator, emailSelector, this.validationDictionary.valid_email);
    }

    if ($passwordElement && $password2Element) {
      var _this$validationDicti = this.validationDictionary,
          enterPassword = _this$validationDicti.password,
          matchPassword = _this$validationDicti.password_match;
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.createPasswordValidationErrorTextObject)(enterPassword, enterPassword, matchPassword, this.passwordRequirements.error), true);
    }

    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;

          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }

          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }

    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();

      if (editValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
      setTimeout(function () {
        var earliestError = $('span.form-inlineMessage:first').prev('input');
        earliestError.focus();
      }, 900);
    });
  };

  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]',
      delay: 900
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();

      if (inboxValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
      setTimeout(function () {
        var earliestError = $('span.form-inlineMessage:first').prev('input');
        earliestError.focus();
      }, 900);
    });
  };

  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Formatters": function() { return /* binding */ Formatters; },
/* harmony export */   "Validators": function() { return /* binding */ Validators; },
/* harmony export */   "creditCardType": function() { return /* binding */ creditCardType; },
/* harmony export */   "storeInstrument": function() { return /* binding */ storeInstrument; }
/* harmony export */ });
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */

var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};
/**
 * Get credit card type from credit card number
 * @param {string} value
 */


var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.type(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(value), true);
};
/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */

var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
      shopperId = _ref.shopperId,
      storeHash = _ref.storeHash,
      vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
      currency_code = _ref2.currency_code,
      credit_card_number = _ref2.credit_card_number,
      expiration = _ref2.expiration,
      name_on_card = _ref2.name_on_card,
      cvv = _ref2.cvv,
      default_instrument = _ref2.default_instrument,
      address1 = _ref2.address1,
      address2 = _ref2.address2,
      city = _ref2.city,
      postal_code = _ref2.postal_code,
      state_or_province_code = _ref2.state_or_province_code,
      country_code = _ref2.country_code,
      company = _ref2.company,
      first_name = _ref2.first_name,
      last_name = _ref2.last_name,
      email = _ref2.email,
      phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.format(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(target.value));
      });
    }
  },

  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
            which = _ref4.which;
        var refTarget = target;

        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default().cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function decrementCounter(counter, item) {
  var index = counter.indexOf(item);

  if (index > -1) {
    counter.splice(index, 1);
  }
}

function incrementCounter(counter, item) {
  counter.push(item);
}

function updateCounterNav(counter, $link, urls) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }

    $link.attr('href', urls.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var noCompareMessage = _ref.noCompareMessage,
      urls = _ref.urls;
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urls);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');

    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }

    updateCounterNav(compareCounter, $clickedCompareLink, urls);
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');

    if ($clickedCheckedInput.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showAlertModal)(noCompareMessage);
      return false;
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9hY2NvdW50X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCa0I7OztBQUNqQixtQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixvQ0FBTUEsT0FBTjtBQUNBLFVBQUtDLG9CQUFMLEdBQTRCViw2RkFBMkIsQ0FBQ1MsT0FBRCxDQUF2RDtBQUNBLFVBQUtFLE1BQUwsR0FBY0MsQ0FBQyxDQUFDLDJCQUFELENBQWY7QUFDQSxVQUFLQyxLQUFMLEdBQWFELENBQUMsQ0FBQyxNQUFELENBQWQ7QUFKaUI7QUFLcEI7Ozs7U0FFREUsVUFBQSxtQkFBVTtBQUNOLFFBQU1DLGdCQUFnQixHQUFHcEIsc0VBQVksQ0FBQyw4QkFBRCxDQUFyQztBQUNBLFFBQU1xQixZQUFZLEdBQUdyQixzRUFBWSxDQUFDLHlCQUFELENBQWpDO0FBQ0EsUUFBTXNCLFVBQVUsR0FBR3RCLHNFQUFZLENBQUMsdUJBQUQsQ0FBL0I7QUFDQSxRQUFNdUIsa0JBQWtCLEdBQUd2QixzRUFBWSxDQUFDLDRCQUFELENBQXZDO0FBQ0EsUUFBTXdCLGtCQUFrQixHQUFHeEIsc0VBQVksQ0FBQyxnQ0FBRCxDQUF2QztBQUNBLFFBQU15QixZQUFZLEdBQUd6QixzRUFBWSxDQUFDLDZCQUFELENBQWpDO0FBQ0EsUUFBTTBCLGNBQWMsR0FBR1QsQ0FBQyxDQUFDLHNCQUFELENBQXhCO0FBQ0EsUUFBTVUsWUFBWSxHQUFHQyxNQUFNLENBQUNDLFdBQTVCO0FBRUFqQixJQUFBQSxxRUFBZSxDQUFDLEtBQUtFLE9BQU4sQ0FBZixDQVZNLENBWU47O0FBQ0EsU0FBS2dCLG9CQUFMLEdBQTRCLEtBQUtoQixPQUFMLENBQWFnQixvQkFBekMsQ0FiTSxDQWVOOztBQUNBakMsSUFBQUEsc0RBQUEsQ0FBYyxL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Oi8vU3R5bGUvLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly9TdHlsZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcGF5bWVudC1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vU3R5bGUvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi93aXNobGlzdCc7XHJcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vY29tbW9uL2Zvcm0tdmFsaWRhdGlvbic7XHJcbmltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi9jb21tb24vc3RhdGUtY291bnRyeSc7XHJcbmltcG9ydCB7XHJcbiAgICBjbGFzc2lmeUZvcm0sXHJcbiAgICBWYWxpZGF0b3JzLFxyXG4gICAgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQsXHJcbiAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QsXHJcbn0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XHJcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XHJcbmltcG9ydCB7IGNyZWRpdENhcmRUeXBlLCBzdG9yZUluc3RydW1lbnQsIFZhbGlkYXRvcnMgYXMgQ0NWYWxpZGF0b3JzLCBGb3JtYXR0ZXJzIGFzIENDRm9ybWF0dGVycyB9IGZyb20gJy4vY29tbW9uL3BheW1lbnQtbWV0aG9kJztcclxuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XHJcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcclxuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgY29uc3QgJGVkaXRBY2NvdW50Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWVkaXQtYWNjb3VudC1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRhZGRyZXNzRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkaW5ib3hGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtaW5ib3gtZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkYWNjb3VudFJldHVybkZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmV0dXJuLWZvcm1dJyk7XHJcbiAgICAgICAgY29uc3QgJHBheW1lbnRNZXRob2RGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtcGF5bWVudC1tZXRob2QtZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkcmVvcmRlckZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmVvcmRlci1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRpbnZvaWNlQnV0dG9uID0gJCgnW2RhdGEtcHJpbnQtaW52b2ljZV0nKTtcclxuICAgICAgICBjb25zdCAkYmlnQ29tbWVyY2UgPSB3aW5kb3cuQmlnQ29tbWVyY2U7XHJcblxyXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xyXG5cclxuICAgICAgICAvLyBJbmplY3RlZCB2aWEgdGVtcGxhdGVcclxuICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzID0gdGhpcy5jb250ZXh0LnBhc3N3b3JkUmVxdWlyZW1lbnRzO1xyXG5cclxuICAgICAgICAvLyBJbnN0YW50aWF0ZXMgd2lzaCBsaXN0IEpTXHJcbiAgICAgICAgV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpO1xyXG5cclxuICAgICAgICBpZiAoJGVkaXRBY2NvdW50Rm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKHRoaXMuJHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRpbnZvaWNlQnV0dG9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkaW52b2ljZUJ1dHRvbi5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoIC8gMiAtIDQ1MDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgLyAyIC0gMzIwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gJGludm9pY2VCdXR0b24uZGF0YSgncHJpbnRJbnZvaWNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnb3JkZXJJbnZvaWNlJywgYHdpZHRoPTkwMCxoZWlnaHQ9NjUwLGxlZnQ9JHtsZWZ0fSx0b3A9JHt0b3B9LHNjcm9sbGJhcnM9MWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkYWRkcmVzc0Zvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKHRoaXMuJHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRpbmJveEZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGFjY291bnRSZXR1cm5Gb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24oJGFjY291bnRSZXR1cm5Gb3JtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkcGF5bWVudE1ldGhvZEZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRyZW9yZGVyRm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkYmlnQ29tbWVyY2UgJiYgJGJpZ0NvbW1lcmNlLmFjY291bnRQYXltZW50cykge1xyXG4gICAgICAgICAgICB3aW5kb3cuQmlnQ29tbWVyY2UuYWNjb3VudFBheW1lbnRzKHtcclxuICAgICAgICAgICAgICAgIHdpZGdldFN0eWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjNjY2NjY2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxLjUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcwLjVyZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZDhkOGQ4JyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvdW50cmllczogdGhpcy5jb250ZXh0LmNvdW50cmllcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJpbmREZWxldGVBZGRyZXNzKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmluZHMgYSBzdWJtaXQgaG9vayB0byBlbnN1cmUgdGhlIGN1c3RvbWVyIHJlY2VpdmVzIGEgY29uZmlybWF0aW9uIGRpYWxvZyBiZWZvcmUgZGVsZXRpbmcgYW4gYWRkcmVzc1xyXG4gICAgICovXHJcbiAgICBiaW5kRGVsZXRlQWRkcmVzcygpIHtcclxuICAgICAgICAkKCdbZGF0YS1kZWxldGUtYWRkcmVzc10nKS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdkZWxldGVBZGRyZXNzJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZERlbGV0ZVBheW1lbnRNZXRob2QoKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLXBheW1lbnQtbWV0aG9kXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZVBheW1lbnRNZXRob2QnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKSB7XHJcbiAgICAgICAgJHJlb3JkZXJGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMgPSAkKCcuYWNjb3VudC1saXN0SXRlbSAuZm9ybS1jaGVja2JveDpjaGVja2VkJyk7XHJcbiAgICAgICAgICAgIGxldCBzdWJtaXRGb3JtID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAkcmVvcmRlckZvcm0uZmluZCgnW25hbWVePVwicmVvcmRlcml0ZW1cIl0nKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMuZWFjaCgoaW5kZXgsIHByb2R1Y3RDaGVja2JveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJChwcm9kdWN0Q2hlY2tib3gpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0PicsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgcmVvcmRlcml0ZW1bJHtwcm9kdWN0SWR9XWAsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcxJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICRyZW9yZGVyRm9ybS5hcHBlbmQoJGlucHV0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXN1Ym1pdEZvcm0pIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbCh0aGlzLmNvbnRleHQuc2VsZWN0SXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uKCRhZGRyZXNzRm9ybSkge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGFkZHJlc3NGb3JtLCB0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJztcclxuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChzdGF0ZVNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzVmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcclxuXHJcbiAgICAgICAgaWYgKCRzdGF0ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0ICRsYXN0O1xyXG5cclxuICAgICAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxyXG4gICAgICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzVmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGxhc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihhZGRyZXNzVmFsaWRhdG9yLCBmaWVsZCwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS5maWVsZF9ub3RfYmxhbmspO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRhZGRyZXNzRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbigkYWNjb3VudFJldHVybkZvcm0pIHtcclxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAkYWNjb3VudFJldHVybkZvcm0uZGF0YSgnYWNjb3VudFJldHVybkZvcm1FcnJvcicpO1xyXG5cclxuICAgICAgICAkYWNjb3VudFJldHVybkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1TdWJtaXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgdW50aWwgd2UgZmluZCBhIG5vbi16ZXJvIHZhbHVlIGluIHRoZSBkcm9wZG93biBmb3IgcXVhbnRpdHlcclxuICAgICAgICAgICAgJCgnW25hbWVePVwicmV0dXJuX3F0eVwiXScsICRhY2NvdW50UmV0dXJuRm9ybSkuZWFjaCgoaSwgZWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJChlbGUpLnZhbCgpLCAxMCkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU3VibWl0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhpdCBvdXQgb2YgbG9vcCBpZiB3ZSBmb3VuZCBhdCBsZWFzdCBvbmUgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm1TdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbChlcnJvck1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pIHtcclxuICAgICAgICAvLyBJbmplY3QgdmFsaWRhdGlvbnMgaW50byBmb3JtIGZpZWxkcyBiZWZvcmUgdmFsaWRhdGlvbiBydW5zXHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNmaXJzdF9uYW1lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5maXJzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2xhc3RfbmFtZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQubGFzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NvbXBhbnkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNvbXBhbnlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwaG9uZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucGhvbmVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczFMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2FkZHJlc3MyLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5hZGRyZXNzMkxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NpdHkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNpdHlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NvdW50cnkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZXNlbGVjdFwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY291bnRyeUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwicHJlZml4XCI6IFwiJHt0aGlzLmNvbnRleHQuY2hvb3NlQ291bnRyeUxhYmVsfVwiIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3N0YXRlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5zdGF0ZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjcG9zdGFsX2NvZGUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnBvc3RhbENvZGVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0sIHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXSc7XHJcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdYCxcclxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdYCk7XHJcblxyXG4gICAgICAgIGxldCAkbGFzdDtcclxuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXHJcbiAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBheW1lbnRNZXRob2RWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkbGFzdCkge1xyXG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBmaWVsZCwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS5maWVsZF9ub3RfYmxhbmspO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBVc2UgY3JlZGl0IGNhcmQgbnVtYmVyIGlucHV0IGxpc3RlbmVyIHRvIGhpZ2hsaWdodCBjcmVkaXQgY2FyZCB0eXBlXHJcbiAgICAgICAgbGV0IGNhcmRUeXBlO1xyXG4gICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgY2FyZFR5cGUgPSBjcmVkaXRDYXJkVHlwZSh0YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoY2FyZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdbYWx0PVwiJHtjYXJkVHlwZX1cIl1gKS5zaWJsaW5ncygpLmNzcygnb3BhY2l0eScsICcuMicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGltZ2ApLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2V0IG9mIGNyZWRpdCBjYXJkIHZhbGlkYXRpb25cclxuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCwgdGhpcy5jb250ZXh0LmNyZWRpdENhcmROdW1iZXIpO1xyXG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRFeHBpcmF0aW9uVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJleHBpcmF0aW9uXCJdYCwgdGhpcy5jb250ZXh0LmV4cGlyYXRpb24pO1xyXG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXROYW1lT25DYXJkVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJuYW1lX29uX2NhcmRcIl1gLCB0aGlzLmNvbnRleHQubmFtZU9uQ2FyZCk7XHJcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEN2dlZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3Z2XCJdYCwgdGhpcy5jb250ZXh0LmN2diwgKCkgPT4gY2FyZFR5cGUpO1xyXG5cclxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgZm9ybWF0XHJcbiAgICAgICAgQ0NGb3JtYXR0ZXJzLnNldENyZWRpdENhcmROdW1iZXJGb3JtYXQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCk7XHJcbiAgICAgICAgQ0NGb3JtYXR0ZXJzLnNldEV4cGlyYXRpb25Gb3JtYXQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiZXhwaXJhdGlvblwiXWApO1xyXG5cclxuICAgICAgICAvLyBCaWxsaW5nIGFkZHJlc3MgdmFsaWRhdGlvblxyXG4gICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XHJcblxyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBQZXJmb3JtIGZpbmFsIGZvcm0gdmFsaWRhdGlvblxyXG4gICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBmb3JtIGRhdGEgYW5kIHJlZHVjZSBpdCB0byBvYmplY3RcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBfLnJlZHVjZSgkcGF5bWVudE1ldGhvZEZvcm0uc2VyaWFsaXplQXJyYXkoKSwgKG9iaiwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcclxuICAgICAgICAgICAgICAgICAgICByZWZPYmpbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZk9iajtcclxuICAgICAgICAgICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gY291bnRyeSBhbmQgc3RhdGUgY29kZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRyeSA9IF8uZmluZCh0aGlzLmNvbnRleHQuY291bnRyaWVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5jb3VudHJ5KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gY291bnRyeSAmJiBfLmZpbmQoY291bnRyeS5zdGF0ZXMsICh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBkYXRhLnN0YXRlKTtcclxuICAgICAgICAgICAgICAgIGRhdGEuY291bnRyeV9jb2RlID0gY291bnRyeSA/IGNvdW50cnkuY29kZSA6IGRhdGEuY291bnRyeTtcclxuICAgICAgICAgICAgICAgIGRhdGEuc3RhdGVfb3JfcHJvdmluY2VfY29kZSA9IHN0YXRlID8gc3RhdGUuY29kZSA6IGRhdGEuc3RhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCBJbnN0cnVtZW50XHJcbiAgICAgICAgICAgICAgICBkYXRhLmRlZmF1bHRfaW5zdHJ1bWVudCA9ICEhZGF0YS5kZWZhdWx0X2luc3RydW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgY3JlZGl0IGNhcmRcclxuICAgICAgICAgICAgICAgIHN0b3JlSW5zdHJ1bWVudCh0aGlzLmNvbnRleHQsIGRhdGEsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuY29udGV4dC5wYXltZW50TWV0aG9kc1VybDtcclxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbCh0aGlzLmNvbnRleHQuZ2VuZXJpY19lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pIHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0sIHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgY29uc3QgZm9ybUVkaXRTZWxlY3RvciA9ICdmb3JtW2RhdGEtZWRpdC1hY2NvdW50LWZvcm1dJztcclxuICAgICAgICBjb25zdCBlZGl0VmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAnJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcclxuICAgICAgICAgICAgZGVsYXk6IDkwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBlbWFpbFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkVtYWlsQWRkcmVzc1wiXWA7XHJcbiAgICAgICAgY29uc3QgJGVtYWlsRWxlbWVudCA9ICQoZW1haWxTZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJQYXNzd29yZFwiXWA7XHJcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkRWxlbWVudCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQyU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiQ29uZmlybVBhc3N3b3JkXCJdYDtcclxuICAgICAgICBjb25zdCAkcGFzc3dvcmQyRWxlbWVudCA9ICQocGFzc3dvcmQyU2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIkN1cnJlbnRQYXNzd29yZFwiXWA7XHJcbiAgICAgICAgY29uc3QgJGN1cnJlbnRQYXNzd29yZCA9ICQoY3VycmVudFBhc3N3b3JkU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAvLyBUaGlzIG9ubHkgaGFuZGxlcyB0aGUgY3VzdG9tIGZpZWxkcywgc3RhbmRhcmQgZmllbGRzIGFyZSBhZGRlZCBiZWxvd1xyXG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XHJcblxyXG4gICAgICAgIGlmICgkZW1haWxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKGVtYWlsU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldEVtYWlsVmFsaWRhdGlvbihlZGl0VmFsaWRhdG9yLCBlbWFpbFNlbGVjdG9yLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LnZhbGlkX2VtYWlsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkcGFzc3dvcmRFbGVtZW50ICYmICRwYXNzd29yZDJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcGFzc3dvcmQ6IGVudGVyUGFzc3dvcmQsIHBhc3N3b3JkX21hdGNoOiBtYXRjaFBhc3N3b3JkIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xyXG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZFNlbGVjdG9yKTtcclxuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmQyU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZFNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0KGVudGVyUGFzc3dvcmQsIGVudGVyUGFzc3dvcmQsIG1hdGNoUGFzc3dvcmQsIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMuZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkY3VycmVudFBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBjdXJyZW50UGFzc3dvcmRTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSAnJyAmJiAkcGFzc3dvcmRFbGVtZW50LnZhbCgpICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY3VycmVudFBhc3N3b3JkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfZmlyc3RuYW1lJ11gLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFtuYW1lPSdhY2NvdW50X2xhc3RuYW1lJ11gLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5sYXN0TmFtZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgJGVkaXRBY2NvdW50Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVkaXRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWFybGllc3RFcnJvciA9ICQoJ3NwYW4uZm9ybS1pbmxpbmVNZXNzYWdlOmZpcnN0JykucHJldignaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGVhcmxpZXN0RXJyb3IuZm9jdXMoKTtcclxuICAgICAgICAgICAgfSwgOTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckluYm94VmFsaWRhdGlvbigkaW5ib3hGb3JtKSB7XHJcbiAgICAgICAgY29uc3QgaW5ib3hWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXHJcbiAgICAgICAgICAgIGRlbGF5OiA5MDAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGluYm94VmFsaWRhdG9yLmFkZChbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIHNlbGVjdFtuYW1lPVwibWVzc2FnZV9vcmRlcl9pZFwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBOdW1iZXIodmFsKSAhPT0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlck9yZGVyTnVtLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBpbnB1dFtuYW1lPVwibWVzc2FnZV9zdWJqZWN0XCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJTdWJqZWN0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSB0ZXh0YXJlYVtuYW1lPVwibWVzc2FnZV9jb250ZW50XCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJNZXNzYWdlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAkaW5ib3hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGluYm94VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluYm94VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlYXJsaWVzdEVycm9yID0gJCgnc3Bhbi5mb3JtLWlubGluZU1lc3NhZ2U6Zmlyc3QnKS5wcmV2KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgZWFybGllc3RFcnJvci5mb2N1cygpO1xyXG4gICAgICAgICAgICB9LCA5MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBjcmVkaXRjYXJkcyBmcm9tICdjcmVkaXRjYXJkcyc7XHJcblxyXG4vKipcclxuICogT21pdCBudWxsIG9yIGVtcHR5IHN0cmluZyBwcm9wZXJ0aWVzIG9mIG9iamVjdFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG5jb25zdCBvbWl0TnVsbFN0cmluZyA9IG9iaiA9PiB7XHJcbiAgICBjb25zdCByZWZPYmogPSBvYmo7XHJcblxyXG4gICAgJC5lYWNoKHJlZk9iaiwgKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSByZWZPYmpba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVmT2JqO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldCBjcmVkaXQgY2FyZCB0eXBlIGZyb20gY3JlZGl0IGNhcmQgbnVtYmVyXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNyZWRpdENhcmRUeXBlID0gdmFsdWUgPT4gY3JlZGl0Y2FyZHMuY2FyZC50eXBlKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsdWUpLCB0cnVlKTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcGVyIGZvciBhamF4IHJlcXVlc3QgdG8gc3RvcmUgYSBuZXcgaW5zdHJ1bWVudCBpbiBiaWdwYXlcclxuICogQHBhcmFtIHtvYmplY3R9IFJlcHJlc2VudGluZyB0aGUgZGF0YSBuZWVkZWQgZm9yIHRoZSBoZWFkZXJcclxuICogQHBhcmFtIHtvYmplY3R9IFJlcHJlc2VudGluZyB0aGUgZGF0YSBuZWVkZWQgZm9yIHRoZSBib2R5XHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRvbmUgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZmFpbCBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGEgdW5zdWNjZXNzZnVsIHJlc3BvbnNlXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3RvcmVJbnN0cnVtZW50ID0gKHtcclxuICAgIC8vIEhvc3RuYW1lLCBJZHMgJiBUb2tlblxyXG4gICAgcGF5bWVudHNVcmwsXHJcbiAgICBzaG9wcGVySWQsXHJcbiAgICBzdG9yZUhhc2gsXHJcbiAgICB2YXVsdFRva2VuLFxyXG59LCB7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gICAgLy8gUHJvdmlkZXIgSW5mb1xyXG4gICAgcHJvdmlkZXJfaWQsXHJcbiAgICBjdXJyZW5jeV9jb2RlLFxyXG5cclxuICAgIC8vIEluc3RydW1lbnQgRGV0YWlsc1xyXG4gICAgY3JlZGl0X2NhcmRfbnVtYmVyLFxyXG4gICAgZXhwaXJhdGlvbixcclxuICAgIG5hbWVfb25fY2FyZCxcclxuICAgIGN2dixcclxuICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcclxuXHJcbiAgICAvLyBCaWxsaW5nIEFkZHJlc3NcclxuICAgIGFkZHJlc3MxLFxyXG4gICAgYWRkcmVzczIsXHJcbiAgICBjaXR5LFxyXG4gICAgcG9zdGFsX2NvZGUsXHJcbiAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxyXG4gICAgY291bnRyeV9jb2RlLFxyXG4gICAgY29tcGFueSxcclxuICAgIGZpcnN0X25hbWUsXHJcbiAgICBsYXN0X25hbWUsXHJcbiAgICBlbWFpbCxcclxuICAgIHBob25lLFxyXG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xyXG59LCBkb25lLCBmYWlsKSA9PiB7XHJcbiAgICBjb25zdCBleHBpcnkgPSBleHBpcmF0aW9uLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IGAke3BheW1lbnRzVXJsfS9zdG9yZXMvJHtzdG9yZUhhc2h9L2N1c3RvbWVycy8ke3Nob3BwZXJJZH0vc3RvcmVkX2luc3RydW1lbnRzYCxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHZhdWx0VG9rZW4sXHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuYmMudjEranNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGluc3RydW1lbnQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdjYXJkJyxcclxuICAgICAgICAgICAgICAgIGNhcmRob2xkZXJfbmFtZTogbmFtZV9vbl9jYXJkLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiBjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKGNyZWRpdF9jYXJkX251bWJlciksXHJcbiAgICAgICAgICAgICAgICBleHBpcnlfbW9udGg6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ubW9udGgucGFyc2UoZXhwaXJ5WzBdKSxcclxuICAgICAgICAgICAgICAgIGV4cGlyeV95ZWFyOiBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLnllYXIucGFyc2UoZXhwaXJ5WzFdLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbl92YWx1ZTogY3Z2LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiaWxsaW5nX2FkZHJlc3M6IG9taXROdWxsU3RyaW5nKHtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MxLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczIsXHJcbiAgICAgICAgICAgICAgICBjaXR5LFxyXG4gICAgICAgICAgICAgICAgcG9zdGFsX2NvZGUsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgY29tcGFueSxcclxuICAgICAgICAgICAgICAgIGZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0X25hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBob25lLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgcHJvdmlkZXJfaWQsXHJcbiAgICAgICAgICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcclxuICAgICAgICAgICAgY3VycmVuY3lfY29kZSxcclxuICAgICAgICB9KSxcclxuICAgIH0pXHJcbiAgICAgICAgLmRvbmUoZG9uZSlcclxuICAgICAgICAuZmFpbChmYWlsKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtYXR0ZXJzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBjcmVkaXQgY2FyZCBudW1iZXJcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICovXHJcbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0OiBmaWVsZCA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICQoZmllbGQpLm9uKCdrZXl1cCcsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSBjcmVkaXRjYXJkcy5jYXJkLmZvcm1hdChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBhIGZvcm1hdCBmb3IgZXhwaXJhdGlvbiBkYXRlXHJcbiAgICAgKiBAcGFyYW0gZmllbGRcclxuICAgICAqL1xyXG4gICAgc2V0RXhwaXJhdGlvbkZvcm1hdDogZmllbGQgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAkKGZpZWxkKS5vbigna2V5dXAnLCAoeyB0YXJnZXQsIHdoaWNoIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZlRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgIGlmICh3aGljaCA9PT0gOCAmJiAvLiooXFwvKSQvLnRlc3QodGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC52YWx1ZS5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnNsaWNlKDAsIDUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aGljaCAhPT0gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMS05XVxcL3xbMi05XSkkL2csICcwJDEvJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkkL2csICckMS8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMC0xXSkoWzMtOV0pJC9nLCAnMCQxLyQyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkoWzAtOV17Mn0pJC9nLCAnJDEvJDInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMF0rKVxcL3xbMF0rJC9nLCAnMCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcZFxcL118XltcXC9dKiQvZywgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBWYWxpZGF0b3JzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgY3JlZGl0IGNhcmQgbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXHJcbiAgICAgKiBAcGFyYW0gZmllbGRcclxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmNhcmQuaXNWYWxpZChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHZhbCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBleHBpcmF0aW9uIGRhdGVcclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyeSA9IHZhbC5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIC9eKDBbMS05XXwxWzAtMl0pXFwvKFswLTldezJ9KSQvLnRlc3QodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgIWNyZWRpdGNhcmRzLmV4cGlyYXRpb24uaXNQYXN0KGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ubW9udGgucGFyc2UoZXhwaXJ5WzBdKSwgY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi55ZWFyLnBhcnNlKGV4cGlyeVsxXSwgdHJ1ZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBuYW1lIG9uIGNhcmRcclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBzZXROYW1lT25DYXJkVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICEhdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgY3Z2XHJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXHJcbiAgICAgKiBAcGFyYW0gZmllbGRcclxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcclxuICAgICAqIEBwYXJhbSB7YW55fSBjYXJkVHlwZSBUaGUgY3JlZGl0IGNhcmQgbnVtYmVyIHR5cGVcclxuICAgICAqL1xyXG4gICAgc2V0Q3Z2VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSwgY2FyZFR5cGUpID0+IHtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZW9mIGNhcmRUeXBlID09PSAnZnVuY3Rpb24nID8gY2FyZFR5cGUoKSA6IGNhcmRUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgY3JlZGl0Y2FyZHMuY3ZjLmlzVmFsaWQodmFsLCB0eXBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XHJcblxyXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcclxuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xyXG5cclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcclxuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJscykge1xyXG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxzLmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XHJcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgbm9Db21wYXJlTWVzc2FnZSwgdXJscyB9KSB7XHJcbiAgICBsZXQgY29tcGFyZUNvdW50ZXIgPSBbXTtcclxuXHJcbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjb21wYXJlUmVzZXQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgY29tcGFyZUNvdW50ZXIgPSAkY2hlY2tlZC5sZW5ndGggPyAkY2hlY2tlZC5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiBlbGVtZW50LnZhbHVlKS5nZXQoKSA6IFtdO1xyXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjb21wYXJlTGluaywgdXJscyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjbGlja2VkQ29tcGFyZUxpbmssIHVybHMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tlZElucHV0ID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbChub0NvbXBhcmVNZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsIm5vZCIsIldpc2hsaXN0IiwidmFsaWRhdGlvbiIsInN0YXRlQ291bnRyeSIsImNsYXNzaWZ5Rm9ybSIsIlZhbGlkYXRvcnMiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsImNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImNyZWRpdENhcmRUeXBlIiwic3RvcmVJbnN0cnVtZW50IiwiQ0NWYWxpZGF0b3JzIiwiRm9ybWF0dGVycyIsIkNDRm9ybWF0dGVycyIsInNob3dBbGVydE1vZGFsIiwiY29tcGFyZVByb2R1Y3RzIiwiQWNjb3VudCIsImNvbnRleHQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsIiRzdGF0ZSIsIiQiLCIkYm9keSIsIm9uUmVhZHkiLCIkZWRpdEFjY291bnRGb3JtIiwiJGFkZHJlc3NGb3JtIiwiJGluYm94Rm9ybSIsIiRhY2NvdW50UmV0dXJuRm9ybSIsIiRwYXltZW50TWV0aG9kRm9ybSIsIiRyZW9yZGVyRm9ybSIsIiRpbnZvaWNlQnV0dG9uIiwiJGJpZ0NvbW1lcmNlIiwid2luZG93IiwiQmlnQ29tbWVyY2UiLCJwYXNzd29yZFJlcXVpcmVtZW50cyIsImxvYWQiLCJsZW5ndGgiLCJyZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbiIsImlzIiwib24iLCJsZWZ0Iiwic2NyZWVuIiwiYXZhaWxXaWR0aCIsInRvcCIsImF2YWlsSGVpZ2h0IiwidXJsIiwiZGF0YSIsIm9wZW4iLCJpbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uIiwicmVnaXN0ZXJJbmJveFZhbGlkYXRpb24iLCJpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uIiwiaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbiIsImluaXRSZW9yZGVyRm9ybSIsImFjY291bnRQYXltZW50cyIsIndpZGdldFN0eWxlcyIsImJhc2UiLCJjb2xvciIsImN1cnNvciIsImRpc3BsYXkiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJlcnJvciIsInBsYWNlaG9sZGVyIiwidmFsaWRhdGVkIiwiY291bnRyaWVzIiwiYmluZERlbGV0ZUFkZHJlc3MiLCJiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCIsImV2ZW50IiwibWVzc2FnZSIsImN1cnJlbnRUYXJnZXQiLCJjb25maXJtIiwicHJldmVudERlZmF1bHQiLCIkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzIiwic3VibWl0Rm9ybSIsImZpbmQiLCJyZW1vdmUiLCJlYWNoIiwiaW5kZXgiLCJwcm9kdWN0Q2hlY2tib3giLCJwcm9kdWN0SWQiLCJ2YWwiLCIkaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYXBwZW5kIiwic2VsZWN0SXRlbSIsInZhbGlkYXRpb25Nb2RlbCIsInN0YXRlU2VsZWN0b3IiLCIkc3RhdGVFbGVtZW50IiwiYWRkcmVzc1ZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsImFkZCIsIiRsYXN0IiwiZXJyIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJmaWVsZF9ub3RfYmxhbmsiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZXJyb3JNZXNzYWdlIiwiZm9ybVN1Ym1pdCIsImkiLCJlbGUiLCJwYXJzZUludCIsImF0dHIiLCJmaXJzdE5hbWVMYWJlbCIsImxhc3ROYW1lTGFiZWwiLCJjb21wYW55TGFiZWwiLCJwaG9uZUxhYmVsIiwiYWRkcmVzczFMYWJlbCIsImFkZHJlc3MyTGFiZWwiLCJjaXR5TGFiZWwiLCJjb3VudHJ5TGFiZWwiLCJjaG9vc2VDb3VudHJ5TGFiZWwiLCJzdGF0ZUxhYmVsIiwicG9zdGFsQ29kZUxhYmVsIiwicGF5bWVudE1ldGhvZFNlbGVjdG9yIiwicGF5bWVudE1ldGhvZFZhbGlkYXRvciIsImNhcmRUeXBlIiwidGFyZ2V0Iiwic2libGluZ3MiLCJjc3MiLCJzZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbiIsImNyZWRpdENhcmROdW1iZXIiLCJzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbiIsImV4cGlyYXRpb24iLCJzZXROYW1lT25DYXJkVmFsaWRhdGlvbiIsIm5hbWVPbkNhcmQiLCJzZXRDdnZWYWxpZGF0aW9uIiwiY3Z2Iiwic2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdCIsInNldEV4cGlyYXRpb25Gb3JtYXQiLCJzZXJpYWxpemVBcnJheSIsIm9iaiIsIml0ZW0iLCJyZWZPYmoiLCJjb3VudHJ5Iiwic3RhdGUiLCJzdGF0ZXMiLCJjb3VudHJ5X2NvZGUiLCJjb2RlIiwic3RhdGVfb3JfcHJvdmluY2VfY29kZSIsImRlZmF1bHRfaW5zdHJ1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsInBheW1lbnRNZXRob2RzVXJsIiwiZ2VuZXJpY19lcnJvciIsImZvcm1FZGl0U2VsZWN0b3IiLCJlZGl0VmFsaWRhdG9yIiwiZGVsYXkiLCJlbWFpbFNlbGVjdG9yIiwiJGVtYWlsRWxlbWVudCIsInBhc3N3b3JkU2VsZWN0b3IiLCIkcGFzc3dvcmRFbGVtZW50IiwicGFzc3dvcmQyU2VsZWN0b3IiLCIkcGFzc3dvcmQyRWxlbWVudCIsImN1cnJlbnRQYXNzd29yZFNlbGVjdG9yIiwiJGN1cnJlbnRQYXNzd29yZCIsInNldEVtYWlsVmFsaWRhdGlvbiIsInZhbGlkX2VtYWlsIiwiZW50ZXJQYXNzd29yZCIsInBhc3N3b3JkIiwibWF0Y2hQYXNzd29yZCIsInBhc3N3b3JkX21hdGNoIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwicmVzdWx0IiwiY3VycmVudFBhc3N3b3JkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRUaW1lb3V0IiwiZWFybGllc3RFcnJvciIsInByZXYiLCJmb2N1cyIsImluYm94VmFsaWRhdG9yIiwiTnVtYmVyIiwiZW50ZXJPcmRlck51bSIsImVudGVyU3ViamVjdCIsImVudGVyTWVzc2FnZSIsImNyZWRpdGNhcmRzIiwib21pdE51bGxTdHJpbmciLCJrZXkiLCJjYXJkIiwicGFyc2UiLCJkb25lIiwiZmFpbCIsInBheW1lbnRzVXJsIiwic2hvcHBlcklkIiwic3RvcmVIYXNoIiwidmF1bHRUb2tlbiIsInByb3ZpZGVyX2lkIiwiY3VycmVuY3lfY29kZSIsImNyZWRpdF9jYXJkX251bWJlciIsIm5hbWVfb25fY2FyZCIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJjaXR5IiwicG9zdGFsX2NvZGUiLCJjb21wYW55IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmUiLCJleHBpcnkiLCJzcGxpdCIsImFqYXgiLCJkYXRhVHlwZSIsIm1ldGhvZCIsImNhY2hlIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJBY2NlcHQiLCJKU09OIiwic3RyaW5naWZ5IiwiaW5zdHJ1bWVudCIsImNhcmRob2xkZXJfbmFtZSIsIm51bWJlciIsImV4cGlyeV9tb250aCIsIm1vbnRoIiwiZXhwaXJ5X3llYXIiLCJ5ZWFyIiwidmVyaWZpY2F0aW9uX3ZhbHVlIiwiYmlsbGluZ19hZGRyZXNzIiwicmVmVGFyZ2V0IiwiZm9ybWF0Iiwid2hpY2giLCJ0ZXN0Iiwic2xpY2UiLCJyZXBsYWNlIiwidmFsaWRhdG9yIiwiaXNWYWxpZCIsImlzUGFzdCIsImN2YyIsImRlY3JlbWVudENvdW50ZXIiLCJjb3VudGVyIiwiaW5kZXhPZiIsInNwbGljZSIsImluY3JlbWVudENvdW50ZXIiLCJwdXNoIiwidXBkYXRlQ291bnRlck5hdiIsIiRsaW5rIiwidXJscyIsImFkZENsYXNzIiwiY29tcGFyZSIsImpvaW4iLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJub0NvbXBhcmVNZXNzYWdlIiwiY29tcGFyZUNvdW50ZXIiLCIkY29tcGFyZUxpbmsiLCIkY2hlY2tlZCIsIm1hcCIsImVsZW1lbnQiLCJnZXQiLCJ0cmlnZ2VySGFuZGxlciIsInByb2R1Y3QiLCIkY2xpY2tlZENvbXBhcmVMaW5rIiwiY2hlY2tlZCIsIiRjbGlja2VkQ2hlY2tlZElucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==
