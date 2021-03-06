"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../../theme.js");

var _constants = require("../constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = ["label.jsx-1801164837{box-sizing:border-box;color:".concat(_theme.colors.grey700, ";display:block;font-size:16px;height:").concat(_constants.inputHeight, "px;left:0;line-height:").concat(_constants.inputHeight + 2, "px;overflow:hidden;padding-left:").concat(_theme.spacers.dp16, ";position:absolute;text-overflow:ellipsis;top:0;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);-webkit-transition:all 0.1s;transition:all 0.1s;white-space:nowrap;width:calc(100% - 44px);}"), ".disabled.jsx-1801164837{color:".concat(_theme.theme.disabled, ";}"), ".focus.jsx-1801164837,.value.jsx-1801164837{display:inline-block;font-size:12px;height:auto;line-height:14px;-webkit-transform:translate(0,8px);-ms-transform:translate(0,8px);transform:translate(0,8px);width:auto;}", ".dense.jsx-1801164837{height:".concat(_constants.inputHeightDense, "px;line-height:47px;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}"), ".dense.focus.jsx-1801164837,.dense.value.jsx-1801164837{height:auto;line-height:12px;-webkit-transform:translate(0,8px);-ms-transform:translate(0,8px);transform:translate(0,8px);}", ".required.jsx-1801164837::after{padding-left:".concat(_theme.spacers.dp4, ";content:'*';}"), ".focus.jsx-1801164837{color:".concat(_theme.theme.secondary600, ";}"), ".valid.jsx-1801164837{color:".concat(_theme.theme.valid, ";}"), ".valid.focus.jsx-1801164837{color:".concat(_theme.colors.blue700, ";}"), ".warning.jsx-1801164837{color:".concat(_theme.theme.warning, ";}"), ".warning.focus.jsx-1801164837{color:".concat(_theme.colors.yellow700, ";}"), ".error.jsx-1801164837{color:".concat(_theme.theme.error, ";}"), ".error.focus.jsx-1801164837{color:".concat(_theme.colors.red800, ";}")];
styles.__hash = "1801164837";

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
  }, label, _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.Label = Label;