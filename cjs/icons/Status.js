"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Valid = Valid;
exports.Warning = Warning;
exports.Error = Error;
exports.Loading = Loading;
exports.StatusIconNoDefault = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Icon: Valid
 * =============
 */
var iconStyleValid = ["svg.jsx-294723437{fill:".concat(_theme.colors.blue600, ";width:24px;height:24px;margin-right:4px;}")];
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
var iconStyleWarning = ["svg.jsx-4220013059{fill:".concat(_theme.colors.yellow500, ";width:24px;height:24px;margin-right:4px;}")];
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
var iconStyleError = ["svg.jsx-1515634284{fill:".concat(_theme.colors.red500, ";width:24px;height:24px;margin-right:4px;}")];
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
   * Icon: Loading
   * =============
   */

};
var iconStyleLoading = ["svg.jsx-2864077861{fill:".concat(_theme.theme.primary600, ";color:").concat(_theme.theme.primary600, ";width:24px;height:24px;margin-right:4px;-webkit-animation:anim-rotate-jsx-2864077861 1.4s linear infinite;animation:anim-rotate-jsx-2864077861 1.4s linear infinite;}"), ".circle.jsx-2864077861{stroke:currentColor;stroke-dasharray:80px,200px;stroke-dashoffset:0;-webkit-animation:anim-dash-jsx-2864077861 1.4s ease-in-out infinite;animation:anim-dash-jsx-2864077861 1.4s ease-in-out infinite;}", "@-webkit-keyframes anim-rotate-jsx-2864077861{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes anim-rotate-jsx-2864077861{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@-webkit-keyframes anim-dash-jsx-2864077861{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0;}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px;}100%{stroke-dasharray:100px,200px;stroke-dashoffset:-120px;}}", "@keyframes anim-dash-jsx-2864077861{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0;}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px;}100%{stroke-dasharray:100px,200px;stroke-dashoffset:-120px;}}"];
/**
 * @param {Object} props
 * @param {string} props.className
 * @returns {ReactNode}
 */

iconStyleLoading.__hash = "2864077861";

function Loading(_ref4) {
  var className = _ref4.className;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "22 22 44 44",
    className: "jsx-".concat(iconStyleLoading.__hash) + " " + (className || "")
  }, _react.default.createElement("circle", {
    cx: "44",
    cy: "44",
    r: "20.2",
    fill: "none",
    strokeWidth: "3.6",
    className: "jsx-".concat(iconStyleLoading.__hash) + " " + "circle"
  }), _react.default.createElement(_style.default, {
    id: iconStyleLoading.__hash
  }, iconStyleLoading));
}

Loading.propTypes = {
  className: _propTypes.default.string.isRequired
  /**
   * @param {Object} props
   * @param {string} props.status
   * @param {string} props.className
   * @returns {ReactNode}
   */

};

var StatusIconNoDefault = function StatusIconNoDefault(_ref5) {
  var error = _ref5.error,
      warning = _ref5.warning,
      valid = _ref5.valid,
      loading = _ref5.loading,
      className = _ref5.className;
  return valid ? _react.default.createElement(Valid, {
    className: className
  }) : warning ? _react.default.createElement(Warning, {
    className: className
  }) : error ? _react.default.createElement(Error, {
    className: className
  }) : loading ? _react.default.createElement(Loading, {
    className: className
  }) : null;
};

exports.StatusIconNoDefault = StatusIconNoDefault;
StatusIconNoDefault.propTypes = {
  valid: _propTypes.default.bool,
  error: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  className: _propTypes.default.string
};