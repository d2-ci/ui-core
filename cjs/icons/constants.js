"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconStatusPropType = exports.statusToIcon = exports.iconStatuses = void 0;

var _Status = require("./Status");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _statusToIcon;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iconStatuses = {
  DEFAULT: 'default',
  VALID: 'valid',
  WARNING: 'warning',
  ERROR: 'error'
};
exports.iconStatuses = iconStatuses;
var statusToIcon = (_statusToIcon = {}, _defineProperty(_statusToIcon, iconStatuses.VALID, _Status.Valid), _defineProperty(_statusToIcon, iconStatuses.WARNING, _Status.Warning), _defineProperty(_statusToIcon, iconStatuses.ERROR, _Status.Error), _statusToIcon);
exports.statusToIcon = statusToIcon;

var iconStatusPropType = _propTypes.default.oneOf([iconStatuses.DEFAULT, iconStatuses.VALID, iconStatuses.WARNING, iconStatuses.ERROR]);

exports.iconStatusPropType = iconStatusPropType;