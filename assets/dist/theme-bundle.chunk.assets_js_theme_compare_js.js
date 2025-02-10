"use strict";
(self["webpackChunkStyle"] = self["webpackChunkStyle"] || []).push([["assets_js_theme_compare_js"],{

/***/ "./assets/js/theme/compare.js":
/*!************************************!*\
  !*** ./assets/js/theme/compare.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Compare; }
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Compare = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Compare, _PageManager);

  function Compare() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Compare.prototype;

  _proto.onReady = function onReady() {
    var _this = this;

    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    var message = this.context.compareRemoveMessage;
    $('body').on('click', '[data-comparison-remove]', function (event) {
      if (_this.context.comparisons.length <= 2) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_1__.showAlertModal)(message);
        event.preventDefault();
      }
    });
  };

  return Compare;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21wYXJlX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFcUJHOzs7Ozs7Ozs7U0FDakJDLFVBQUEsbUJBQVU7QUFBQTs7QUFDTkYsSUFBQUEsb0VBQWUsQ0FBQyxLQUFLRyxPQUFOLENBQWY7QUFFQSxRQUFNQyxPQUFPLEdBQUcsS0FBS0QsT0FBTCxDQUFhRSxvQkFBN0I7QUFFQUMsSUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVQyxFQUFWLENBQWEsT0FBYixFQUFzQiwwQkFBdEIsRUFBa0QsVUFBQUMsS0FBSyxFQUFJO0FBQ3ZELFVBQUksS0FBSSxDQUFDTCxPQUFMLENBQWFNLFdBQWIsQ0FBeUJDLE1BQXpCLElBQW1DLENBQXZDLEVBQTBDO0FBQ3RDWCxRQUFBQSw2REFBYyxDQUFDSyxPQUFELENBQWQ7QUFDQUksUUFBQUEsS0FBSyxDQUFDRyxjQUFOO0FBQ0g7QUFDSixLQUxEO0FBTUg7OztFQVpnQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQzs7QUFFQSxTQUFTYyxnQkFBVCxDQUEwQkMsT0FBMUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ3JDLE1BQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxPQUFSLENBQWdCRixJQUFoQixDQUFkOztBQUVBLE1BQUlDLEtBQUssR0FBRyxDQUFDLENBQWIsRUFBZ0I7QUFDWkYsSUFBQUEsT0FBTyxDQUFDSSxNQUFSLENBQWVGLEtBQWYsRUFBc0IsQ0FBdEI7QUFDSDtBQUNKOztBQUVELFNBQVNHLGdCQUFULENBQTBCTCxPQUExQixFQUFtQ0MsSUFBbkMsRUFBeUM7QUFDckNELEVBQUFBLE9BQU8sQ0FBQ00sSUFBUixDQUFhTCxJQUFiO0FBQ0g7O0FBRUQsU0FBU00sZ0JBQVQsQ0FBMEJQLE9BQTFCLEVBQW1DUSxLQUFuQyxFQUEwQ0MsSUFBMUMsRUFBZ0Q7QUFDNUMsTUFBSVQsT0FBTyxDQUFDSCxNQUFSLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3RCLFFBQUksQ0FBQ1csS0FBSyxDQUFDRSxFQUFOLENBQVMsU0FBVCxDQUFMLEVBQTBCO0FBQ3RCRixNQUFBQSxLQUFLLENBQUNHLFFBQU4sQ0FBZSxNQUFmO0FBQ0g7O0FBQ0RILElBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXLE1BQVgsRUFBc0JILElBQUksQ0FBQ0ksT0FBM0IsU0FBc0NiLE9BQU8sQ0FBQ2MsSUFBUixDQUFhLEdBQWIsQ0FBdEM7QUFDQU4sSUFBQUEsS0FBSyxDQUFDTyxJQUFOLENBQVcsZ0JBQVgsRUFBNkJDLElBQTdCLENBQWtDaEIsT0FBTyxDQUFDSCxNQUExQztBQUNILEdBTkQsTUFNTztBQUNIVyxJQUFBQSxLQUFLLENBQUNTLFdBQU4sQ0FBa0IsTUFBbEI7QUFDSDtBQUNKOztBQUVELDZCQUFlLG9DQUFVLE1BQTRCO0FBQUEsTUFBMUJDLGdCQUEwQixRQUExQkEsZ0JBQTBCO0FBQUEsTUFBUlQsSUFBUSxRQUFSQSxJQUFRO0FBQ2pELE1BQUlVLGNBQWMsR0FBRyxFQUFyQjtBQUVBLE1BQU1DLFlBQVksR0FBRzNCLENBQUMsQ0FBQyxxQkFBRCxDQUF0QjtBQUVBQSxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVDLEVBQVYsQ0FBYSxjQUFiLEVBQTZCLFlBQU07QUFDL0IsUUFBTTJCLFFBQVEsR0FBRzVCLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXNCLElBQVYsQ0FBZSxvQ0FBZixDQUFqQjtBQUVBSSxJQUFBQSxjQUFjLEdBQUdFLFFBQVEsQ0FBQ3hCLE1BQVQsR0FBa0J3QixRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDcEIsS0FBRCxFQUFRcUIsT0FBUjtBQUFBLGFBQW9CQSxPQUFPLENBQUNDLEtBQTVCO0FBQUEsS0FBYixFQUFnREMsR0FBaEQsRUFBbEIsR0FBMEUsRUFBM0Y7QUFDQWxCLElBQUFBLGdCQUFnQixDQUFDWSxjQUFELEVBQWlCQyxZQUFqQixFQUErQlgsSUFBL0IsQ0FBaEI7QUFDSCxHQUxEO0FBT0FoQixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVpQyxjQUFWLENBQXlCLGNBQXpCO0FBRUFqQyxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLG1CQUF0QixFQUEyQyxVQUFBQyxLQUFLLEVBQUk7QUFDaEQsUUFBTWdDLE9BQU8sR0FBR2hDLEtBQUssQ0FBQ2lDLGFBQU4sQ0FBb0JKLEtBQXBDO0FBQ0EsUUFBTUssbUJBQW1CLEdBQUdwQyxDQUFDLENBQUMscUJBQUQsQ0FBN0I7O0FBRUEsUUFBSUUsS0FBSyxDQUFDaUMsYUFBTixDQUFvQkUsT0FBeEIsRUFBaUM7QUFDN0J6QixNQUFBQSxnQkFBZ0IsQ0FBQ2MsY0FBRCxFQUFpQlEsT0FBakIsQ0FBaEI7QUFDSCxLQUZELE1BRU87QUFDSDVCLE1BQUFBLGdCQUFnQixDQUFDb0IsY0FBRCxFQUFpQlEsT0FBakIsQ0FBaEI7QUFDSDs7QUFFRHBCLElBQUFBLGdCQUFnQixDQUFDWSxjQUFELEVBQWlCVSxtQkFBakIsRUFBc0NwQixJQUF0QyxDQUFoQjtBQUNILEdBWEQ7QUFhQWhCLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUMsRUFBVixDQUFhLE9BQWIsRUFBc0IscUJBQXRCLEVBQTZDLFlBQU07QUFDL0MsUUFBTXFDLG9CQUFvQixHQUFHdEMsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVc0IsSUFBVixDQUFlLG9DQUFmLENBQTdCOztBQUVBLFFBQUlnQixvQkFBb0IsQ0FBQ2xDLE1BQXJCLElBQStCLENBQW5DLEVBQXNDO0FBQ2xDWCxNQUFBQSxzREFBYyxDQUFDZ0MsZ0JBQUQsQ0FBZDtBQUNBLGFBQU8sS0FBUDtBQUNIO0FBQ0osR0FQRDtBQVFIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU3R5bGUvLi9hc3NldHMvanMvdGhlbWUvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly9TdHlsZS8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcclxuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBhcmUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xyXG5cclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5jb250ZXh0LmNvbXBhcmVSZW1vdmVNZXNzYWdlO1xyXG5cclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmlzb24tcmVtb3ZlXScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5jb21wYXJpc29ucy5sZW5ndGggPD0gMikge1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcclxuXHJcbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xyXG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxzKSB7XHJcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybHMuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcclxuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyBub0NvbXBhcmVNZXNzYWdlLCB1cmxzIH0pIHtcclxuICAgIGxldCBjb21wYXJlQ291bnRlciA9IFtdO1xyXG5cclxuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NvbXBhcmVSZXNldCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBjb21wYXJlQ291bnRlciA9ICRjaGVja2VkLmxlbmd0aCA/ICRjaGVja2VkLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IGVsZW1lbnQudmFsdWUpLmdldCgpIDogW107XHJcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNvbXBhcmVMaW5rLCB1cmxzKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJscyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKG5vQ29tcGFyZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwic2hvd0FsZXJ0TW9kYWwiLCJjb21wYXJlUHJvZHVjdHMiLCJDb21wYXJlIiwib25SZWFkeSIsImNvbnRleHQiLCJtZXNzYWdlIiwiY29tcGFyZVJlbW92ZU1lc3NhZ2UiLCIkIiwib24iLCJldmVudCIsImNvbXBhcmlzb25zIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwicHVzaCIsInVwZGF0ZUNvdW50ZXJOYXYiLCIkbGluayIsInVybHMiLCJpcyIsImFkZENsYXNzIiwiYXR0ciIsImNvbXBhcmUiLCJqb2luIiwiZmluZCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsIm5vQ29tcGFyZU1lc3NhZ2UiLCJjb21wYXJlQ291bnRlciIsIiRjb21wYXJlTGluayIsIiRjaGVja2VkIiwibWFwIiwiZWxlbWVudCIsInZhbHVlIiwiZ2V0IiwidHJpZ2dlckhhbmRsZXIiLCJwcm9kdWN0IiwiY3VycmVudFRhcmdldCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9
