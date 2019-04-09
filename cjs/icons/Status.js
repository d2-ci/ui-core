"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Valid = Valid;
exports.Warning = Warning;
exports.Error = Error;
exports.StatusIconNoDefault = exports.statusToIcon = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _theme = require("../theme");

var _constants = require("./constants");

var _statusToIcon;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var statusToIcon = (_statusToIcon = {}, _defineProperty(_statusToIcon, _constants.iconStatuses.VALID, Valid), _defineProperty(_statusToIcon, _constants.iconStatuses.WARNING, Warning), _defineProperty(_statusToIcon, _constants.iconStatuses.ERROR, Error), _statusToIcon);
/**
 * Icon: Valid
 * =============
 */

exports.statusToIcon = statusToIcon;
var iconStyleValid = new String("svg.jsx-294723437{fill:".concat(_theme.colors.blue600, ";width:24px;height:24px;margin-right:4px;}"));
/**
 * @param {Object} props
 * @param {string} props.className
 * @returns {ReactNode}
 */

iconStyleValid.__hash = "294723437";

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
   * Icon: Warning
   * =============
   */

};
var iconStyleWarning = new String("svg.jsx-4220013059{fill:".concat(_theme.colors.yellow500, ";width:24px;height:24px;margin-right:4px;}"));
/**
 * @param {Object} props
 * @param {string} props.className
 * @returns {ReactNode}
 */

iconStyleWarning.__hash = "4220013059";

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
   * Icon: Error
   * =============
   */

};
var iconStyleError = new String("svg.jsx-1515634284{fill:".concat(_theme.colors.red500, ";width:24px;height:24px;margin-right:4px;}"));
/**
 * @param {Object} props
 * @param {string} props.className
 * @returns {ReactNode}
 */

iconStyleError.__hash = "1515634284";

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
  /**
   * @param {Object} props
   * @param {string} props.status
   * @param {string} props.className
   * @returns {ReactNode}
   */

};

var StatusIconNoDefault = function StatusIconNoDefault(_ref4) {
  var status = _ref4.status,
      className = _ref4.className;
  return status === _constants.iconStatuses.VALID ? _react.default.createElement(Valid, {
    className: className
  }) : status === _constants.iconStatuses.WARNING ? _react.default.createElement(Warning, {
    className: className
  }) : status === _constants.iconStatuses.ERROR ? _react.default.createElement(Error, {
    className: className
  }) : null;
};

exports.StatusIconNoDefault = StatusIconNoDefault;
StatusIconNoDefault.propTypes = {
  status: _constants.iconStatusPropType,
  className: _propTypes.default.string
};
StatusIconNoDefault.defaultProps = {
  className: ''
};