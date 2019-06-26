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
    onClick: scrollLeft,
    className: "jsx-1963242254 " + _style.default.dynamic([["644243040", [marginBottom]]]) + " " + ((0, _classnames.default)('scroll-button', {
      hidden: scrolledToStart
    }) || "")
  }, _ref2), _react.default.createElement("div", {
    className: "jsx-1963242254 " + _style.default.dynamic([["644243040", [marginBottom]]]) + " " + "scroll-box-clipper"
  }, _react.default.createElement("div", {
    ref: scrollBoxRef,
    className: "jsx-1963242254 " + _style.default.dynamic([["644243040", [marginBottom]]]) + " " + "scroll-box"
  }, _react.default.createElement("div", {
    ref: scrollAreaRef,
    className: "jsx-1963242254 " + _style.default.dynamic([["644243040", [marginBottom]]]) + " " + 'scroll-area'
  }, children))), _react.default.createElement("button", {
    onClick: scrollRight,
    className: "jsx-1963242254 " + _style.default.dynamic([["644243040", [marginBottom]]]) + " " + ((0, _classnames.default)('scroll-button', {
      hidden: scrolledToEnd
    }) || "")
  }, _ref3), _react.default.createElement(_style.default, {
    id: "644243040",
    dynamic: [marginBottom]
  }, [".scroll-box.__jsx-style-dynamic-selector{margin-bottom:".concat(marginBottom, "px;}")]), _react.default.createElement(_style.default, {
    id: "1963242254"
  }, [".scroll-button.jsx-1963242254{-webkit-flex:0 0 3rem;-ms-flex:0 0 3rem;flex:0 0 3rem;color:inherit;border-radius:8px;background-color:transparent;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;border:none;outline:none;cursor:pointer;opacity:1;-webkit-transition:opacity 150ms ease-in-out;transition:opacity 150ms ease-in-out;height:4px;}", ".scroll-button.jsx-1963242254:active{background-color:#e0e0e0;}", ".scroll-button.hidden.jsx-1963242254{pointer-events:none;opacity:0;}", ".scroll-box-clipper.jsx-1963242254{overflow-y:hidden;}", ".scroll-box.jsx-1963242254{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-x:scroll;-webkit-overflow-scrolling:touch;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".scroll-box.jsx-1963242254::-webkit-scrollbar{display:none;}", ".scroll-area.jsx-1963242254{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-transform:none;-ms-transform:none;transform:none;will-change:transform;}", "@-moz-document url-prefix(){.tab-container.jsx-1963242254{width:-moz-max-content;}}"]));
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