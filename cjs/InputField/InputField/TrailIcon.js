"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrailIcon = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../icons/helpers");

var _Status = require("../../icons/Status");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TrailIcon = function TrailIcon(_ref) {
  var status = _ref.status,
      trail = _ref.trail;
  return status !== 'default' ? (0, _helpers.createIcon)(_Status.statusToIcon[status], status) : trail;
};

exports.TrailIcon = TrailIcon;
TrailIcon.propTypes = {
  status: _propTypes.default.string,
  fn: _propTypes.default.func
};
TrailIcon.defaultProps = {
  trail: ''
};