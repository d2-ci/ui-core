"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertStack = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { AlertBar } from '../AlertBar'
var AlertStack = function AlertStack(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)(className) || "")
  }, children, _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
};

exports.AlertStack = AlertStack;