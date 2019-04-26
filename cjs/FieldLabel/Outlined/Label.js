"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("../constants");

var _theme = require("../../theme");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = ["label.jsx-3643629999{box-sizing:border-box;height:20px;left:0;line-height:20px;padding-left:16px;position:absolute;top:0;width:100%;}", ".disabled.jsx-3643629999{cursor:not-allowed;}", ".value.jsx-3643629999{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", "label.jsx-3643629999:before{border:1px solid ".concat(_theme.theme.default, ";border-bottom:0;border-right:0;border-radius:").concat(_constants.borderRadius, " 0 0 0;content:'';height:").concat(_constants.inputHeight * 0.75, "px;left:0;position:absolute;top:10px;width:12px;}"), "label.jsx-3643629999:after{border:1px solid ".concat(_theme.theme.default, ";border-bottom:0;border-left:0;border-radius:0 ").concat(_constants.borderRadius, " 0 0;content:'';-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:").concat(_constants.inputHeight * 0.75, "px;right:0;position:absolute;top:10px;width:calc(100% - 12px);}"), ".value.jsx-3643629999:after{width:auto;position:relative;}", "span.jsx-3643629999{display:inline-block;font-size:16px;padding:0 10px 0 0;position:relative;-webkit-transform:translate(0px,29px);-ms-transform:translate(0px,29px);transform:translate(0px,29px);-webkit-transition:-webkit-transform 0.05s ease-in;-webkit-transition:transform 0.05s ease-in;transition:transform 0.05s ease-in;}", ".disabled.jsx-3643629999 span.jsx-3643629999{color:".concat(_theme.theme.disabled, ";}"), ".disabled.jsx-3643629999:before,.disabled.jsx-3643629999:after{border-color:".concat(_theme.theme.disabled, ";}"), ".dense.jsx-3643629999:before,.dense.jsx-3643629999:after{height:".concat(_constants.inputHeightDense * 0.75, "px;}"), ".dense.jsx-3643629999 span.jsx-3643629999{height:".concat(_constants.inputHeightDense, "px;line-height:").concat(_constants.inputHeightDense, "px;-webkit-transform:translate(0px,11px);-ms-transform:translate(0px,11px);transform:translate(0px,11px);}"), ".value.jsx-3643629999 span.jsx-3643629999{font-size:".concat(_constants.shrinkedLabelFontSize, ";height:auto;line-height:inherit;-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);}"), ".focus.jsx-3643629999:before,.focus.jsx-3643629999:after{border-color:".concat(_theme.colors.teal400, ";}"), ".valid.jsx-3643629999:before,.valid.jsx-3643629999:after{border-color:".concat(_theme.theme.valid, ";}"), ".valid.jsx-3643629999 span.jsx-3643629999{color:".concat(_theme.theme.valid, ";}"), ".warning.jsx-3643629999:before,.warning.jsx-3643629999:after{border-color:".concat(_theme.theme.warning, ";}"), ".warning.jsx-3643629999 span.jsx-3643629999{color:".concat(_theme.theme.warning, ";}"), ".error.jsx-3643629999:before,.error.jsx-3643629999:after{border-color:".concat(_theme.theme.error, ";}"), ".error.jsx-3643629999 span.jsx-3643629999{color:".concat(_theme.theme.error, ";}")];
styles.__hash = "3643629999";

var Label = function Label(_ref) {
  var focus = _ref.focus,
      required = _ref.required,
      valid = _ref.valid,
      warning = _ref.warning,
      error = _ref.error,
      dense = _ref.dense,
      disabled = _ref.disabled,
      value = _ref.value,
      label = _ref.label,
      htmlFor = _ref.htmlFor;
  return _react.default.createElement("label", {
    htmlFor: htmlFor,
    className: "jsx-".concat(styles.__hash) + " " + ((0, _classnames.default)({
      focus: focus,
      required: required,
      valid: valid,
      warning: warning,
      error: error,
      dense: dense,
      disabled: disabled,
      value: value
    }) || "")
  }, _react.default.createElement("span", {
    className: "jsx-".concat(styles.__hash)
  }, label), _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.Label = Label;