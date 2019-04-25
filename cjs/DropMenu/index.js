"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropMenu = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropMenu = function DropMenu(_ref) {
  var component = _ref.component,
      className = _ref.className;
  return _reactDom.default.createPortal(_react.default.createElement("div", {
    className: "jsx-1173471951" + " " + (className || "")
  }, component, _react.default.createElement(_style.default, {
    id: "1173471951"
  }, ["div.jsx-1173471951{z-index:1000;position:absolute;}"])), document.body);
};

exports.DropMenu = DropMenu;
DropMenu.propTypes = {
  className: _propTypes.default.string,

  /** The component to use as the dropdown component */
  component: _propTypes.default.element
};