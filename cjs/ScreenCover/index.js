"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreenCover = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Backdrop = function Backdrop(_ref) {
  var onClick = _ref.onClick;
  return _react.default.createElement("div", {
    onClick: onClick,
    className: "jsx-3800920199" + " " + "backdrop"
  }, _react.default.createElement(_style.default, {
    id: "3800920199"
  }, ["div.jsx-3800920199{height:100%;width:100%;background:rgba(33,43,54,0.4);}"]));
};

var Content = function Content(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("div", {
    className: "jsx-3777292165"
  }, children, _react.default.createElement(_style.default, {
    id: "3777292165"
  }, ["div.jsx-3777292165{position:absolute;top:50%;left:50%;width:auto;height:auto;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}"]));
};

var ScreenCover = function ScreenCover(_ref3) {
  var children = _ref3.children,
      onClick = _ref3.onClick,
      className = _ref3.className;
  return _react.default.createElement("div", {
    className: _style.default.dynamic([["3490552007", [_theme.layers.blocking]]]) + " " + (className || "")
  }, _react.default.createElement(Backdrop, {
    onClick: onClick
  }), _react.default.createElement(Content, null, children), _react.default.createElement(_style.default, {
    id: "3490552007",
    dynamic: [_theme.layers.blocking]
  }, ["div.__jsx-style-dynamic-selector{position:fixed;height:100%;width:100%;left:0;top:0;z-index:".concat(_theme.layers.blocking, ";}")]));
};

exports.ScreenCover = ScreenCover;
ScreenCover.propTypes = {
  onClick: _propTypes.default.func,
  className: _propTypes.default.string,
  children: _propTypes.default.node
};