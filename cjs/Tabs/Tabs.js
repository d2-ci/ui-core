"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _propValidators = require("../prop-validators");

var _theme = require("../theme.js");

var _animatedSideScroll = require("./animatedSideScroll");

var _Tab = require("./Tab");

var _TabBar = require("./TabBar");

var _TabIndicator = require("./TabIndicator");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tabs =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Tabs, _PureComponent);

  function Tabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "container", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "scrollBox", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "scrollArea", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "tabRefs", _react.Children.map(_this.props.children, _react.createRef));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isScrollingRequired: true,
      scrolledToStart: true,
      scrolledToEnd: true,
      showTabIndicator: false
    });

    _defineProperty(_assertThisInitialized(_this), "init", function () {
      var isScrollingRequired = _this.isScrollingRequired();

      _this.setState({
        isScrollingRequired: isScrollingRequired
      });

      if (_this.props.fixed || !isScrollingRequired) {
        _this.showTabIndicator();
      } else {
        _this.setHorizontalScrollbarHeight();

        if (_this.scrollRequiredToReachSelectedTab()) {
          var scrollProps = {
            duration: 0,
            callback: _this.initScrollableUI
          };

          _this.scrollToTab(_this.getSelectedTabRef(), scrollProps);
        } else {
          _this.initScrollableUI();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedTabRef", function () {
      var selected = _this.props.selected;
      return _this.tabRefs[selected].current;
    });

    _defineProperty(_assertThisInitialized(_this), "scrollLeft", function () {
      var firstTab = _this.tabRefs[0].current;
      var _this$scrollBox$curre = _this.scrollBox.current,
          scrollLeft = _this$scrollBox$curre.scrollLeft,
          offsetWidth = _this$scrollBox$curre.offsetWidth;
      var offsetLeft = scrollLeft - offsetWidth;
      var targetTab = offsetLeft <= 0 ? firstTab : _this.getTabAtOffsetLeft(offsetLeft);

      _this.scrollToTab(targetTab);
    });

    _defineProperty(_assertThisInitialized(_this), "scrollRight", function () {
      var lastTab = _this.tabRefs[_this.tabRefs.length - 1].current;
      var _this$scrollBox$curre2 = _this.scrollBox.current,
          scrollLeft = _this$scrollBox$curre2.scrollLeft,
          offsetWidth = _this$scrollBox$curre2.offsetWidth;
      var areaOffsetWidth = _this.scrollArea.current.offsetWidth;
      var offsetLeft = scrollLeft + offsetWidth * 2;
      var atEnd = areaOffsetWidth <= offsetLeft;
      var targetTab = atEnd ? lastTab : _this.getTabAtOffsetLeft(offsetLeft);

      _this.scrollToTab(targetTab);
    });

    _defineProperty(_assertThisInitialized(_this), "initScrollableUI", function () {
      _this.showTabIndicator();

      _this.toggleScrollButtonVisibility();

      _this.attachSideScrollListener();
    });

    _defineProperty(_assertThisInitialized(_this), "animatedScrollCallback", function () {
      _this.toggleScrollButtonVisibility();

      _this.attachSideScrollListener();
    });

    _defineProperty(_assertThisInitialized(_this), "toggleScrollButtonVisibility", function () {
      var _this$scrollBox$curre3 = _this.scrollBox.current,
          scrollLeft = _this$scrollBox$curre3.scrollLeft,
          offsetWidth = _this$scrollBox$curre3.offsetWidth;
      var areaOffsetWidth = _this.scrollArea.current.offsetWidth;
      var scrolledToStart = scrollLeft === 0;
      var scrolledToEnd = scrollLeft + offsetWidth === areaOffsetWidth;

      if (_this.state.scrolledToStart !== scrolledToStart || _this.state.scrolledToEnd !== scrolledToEnd) {
        _this.setState({
          scrolledToStart: scrolledToStart,
          scrolledToEnd: scrolledToEnd
        });
      }
    });

    return _this;
  }

  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.init);
      this.init();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.props.fixed && this.state.isScrollingRequired && this.props.selected !== prevProps.selected && this.scrollRequiredToReachSelectedTab()) {
        this.scrollToTab(this.getSelectedTabRef());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.addEventListener('resize', this.onResize);

      if (!this.props.fixed && this.state.isScrollingRequired) {
        this.removeSideScrollListener();
      }
    }
  }, {
    key: "isScrollingRequired",
    value: function isScrollingRequired() {
      var availableWidth = this.container.current.offsetWidth;
      var requiredWidth = this.tabRefs.reduce(function (total, _ref) {
        var el = _ref.current;
        return total + el.offsetWidth;
      }, 0);
      return requiredWidth > availableWidth;
    }
  }, {
    key: "showTabIndicator",
    value: function showTabIndicator() {
      this.setState({
        showTabIndicator: true
      });
    }
  }, {
    key: "setHorizontalScrollbarHeight",
    value: function setHorizontalScrollbarHeight() {
      var _this$scrollBox$curre4 = this.scrollBox.current,
          offsetHeight = _this$scrollBox$curre4.offsetHeight,
          clientHeight = _this$scrollBox$curre4.clientHeight;
      this.horizontalScrollbarHeight = offsetHeight - clientHeight;
    }
  }, {
    key: "attachSideScrollListener",
    value: function attachSideScrollListener() {
      this.scrollBox.current.addEventListener('scroll', this.toggleScrollButtonVisibility);
    }
  }, {
    key: "removeSideScrollListener",
    value: function removeSideScrollListener() {
      this.scrollBox.current.removeEventListener('scroll', this.toggleScrollButtonVisibility);
    }
  }, {
    key: "getTabAtOffsetLeft",
    value: function getTabAtOffsetLeft(offsetLeft) {
      return this.tabRefs.find(function (_ref2) {
        var tab = _ref2.current;
        return offsetLeft >= tab.offsetLeft && offsetLeft <= tab.offsetLeft + tab.offsetWidth;
      }).current;
    }
  }, {
    key: "scrollRequiredToReachSelectedTab",
    value: function scrollRequiredToReachSelectedTab() {
      var _this$scrollBox$curre5 = this.scrollBox.current,
          scrollLeft = _this$scrollBox$curre5.scrollLeft,
          offsetWidth = _this$scrollBox$curre5.offsetWidth;
      var tab = this.getSelectedTabRef();
      var shouldScrollRight = tab.offsetLeft - scrollLeft + tab.offsetWidth > offsetWidth;
      var shouldScrollLeft = tab.offsetLeft < scrollLeft;
      return shouldScrollRight || shouldScrollLeft;
    }
  }, {
    key: "scrollToTab",
    value: function scrollToTab(tab) {
      var scrollProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        callback: this.animatedScrollCallback
      };
      this.removeSideScrollListener();
      (0, _animatedSideScroll.animatedSideScroll)(_objectSpread({
        targetEl: tab,
        scrollBox: this.scrollBox.current
      }, scrollProps));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isScrollingRequired = _this$state.isScrollingRequired,
          scrolledToStart = _this$state.scrolledToStart,
          scrolledToEnd = _this$state.scrolledToEnd,
          showTabIndicator = _this$state.showTabIndicator;
      var _this$props = this.props,
          className = _this$props.className,
          fixed = _this$props.fixed,
          children = _this$props.children,
          selected = _this$props.selected;
      return _react.default.createElement("div", {
        ref: this.container,
        className: _style.default.dynamic([["3964222018", [_theme.colors.white, _theme.colors.grey400]]]) + " " + (className || "")
      }, _react.default.createElement(_TabBar.TabBar, {
        isScrollingRequired: isScrollingRequired,
        fixed: fixed,
        scrollLeft: this.scrollLeft,
        scrollRight: this.scrollRight,
        scrolledToStart: scrolledToStart,
        scrolledToEnd: scrolledToEnd,
        scrollBoxRef: this.scrollBox,
        scrollAreaRef: this.scrollArea,
        marginBottom: -this.horizontalScrollbarHeight
      }, _react.Children.map(children, function (child, index) {
        return (0, _react.cloneElement)(child, {
          selected: index === selected,
          ref: _this2.tabRefs[index],
          fixed: fixed
        });
      }), _react.default.createElement(_TabIndicator.TabIndicator, {
        getSelectedTabRef: this.getSelectedTabRef,
        visible: showTabIndicator
      })), _react.default.createElement(_style.default, {
        id: "3964222018",
        dynamic: [_theme.colors.white, _theme.colors.grey400]
      }, ["div.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background-color:".concat(_theme.colors.white, ";box-shadow:inset 0 -1px 0 0 ").concat(_theme.colors.grey400, ";}")]));
    }
  }]);

  return Tabs;
}(_react.PureComponent);

exports.Tabs = Tabs;
Tabs.propTypes = {
  className: _propTypes.default.string,
  selected: _propTypes.default.number.isRequired,
  fixed: _TabBar.TabBar.propTypes.fixed,
  children: _propTypes.default.arrayOf((0, _propValidators.instanceOfComponent)(_Tab.Tab))
};
Tabs.defaultProps = {
  fixed: false
};