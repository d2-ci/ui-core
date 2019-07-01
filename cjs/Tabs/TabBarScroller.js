"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabBarScroller = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Chevron = require("../icons/Chevron");

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_Chevron.ChevronLeft, null);

var _ref3 =
/*#__PURE__*/
_react.default.createElement(_Chevron.ChevronRight, null);

var TabBarScroller = function TabBarScroller(_ref) {
  var marginBottom = _ref.marginBottom,
      scrollAreaRef = _ref.scrollAreaRef,
      scrollBoxRef = _ref.scrollBoxRef,
      scrolledToEnd = _ref.scrolledToEnd,
      scrolledToStart = _ref.scrolledToStart,
      scrollLeft = _ref.scrollLeft,
      scrollRight = _ref.scrollRight,
      children = _ref.children;
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("button", {
    onClick: scrolledToStart ? undefined : scrollLeft,
    className: _style.default.dynamic([["660344677", [marginBottom]], ["3687618214", [_theme.colors.white, _theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.colors.grey500]]]) + " " + ((0, _classnames.default)('scroll-button', {
      disabled: scrolledToStart
    }) || "")
  }, _ref2), _react.default.createElement("div", {
    className: _style.default.dynamic([["660344677", [marginBottom]], ["3687618214", [_theme.colors.white, _theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.colors.grey500]]]) + " " + "scroll-box-clipper"
  }, _react.default.createElement("div", {
    ref: scrollBoxRef,
    className: _style.default.dynamic([["660344677", [marginBottom]], ["3687618214", [_theme.colors.white, _theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.colors.grey500]]]) + " " + "scroll-box"
  }, _react.default.createElement("div", {
    ref: scrollAreaRef,
    className: _style.default.dynamic([["660344677", [marginBottom]], ["3687618214", [_theme.colors.white, _theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.colors.grey500]]]) + " " + "scroll-area"
  }, children))), _react.default.createElement("button", {
    onClick: scrolledToEnd ? undefined : scrollRight,
    className: _style.default.dynamic([["660344677", [marginBottom]], ["3687618214", [_theme.colors.white, _theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.colors.grey500]]]) + " " + ((0, _classnames.default)('scroll-button', {
      disabled: scrolledToEnd
    }) || "")
  }, _ref3), _react.default.createElement(_style.default, {
    id: "660344677",
    dynamic: [marginBottom]
  }, [".scroll-box.__jsx-style-dynamic-selector{margin-bottom:".concat(marginBottom, "px;}")]), _react.default.createElement(_style.default, {
    id: "3687618214",
    dynamic: [_theme.colors.white, _theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.colors.grey500]
  }, [".scroll-button.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:inherit;background-color:".concat(_theme.colors.white, ";border:none;border-bottom:1px solid ").concat(_theme.colors.grey400, ";outline:none;padding:16px 16px 11px 16px;cursor:pointer;}"), ".scroll-button.__jsx-style-dynamic-selector svg{width:20px;height:20px;fill:".concat(_theme.colors.grey600, ";-webkit-transition:opacity 150ms ease-in-out;transition:opacity 150ms ease-in-out;opacity:1;}"), ".scroll-button.__jsx-style-dynamic-selector:hover{background-color:".concat(_theme.colors.grey100, ";}"), ".scroll-button.__jsx-style-dynamic-selector:active{background-color:".concat(_theme.colors.grey200, ";}"), ".scroll-button.disabled.__jsx-style-dynamic-selector{cursor:not-allowed;}", ".scroll-button.disabled.__jsx-style-dynamic-selector:hover{background-color:transparent;}", ".scroll-button.disabled.__jsx-style-dynamic-selector svg{fill:".concat(_theme.colors.grey500, ";}"), ".scroll-box-clipper.__jsx-style-dynamic-selector{overflow-y:hidden;}", ".scroll-box.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-x:scroll;-webkit-overflow-scrolling:touch;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".scroll-box.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}", ".scroll-area.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;overflow-x:hidden;}", "@-moz-document url-prefix(){.tab-container.__jsx-style-dynamic-selector{width:-moz-max-content;}}"]));
};

exports.TabBarScroller = TabBarScroller;

var refPropType = _propTypes.default.shape({
  current: _propTypes.default.instanceOf(Element)
});

TabBarScroller.propTypes = {
  marginBottom: _propTypes.default.number.isRequired,
  scrollAreaRef: refPropType,
  scrollBoxRef: refPropType,
  scrolledToEnd: _propTypes.default.bool.isRequired,
  scrolledToStart: _propTypes.default.bool.isRequired,
  scrollLeft: _propTypes.default.func.isRequired,
  scrollRight: _propTypes.default.func.isRequired,
  children: _propTypes.default.node.isRequired
};