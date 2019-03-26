"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconStyleError = exports.iconStyleWarning = exports.iconStyleValid = exports.iconStyleDefault = exports.iconStyle = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconStyle = {
  styles: _react.default.createElement(_style.default, {
    id: "3631708475"
  }, "svg.jsx-3631708475{width:24px;height:24px;margin-right:8px;}"),
  className: "jsx-3631708475"
};
exports.iconStyle = iconStyle;
var iconStyleDefault = {
  styles: _react.default.createElement(_style.default, {
    id: "3701378741"
  }, "svg.jsx-3701378741{fill:".concat(_theme.colors.grey700, ";}")),
  className: "jsx-3701378741"
};
exports.iconStyleDefault = iconStyleDefault;
var iconStyleValid = {
  styles: _react.default.createElement(_style.default, {
    id: "1171192407"
  }, "svg.jsx-1171192407{fill:".concat(_theme.colors.blue600, ";}")),
  className: "jsx-1171192407"
};
exports.iconStyleValid = iconStyleValid;
var iconStyleWarning = {
  styles: _react.default.createElement(_style.default, {
    id: "3632662251"
  }, "svg.jsx-3632662251{fill:".concat(_theme.colors.yellow500, ";}")),
  className: "jsx-3632662251"
};
exports.iconStyleWarning = iconStyleWarning;
var iconStyleError = {
  styles: _react.default.createElement(_style.default, {
    id: "1499097800"
  }, "svg.jsx-1499097800{fill:".concat(_theme.colors.red500, ";}")),
  className: "jsx-1499097800"
};
exports.iconStyleError = iconStyleError;