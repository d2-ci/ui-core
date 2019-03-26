"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconStatusPropType = exports.iconStatuses = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconStatuses = {
  DEFAULT: 'default',
  VALID: 'valid',
  WARNING: 'warning',
  ERROR: 'error'
};
exports.iconStatuses = iconStatuses;

var iconStatusPropType = _propTypes.default.oneOf([iconStatuses.DEFAULT, iconStatuses.VALID, iconStatuses.WARNING, iconStatuses.ERROR]);

exports.iconStatusPropType = iconStatusPropType;