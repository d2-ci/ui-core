"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoWhite = exports.Logo = exports.LogoIconWhite = exports.LogoIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LogoSvg = require("./LogoSvg");

var _LogoIconSvg = require("./LogoIconSvg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * These are official colors for dhis2 logos.
 *
 * They are isolated here and not in `theme.js` as they should not be
 * shared with any other components.
 *
 * https://github.com/dhis2/dhis2-identity
 *
 */
var blue = '#0080d4';
var white = '#ffffff';
var dark = '#212225';

var LogoIcon = function LogoIcon(_ref) {
  var className = _ref.className;
  return _react.default.createElement(_LogoIconSvg.LogoIconSvg, {
    iconColor: blue,
    className: className
  });
};

exports.LogoIcon = LogoIcon;

var LogoIconWhite = function LogoIconWhite(_ref2) {
  var className = _ref2.className;
  return _react.default.createElement(_LogoIconSvg.LogoIconSvg, {
    iconColor: white,
    className: className
  });
};

exports.LogoIconWhite = LogoIconWhite;

var Logo = function Logo(_ref3) {
  var className = _ref3.className;
  return _react.default.createElement(_LogoSvg.LogoSvg, {
    iconColor: blue,
    textColor: dark,
    className: className
  });
};

exports.Logo = Logo;

var LogoWhite = function LogoWhite(_ref4) {
  var className = _ref4.className;
  return _react.default.createElement(_LogoSvg.LogoSvg, {
    iconColor: white,
    textColor: white,
    className: className
  });
};

exports.LogoWhite = LogoWhite;