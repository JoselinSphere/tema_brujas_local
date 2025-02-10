"use strict";
(self["webpackChunkStyle"] = self["webpackChunkStyle"] || []).push([["assets_js_theme_gift-certificate_js"],{

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

/***/ }),

/***/ "./assets/js/theme/gift-certificate.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/gift-certificate.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GiftCertificate; }
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var GiftCertificate = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(GiftCertificate, _PageManager);

  function GiftCertificate(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    var $certBalanceForm = $('#gift-certificate-balance');
    var purchaseModel = {
      recipientName: function recipientName(val) {
        return val.length;
      },
      recipientEmail: function recipientEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
      },
      senderName: function senderName(val) {
        return val.length;
      },
      senderEmail: function senderEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
      },
      customAmount: function customAmount(value, min, max) {
        return value && value >= min && value <= max;
      },
      setAmount: function setAmount(value, options) {
        var found = false;
        options.forEach(function (option) {
          if (option === value) {
            found = true;
            return false;
          }
        });
        return found;
      }
    };
    var $purchaseForm = $('#gift-certificate-form');
    var $customAmounts = $purchaseForm.find('input[name="certificate_amount"]');
    var purchaseValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: '#gift-certificate-form input[type="submit"]',
      delay: 300,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });

    if ($customAmounts.length) {
      var $element = $purchaseForm.find('input[name="certificate_amount"]');
      var min = $element.data('min');
      var minFormatted = $element.data('minFormatted');
      var max = $element.data('max');
      var maxFormatted = $element.data('maxFormatted');

      var insertFormattedAmountsIntoErrorMessage = function insertFormattedAmountsIntoErrorMessage(message) {
        for (var _len = arguments.length, amountRange = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          amountRange[_key - 1] = arguments[_key];
        }

        var amountPlaceholders = ['[MIN]', '[MAX]'];
        var updatedErrorText = message;
        amountPlaceholders.forEach(function (placeholder, i) {
          updatedErrorText = updatedErrorText.includes(placeholder) ? updatedErrorText.replace(placeholder, amountRange[i]) : updatedErrorText;
        });
        return updatedErrorText;
      };

      purchaseValidator.add({
        selector: '#gift-certificate-form input[name="certificate_amount"]',
        validate: function validate(cb, val) {
          var numberVal = Number(val);

          if (!numberVal) {
            cb(false);
          }

          cb(numberVal >= min && numberVal <= max);
        },
        errorMessage: insertFormattedAmountsIntoErrorMessage(_this.validationDictionary.certificate_amount_range, minFormatted, maxFormatted)
      });
    }

    purchaseValidator.add([{
      selector: '#gift-certificate-form input[name="to_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientName(val);
        cb(result);
      },
      errorMessage: _this.context.toName
    }, {
      selector: '#gift-certificate-form input[name="to_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientEmail(val);
        cb(result);
      },
      errorMessage: _this.context.toEmail
    }, {
      selector: '#gift-certificate-form input[name="from_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderName(val);
        cb(result);
      },
      errorMessage: _this.context.fromName
    }, {
      selector: '#gift-certificate-form input[name="from_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderEmail(val);
        cb(result);
      },
      errorMessage: _this.context.fromEmail
    }, {
      selector: '#gift-certificate-form input[name="certificate_theme"]:first-of-type',
      triggeredBy: '#gift-certificate-form input[name="certificate_theme"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="certificate_theme"]:checked').val();
        cb(typeof val === 'string');
      },
      errorMessage: _this.context.certTheme
    }, {
      selector: '#gift-certificate-form input[name="agree"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }, {
      selector: '#gift-certificate-form input[name="agree2"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree2"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }]);

    if ($certBalanceForm.length) {
      var balanceVal = _this.checkCertBalanceValidator($certBalanceForm);

      $certBalanceForm.on('submit', function () {
        balanceVal.performCheck();

        if (!balanceVal.areAll('valid')) {
          return false;
        }
      });
    }

    $purchaseForm.on('submit', function (event) {
      purchaseValidator.performCheck();

      if (!purchaseValidator.areAll('valid')) {
        return event.preventDefault();
      }
    });
    $('#gift-certificate-preview').click(function (event) {
      event.preventDefault();
      purchaseValidator.performCheck();

      if (!purchaseValidator.areAll('valid')) {
        return;
      }

      var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
      var previewUrl = $(event.currentTarget).data('previewUrl') + "&" + $purchaseForm.serialize();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.api.getPage(previewUrl, {}, function (err, content) {
        if (err) {
          return modal.updateContent(_this.context.previewError);
        }

        modal.updateContent(content, {
          wrap: true
        });
      });
    });
    return _this;
  }

  var _proto = GiftCertificate.prototype;

  _proto.checkCertBalanceValidator = function checkCertBalanceValidator($balanceForm) {
    var balanceValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $balanceForm.find('input[type="submit"]'),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    balanceValidator.add({
      selector: $balanceForm.find('input[name="giftcertificatecode"]'),
      validate: function validate(cb, val) {
        cb((0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__["default"])(val));
      },
      errorMessage: this.validationDictionary.invalid_gift_certificate
    });
    return balanceValidator;
  };

  return GiftCertificate;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9naWZ0LWNlcnRpZmljYXRlX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBZSxvQ0FBVUEsSUFBVixFQUFnQjtBQUMzQixNQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEIsSUFBNEJBLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixDQUFoRCxFQUFtRDtBQUMvQyxXQUFPLEtBQVA7QUFDSCxHQUgwQixDQUszQjs7O0FBQ0EsU0FBTyxJQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0FDUEQsSUFBTUMsWUFBWSxHQUFHLGNBQXJCOztBQUNBLElBQU1DLCtCQUErQixHQUFHLFNBQWxDQSwrQkFBa0MsQ0FBQ0MsVUFBRDtBQUFBLFNBQWdCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFQLENBQVlGLFVBQVUsQ0FBQ0YsWUFBRCxDQUF0QixFQUFzQ0QsTUFBeEQ7QUFBQSxDQUF4Qzs7QUFDQSxJQUFNTSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQTJCO0FBQ3RELE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxVQUFtQlAsTUFBdkMsRUFBK0NPLENBQUMsRUFBaEQsRUFBb0Q7QUFDaEQsUUFBTUosVUFBVSxHQUFHSyxJQUFJLENBQUNDLEtBQUwsQ0FBOEJGLENBQTlCLDRCQUE4QkEsQ0FBOUIseUJBQThCQSxDQUE5QixFQUFuQjs7QUFDQSxRQUFJTCwrQkFBK0IsQ0FBQ0MsVUFBRCxDQUFuQyxFQUFpRDtBQUM3QyxhQUFPQSxVQUFQO0FBQ0g7QUFDSjtBQUNKLENBUEQ7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1PLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEIsQ0FBQ0MsT0FBRCxFQUFhO0FBQUEsTUFDNUNDLHdCQUQ0QyxHQUNvREQsT0FEcEQsQ0FDNUNDLHdCQUQ0QztBQUFBLE1BQ2xCQyxnQ0FEa0IsR0FDb0RGLE9BRHBE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S2pCdUMsTUFBQUEsWUFBWSxFQUFFLEtBQUs1QyxvQkFBTCxDQUEwQjZFO0FBTHZCLEtBQXJCO0FBUUEsV0FBT0QsZ0JBQVA7QUFDSDs7O0VBM013Q3BGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU3R5bGUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yLmpzIiwid2VicGFjazovL1N0eWxlLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vU3R5bGUvLi9hc3NldHMvanMvdGhlbWUvZ2lmdC1jZXJ0aWZpY2F0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2VydCkge1xyXG4gICAgaWYgKHR5cGVvZiBjZXJ0ICE9PSAnc3RyaW5nJyB8fCBjZXJ0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgYW55IGN1c3RvbSBnaWZ0IGNlcnRpZmljYXRlIHZhbGlkYXRpb24gbG9naWMgaGVyZVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XHJcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcclxuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcclxuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxyXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcclxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xyXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XHJcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcclxuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xyXG5cclxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xyXG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30pO1xyXG59O1xyXG4iLCJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XHJcbmltcG9ydCBjaGVja0lzR2lmdENlcnRWYWxpZCBmcm9tICcuL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvcic7XHJcbmltcG9ydCBmb3JtTW9kZWwgZnJvbSAnLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcclxuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcclxuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpZnRDZXJ0aWZpY2F0ZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xyXG5cclxuICAgICAgICBjb25zdCAkY2VydEJhbGFuY2VGb3JtID0gJCgnI2dpZnQtY2VydGlmaWNhdGUtYmFsYW5jZScpO1xyXG5cclxuICAgICAgICBjb25zdCBwdXJjaGFzZU1vZGVsID0ge1xyXG4gICAgICAgICAgICByZWNpcGllbnROYW1lKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlY2lwaWVudEVtYWlsKC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtTW9kZWwuZW1haWwoLi4uYXJncyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlbmRlck5hbWUodmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmxlbmd0aDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VuZGVyRW1haWwoLi4uYXJncykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1Nb2RlbC5lbWFpbCguLi5hcmdzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3VzdG9tQW1vdW50KHZhbHVlLCBtaW4sIG1heCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlID49IG1pbiAmJiB2YWx1ZSA8PSBtYXg7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldEFtb3VudCh2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgJHB1cmNoYXNlRm9ybSA9ICQoJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcclxuICAgICAgICBjb25zdCAkY3VzdG9tQW1vdW50cyA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX2Ftb3VudFwiXScpO1xyXG4gICAgICAgIGNvbnN0IHB1cmNoYXNlVmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcclxuICAgICAgICAgICAgZGVsYXk6IDMwMCxcclxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoJGN1c3RvbUFtb3VudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlbGVtZW50ID0gJHB1cmNoYXNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfYW1vdW50XCJdJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbiA9ICRlbGVtZW50LmRhdGEoJ21pbicpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW5Gb3JtYXR0ZWQgPSAkZWxlbWVudC5kYXRhKCdtaW5Gb3JtYXR0ZWQnKTtcclxuICAgICAgICAgICAgY29uc3QgbWF4ID0gJGVsZW1lbnQuZGF0YSgnbWF4Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heEZvcm1hdHRlZCA9ICRlbGVtZW50LmRhdGEoJ21heEZvcm1hdHRlZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBpbnNlcnRGb3JtYXR0ZWRBbW91bnRzSW50b0Vycm9yTWVzc2FnZSA9IChtZXNzYWdlLCAuLi5hbW91bnRSYW5nZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYW1vdW50UGxhY2Vob2xkZXJzID0gWydbTUlOXScsICdbTUFYXSddO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVwZGF0ZWRFcnJvclRleHQgPSBtZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgYW1vdW50UGxhY2Vob2xkZXJzLmZvckVhY2goKHBsYWNlaG9sZGVyLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZEVycm9yVGV4dCA9IHVwZGF0ZWRFcnJvclRleHQuaW5jbHVkZXMocGxhY2Vob2xkZXIpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZEVycm9yVGV4dC5yZXBsYWNlKHBsYWNlaG9sZGVyLCBhbW91bnRSYW5nZVtpXSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkRXJyb3JUZXh0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlZEVycm9yVGV4dDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHB1cmNoYXNlVmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX2Ftb3VudFwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBudW1iZXJWYWwgPSBOdW1iZXIodmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFudW1iZXJWYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2IoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IobnVtYmVyVmFsID49IG1pbiAmJiBudW1iZXJWYWwgPD0gbWF4KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGluc2VydEZvcm1hdHRlZEFtb3VudHNJbnRvRXJyb3JNZXNzYWdlKHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkuY2VydGlmaWNhdGVfYW1vdW50X3JhbmdlLCBtaW5Gb3JtYXR0ZWQsIG1heEZvcm1hdHRlZCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVyY2hhc2VWYWxpZGF0b3IuYWRkKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJ0b19uYW1lXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHB1cmNoYXNlTW9kZWwucmVjaXBpZW50TmFtZSh2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnRvTmFtZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJ0b19lbWFpbFwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwdXJjaGFzZU1vZGVsLnJlY2lwaWVudEVtYWlsKHZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQudG9FbWFpbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJmcm9tX25hbWVcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHVyY2hhc2VNb2RlbC5zZW5kZXJOYW1lKHZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZnJvbU5hbWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiZnJvbV9lbWFpbFwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwdXJjaGFzZU1vZGVsLnNlbmRlckVtYWlsKHZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZnJvbUVtYWlsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX3RoZW1lXCJdOmZpcnN0LW9mLXR5cGUnLFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcmVkQnk6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV90aGVtZVwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gJHB1cmNoYXNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfdGhlbWVcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYih0eXBlb2YgKHZhbCkgPT09ICdzdHJpbmcnKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5jZXJ0VGhlbWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiYWdyZWVcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFncmVlXCJdJykuZ2V0KDApLmNoZWNrZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuYWdyZWVUb1Rlcm1zLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImFncmVlMlwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gJHB1cmNoYXNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWdyZWUyXCJdJykuZ2V0KDApLmNoZWNrZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuYWdyZWVUb1Rlcm1zLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBpZiAoJGNlcnRCYWxhbmNlRm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgYmFsYW5jZVZhbCA9IHRoaXMuY2hlY2tDZXJ0QmFsYW5jZVZhbGlkYXRvcigkY2VydEJhbGFuY2VGb3JtKTtcclxuXHJcbiAgICAgICAgICAgICRjZXJ0QmFsYW5jZUZvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJhbGFuY2VWYWwucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFiYWxhbmNlVmFsLmFyZUFsbCgndmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkcHVyY2hhc2VGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHB1cmNoYXNlVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwdXJjaGFzZVZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNnaWZ0LWNlcnRpZmljYXRlLXByZXZpZXcnKS5jbGljayhldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBwdXJjaGFzZVZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcHVyY2hhc2VWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpZXdVcmwgPSBgJHskKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3ByZXZpZXdVcmwnKX0mJHskcHVyY2hhc2VGb3JtLnNlcmlhbGl6ZSgpfWA7XHJcblxyXG4gICAgICAgICAgICBtb2RhbC5vcGVuKCk7XHJcblxyXG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShwcmV2aWV3VXJsLCB7fSwgKGVyciwgY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RhbC51cGRhdGVDb250ZW50KHRoaXMuY29udGV4dC5wcmV2aWV3RXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoY29udGVudCwgeyB3cmFwOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NlcnRCYWxhbmNlVmFsaWRhdG9yKCRiYWxhbmNlRm9ybSkge1xyXG4gICAgICAgIGNvbnN0IGJhbGFuY2VWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICRiYWxhbmNlRm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYmFsYW5jZVZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJGJhbGFuY2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJnaWZ0Y2VydGlmaWNhdGVjb2RlXCJdJyksXHJcbiAgICAgICAgICAgIHZhbGlkYXRlKGNiLCB2YWwpIHtcclxuICAgICAgICAgICAgICAgIGNiKGNoZWNrSXNHaWZ0Q2VydFZhbGlkKHZhbCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkuaW52YWxpZF9naWZ0X2NlcnRpZmljYXRlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYmFsYW5jZVZhbGlkYXRvcjtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY2VydCIsImxlbmd0aCIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJpIiwiSlNPTiIsInBhcnNlIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiY29udGV4dCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwibWFwIiwia2V5Iiwic3BsaXQiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiLCJQYWdlTWFuYWdlciIsIm5vZCIsImNoZWNrSXNHaWZ0Q2VydFZhbGlkIiwiZm9ybU1vZGVsIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImFwaSIsImRlZmF1bHRNb2RhbCIsIkdpZnRDZXJ0aWZpY2F0ZSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiJGNlcnRCYWxhbmNlRm9ybSIsIiQiLCJwdXJjaGFzZU1vZGVsIiwicmVjaXBpZW50TmFtZSIsInZhbCIsInJlY2lwaWVudEVtYWlsIiwiZW1haWwiLCJzZW5kZXJOYW1lIiwic2VuZGVyRW1haWwiLCJjdXN0b21BbW91bnQiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsInNldEFtb3VudCIsIm9wdGlvbnMiLCJmb3VuZCIsImZvckVhY2giLCJvcHRpb24iLCIkcHVyY2hhc2VGb3JtIiwiJGN1c3RvbUFtb3VudHMiLCJmaW5kIiwicHVyY2hhc2VWYWxpZGF0b3IiLCJzdWJtaXQiLCJkZWxheSIsInRhcCIsIiRlbGVtZW50IiwiZGF0YSIsIm1pbkZvcm1hdHRlZCIsIm1heEZvcm1hdHRlZCIsImluc2VydEZvcm1hdHRlZEFtb3VudHNJbnRvRXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImFtb3VudFJhbmdlIiwiYW1vdW50UGxhY2Vob2xkZXJzIiwidXBkYXRlZEVycm9yVGV4dCIsInBsYWNlaG9sZGVyIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwibnVtYmVyVmFsIiwiTnVtYmVyIiwiZXJyb3JNZXNzYWdlIiwiY2VydGlmaWNhdGVfYW1vdW50X3JhbmdlIiwicmVzdWx0IiwidG9OYW1lIiwidG9FbWFpbCIsImZyb21OYW1lIiwiZnJvbUVtYWlsIiwidHJpZ2dlcmVkQnkiLCJjZXJ0VGhlbWUiLCJnZXQiLCJjaGVja2VkIiwiYWdyZWVUb1Rlcm1zIiwiYmFsYW5jZVZhbCIsImNoZWNrQ2VydEJhbGFuY2VWYWxpZGF0b3IiLCJvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbGljayIsIm1vZGFsIiwicHJldmlld1VybCIsImN1cnJlbnRUYXJnZXQiLCJzZXJpYWxpemUiLCJvcGVuIiwiZ2V0UGFnZSIsImVyciIsImNvbnRlbnQiLCJ1cGRhdGVDb250ZW50IiwicHJldmlld0Vycm9yIiwid3JhcCIsIiRiYWxhbmNlRm9ybSIsImJhbGFuY2VWYWxpZGF0b3IiLCJpbnZhbGlkX2dpZnRfY2VydGlmaWNhdGUiXSwic291cmNlUm9vdCI6IiJ9
