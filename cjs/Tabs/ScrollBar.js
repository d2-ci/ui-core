"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollBar = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Chevron = require("../icons/Chevron");

var _theme = require("../theme");

var _detectHorizontalScrollbarHeight = require("./detectHorizontalScrollbarHeight");

var _animatedSideScroll = require("./animatedSideScroll");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _ref =
/*#__PURE__*/
_react.default.createElement(_Chevron.ChevronLeft, null);

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_Chevron.ChevronRight, null);

var ScrollBar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ScrollBar, _PureComponent);

  function ScrollBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScrollBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScrollBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "scrollBox", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "scrollArea", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "state", {
      scrolledToStart: false,
      scrolledToEnd: false
    });

    _defineProperty(_assertThisInitialized(_this), "horizontalScrollBarHeight", (0, _detectHorizontalScrollbarHeight.detectHorizontalScrollbarHeight)());

    _defineProperty(_assertThisInitialized(_this), "scrollRight", function () {
      return _this.scroll();
    });

    _defineProperty(_assertThisInitialized(_this), "scrollLeft", function () {
      return _this.scroll(true);
    });

    _defineProperty(_assertThisInitialized(_this), "animatedScrollCallback", function () {
      _this.toggleScrollButtonVisibility();

      _this.attachSideScrollListener();
    });

    _defineProperty(_assertThisInitialized(_this), "toggleScrollButtonVisibility", function () {
      var _this$scrollBox$curre = _this.scrollBox.current,
          scrollLeft = _this$scrollBox$curre.scrollLeft,
          offsetWidth = _this$scrollBox$curre.offsetWidth;
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

  _createClass(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.attachSideScrollListener();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeSideScrollListener();
    }
  }, {
    key: "scroll",
    value: function scroll(goBackwards) {
      this.removeSideScrollListener();
      (0, _animatedSideScroll.animatedSideScroll)(this.scrollBox.current, this.animatedScrollCallback, goBackwards);
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
    key: "render",
    value: function render() {
      var _this$state = this.state,
          scrolledToStart = _this$state.scrolledToStart,
          scrolledToEnd = _this$state.scrolledToEnd;
      var children = this.props.children;
      return _react.default.createElement("div", {
        className: "jsx-4061674243 " + _style.default.dynamic([["1687634598", [_theme.colors.white, _theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.colors.grey500]]]) + " " + "scroll-bar"
      }, _react.default.createElement("button", {
        onClick: scrolledToStart ? undefined : this.scrollLeft,
        className: "jsx-4061674243 " + _style.default.dynamic([["1687634598", [_theme.colors.white, _theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.colors.grey500]]]) + " " + ((0, _classnames.default)('scroll-button', {
          disabled: scrolledToStart
        }) || "")
      }, _ref), _react.default.createElement("div", {
        className: "jsx-4061674243 " + _style.default.dynamic([["1687634598", [_theme.colors.white, _theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.colors.grey500]]]) + " " + "scroll-box-clipper"
      }, _react.default.createElement("div", {
        ref: this.scrollBox,
        className: "jsx-4061674243 " + _style.default.dynamic([["1687634598", [_theme.colors.white, _theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.colors.grey500]]]) + " " + "scroll-box"
      }, _react.default.createElement("div", {
        ref: this.scrollArea,
        className: "jsx-4061674243 " + _style.default.dynamic([["1687634598", [_theme.colors.white, _theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.colors.grey500]]]) + " " + "scroll-area"
      }, children))), _react.default.createElement("button", {
        onClick: scrolledToEnd ? undefined : this.scrollRight,
        className: "jsx-4061674243 " + _style.default.dynamic([["1687634598", [_theme.colors.white, _theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.colors.grey500]]]) + " " + ((0, _classnames.default)('scroll-button', {
          disabled: scrolledToEnd
        }) || "")
      }, _ref2), _react.default.createElement(_style.default, {
        id: "4061674243"
      }, [".scroll-box.jsx-4061674243{margin-bottom:".concat(-this.horizontalScrollBarHeight, "px;}")]), _react.default.createElement(_style.default, {
        id: "1687634598",
        dynamic: [_theme.colors.white, _theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.colors.grey500]
      }, [".scroll-bar.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".scroll-button.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:inherit;background-color:".concat(_theme.colors.white, ";border:none;border-bottom:1px solid ").concat(_theme.colors.grey400, ";outline:none;padding:16px 16px 11px 16px;cursor:pointer;}"), ".scroll-button.__jsx-style-dynamic-selector svg{width:20px;height:20px;fill:".concat(_theme.colors.grey600, ";-webkit-transition:opacity 150ms ease-in-out;transition:opacity 150ms ease-in-out;opacity:1;}"), ".scroll-button.__jsx-style-dynamic-selector:hover{background-color:".concat(_theme.colors.grey100, ";}"), ".scroll-button.__jsx-style-dynamic-selector:active{background-color:".concat(_theme.colors.grey200, ";}"), ".scroll-button.disabled.__jsx-style-dynamic-selector{cursor:not-allowed;}", ".scroll-button.disabled.__jsx-style-dynamic-selector:hover{background-color:transparent;}", ".scroll-button.disabled.__jsx-style-dynamic-selector svg{fill:".concat(_theme.colors.grey500, ";}"), ".scroll-box-clipper.__jsx-style-dynamic-selector{overflow-y:hidden;}", ".scroll-box.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-x:scroll;-webkit-overflow-scrolling:touch;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".scroll-box.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}", ".scroll-area.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;overflow-x:hidden;}", "@-moz-document url-prefix(){.tab-container.__jsx-style-dynamic-selector{width:-moz-max-content;}}"]));
    }
  }]);

  return ScrollBar;
}(_react.PureComponent);

exports.ScrollBar = ScrollBar;
ScrollBar.propTypes = {
  children: _propTypes.default.node.isRequired
};