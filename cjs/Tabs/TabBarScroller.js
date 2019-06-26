"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabBarScroller = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Chevron = require("../icons/Chevron");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
    className: (0, _classnames.default)('scroll-button', {
      hidden: scrolledToStart
    })
  }, _ref2), _react.default.createElement("div", {
    className: "scroll-box-clipper"
  }, _react.default.createElement("div", {
    className: "scroll-box",
    ref: scrollBoxRef,
    style: {
      marginBottom: marginBottom
    }
  }, _react.default.createElement("div", {
    className: 'scroll-area',
    ref: scrollAreaRef
  }, children))), _react.default.createElement("button", {
    onClick: scrollRight,
    className: (0, _classnames.default)('scroll-button', {
      hidden: scrolledToEnd
    })
  }, _ref3));
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