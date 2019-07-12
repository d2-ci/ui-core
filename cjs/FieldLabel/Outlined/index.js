"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Outlined = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _InputContainer = require("./InputContainer");

var _Label = require("./Label");

var _Status = require("../../icons/Status");

var _constants = require("../constants.js");

var _theme = require("../../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [".label-outlined.jsx-2513833268{position:relative;color:".concat(_theme.colors.grey700, ";}"), ".disabled.jsx-2513833268{cursor:not-allowed;}", ".content.jsx-2513833268{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:42px;left:1px;position:relative;width:calc(100% - 1px);border:1px solid ".concat(_theme.theme.default, ";border-radius:4px;}"), ".dense.jsx-2513833268 .content.jsx-2513833268{height:34px;}", ".focus.jsx-2513833268 .content.jsx-2513833268{border-color:".concat(_theme.colors.teal400, ";}"), ".valid.jsx-2513833268 .content.jsx-2513833268{border-color:".concat(_theme.theme.valid, ";}"), ".warning.jsx-2513833268 .content.jsx-2513833268{border-color:".concat(_theme.theme.warning, ";}"), ".error.jsx-2513833268 .content.jsx-2513833268{border-color:".concat(_theme.theme.error, ";}"), ".disabled.jsx-2513833268 .content.jsx-2513833268{border-color:".concat(_theme.theme.disabled, ";}"), ".status-icon.jsx-2513833268{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:24px;height:24px;margin-right:".concat(_theme.spacers.dp4, ";margin-left:").concat(_theme.spacers.dp12, ";}"), ".status-icon.jsx-2513833268:empty{display:none;}", ".status-icon.jsx-2513833268:last-child{margin-right:".concat(_theme.spacers.dp12, ";}")];
styles.__hash = "2513833268";

var Outlined = function Outlined(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      focus = _ref.focus,
      dense = _ref.dense,
      valid = _ref.valid,
      warning = _ref.warning,
      error = _ref.error,
      onClick = _ref.onClick,
      htmlFor = _ref.htmlFor,
      value = _ref.value,
      required = _ref.required,
      label = _ref.label,
      loading = _ref.loading,
      className = _ref.className;
  return _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + ((0, _classnames.default)('label-outlined', className, {
      disabled: disabled,
      focus: focus,
      dense: dense,
      valid: valid,
      warning: warning,
      error: error,
      value: value
    }) || "")
  }, _react.default.createElement(_Label.Label, {
    focus: focus,
    required: required,
    valid: valid,
    warning: warning,
    error: error,
    dense: dense,
    disabled: disabled,
    value: focus || value,
    label: label,
    htmlFor: htmlFor
  }), _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "content"
  }, _react.default.createElement(_InputContainer.InputContainer, {
    dense: dense
  }, children), _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "status-icon"
  }, _react.default.createElement(_Status.StatusIconNoDefault, {
    error: error,
    valid: valid,
    loading: loading,
    warning: warning
  }))), _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.Outlined = Outlined;
Outlined.propTypes = {
  label: _propTypes.default.string.isRequired,
  htmlFor: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  focus: _propTypes.default.bool,
  value: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  error: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  dense: _propTypes.default.bool,
  className: _propTypes.default.string
};