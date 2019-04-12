"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconStatusPropType = exports.statusColors = exports.iconStatuses = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../theme");

var _statusColors;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iconStatuses = {
  DEFAULT: 'default',
  VALID: 'valid',
  WARNING: 'warning',
  ERROR: 'error',
  LOADING: 'loading'
};
exports.iconStatuses = iconStatuses;
var statusColors = (_statusColors = {}, _defineProperty(_statusColors, iconStatuses.DEFAULT, _theme.colors.grey500), _defineProperty(_statusColors, iconStatuses.VALID, _theme.colors.blue600), _defineProperty(_statusColors, iconStatuses.WARNING, _theme.colors.yellow500), _defineProperty(_statusColors, iconStatuses.ERROR, _theme.colors.red500), _defineProperty(_statusColors, iconStatuses.LOADING, _theme.colors.blue600), _statusColors);
exports.statusColors = statusColors;

var iconStatusPropType = _propTypes.default.oneOf([iconStatuses.DEFAULT, iconStatuses.VALID, iconStatuses.WARNING, iconStatuses.ERROR, iconStatuses.LOADING]);

exports.iconStatusPropType = iconStatusPropType;