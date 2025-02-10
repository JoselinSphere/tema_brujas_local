"use strict";
(self["webpackChunkStyle"] = self["webpackChunkStyle"] || []).push([["assets_js_theme_search_js"],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _set_product_option_with_graphql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./set-product-option-with-graphql */ "./assets/js/theme/set-product-option-with-graphql.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var leftArrowKey = 37;
var rightArrowKey = 39;

var Search = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Search, _CatalogPage);

  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Search.prototype;

  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;

    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };

    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }

    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }

    return nodeData;
  };

  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }

    this.$productListingContainer.removeClass('u-hidden');
    this.$facetedSearchContainer.removeClass('u-hidden');
    this.$contentResultsContainer.addClass('u-hidden');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-product-results-toggle]'));

    if (!navigate) {
      return;
    }

    var searchData = $('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };

  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }

    this.$contentResultsContainer.removeClass('u-hidden');
    this.$productListingContainer.addClass('u-hidden');
    this.$facetedSearchContainer.addClass('u-hidden');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-content-results-toggle]'));

    if (!navigate) {
      return;
    }

    var searchData = $('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };

  _proto.activateTab = function activateTab($tabToActivate) {
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    $tabsCollection.each(function (idx, tab) {
      var $tab = $(tab);

      if ($tab.is($tabToActivate)) {
        $tab.removeAttr('tabindex');
        $tab.attr('aria-selected', true);
        return;
      }

      $tab.attr('tabindex', '-1');
      $tab.attr('aria-selected', false);
    });
  };

  _proto.onTabChangeWithArrows = function onTabChangeWithArrows(event) {
    var eventKey = event.which;
    var isLeftOrRightArrowKeydown = eventKey === leftArrowKey || eventKey === rightArrowKey;
    if (!isLeftOrRightArrowKeydown) return;
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    var isActiveElementNotTab = $tabsCollection.index($(document.activeElement)) === -1;
    if (isActiveElementNotTab) return;
    var $activeTab = $("#" + document.activeElement.id);
    var activeTabIdx = $tabsCollection.index($activeTab);
    var lastTabIdx = $tabsCollection.length - 1;
    var nextTabIdx;

    switch (eventKey) {
      case leftArrowKey:
        nextTabIdx = activeTabIdx === 0 ? lastTabIdx : activeTabIdx - 1;
        break;

      case rightArrowKey:
        nextTabIdx = activeTabIdx === lastTabIdx ? 0 : activeTabIdx + 1;
        break;

      default:
        break;
    }

    $($tabsCollection.get(nextTabIdx)).focus().trigger('click');
  };

  _proto.onReady = function onReady() {
    var _this2 = this;

    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context);
    this.arrangeFocusOnSortBy();
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content'); // Init faceted search

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    } // Init collapsibles


    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.showContent();
    });
    $('[data-search-page-tabs]').on('keyup', this.onTabChangeWithArrows);

    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }

    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();

      if (!validator.check()) {
        return event.preventDefault();
      }

      $searchForm.find('input[name="category\[\]"]').remove();

      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
    var $searchResultsMessage = $("<p\n            class=\"aria-description--hidden\"\n            tabindex=\"-1\"\n            role=\"status\"\n            aria-live=\"polite\"\n            >" + this.context.searchResultsCount + "</p>").prependTo('body');
    setTimeout(function () {
      return $searchResultsMessage.focus();
    }, 100);
  };

  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;

    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };

  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;

    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;

    // eslint-disable-next-line object-curly-newline
    var _this$context = this.context,
        onMinPriceError = _this$context.onMinPriceError,
        onMaxPriceError = _this$context.onMaxPriceError,
        minPriceNotEntered = _this$context.minPriceNotEntered,
        maxPriceNotEntered = _this$context.maxPriceNotEntered,
        onInvalidPrice = _this$context.onInvalidPrice;
    var $productListingContainer = $('#product-listing-container');
    var $contentListingContainer = $('#search-results-content');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var $contentCount = $('#search-results-content-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);

      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);

        _this5.showContent(false);
      } else {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);

        _this5.showProducts(false);
      }

      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
      console.log(_this5.context);
      (0,_set_product_option_with_graphql__WEBPACK_IMPORTED_MODULE_11__["default"])(_this5.context);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };

  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_9__["default"])({
      submit: $form,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    return this;
  };

  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }

    return this;
  };

  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }

    return false;
  };

  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9zZWFyY2hfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1XLFlBQVksR0FBRyxFQUFyQjtBQUNBLElBQU1DLGFBQWEsR0FBRyxFQUF0Qjs7SUFFcUJDOzs7Ozs7Ozs7U0FDakJDLDhCQUFBLHFDQUE0QkMsSUFBNUIsRUFBa0M7QUFBQTs7QUFDOUIsUUFBTUMsUUFBUSxHQUFHO0FBQ2JDLE1BQUFBLElBQUksRUFBRUYsSUFBSSxDQUFDRyxJQURFO0FBRWJDLE1BQUFBLEVBQUUsRUFBRUosSUFBSSxDQUFDSyxRQUFMLENBQWNELEVBRkw7QUFHYkUsTUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFFBQUFBLFFBQVEsRUFBRVAsSUFBSSxDQUFDTztBQURaO0FBSE0sS0FBakI7O0FBUUEsUUFBSVAsSUFBSSxDQUFDTSxLQUFULEVBQWdCO0FBQ1pMLE1BQUFBLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlRSxNQUFmLEdBQXdCUixJQUFJLENBQUNNLEtBQUwsS0FBZSxNQUF2QztBQUNBTCxNQUFBQSxRQUFRLENBQUNRLFFBQVQsR0FBb0IsSUFBcEI7QUFDSDs7QUFFRCxRQUFJVCxJQUFJLENBQUNTLFFBQVQsRUFBbUI7QUFDZlIsTUFBQUEsUUFBUSxDQUFDUSxRQUFULEdBQW9CLEVBQXBCO0FBQ0FULE1BQUFBLElBQUksQ0FBQ1MsUUFBTCxDQUFjQyxPQUFkLENBQXNCLFVBQUNDLFNBQUQsRUFBZTtBQUNqQ1YsUUFBQUEsUUFBUSxDQUFDUSxRQUFULENBQWtCRyxJQUFsQixDQUF1QixLQUFJLENBQUNiLDJCQUFMLENBQWlDWSxTQUFqQyxDQUF2QjtBQUNILE9BRkQ7QUFHSDs7QUFFRCxXQUFPVixRQUFQO0FBQ0g7O1NBRURZLGVBQUEsc0JBQWFDLFFB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eWxlLy4vYXNzZXRzL2pzL3RoZW1lL3NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XHJcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcclxuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xyXG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMvdXJsLXV0aWxzJztcclxuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xyXG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcclxuaW1wb3J0ICdqc3RyZWUnO1xyXG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xyXG5pbXBvcnQgcHJvZHVjdE9wdGlvbkdyYXBocWwgZnJvbSAnLi9zZXQtcHJvZHVjdC1vcHRpb24td2l0aC1ncmFwaHFsJztcclxuXHJcbmNvbnN0IGxlZnRBcnJvd0tleSA9IDM3O1xyXG5jb25zdCByaWdodEFycm93S2V5ID0gMzk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XHJcbiAgICBmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkge1xyXG4gICAgICAgIGNvbnN0IG5vZGVEYXRhID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiBub2RlLmRhdGEsXHJcbiAgICAgICAgICAgIGlkOiBub2RlLm1ldGFkYXRhLmlkLFxyXG4gICAgICAgICAgICBzdGF0ZToge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IG5vZGUuc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKG5vZGUuc3RhdGUpIHtcclxuICAgICAgICAgICAgbm9kZURhdGEuc3RhdGUub3BlbmVkID0gbm9kZS5zdGF0ZSA9PT0gJ29wZW4nO1xyXG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4ucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShjaGlsZE5vZGUpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbm9kZURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Byb2R1Y3RzKG5hdmlnYXRlID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xyXG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xyXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKCQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykpO1xyXG5cclxuICAgICAgICBpZiAoIW5hdmlnYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaERhdGEgPSAkKCcjc2VhcmNoLXJlc3VsdHMtcHJvZHVjdC1jb3VudCBzcGFuJykuZGF0YSgpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IChzZWFyY2hEYXRhLmNvdW50ID4gMCkgPyBzZWFyY2hEYXRhLnVybCA6IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMoc2VhcmNoRGF0YS51cmwsIHtcclxuICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dDb250ZW50KG5hdmlnYXRlID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xyXG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xyXG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xyXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKCQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykpO1xyXG5cclxuICAgICAgICBpZiAoIW5hdmlnYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaERhdGEgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCBzcGFuJykuZGF0YSgpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IChzZWFyY2hEYXRhLmNvdW50ID4gMCkgPyBzZWFyY2hEYXRhLnVybCA6IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMoc2VhcmNoRGF0YS51cmwsIHtcclxuICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlVGFiKCR0YWJUb0FjdGl2YXRlKSB7XHJcbiAgICAgICAgY29uc3QgJHRhYnNDb2xsZWN0aW9uID0gJCgnW2RhdGEtc2VhcmNoLXBhZ2UtdGFic10nKS5maW5kKCdbcm9sZT1cInRhYlwiXScpO1xyXG5cclxuICAgICAgICAkdGFic0NvbGxlY3Rpb24uZWFjaCgoaWR4LCB0YWIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJHRhYiA9ICQodGFiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkdGFiLmlzKCR0YWJUb0FjdGl2YXRlKSkge1xyXG4gICAgICAgICAgICAgICAgJHRhYi5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgJHRhYi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICR0YWIuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcclxuICAgICAgICAgICAgJHRhYi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGFiQ2hhbmdlV2l0aEFycm93cyhldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50S2V5ID0gZXZlbnQud2hpY2g7XHJcbiAgICAgICAgY29uc3QgaXNMZWZ0T3JSaWdodEFycm93S2V5ZG93biA9IGV2ZW50S2V5ID09PSBsZWZ0QXJyb3dLZXlcclxuICAgICAgICAgICAgfHwgZXZlbnRLZXkgPT09IHJpZ2h0QXJyb3dLZXk7XHJcbiAgICAgICAgaWYgKCFpc0xlZnRPclJpZ2h0QXJyb3dLZXlkb3duKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0ICR0YWJzQ29sbGVjdGlvbiA9ICQoJ1tkYXRhLXNlYXJjaC1wYWdlLXRhYnNdJykuZmluZCgnW3JvbGU9XCJ0YWJcIl0nKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNBY3RpdmVFbGVtZW50Tm90VGFiID0gJHRhYnNDb2xsZWN0aW9uLmluZGV4KCQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpID09PSAtMTtcclxuICAgICAgICBpZiAoaXNBY3RpdmVFbGVtZW50Tm90VGFiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0ICRhY3RpdmVUYWIgPSAkKGAjJHtkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkfWApO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYklkeCA9ICR0YWJzQ29sbGVjdGlvbi5pbmRleCgkYWN0aXZlVGFiKTtcclxuICAgICAgICBjb25zdCBsYXN0VGFiSWR4ID0gJHRhYnNDb2xsZWN0aW9uLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIGxldCBuZXh0VGFiSWR4O1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnRLZXkpIHtcclxuICAgICAgICBjYXNlIGxlZnRBcnJvd0tleTpcclxuICAgICAgICAgICAgbmV4dFRhYklkeCA9IGFjdGl2ZVRhYklkeCA9PT0gMCA/IGxhc3RUYWJJZHggOiBhY3RpdmVUYWJJZHggLSAxO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIHJpZ2h0QXJyb3dLZXk6XHJcbiAgICAgICAgICAgIG5leHRUYWJJZHggPSBhY3RpdmVUYWJJZHggPT09IGxhc3RUYWJJZHggPyAwIDogYWN0aXZlVGFiSWR4ICsgMTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCR0YWJzQ29sbGVjdGlvbi5nZXQobmV4dFRhYklkeCkpLmZvY3VzKCkudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuYXJyYW5nZUZvY3VzT25Tb3J0QnkoKTtcclxuXHJcbiAgICAgICAgY29uc3QgJHNlYXJjaEZvcm0gPSAkKCdbZGF0YS1hZHZhbmNlZC1zZWFyY2gtZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyID0gJHNlYXJjaEZvcm0uZmluZCgnW2RhdGEtc2VhcmNoLWNhdGVnb3J5LXRyZWVdJyk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcclxuICAgICAgICBjb25zdCB0cmVlRGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCBmYWNldGVkIHNlYXJjaFxyXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xyXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLXBhZ2UtdGFic10nKS5vbigna2V5dXAnLCB0aGlzLm9uVGFiQ2hhbmdlV2l0aEFycm93cyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKCdsaS5wcm9kdWN0JykubGVuZ3RoID09PSAwIHx8IHVybC5xdWVyeS5zZWN0aW9uID09PSAnY29udGVudCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudChmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5pbml0VmFsaWRhdGlvbigkc2VhcmNoRm9ybSlcclxuICAgICAgICAgICAgLmJpbmRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtLmZpbmQoJyNzZWFyY2hfcXVlcnlfYWR2JykpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQuY2F0ZWdvcnlUcmVlLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgdHJlZURhdGEucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSA9IHRyZWVEYXRhO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjYXRlZ29yeVRyZWVDb250YWluZXIpO1xyXG5cclxuICAgICAgICAkc2VhcmNoRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5SWRzID0gJGNhdGVnb3J5VHJlZUNvbnRhaW5lci5qc3RyZWUoKS5nZXRfc2VsZWN0ZWQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdG9yLmNoZWNrKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkc2VhcmNoRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2F0ZWdvcnlcXFtcXF1cIl0nKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2F0ZWdvcnlJZCBvZiBzZWxlY3RlZENhdGVnb3J5SWRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3J5W10nLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNlYXJjaEZvcm0uYXBwZW5kKGlucHV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCAkc2VhcmNoUmVzdWx0c01lc3NhZ2UgPSAkKGA8cFxyXG4gICAgICAgICAgICBjbGFzcz1cImFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiXHJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgYXJpYS1saXZlPVwicG9saXRlXCJcclxuICAgICAgICAgICAgPiR7dGhpcy5jb250ZXh0LnNlYXJjaFJlc3VsdHNDb3VudH08L3A+YClcclxuICAgICAgICAgICAgLnByZXBlbmRUbygnYm9keScpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICRzZWFyY2hSZXN1bHRzTWVzc2FnZS5mb2N1cygpLCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRUcmVlTm9kZXMobm9kZSwgY2IpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvcmVtb3RlL3YxL2NhdGVnb3J5LXRyZWUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5SWQ6IG5vZGUuaWQsXHJcbiAgICAgICAgICAgICAgICBwcmVmaXg6ICdjYXRlZ29yeScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICd4LXhzcmYtdG9rZW4nOiB3aW5kb3cuQkNEYXRhICYmIHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA/IHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA6ICcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFJlc3VsdHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZGF0YU5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFJlc3VsdHMucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShkYXRhTm9kZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNiKGZvcm1hdHRlZFJlc3VsdHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNhdGVnb3J5VHJlZSgkY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29uc3QgdHJlZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvcmU6IHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IChub2RlLCBjYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJvb3Qgbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmlkID09PSAnIycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2IodGhpcy5jYXRlZ29yeVRyZWVEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXp5IGxvYWRlZCBjaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmVlTm9kZXMobm9kZSwgY2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aGVtZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoZWNrYm94OiB7XHJcbiAgICAgICAgICAgICAgICB0aHJlZV9zdGF0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgICAgICAgICdjaGVja2JveCcsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJGNvbnRhaW5lci5qc3RyZWUodHJlZU9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3QtY3VybHktbmV3bGluZVxyXG4gICAgICAgIGNvbnN0IHsgb25NaW5QcmljZUVycm9yLCBvbk1heFByaWNlRXJyb3IsIG1pblByaWNlTm90RW50ZXJlZCwgbWF4UHJpY2VOb3RFbnRlcmVkLCBvbkludmFsaWRQcmljZSB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQnKTtcclxuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCAkc2VhcmNoSGVhZGluZyA9ICQoJyNzZWFyY2gtcmVzdWx0cy1oZWFkaW5nJyk7XHJcbiAgICAgICAgY29uc3QgJHNlYXJjaENvdW50ID0gJCgnI3NlYXJjaC1yZXN1bHRzLXByb2R1Y3QtY291bnQnKTtcclxuICAgICAgICBjb25zdCAkY29udGVudENvdW50ID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQtY291bnQnKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdzZWFyY2gvcHJvZHVjdC1saXN0aW5nJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRMaXN0aW5nOiAnc2VhcmNoL2NvbnRlbnQtbGlzdGluZycsXHJcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnc2VhcmNoL3NpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ3NlYXJjaC9oZWFkaW5nJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RDb3VudDogJ3NlYXJjaC9wcm9kdWN0LWNvdW50JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRDb3VudDogJ3NlYXJjaC9jb250ZW50LWNvdW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0X3Jlc3VsdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgJHNlYXJjaEhlYWRpbmcuaHRtbChjb250ZW50LmhlYWRpbmcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKHVybC5xdWVyeS5zZWN0aW9uID09PSAnY29udGVudCcpIHtcclxuICAgICAgICAgICAgICAgICRjb250ZW50TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQuY29udGVudExpc3RpbmcpO1xyXG4gICAgICAgICAgICAgICAgJGNvbnRlbnRDb3VudC5odG1sKGNvbnRlbnQuY29udGVudENvdW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XHJcbiAgICAgICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XHJcbiAgICAgICAgICAgICAgICAkc2VhcmNoQ291bnQuaHRtbChjb250ZW50LnByb2R1Y3RDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XHJcblxyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXh0KVxyXG4gICAgICAgICAgICBwcm9kdWN0T3B0aW9uR3JhcGhxbCh0aGlzLmNvbnRleHQpXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xyXG4gICAgICAgICAgICAgICAgb25NaW5QcmljZUVycm9yLFxyXG4gICAgICAgICAgICAgICAgb25NYXhQcmljZUVycm9yLFxyXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxyXG4gICAgICAgICAgICAgICAgbWF4UHJpY2VOb3RFbnRlcmVkLFxyXG4gICAgICAgICAgICAgICAgb25JbnZhbGlkUHJpY2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFZhbGlkYXRpb24oJGZvcm0pIHtcclxuICAgICAgICB0aGlzLiRmb3JtID0gJGZvcm07XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICRmb3JtLFxyXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRWYWxpZGF0aW9uKCRlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJGVsZW1lbnQuZGF0YSgnZXJyb3JNZXNzYWdlJyksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiRmFjZXRlZFNlYXJjaCIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJjb21wYXJlUHJvZHVjdHMiLCJ1cmxVdGlscyIsIlVybCIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIm5vZCIsIlByb2R1Y3REZXRhaWxzIiwicHJvZHVjdE9wdGlvbkdyYXBocWwiLCJsZWZ0QXJyb3dLZXkiLCJyaWdodEFycm93S2V5IiwiU2VhcmNoIiwiZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlIiwibm9kZSIsIm5vZGVEYXRhIiwidGV4dCIsImRhdGEiLCJpZCIsIm1ldGFkYXRhIiwic3RhdGUiLCJzZWxlY3RlZCIsIm9wZW5lZCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInB1c2giLCJzaG93UHJvZHVjdHMiLCJuYXZpZ2F0ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkY29udGVudFJlc3VsdHNDb250YWluZXIiLCJhZGRDbGFzcyIsIiQiLCJhY3RpdmF0ZVRhYiIsInNlYXJjaERhdGEiLCJ1cmwiLCJjb3VudCIsInJlcGxhY2VQYXJhbXMiLCJwYWdlIiwiZ29Ub1VybCIsInNob3dDb250ZW50IiwiJHRhYlRvQWN0aXZhdGUiLCIkdGFic0NvbGxlY3Rpb24iLCJmaW5kIiwiZWFjaCIsImlkeCIsInRhYiIsIiR0YWIiLCJpcyIsInJlbW92ZUF0dHIiLCJhdHRyIiwib25UYWJDaGFuZ2VXaXRoQXJyb3dzIiwiZXZlbnQiLCJldmVudEtleSIsIndoaWNoIiwiaXNMZWZ0T3JSaWdodEFycm93S2V5ZG93biIsImlzQWN0aXZlRWxlbWVudE5vdFRhYiIsImluZGV4IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiJGFjdGl2ZVRhYiIsImFjdGl2ZVRhYklkeCIsImxhc3RUYWJJZHgiLCJsZW5ndGgiLCJuZXh0VGFiSWR4IiwiZ2V0IiwiZm9jdXMiLCJ0cmlnZ2VyIiwib25SZWFkeSIsImNvbnRleHQiLCJhcnJhbmdlRm9jdXNPblNvcnRCeSIsIiRzZWFyY2hGb3JtIiwiJGNhdGVnb3J5VHJlZUNvbnRhaW5lciIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidHJlZURhdGEiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsIm9uIiwicHJldmVudERlZmF1bHQiLCJxdWVyeSIsInNlY3Rpb24iLCJ2YWxpZGF0b3IiLCJpbml0VmFsaWRhdGlvbiIsImJpbmRWYWxpZGF0aW9uIiwiY2F0ZWdvcnlUcmVlIiwiY2F0ZWdvcnlUcmVlRGF0YSIsImNyZWF0ZUNhdGVnb3J5VHJlZSIsInNlbGVjdGVkQ2F0ZWdvcnlJZHMiLCJqc3RyZWUiLCJnZXRfc2VsZWN0ZWQiLCJjaGVjayIsInJlbW92ZSIsImNhdGVnb3J5SWQiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJhcHBlbmQiLCIkc2VhcmNoUmVzdWx0c01lc3NhZ2UiLCJzZWFyY2hSZXN1bHRzQ291bnQiLCJwcmVwZW5kVG8iLCJzZXRUaW1lb3V0IiwibG9hZFRyZWVOb2RlcyIsImNiIiwiYWpheCIsInNlbGVjdGVkQ2F0ZWdvcnlJZCIsInByZWZpeCIsImhlYWRlcnMiLCJCQ0RhdGEiLCJjc3JmX3Rva2VuIiwiZG9uZSIsImZvcm1hdHRlZFJlc3VsdHMiLCJkYXRhTm9kZSIsIiRjb250YWluZXIiLCJ0cmVlT3B0aW9ucyIsImNvcmUiLCJ0aGVtZXMiLCJpY29ucyIsImNoZWNrYm94IiwidGhyZWVfc3RhdGUiLCJwbHVnaW5zIiwib25NaW5QcmljZUVycm9yIiwib25NYXhQcmljZUVycm9yIiwibWluUHJpY2VOb3RFbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCIkY29udGVudExpc3RpbmdDb250YWluZXIiLCIkc2VhcmNoSGVhZGluZyIsIiRzZWFyY2hDb3VudCIsIiRjb250ZW50Q291bnQiLCJwcm9kdWN0c1BlclBhZ2UiLCJzZWFyY2hQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJjb250ZW50TGlzdGluZyIsInNpZGViYXIiLCJoZWFkaW5nIiwicHJvZHVjdENvdW50IiwiY29udGVudENvdW50IiwiY29uZmlnIiwicHJvZHVjdF9yZXN1bHRzIiwibGltaXQiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsIiRmb3JtIiwic3VibWl0IiwidGFwIiwiJGVsZW1lbnQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiZXJyb3JNZXNzYWdlIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIl0sInNvdXJjZVJvb3QiOiIifQ==
