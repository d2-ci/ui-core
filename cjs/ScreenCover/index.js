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

var ScreenCover = function ScreenCover(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: "jsx-3174044719" + " " + "screen-cover"
  }, _react.default.createElement("div", {
    onClick: onClick,
    className: "jsx-3174044719" + " " + "backdrop"
  }), _react.default.createElement("div", {
    className: "jsx-3174044719" + " " + "children"
  }, children), _react.default.createElement(_style.default, {
    id: "3174044719"
  }, [".screen-cover.jsx-3174044719{position:fixed;height:100%;width:100%;left:0;top:0;z-index:10000;}", ".backdrop.jsx-3174044719{height:100%;width:100%;background:rgba(200,200,200,0.6);}", ".children.jsx-3174044719{position:absolute;top:50%;left:50%;width:auto;height:auto;-webkit-transform:translate(-50% -50%);-ms-transform:translate(-50% -50%);transform:translate(-50% -50%);}"]));
};

exports.ScreenCover = ScreenCover;
ScreenCover.propTypes = {
  onClick: _propTypes.default.func
};