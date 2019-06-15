"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = require("../Card");

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react.default.createElement(_Card.Card, null, _react.default.createElement("ul", {
    className: _style.default.dynamic([["804892931", [_theme.spacers.dp4]]]) + " " + (className || "")
  }, children), _react.default.createElement(_style.default, {
    id: "804892931",
    dynamic: [_theme.spacers.dp4]
  }, "ul.__jsx-style-dynamic-selector{display:block;position:relative;width:100%;margin:0;padding:".concat(_theme.spacers.dp4, " 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}")));
};

exports.Menu = Menu;
Menu.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.any.isRequired
};