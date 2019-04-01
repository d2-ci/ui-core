"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Valid = Valid;
exports.Warning = Warning;
exports.Error = Error;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconStyleValid = new String("svg.jsx-1819142562{fill:".concat(_theme.colors.blue600, ";width:24px;height:24px;margin-right:8px;}"));
iconStyleValid.__hash = "1819142562";
var iconStyleWarning = new String("svg.jsx-1902194108{fill:".concat(_theme.colors.yellow500, ";width:24px;height:24px;margin-right:8px;}"));
iconStyleWarning.__hash = "1902194108";
var iconStyleError = new String("svg.jsx-6165027{fill:".concat(_theme.colors.red500, ";width:24px;height:24px;margin-right:8px;}"));
/**
 * @param {Object} props
 * @param {string} props.className
 * @returns {ReactNode}
 */

iconStyleError.__hash = "6165027";

function Valid(_ref) {
  var className = _ref.className;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: "jsx-".concat(iconStyleValid.__hash) + " " + (className || "")
  }, _react.default.createElement("path", {
    d: "M0 0h48v48H0z",
    fill: "none",
    className: "jsx-".concat(iconStyleValid.__hash)
  }), _react.default.createElement("path", {
    d: "M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z",
    className: "jsx-".concat(iconStyleValid.__hash)
  }), _react.default.createElement(_style.default, {
    id: iconStyleValid.__hash
  }, iconStyleValid));
}

Valid.propTypes = {
  className: _propTypes.default.string.isRequired
  /**
   * @param {Object} props
   * @param {string} props.className
   * @returns {ReactNode}
   */

};

function Warning(_ref2) {
  var className = _ref2.className;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: "jsx-".concat(iconStyleWarning.__hash) + " " + (className || "")
  }, _react.default.createElement("path", {
    d: "M0 0h48v48H0z",
    fill: "none",
    className: "jsx-".concat(iconStyleWarning.__hash)
  }), _react.default.createElement("path", {
    d: "M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z",
    className: "jsx-".concat(iconStyleWarning.__hash)
  }), _react.default.createElement(_style.default, {
    id: iconStyleWarning.__hash
  }, iconStyleWarning));
}

Warning.propTypes = {
  className: _propTypes.default.string.isRequired
  /**
   * @param {Object} props
   * @param {string} props.className
   * @returns {ReactNode}
   */

};

function Error(_ref3) {
  var className = _ref3.className;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: "jsx-".concat(iconStyleError.__hash) + " " + (className || "")
  }, _react.default.createElement("path", {
    d: "M0 0h48v48H0z",
    fill: "none",
    className: "jsx-".concat(iconStyleError.__hash)
  }), _react.default.createElement("path", {
    d: "M24 4C12.96 4 4 12.95 4 24s8.96 20 20 20 20-8.95 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z",
    className: "jsx-".concat(iconStyleError.__hash)
  }), _react.default.createElement(_style.default, {
    id: iconStyleError.__hash
  }, iconStyleError));
}

Error.propTypes = {
  className: _propTypes.default.string.isRequired
};