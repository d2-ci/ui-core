"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowDown = ArrowDown;
exports.ArrowUp = ArrowUp;
exports.styles = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = ["svg.jsx-1039571365{fill:inherit;height:24px;width:24px;vertical-align:middle;pointer-events:none;}"];
exports.styles = styles;
styles.__hash = "1039571365";

function ArrowDown() {
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: "jsx-".concat(styles.__hash)
  }, _react.default.createElement("path", {
    d: "M14 20l10 10 10-10z",
    className: "jsx-".concat(styles.__hash)
  }), _react.default.createElement("path", {
    d: "M0 0h48v48H0z",
    fill: "none",
    className: "jsx-".concat(styles.__hash)
  }), _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
}

function ArrowUp() {
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: "jsx-".concat(styles.__hash)
  }, _react.default.createElement("path", {
    d: "M14 28l10-10 10 10z",
    className: "jsx-".concat(styles.__hash)
  }), _react.default.createElement("path", {
    d: "M0 0h48v48H0z",
    fill: "none",
    className: "jsx-".concat(styles.__hash)
  }), _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
}