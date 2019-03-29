"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("../../forms/constants");

var _theme = require("../../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = new String(".label.jsx-1166603618{color:".concat(_theme.colors.grey700, ";display:block;font-size:").concat(_constants.inputFontSizeValue, ";padding:0 10px 0 2px;pointer-events:none;position:absolute;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-transform:translate(-2px,0) scale(1);-ms-transform:translate(-2px,0) scale(1);transform:translate(-2px,0) scale(1);-webkit-transition:all 0.1s;transition:all 0.1s;white-space:nowrap;}.label.outlined.jsx-1166603618{background:white;}.label.required.jsx-1166603618::after{content:'*';}.label.filled.focused.jsx-1166603618{color:").concat(_theme.theme.secondary600, ";}.label.filled.shrink.jsx-1166603618{-webkit-transform:translate(-2px,-12px) scale(0.75);-ms-transform:translate(-2px,-12px) scale(0.75);transform:translate(-2px,-12px) scale(0.75);}.label.filled.dense.shrink.jsx-1166603618{-webkit-transform:translate(-2px,-8px) scale(0.75);-ms-transform:translate(-2px,-8px) scale(0.75);transform:translate(-2px,-8px) scale(0.75);}.label.filled.has-icon.jsx-1166603618{left:24px;}.label.filled.shrink.has-icon.jsx-1166603618{left:24px;}.label.outlined.focused.jsx-1166603618{color:").concat(_theme.theme.secondary600, ";}.label.outlined.shrink.jsx-1166603618{-webkit-transform:translate(-2px,-24px) scale(0.75);-ms-transform:translate(-2px,-24px) scale(0.75);transform:translate(-2px,-24px) scale(0.75);}.label.outlined.shrink.dense.jsx-1166603618{-webkit-transform:translate(-2px,-18px) scale(0.75);-ms-transform:translate(-2px,-18px) scale(0.75);transform:translate(-2px,-18px) scale(0.75);}.label.outlined.has-icon.jsx-1166603618{left:24px;}.label.outlined.shrink.has-icon.jsx-1166603618{left:8px;}.icon-valid.jsx-1166603618,.label.filled.valid.jsx-1166603618,.label.outlined.valid.jsx-1166603618{color:").concat(_theme.colors.blue600, ";}.icon-warning.jsx-1166603618,.label.filled.warning.jsx-1166603618,.label.outlined.warning.jsx-1166603618{color:").concat(_theme.colors.yellow500, ";}.icon-error.jsx-1166603618,.label.filled.error.jsx-1166603618,.label.outlined.error.jsx-1166603618{color:").concat(_theme.colors.red500, ";}"));
styles.__hash = "1166603618";

var createClassName = function createClassName(props) {
  var _cx;

  return (0, _classnames.default)('label', (_cx = {
    shrink: props.isShrinked,
    focused: props.isFocused,
    required: props.isRequired,
    disabled: props.isDisabled
  }, _defineProperty(_cx, props.status, true), _defineProperty(_cx, props.size, true), _defineProperty(_cx, props.kind, true), _defineProperty(_cx, 'has-icon', props.hasIcon), _defineProperty(_cx, typeof className === 'string' ? props.className : '', typeof className === 'string' && !!props.className), _cx));
};

var Label = function Label(props) {
  return _react.default.createElement("label", {
    style: props.styles instanceof Object ? props.styles : {},
    className: "jsx-".concat(styles.__hash) + " " + (createClassName(props) || "")
  }, props.label, _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.Label = Label;
Label.propTypes = {
  label: _propTypes.default.string.isRequired,
  status: _propTypes.default.string.isRequired,
  size: _propTypes.default.string.isRequired,
  kind: _propTypes.default.string.isRequired,
  isShrinked: _propTypes.default.bool.isRequired,
  isFocused: _propTypes.default.bool.isRequired,
  isDisabled: _propTypes.default.bool.isRequired,
  isRequired: _propTypes.default.bool.isRequired,
  hasIcon: _propTypes.default.bool.isRequired,
  className: _propTypes.default.string,
  styles: _propTypes.default.object
};
Label.defaultProps = {
  className: '',
  styles: {}
};