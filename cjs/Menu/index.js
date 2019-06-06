"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = require("../Card");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react.default.createElement(_Card.Card, null, _react.default.createElement("ul", {
    className: "jsx-1286685313" + " " + (className || "")
  }, children), _react.default.createElement(_style.default, {
    id: "1286685313"
  }, ["ul.jsx-1286685313{display:block;position:relative;width:100%;margin:0;padding:4px 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]));
};

exports.Menu = Menu;
Menu.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.any.isRequired
};