"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconStatusPropType = exports.statusToIcon = exports.statusColors = exports.iconStatuses = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Status = require("./Status");

var _theme = require("../theme");

var _statusColors, _statusToIcon;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iconStatuses = {
  DEFAULT: 'default',
  VALID: 'valid',
  WARNING: 'warning',
  ERROR: 'error'
};
exports.iconStatuses = iconStatuses;
var statusColors = (_statusColors = {}, _defineProperty(_statusColors, iconStatuses.DEFAULT, _theme.colors.grey500), _defineProperty(_statusColors, iconStatuses.VALID, _theme.colors.blue600), _defineProperty(_statusColors, iconStatuses.WARNING, _theme.colors.yellow500), _defineProperty(_statusColors, iconStatuses.ERROR, _theme.colors.red500), _statusColors);
exports.statusColors = statusColors;
var statusToIcon = (_statusToIcon = {}, _defineProperty(_statusToIcon, iconStatuses.VALID, _Status.Valid), _defineProperty(_statusToIcon, iconStatuses.WARNING, _Status.Warning), _defineProperty(_statusToIcon, iconStatuses.ERROR, _Status.Error), _statusToIcon);
exports.statusToIcon = statusToIcon;

var iconStatusPropType = _propTypes.default.oneOf([iconStatuses.DEFAULT, iconStatuses.VALID, iconStatuses.WARNING, iconStatuses.ERROR]);

exports.iconStatusPropType = iconStatusPropType;