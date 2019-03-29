"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fieldset = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("../../forms/constants");

var _theme = require("../../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = new String(".flatline.jsx-921583270{bottom:0;border:1px solid ".concat(_theme.colors.grey500, ";border-radius:5px;box-sizing:border-box;display:block;height:100%;left:0;padding-left:8px;pointer-events:none;position:absolute;right:0;}.field.status-default:hover .flatline.jsx-921583270,.field.status-default:hover .flatline.idle.filled.jsx-921583270,.field.status-default:hover .flatline.focused.jsx-921583270{border:1px solid ").concat(_theme.colors.grey700, ";}.field.status-default.disabled .flatline.jsx-921583270,.field.status-default.disabled:hover .flatline.jsx-921583270{border:1px solid rgba(196,196,196,0.2);}.flatline.idle.filled.jsx-921583270{border:1.5px solid ").concat(_theme.colors.grey500, ";}.flatline.focused.jsx-921583270{border:1.5px solid ").concat(_theme.theme.secondary600, ";}.flatline.valid.jsx-921583270,.flatline.valid.idle.filled.jsx-921583270,.flatline.valid.focused.jsx-921583270{border:1.5px solid ").concat(_theme.colors.blue600, ";}.flatline.warning.jsx-921583270,.flatline.warning.idle.filled.jsx-921583270,.flatline.warning.focused.jsx-921583270{border:1.5px solid ").concat(_theme.colors.yellow500, ";}.flatline.error.jsx-921583270,.flatline.error.idle.filled.jsx-921583270,.flatline.error.focused.jsx-921583270{border:1.5px solid ").concat(_theme.colors.red500, ";}"));
styles.__hash = "921583270";

var Fieldset = function Fieldset(props) {
  if (props.kind !== 'outlined') return null;
  var className = (0, _classnames.default)('flatline', props.status, {
    focused: props.isFocused,
    idle: !props.isFocused,
    filled: props.hasValue
  });
  return _react.default.createElement("fieldset", {
    className: "jsx-".concat(styles.__hash) + " " + (className || "")
  }, _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.Fieldset = Fieldset;