"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
  var children = _ref.children;
  return _react.default.createElement("h1", {
    className: _style.default.dynamic([["608308278", [_theme.spacers.dp24, _theme.spacers.dp24, _theme.spacers.dp16]]]) + " " + ((0, _classnames.default)('title') || "")
  }, children, _react.default.createElement(_style.default, {
    id: "608308278",
    dynamic: [_theme.spacers.dp24, _theme.spacers.dp24, _theme.spacers.dp16]
  }, ["h1.__jsx-style-dynamic-selector{font-size:20px;font-weight:500;line-height:24px;padding:".concat(_theme.spacers.dp24, " ").concat(_theme.spacers.dp24, " 0;margin:0 0 ").concat(_theme.spacers.dp16, ";}")]));
};

exports.Title = Title;
Title.propTypes = {
  children: _propTypes.default.string.isRequired
};