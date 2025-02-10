"use strict";
(self["webpackChunkStyle"] = self["webpackChunkStyle"] || []).push([["assets_js_theme_catalog_js-assets_js_theme_common_faceted-search_js-assets_js_theme_global_co-3f5afe"],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CatalogPage; }
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);

  function CatalogPage(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    window.addEventListener('beforeunload', function () {
      if (document.activeElement.id === 'sort') {
        window.localStorage.setItem('sortByStatus', 'selected');
      }
    });
    return _this;
  }

  var _proto = CatalogPage.prototype;

  _proto.arrangeFocusOnSortBy = function arrangeFocusOnSortBy() {
    var $sortBySelector = $('[data-sort-by="product"] #sort');

    if (window.localStorage.getItem('sortByStatus')) {
      $sortBySelector.focus();
      window.localStorage.removeItem('sortByStatus');
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2__.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };

  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");










var defaultOptions = {
  accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
  blockerSelector: '#facetedSearch .blocker',
  clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
  componentSelector: '#facetedSearch-navList',
  facetNavListSelector: '#facetedSearch .navList',
  priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
  priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
  priceRangeFormSelector: '#facet-range-form',
  priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
  priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
  showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
  facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
  modal: (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal')[0],
  modalOpen: false
};
/**
 * Faceted search view component
 */

var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;

    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = []; // Init collapsibles

    (0,_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])(); // Init price validator

    this.initPriceValidator(); // Show limited items by default

    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    }); // Mark initially collapsed accordions

    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');

      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    }); // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped

    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    }); // Observe user events

    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  } // Public methods


  var _proto = FacetedSearch.prototype;

  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    } // Init collapsibles


    (0,_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])(); // Init price validator

    this.initPriceValidator(); // Restore view state

    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems(); // Bind events

    this.bindEvents();
  };

  _proto.updateView = function updateView() {
    var _this2 = this;

    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.api.getPage(_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();

      if (err) {
        throw new Error(err);
      } // Refresh view with new content


      _this2.refreshView(content);
    });
  };

  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id'); // Remove

    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id);
  };

  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');

    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id);
    }
  };

  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id'); // Toggle depending on `collapsed` flag

    if (this.collapsedFacetItems.includes(id)) {
      this.getMoreFacetResults($navList);
      return true;
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;

    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getUrl();

    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.api.getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }

        _this3.options.modal.open();

        _this3.options.modalOpen = true;

        _this3.options.modal.updateContent(response);
      });
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();

      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };

  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };

  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };

  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this4.collapseFacet($accordionToggle);
    });
  };

  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this5.expandFacet($accordionToggle);
    });
  } // Private methods
  ;

  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }

    var validator = (0,_nod__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.Validators.setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };

  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;

    var $navLists = $(this.options.facetNavListSelector); // Restore collapsed state for each facet

    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');

      var shouldCollapse = _this6.collapsedFacetItems.includes(id);

      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };

  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;

      var shouldCollapse = _this7.collapsedFacets.includes(id);

      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents(); // DOM events

    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation(); // Update URL

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };

  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href')); // Prevent default

    event.preventDefault(); // Toggle visible items

    this.toggleFacetItems($navList);
  };

  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected'); // Update URL

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_4__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page; // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead

    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4__.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(urlQueryParams)
    }));
  };

  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();

    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_9__["default"].constants.VALID)) {
      return;
    }

    var url = url__WEBPACK_IMPORTED_MODULE_4__.parse(window.location.href, true);
    var queryParams = decodeURI($(currentTarget).serialize()).split('&');
    queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].parseQueryParams(queryParams);

    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    } // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead


    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4__.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(urlQueryParams)
    }));
  };

  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };

  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;

    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, id);
    }
  };

  _proto.onPopState = function onPopState() {
    var currentUrl = window.location.href;
    var searchParams = new URLSearchParams(currentUrl); // If searchParams does not contain a page value then modify url query string to have page=1

    if (!searchParams.has('page')) {
      var linkUrl = $('.pagination-link').attr('href');
      var re = /page=[0-9]+/i;
      var updatedLinkUrl = linkUrl.replace(re, 'page=1');
      window.history.replaceState({}, document.title, updatedLinkUrl);
    }

    $(window).trigger('statechange');
  };

  return FacetedSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);

