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
 * @param {Object} props
 * @param {string} props.className
 * @returns {ReactNode}
 */
function Valid(_ref) {
  var className = _ref.className;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: _style.default.dynamic([["3622499308", [_theme.theme.valid, _theme.spacers.dp4]]]) + " " + (className || "")
  }, _react.default.createElement("path", {
    d: "M0 0h48v48H0z",
    fill: "none",
    className: _style.default.dynamic([["3622499308", [_theme.theme.valid, _theme.spacers.dp4]]])
  }), _react.default.createElement("path", {
    d: "M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z",
    className: _style.default.dynamic([["3622499308", [_theme.theme.valid, _theme.spacers.dp4]]])
  }), _react.default.createElement(_style.default, {
    id: "3622499308",
    dynamic: [_theme.theme.valid, _theme.spacers.dp4]
  }, ["svg.__jsx-style-dynamic-selector{fill:".concat(_theme.theme.valid, ";width:24px;height:24px;margin-right:").concat(_theme.spacers.dp4, ";}")]));
}

Valid.propTypes = {
  className: _propTypes.default.string
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
    className: _style.default.dynamic([["3829333422", [_theme.theme.warning, _theme.spacers.dp4]]]) + " " + (className || "")
  }, _react.default.createElement("path", {
    d: "M0 0h48v48H0z",
    fill: "none",
    className: _style.default.dynamic([["3829333422", [_theme.theme.warning, _theme.spacers.dp4]]])
  }), _react.default.createElement("path", {
    d: "M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z",
    className: _style.default.dynamic([["3829333422", [_theme.theme.warning, _theme.spacers.dp4]]])
  }), _react.default.createElement(_style.default, {
    id: "3829333422",
    dynamic: [_theme.theme.warning, _theme.spacers.dp4]
  }, ["svg.__jsx-style-dynamic-selector{fill:".concat(_theme.theme.warning, ";width:24px;height:24px;margin-right:").concat(_theme.spacers.dp4, ";}")]));
}

Warning.propTypes = {
  className: _propTypes.default.string
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
    className: _style.default.dynamic([["2400738350", [_theme.theme.error, _theme.spacers.dp4]]]) + " " + (className || "")
  }, _react.default.createElement("path", {
    d: "M0 0h48v48H0z",
    fill: "none",
    className: _style.default.dynamic([["2400738350", [_theme.theme.error, _theme.spacers.dp4]]])
  }), _react.default.createElement("path", {
    d: "M24 4C12.96 4 4 12.95 4 24s8.96 20 20 20 20-8.95 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z",
    className: _style.default.dynamic([["2400738350", [_theme.theme.error, _theme.spacers.dp4]]])
  }), _react.default.createElement(_style.default, {
    id: "2400738350",
    dynamic: [_theme.theme.error, _theme.spacers.dp4]
  }, ["svg.__jsx-style-dynamic-selector{fill:".concat(_theme.theme.error, ";width:24px;height:24px;margin-right:").concat(_theme.spacers.dp4, ";}")]));
}

Error.propTypes = {
  className: _propTypes.default.string
  /**
   * @param {Object} props
   * @param {string} props.className
   * @returns {ReactNode}
   */

};

function Loading(_ref4) {
  var className = _ref4.className;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "22 22 44 44",
    className: _style.default.dynamic([["3901507574", [_theme.theme.primary600, _theme.theme.primary600, _theme.spacers.dp4]]]) + " " + (className || "")
  }, _react.default.createElement("circle", {
    cx: "44",
    cy: "44",
    r: "20.2",
    fill: "none",
    strokeWidth: "3.6",
    className: _style.default.dynamic([["3901507574", [_theme.theme.primary600, _theme.theme.primary600, _theme.spacers.dp4]]]) + " " + "circle"
  }), _react.default.createElement(_style.default, {
    id: "3901507574",
    dynamic: [_theme.theme.primary600, _theme.theme.primary600, _theme.spacers.dp4]
  }, ["svg.__jsx-style-dynamic-selector{fill:".concat(_theme.theme.primary600, ";color:").concat(_theme.theme.primary600, ";width:24px;height:24px;margin-right:").concat(_theme.spacers.dp4, ";-webkit-animation:anim-rotate-__jsx-style-dynamic-selector 1.4s linear infinite;animation:anim-rotate-__jsx-style-dynamic-selector 1.4s linear infinite;}"), ".circle.__jsx-style-dynamic-selector{stroke:currentColor;stroke-dasharray:80px,200px;stroke-dashoffset:0;-webkit-animation:anim-dash-__jsx-style-dynamic-selector 1.4s ease-in-out infinite;animation:anim-dash-__jsx-style-dynamic-selector 1.4s ease-in-out infinite;}", "@-webkit-keyframes anim-rotate-__jsx-style-dynamic-selector{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes anim-rotate-__jsx-style-dynamic-selector{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@-webkit-keyframes anim-dash-__jsx-style-dynamic-selector{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0;}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px;}100%{stroke-dasharray:100px,200px;stroke-dashoffset:-120px;}}", "@keyframes anim-dash-__jsx-style-dynamic-selector{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0;}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px;}100%{stroke-dasharray:100px,200px;stroke-dashoffset:-120px;}}"]));
}

Loading.propTypes = {
  className: _propTypes.default.string
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