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
  var onClick = _ref.onClick;
  return _react.default.createElement("div", {
    onClick: onClick,
    className: "jsx-1699153514" + " " + "backdrop"
  }, _react.default.createElement(_style.default, {
    id: "1699153514"
  }, ["div.jsx-1699153514{height:100%;width:100%;background:rgba(200,200,200,0.6);}"]));
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
    className: "jsx-3477031661" + " " + (className || "")
  }, _react.default.createElement(Backdrop, {
    onClick: onClick
  }), _react.default.createElement(Content, null, children), _react.default.createElement(_style.default, {
    id: "3477031661"
  }, ["div.jsx-3477031661{position:fixed;height:100%;width:100%;left:0;top:0;z-index:10000;}"]));
};

exports.ScreenCover = ScreenCover;
ScreenCover.propTypes = {
  onClick: _propTypes.default.func,
  className: _propTypes.default.string,
  children: _propTypes.default.node
};