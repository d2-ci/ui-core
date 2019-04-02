"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Fieldset = require("./Fieldset");

var _theme = require("../../theme");

var _constants = require("../../forms/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = new String(".label.jsx-4219440431{color:".concat(_theme.colors.grey700, ";display:inline-block;font-size:").concat(_constants.inputFontSizeValue, ";line-height:19px;pointer-events:none;position:absolute;-webkit-transition:all 0.1s;transition:all 0.1s;white-space:nowrap;}.label.outlined.jsx-4219440431{-webkit-transform:translate(-2px,22px);-ms-transform:translate(-2px,22px);transform:translate(-2px,22px);padding:0 10px 0 2px;}.label.outlined.dense.jsx-4219440431{-webkit-transform:translate(-2px,18px);-ms-transform:translate(-2px,18px);transform:translate(-2px,18px);}.label.filled.jsx-4219440431{display:block;left:0;position:absolute;top:0;-webkit-transform:translate(").concat(_constants.innerSpacingSides, ",20px);-ms-transform:translate(").concat(_constants.innerSpacingSides, ",20px);transform:translate(").concat(_constants.innerSpacingSides, ",20px);}.label.filled.dense.jsx-4219440431{-webkit-transform:translate(").concat(_constants.innerSpacingSides, ",14px);-ms-transform:translate(").concat(_constants.innerSpacingSides, ",14px);transform:translate(").concat(_constants.innerSpacingSides, ",14px);}.label.focused.jsx-4219440431,.label.has-value.jsx-4219440431{font-size:12px;}.label.filled.focused.jsx-4219440431,.label.filled.has-value.jsx-4219440431{-webkit-transform:translate(").concat(_constants.innerSpacingSides, ",8px);-ms-transform:translate(").concat(_constants.innerSpacingSides, ",8px);transform:translate(").concat(_constants.innerSpacingSides, ",8px);}.label.filled.dense.focused.jsx-4219440431,.label.filled.dense.has-value.jsx-4219440431{-webkit-transform:translate(").concat(_constants.innerSpacingSides, ",6px);-ms-transform:translate(").concat(_constants.innerSpacingSides, ",6px);transform:translate(").concat(_constants.innerSpacingSides, ",6px);}.label.outlined.focused.jsx-4219440431,.label.outlined.has-value.jsx-4219440431{position:static;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}.label.required.jsx-4219440431::after{content:'*';}.label.filled.focused.jsx-4219440431{color:").concat(_theme.theme.secondary600, ";}.label.filled.has-icon.jsx-4219440431{left:24px;}.label.filled.shrink.has-icon.jsx-4219440431{left:24px;}.label.outlined.focused.jsx-4219440431{color:").concat(_theme.theme.secondary600, ";}.label.outlined.has-icon.jsx-4219440431{left:24px;}.label.outlined.shrink.has-icon.jsx-4219440431{left:8px;}.icon-valid.jsx-4219440431,.label.filled.valid.jsx-4219440431,.label.outlined.valid.jsx-4219440431{color:").concat(_theme.colors.blue600, ";}.icon-warning.jsx-4219440431,.label.filled.warning.jsx-4219440431,.label.outlined.warning.jsx-4219440431{color:").concat(_theme.colors.yellow500, ";}.icon-error.jsx-4219440431,.label.filled.error.jsx-4219440431,.label.outlined.error.jsx-4219440431{color:").concat(_theme.colors.red500, ";}"));
styles.__hash = "4219440431";

var createClassName = function createClassName(props) {
  var _cx;

  return (0, _classnames.default)('label', (_cx = {
    shrink: props.isShrinked,
    focused: props.isFocused,
    required: props.isRequired,
    disabled: props.isDisabled
  }, _defineProperty(_cx, props.status, true), _defineProperty(_cx, props.size, true), _defineProperty(_cx, props.kind, true), _defineProperty(_cx, 'has-icon', props.hasIcon), _defineProperty(_cx, 'has-value', props.hasValue), _defineProperty(_cx, typeof className === 'string' ? props.className : '', typeof className === 'string' && !!props.className), _cx));
};

var Label = function Label(props) {
  var renderedLabel = _react.default.createElement("label", {
    style: props.styles instanceof Object ? props.styles : {},
    className: "jsx-".concat(styles.__hash) + " " + (createClassName(props) || "")
  }, props.label, _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));

  if (!props.isFilled) {
    return _react.default.createElement(_Fieldset.Fieldset, {
      kind: props.kind,
      status: props.status,
      isFocused: props.isFocused,
      hasValue: props.hasValue
    }, renderedLabel);
  }

  return renderedLabel;
};

exports.Label = Label;
Label.propTypes = {
  label: _propTypes.default.string.isRequired,
  status: _propTypes.default.string.isRequired,
  size: _propTypes.default.string.isRequired,
  kind: _propTypes.default.string.isRequired,
  isShrinked: _propTypes.default.bool.isRequired,
  isFilled: _propTypes.default.bool.isRequired,
  isFocused: _propTypes.default.bool.isRequired,
  isDisabled: _propTypes.default.bool.isRequired,
  isRequired: _propTypes.default.bool.isRequired,
  isOutlined: _propTypes.default.bool.isRequired,
  hasValue: _propTypes.default.bool.isRequired,
  hasIcon: _propTypes.default.bool.isRequired,
  className: _propTypes.default.string,
  styles: _propTypes.default.object
};
Label.defaultProps = {
  className: '',
  styles: {}
};