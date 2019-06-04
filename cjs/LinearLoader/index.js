"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinearLoader = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = function Progress(_ref) {
  var amount = _ref.amount;
  return _react.default.createElement("div", {
    className: _style.default.dynamic([["686723300", [amount]], ["1637603713", [_theme.theme.primary600]]])
  }, _react.default.createElement(_style.default, {
    id: "686723300",
    dynamic: [amount]
  }, ["div.__jsx-style-dynamic-selector{width:".concat(amount, "%;}")]), _react.default.createElement(_style.default, {
    id: "1637603713",
    dynamic: [_theme.theme.primary600]
  }, ["div.__jsx-style-dynamic-selector{background-color:".concat(_theme.theme.primary600, ";-webkit-transition:width 0.3s linear;transition:width 0.3s linear;height:4px;}")]));
};

var LinearLoader = function LinearLoader(_ref2) {
  var amount = _ref2.amount,
      width = _ref2.width,
      margin = _ref2.margin,
      className = _ref2.className;
  return _react.default.createElement("div", {
    role: "progressbar",
    className: "jsx-1195089001 " + _style.default.dynamic([["1108775591", [width, margin]]]) + " " + (className || "")
  }, _react.default.createElement(Progress, {
    amount: amount
  }), _react.default.createElement(_style.default, {
    id: "1195089001"
  }, ["div.jsx-1195089001{display:block;overflow:hidden;overflow-x:hidden;overflow-y:hidden;background-color:rgba(110,122,138,0.2);}"]), _react.default.createElement(_style.default, {
    id: "1108775591",
    dynamic: [width, margin]
  }, [".__jsx-style-dynamic-selector{width:".concat(width, ";margin:").concat(margin, ";}")]));
};

exports.LinearLoader = LinearLoader;
LinearLoader.defaultProps = {
  amount: 0,
  margin: '10px',
  width: '300px'
};
LinearLoader.propTypes = {
  className: _propTypes.default.string,

  /** set the progression in percentage (without the % suffix) */
  amount: _propTypes.default.number,
  margin: _propTypes.default.string,

  /** set the width of the entire indicator, e.g. '100%' or '300px'. */
  width: _propTypes.default.string
};