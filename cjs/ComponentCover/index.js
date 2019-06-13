"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentCover = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentCover = function ComponentCover(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react.default.createElement("div", {
    className: _style.default.dynamic([["3698233511", [_theme.layers.applicationTop - 1]]]) + " " + (className || "")
  }, children, _react.default.createElement(_style.default, {
    id: "3698233511",
    dynamic: [_theme.layers.applicationTop - 1]
  }, ["div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;height:inherit;width:inherit;z-index:".concat(_theme.layers.applicationTop - 1, ";background:rgba(33,43,54,0.4);}")]));
};

exports.ComponentCover = ComponentCover;
ComponentCover.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};