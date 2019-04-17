"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropMenu = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_style.default, {
  id: "795226118"
}, "div.jsx-795226118{z-index:1000;position:absolute;top:38px;left:0;}");

var DropMenu = function DropMenu(_ref) {
  var component = _ref.component,
      className = _ref.className;
  return _react.default.createElement("div", {
    className: "jsx-795226118" + " " + (className || "")
  }, component, _ref2);
};

exports.DropMenu = DropMenu;
DropMenu.propTypes = {
  className: _propTypes.default.string,

  /** The component to use as the dropdown component */
  component: _propTypes.default.element
};