/***/ }),

/***/ "./assets/js/theme/common/utils/url-utils.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/utils/url-utils.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0__.parse(url, true);
    var param; // Let the formatter use the query object to build the new url

    parsed.search = null;

    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }

    return url__WEBPACK_IMPORTED_MODULE_0__.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;

    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;

          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }

    return out.substring(1);
  },
  parseQueryParams: function parseQueryParams(queryData) {
    var params = {};

    for (var i = 0; i < queryData.length; i++) {
      var temp = queryData[i].split('=');

      if (temp[0] in params) {
        if (Array.isArray(params[temp[0]])) {
          params[temp[0]].push(temp[1]);
        } else {
          params[temp[0]] = [params[temp[0]], temp[1]];
        }
      } else {
        params[temp[0]] = temp[1];
      }
    }

    return params;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (urlUtils);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRhbG9nX2pzLWFzc2V0c19qc190aGVtZV9jb21tb25fZmFjZXRlZC1zZWFyY2hfanMtYXNzZXRzX2pzX3RoZW1lX2dsb2JhbF9jby0zZjVhZmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVxQkc7OztBQUNqQix1QkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixvQ0FBTUEsT0FBTjtBQUVBQyxJQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGNBQXhCLEVBQXdDLFlBQU07QUFDMUMsVUFBSUMsUUFBUSxDQUFDQyxhQUFULENBQXVCQyxFQUF2QixLQUE4QixNQUFsQyxFQUEwQztBQUN0Q0osUUFBQUEsTUFBTSxDQUFDSyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixjQUE1QixFQUE0QyxVQUE1QztBQUNIO0FBQ0osS0FKRDtBQUhpQjtBQVFwQjs7OztTQUVEQyx1QkFBQSxnQ0FBdUI7QUFDbkIsUUFBTUMsZUFBZSxHQUFHQyxDQUFDLENBQUMsZ0NBQUQsQ0FBekI7O0FBRUEsUUFBSVQsTUFBTSxDQUFDSyxZQUFQLENBQW9CSyxPQUFwQixDQUE0QixjQUE1QixDQUFKLEVBQWlEO0FBQzdDRixNQUFBQSxlQUFlLENBQUNHLEtBQWhCO0FBQ0FYLE1BQUFBLE1BQU0sQ0FBQ0ssWUFBUCxDQUFvQk8sVUFBcEIsQ0FBK0IsY0FBL0I7QUFDSDtBQUNKOztTQUVEQyxpQkFBQSx3QkFBZUMsS0FBZixFQUFzQkMsYUFBdEIsRUFBcUM7QUFDakMsUUFBTUMsR0FBRyxHQUFHbkIsc0NBQUEsQ0FBVUcsTUFBTSxDQUFDa0IsUUFBUCxDQUFnQkMsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FBWjtBQUNBLFFBQU1DLFdBQVcsR0FBR1gsQ0FBQyxDQUFDTSxhQUFELENBQUQsQ0FBaUJNLFNBQWpCLEdBQTZCQyxLQUE3QixDQUFtQyxHQUFuQyxDQUFwQjtBQUVBTixJ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SCxHQVhEO0FBYUE3SyxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVU0SCxFQUFWLENBQWEsT0FBYixFQUFzQixxQkFBdEIsRUFBNkMsWUFBTTtBQUMvQyxRQUFNbUUsb0JBQW9CLEdBQUcvTCxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVpTCxJQUFWLENBQWUsb0NBQWYsQ0FBN0I7O0FBRUEsUUFBSWMsb0JBQW9CLENBQUNqRixNQUFyQixJQUErQixDQUFuQyxFQUFzQztBQUNsQ3dELE1BQUFBLHNEQUFjLENBQUNjLGdCQUFELENBQWQ7QUFDQSxhQUFPLEtBQVA7QUFDSDtBQUNKLEdBUEQ7QUFRSCIsInNvdXJjZXMiOlsid2VicGFjazovL1N0eWxlLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vU3R5bGUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovL1N0eWxlLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy91cmwtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vU3R5bGUvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzL3VybC11dGlscyc7XHJcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2dQYWdlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pZCA9PT0gJ3NvcnQnKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NvcnRCeVN0YXR1cycsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXJyYW5nZUZvY3VzT25Tb3J0QnkoKSB7XHJcbiAgICAgICAgY29uc3QgJHNvcnRCeVNlbGVjdG9yID0gJCgnW2RhdGEtc29ydC1ieT1cInByb2R1Y3RcIl0gI3NvcnQnKTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ydEJ5U3RhdHVzJykpIHtcclxuICAgICAgICAgICAgJHNvcnRCeVNlbGVjdG9yLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc29ydEJ5U3RhdHVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcclxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcclxuXHJcbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xyXG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xyXG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi91dGlscy91cmwtdXRpbHMnO1xyXG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XHJcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb2xsYXBzaWJsZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcclxuXHJcblxyXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGFjY29yZGlvblRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1uYXZpZ2F0aW9uLCAjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC10b2dnbGUnLFxyXG4gICAgYmxvY2tlclNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmJsb2NrZXInLFxyXG4gICAgY2xlYXJGYWNldFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtY2xlYXJMaW5rJyxcclxuICAgIGNvbXBvbmVudFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdCcsXHJcbiAgICBmYWNldE5hdkxpc3RTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5uYXZMaXN0JyxcclxuICAgIHByaWNlUmFuZ2VFcnJvclNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0taW5saW5lTWVzc2FnZScsXHJcbiAgICBwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWZpZWxkc2V0JyxcclxuICAgIHByaWNlUmFuZ2VGb3JtU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybScsXHJcbiAgICBwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1heF9wcmljZV0nLFxyXG4gICAgcHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1taW5fcHJpY2VdJyxcclxuICAgIHNob3dNb3JlVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLWNvbnRlbnQgLnRvZ2dsZUxpbmsnLFxyXG4gICAgZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zOiAnI2ZhY2V0ZWRTZWFyY2gtZmlsdGVySXRlbXMgLmZvcm0taW5wdXQnLFxyXG4gICAgbW9kYWw6IG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF0sXHJcbiAgICBtb2RhbE9wZW46IGZhbHNlLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XHJcbiAqL1xyXG5jbGFzcyBGYWNldGVkU2VhcmNoIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlcXVlc3RPcHRpb25zIC0gT2JqZWN0IHdpdGggb3B0aW9ucyBmb3IgdGhlIGFqYXggcmVxdWVzdHNcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBmZXRjaGluZyB0ZW1wbGF0ZXNcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKlxyXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICogICAgICB0ZW1wbGF0ZXM6IHtcclxuICAgICAqICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcclxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xyXG4gICAgICogICAgIH1cclxuICAgICAqIH07XHJcbiAgICAgKlxyXG4gICAgICogbGV0IHRlbXBsYXRlc0RpZExvYWQgPSBmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgKiAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XHJcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xyXG4gICAgICogfTtcclxuICAgICAqXHJcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocmVxdWVzdE9wdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0T3B0aW9ucyA9IHJlcXVlc3RPcHRpb25zO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gW107XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XHJcblxyXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXHJcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XHJcblxyXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXHJcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcclxuXHJcbiAgICAgICAgLy8gU2hvdyBsaW1pdGVkIGl0ZW1zIGJ5IGRlZmF1bHRcclxuICAgICAgICAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3RvcikuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJChuYXZMaXN0KSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE1hcmsgaW5pdGlhbGx5IGNvbGxhcHNlZCBhY2NvcmRpb25zXHJcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMucHVzaChjb2xsYXBzaWJsZS50YXJnZXRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ29sbGFwc2UgYWxsIGZhY2V0cyBpZiBpbml0aWFsbHkgaGlkZGVuXHJcbiAgICAgICAgLy8gTk9URTogTmVlZCB0byBleGVjdXRlIGFmdGVyIENvbGxhcHNpYmxlIGdldHMgYm9vdHN0cmFwcGVkXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5jb21wb25lbnRTZWxlY3RvcikuaXMoJzpoaWRkZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE9ic2VydmUgdXNlciBldmVudHNcclxuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UgPSB0aGlzLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlID0gdGhpcy5vbkFjY29yZGlvblRvZ2dsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DbGVhckZhY2V0ID0gdGhpcy5vbkNsZWFyRmFjZXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRmFjZXRDbGljayA9IHRoaXMub25GYWNldENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJhbmdlU3VibWl0ID0gdGhpcy5vblJhbmdlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmZpbHRlckZhY2V0SXRlbXMgPSB0aGlzLmZpbHRlckZhY2V0SXRlbXMuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIG1ldGhvZHNcclxuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQpIHtcclxuICAgICAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcclxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xyXG5cclxuICAgICAgICAvLyBSZXN0b3JlIHZpZXcgc3RhdGVcclxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcclxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCk7XHJcblxyXG4gICAgICAgIC8vIEJpbmQgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldygpIHtcclxuICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLnNob3coKTtcclxuXHJcbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmVmcmVzaCB2aWV3IHdpdGggbmV3IGNvbnRlbnRcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldyhjb250ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmVcclxuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xyXG4gICAgICAgIGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YSgnaGFzTW9yZVJlc3VsdHMnKTtcclxuXHJcbiAgICAgICAgaWYgKGhhc01vcmVSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBbaWRdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcclxuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgIC8vIFRvZ2dsZSBkZXBlbmRpbmcgb24gYGNvbGxhcHNlZGAgZmxhZ1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcclxuICAgICAgICBjb25zdCBmYWNldCA9ICRuYXZMaXN0LmRhdGEoJ2ZhY2V0Jyk7XHJcbiAgICAgICAgY29uc3QgZmFjZXRVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUpIHtcclxuICAgICAgICAgICAgYXBpLmdldFBhZ2UoZmFjZXRVcmwsIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6IGZhY2V0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyRmFjZXRJdGVtcyhldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcclxuICAgICAgICBjb25zdCBxdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkKGVsZW1lbnQpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKHF1ZXJ5KSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XHJcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcclxuXHJcbiAgICAgICAgY29sbGFwc2libGUub3BlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XHJcblxyXG4gICAgICAgIGNvbGxhcHNpYmxlLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGFwc2VBbGxGYWNldHMoKSB7XHJcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmRBbGxGYWNldHMoKSB7XHJcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXHJcbiAgICBpbml0UHJpY2VWYWxpZGF0b3IoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB7XHJcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRXJyb3JTZWxlY3RvcixcclxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxyXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yLFxyXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycywgdGhpcy5vcHRpb25zLnZhbGlkYXRpb25FcnJvck1lc3NhZ2VzKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yID0gdmFsaWRhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCkge1xyXG4gICAgICAgIGNvbnN0ICRuYXZMaXN0cyA9ICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgLy8gUmVzdG9yZSBjb2xsYXBzZWQgc3RhdGUgZm9yIGVhY2ggZmFjZXRcclxuICAgICAgICAkbmF2TGlzdHMuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKG5hdkxpc3QpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLmluY2x1ZGVzKGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKSB7XHJcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlZEZhY2V0cy5pbmNsdWRlcyhpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIC8vIENsZWFuLXVwXHJcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xyXG4gICAgICAgICQod2luZG93KS5vbignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xyXG4gICAgICAgICQod2luZG93KS5vbigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XHJcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vbignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XHJcblxyXG4gICAgICAgIC8vIEhvb2tzXHJcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcclxuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xyXG4gICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5iaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIC8vIERPTSBldmVudHNcclxuICAgICAgICAkKHdpbmRvdykub2ZmKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9mZigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XHJcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xyXG5cclxuICAgICAgICAvLyBIb29rc1xyXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xyXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xyXG4gICAgICAgIGhvb2tzLm9mZignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xlYXJGYWNldChldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcclxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub2dnbGVDbGljayhldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJCgkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGl0ZW1zXHJcbiAgICAgICAgdGhpcy50b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZhY2V0Q2xpY2soZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcclxuICAgICAgICBjb25zdCAkbGluayA9ICQoY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkbGluay50b2dnbGVDbGFzcygnaXMtc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIFVSTFxyXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbE9wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcclxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcclxuXHJcbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xyXG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcclxuXHJcbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXHJcbiAgICAgICAgY29uc3QgdXJsUXVlcnlQYXJhbXMgPSB7fTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHVybFF1ZXJ5UGFyYW1zLCB1cmwucXVlcnkpO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsUXVlcnlQYXJhbXMpIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJhbmdlU3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IuYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XHJcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gZGVjb2RlVVJJKCQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkpLnNwbGl0KCcmJyk7XHJcbiAgICAgICAgcXVlcnlQYXJhbXMgPSB1cmxVdGlscy5wYXJzZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcXVlcnlQYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHVybC5xdWVyeVtrZXldID0gcXVlcnlQYXJhbXNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXHJcbiAgICAgICAgY29uc3QgdXJsUXVlcnlQYXJhbXMgPSB7fTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHVybFF1ZXJ5UGFyYW1zLCB1cmwucXVlcnkpO1xyXG5cclxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsUXVlcnlQYXJhbXMpIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN0YXRlQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWNjb3JkaW9uVG9nZ2xlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcclxuICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xyXG5cclxuICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBbaWRdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblBvcFN0YXRlKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGN1cnJlbnRVcmwpO1xyXG4gICAgICAgIC8vIElmIHNlYXJjaFBhcmFtcyBkb2VzIG5vdCBjb250YWluIGEgcGFnZSB2YWx1ZSB0aGVuIG1vZGlmeSB1cmwgcXVlcnkgc3RyaW5nIHRvIGhhdmUgcGFnZT0xXHJcbiAgICAgICAgaWYgKCFzZWFyY2hQYXJhbXMuaGFzKCdwYWdlJykpIHtcclxuICAgICAgICAgICAgY29uc3QgbGlua1VybCA9ICQoJy5wYWdpbmF0aW9uLWxpbmsnKS5hdHRyKCdocmVmJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlID0gL3BhZ2U9WzAtOV0rL2k7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRMaW5rVXJsID0gbGlua1VybC5yZXBsYWNlKHJlLCAncGFnZT0xJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVwZGF0ZWRMaW5rVXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY2V0ZWRTZWFyY2g7XHJcbiIsImltcG9ydCBVcmwgZnJvbSAndXJsJztcclxuXHJcbmNvbnN0IHVybFV0aWxzID0ge1xyXG4gICAgZ2V0VXJsOiAoKSA9PiBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWAsXHJcblxyXG4gICAgZ29Ub1VybDogKHVybCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybCk7XHJcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlcGxhY2VQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IFVybC5wYXJzZSh1cmwsIHRydWUpO1xyXG4gICAgICAgIGxldCBwYXJhbTtcclxuXHJcbiAgICAgICAgLy8gTGV0IHRoZSBmb3JtYXR0ZXIgdXNlIHRoZSBxdWVyeSBvYmplY3QgdG8gYnVpbGQgdGhlIG5ldyB1cmxcclxuICAgICAgICBwYXJzZWQuc2VhcmNoID0gbnVsbDtcclxuXHJcbiAgICAgICAgZm9yIChwYXJhbSBpbiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcclxuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gVXJsLmZvcm1hdChwYXJzZWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBidWlsZFF1ZXJ5U3RyaW5nOiAocXVlcnlEYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IG91dCA9ICcnO1xyXG4gICAgICAgIGxldCBrZXk7XHJcbiAgICAgICAgZm9yIChrZXkgaW4gcXVlcnlEYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChxdWVyeURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlEYXRhW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5keDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuZHggaW4gcXVlcnlEYXRhW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YVtrZXldLmhhc093blByb3BlcnR5KG5keCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldW25keF19YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV19YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dC5zdWJzdHJpbmcoMSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHBhcnNlUXVlcnlQYXJhbXM6IChxdWVyeURhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyeURhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHF1ZXJ5RGF0YVtpXS5zcGxpdCgnPScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRlbXBbMF0gaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNbdGVtcFswXV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dLnB1c2godGVtcFsxXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9IFtwYXJhbXNbdGVtcFswXV0sIHRlbXBbMV1dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dID0gdGVtcFsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cmxVdGlscztcclxuIiwiaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcclxuXHJcbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xyXG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxzKSB7XHJcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybHMuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcclxuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyBub0NvbXBhcmVNZXNzYWdlLCB1cmxzIH0pIHtcclxuICAgIGxldCBjb21wYXJlQ291bnRlciA9IFtdO1xyXG5cclxuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NvbXBhcmVSZXNldCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICBjb21wYXJlQ291bnRlciA9ICRjaGVja2VkLmxlbmd0aCA/ICRjaGVja2VkLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IGVsZW1lbnQudmFsdWUpLmdldCgpIDogW107XHJcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNvbXBhcmVMaW5rLCB1cmxzKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJscyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKG5vQ29tcGFyZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwidXJsVXRpbHMiLCJVcmwiLCJDYXRhbG9nUGFnZSIsImNvbnRleHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCIkc29ydEJ5U2VsZWN0b3IiLCIkIiwiZ2V0SXRlbSIsImZvY3VzIiwicmVtb3ZlSXRlbSIsIm9uU29ydEJ5U3VibWl0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidXJsIiwicGFyc2UiLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsInNlcmlhbGl6ZSIsInNwbGl0IiwicXVlcnkiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsImJ1aWxkUXVlcnlTdHJpbmciLCJob29rcyIsImFwaSIsIm1vZGFsRmFjdG9yeSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIlZhbGlkYXRvcnMiLCJub2QiLCJkZWZhdWx0T3B0aW9ucyIsImFjY29yZGlvblRvZ2dsZVNlbGVjdG9yIiwiYmxvY2tlclNlbGVjdG9yIiwiY2xlYXJGYWNldFNlbGVjdG9yIiwiY29tcG9uZW50U2VsZWN0b3IiLCJmYWNldE5hdkxpc3RTZWxlY3RvciIsInByaWNlUmFuZ2VFcnJvclNlbGVjdG9yIiwicHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IiLCJwcmljZVJhbmdlRm9ybVNlbGVjdG9yIiwicHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IiLCJwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvciIsInNob3dNb3JlVG9nZ2xlU2VsZWN0b3IiLCJmYWNldGVkU2VhcmNoRmlsdGVySXRlbXMiLCJtb2RhbCIsIm1vZGFsT3BlbiIsIkZhY2V0ZWRTZWFyY2giLCJyZXF1ZXN0T3B0aW9ucyIsImNhbGxiYWNrIiwib3B0aW9ucyIsImNvbGxhcHNlZEZhY2V0cyIsImNvbGxhcHNlZEZhY2V0SXRlbXMiLCJpbml0UHJpY2VWYWxpZGF0b3IiLCJlYWNoIiwiaW5kZXgiLCJuYXZMaXN0IiwiY29sbGFwc2VGYWNldEl0ZW1zIiwiYWNjb3JkaW9uVG9nZ2xlIiwiJGFjY29yZGlvblRvZ2dsZSIsImNvbGxhcHNpYmxlIiwiZGF0YSIsImlzQ29sbGFwc2VkIiwicHVzaCIsInRhcmdldElkIiwic2V0VGltZW91dCIsImlzIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvblN0YXRlQ2hhbmdlIiwiYmluZCIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwiYmluZEV2ZW50cyIsInJlZnJlc2hWaWV3IiwiY29udGVudCIsInJlc3RvcmVDb2xsYXBzZWRGYWNldHMiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcyIsInVwZGF0ZVZpZXciLCJzaG93IiwiZ2V0UGFnZSIsImdldFVybCIsImVyciIsImhpZGUiLCJFcnJvciIsImV4cGFuZEZhY2V0SXRlbXMiLCIkbmF2TGlzdCIsImF0dHIiLCJoYXNNb3JlUmVzdWx0cyIsInRvZ2dsZUZhY2V0SXRlbXMiLCJpbmNsdWRlcyIsImdldE1vcmVGYWNldFJlc3VsdHMiLCJmYWNldCIsImZhY2V0VXJsIiwic2hvd01vcmUiLCJ0ZW1wbGF0ZSIsInBhcmFtcyIsImxpc3RfYWxsIiwicmVzcG9uc2UiLCJvcGVuIiwidXBkYXRlQ29udGVudCIsIiRpdGVtcyIsInZhbCIsInRvTG93ZXJDYXNlIiwiZWxlbWVudCIsInRleHQiLCJpbmRleE9mIiwiZXhwYW5kRmFjZXQiLCJjb2xsYXBzZUZhY2V0IiwiY2xvc2UiLCIkYWNjb3JkaW9uVG9nZ2xlcyIsImV4cGFuZEFsbEZhY2V0cyIsImxlbmd0aCIsInZhbGlkYXRvciIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJzZXRNaW5NYXhQcmljZVZhbGlkYXRpb24iLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsInByaWNlUmFuZ2VWYWxpZGF0b3IiLCIkbmF2TGlzdHMiLCJzaG91bGRDb2xsYXBzZSIsInVuYmluZEV2ZW50cyIsIm9uIiwib25Qb3BTdGF0ZSIsIm9mZiIsIiRsaW5rIiwic3RvcFByb3BhZ2F0aW9uIiwiZ29Ub1VybCIsIiR0b2dnbGUiLCJ0b2dnbGVDbGFzcyIsInVybFF1ZXJ5UGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwiYXJlQWxsIiwiY29uc3RhbnRzIiwiVkFMSUQiLCJkZWNvZGVVUkkiLCJwYXJzZVF1ZXJ5UGFyYW1zIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJjdXJyZW50VXJsIiwic2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiaGFzIiwibGlua1VybCIsInJlIiwidXBkYXRlZExpbmtVcmwiLCJyZXBsYWNlIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwidHJpZ2dlciIsInB1c2hTdGF0ZSIsInJlcGxhY2VQYXJhbXMiLCJwYXJzZWQiLCJwYXJhbSIsInF1ZXJ5RGF0YSIsIm91dCIsIkFycmF5IiwiaXNBcnJheSIsIm5keCIsInN1YnN0cmluZyIsImkiLCJ0ZW1wIiwic2hvd0FsZXJ0TW9kYWwiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwidXBkYXRlQ291bnRlck5hdiIsInVybHMiLCJhZGRDbGFzcyIsImNvbXBhcmUiLCJqb2luIiwiZmluZCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsIm5vQ29tcGFyZU1lc3NhZ2UiLCJjb21wYXJlQ291bnRlciIsIiRjb21wYXJlTGluayIsIiRjaGVja2VkIiwibWFwIiwidmFsdWUiLCJnZXQiLCJ0cmlnZ2VySGFuZGxlciIsInByb2R1Y3QiLCIkY2xpY2tlZENvbXBhcmVMaW5rIiwiY2hlY2tlZCIsIiRjbGlja2VkQ2hlY2tlZElucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==
