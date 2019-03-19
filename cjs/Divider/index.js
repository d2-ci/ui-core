"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = Divider;
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Divider(_ref) {
  var margin = _ref.margin,
      className = _ref.className;
  var style = {
    margin: margin
  };
  return _react.default.createElement("div", {
    style: style,
    className: _style.default.dynamic([["3843445062", [_theme.colors.grey300]]]) + " " + ((0, _classnames.default)('base', className) || "")
  }, _react.default.createElement(_style.default, {
    id: "3843445062",
    dynamic: [_theme.colors.grey300]
  }, ".base.__jsx-style-dynamic-selector{display:inline-block;width:100%;height:1px;background-color:".concat(_theme.colors.grey300, ";}")));
}

Divider.defaultProps = {
  margin: '8px 0'
};
Divider.propTypes = {
  className: _propTypes.default.string,
  margin: _propTypes.default.string
};
var _default = Divider;
exports.default = _default;