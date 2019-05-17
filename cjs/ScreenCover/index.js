"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreenCover = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Backdrop = function Backdrop(_ref) {
  var onClick = _ref.onClick,
      withoutBackgroundColor = _ref.withoutBackgroundColor;
  return _react.default.createElement("div", {
    onClick: onClick,
    className: _style.default.dynamic([["3379163213", [withoutBackgroundColor ? 'none' : 'rgba(200, 200, 200, 0.6)']]]) + " " + "backdrop"
  }, _react.default.createElement(_style.default, {
    id: "3379163213",
    dynamic: [withoutBackgroundColor ? 'none' : 'rgba(200, 200, 200, 0.6)']
  }, ["div.__jsx-style-dynamic-selector{height:100%;width:100%;background:".concat(withoutBackgroundColor ? 'none' : 'rgba(200, 200, 200, 0.6)', ";}")]));
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
      className = _ref3.className,
      withoutBackgroundColor = _ref3.withoutBackgroundColor;
  return _react.default.createElement("div", {
    className: "jsx-3477031661" + " " + (className || "")
  }, _react.default.createElement(Backdrop, {
    onClick: onClick,
    withoutBackgroundColor: withoutBackgroundColor
  }), _react.default.createElement(Content, null, children), _react.default.createElement(_style.default, {
    id: "3477031661"
  }, ["div.jsx-3477031661{position:fixed;height:100%;width:100%;left:0;top:0;z-index:10000;}"]));
};

exports.ScreenCover = ScreenCover;
ScreenCover.propTypes = {
  onClick: _propTypes.default.func,
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  withoutBackgroundColor: _propTypes.default.bool
};