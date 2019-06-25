"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(_ref) {
  var children = _ref.children,
      scrollable = _ref.scrollable;
  return _react.default.createElement("div", {
    className: _style.default.dynamic([["3352954201", [_theme.spacers.dp32, _theme.spacers.dp24, _theme.spacers.dp24]]]) + " " + ((0, _classnames.default)({
      scrollable: scrollable
    }) || "")
  }, children, _react.default.createElement(_style.default, {
    id: "3352954201",
    dynamic: [_theme.spacers.dp32, _theme.spacers.dp24, _theme.spacers.dp24]
  }, ["div.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-bottom:".concat(_theme.spacers.dp32, ";overflow-y:auto;padding:0 ").concat(_theme.spacers.dp24, ";}"), "div.__jsx-style-dynamic-selector:first-child{padding-top:".concat(_theme.spacers.dp24, ";}")]));
};

exports.Content = Content;
Content.propTypes = {
  children: _propTypes.default.node.isRequired
};