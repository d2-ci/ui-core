"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filled = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _InputContainer = require("./InputContainer");

var _Label = require("./Label");

var _Status = require("../../icons/Status");

var _theme = require("../../theme");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [".label-filled.jsx-3103387163{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,10,0.05);border-bottom:2px solid transparent;border-radius:4px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:56px;position:relative;}", ".label-filled.jsx-3103387163:not(.disabled):hover{background-color:rgba(0,0,10,0.08);}", ".disabled.jsx-3103387163{cursor:not-allowed;}", ".dense.jsx-3103387163{height:44px;}", ".focus.jsx-3103387163{border-color:".concat(_theme.colors.teal600, ";}"), ".valid.jsx-3103387163{border-color:".concat(_theme.theme.valid, ";}"), ".valid.focus.jsx-3103387163{border-color:".concat(_theme.colors.blue700, ";}"), ".warning.jsx-3103387163{border-color:".concat(_theme.theme.warning, ";}"), ".warning.focus.jsx-3103387163{border-color:".concat(_theme.colors.yellow700, ";}"), ".error.jsx-3103387163{border-color:".concat(_theme.theme.error, ";}"), ".error.focus.jsx-3103387163{border-color:".concat(_theme.colors.red700, ";}"), ".content.jsx-3103387163{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;position:relative;width:100%;}", ".focus.jsx-3103387163 .content.jsx-3103387163,.value.jsx-3103387163 .content.jsx-3103387163{z-index:2;}", ".status-icon.jsx-3103387163{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:24px;height:24px;margin-right:4px;}", ".status-icon.jsx-3103387163:empty{display:none;}", ".status-icon.jsx-3103387163:last-child{margin-right:10px;}"];
styles.__hash = "3103387163";

var Filled = function Filled(_ref) {
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
    onClick: onClick,
    className: "jsx-".concat(styles.__hash) + " " + ((0, _classnames.default)('label-filled', className, {
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
    dense: dense,
    focus: focus,
    value: value
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

exports.Filled = Filled;
Filled.propTypes = {
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