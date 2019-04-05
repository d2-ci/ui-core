"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../../theme");

var _constants = require("../../icons/constants");

var _constants2 = require("../constants");

var _constants3 = require("../LabelOutlined/constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = new String(".label.jsx-1900097216{box-sizing:border-box;color:".concat(_theme.colors.grey700, ";display:block;font-size:").concat(_constants2.inputFontSizeValue, ";height:").concat(_constants3.inputHeight, "px;left:0;line-height:").concat(_constants3.inputHeight, "px;padding-left:").concat(_constants2.innerSpacingSides, ";position:absolute;top:0;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);-webkit-transition:all 0.1s;transition:all 0.1s;white-space:nowrap;width:100%;}.label.focused.jsx-1900097216,.label.has-value.jsx-1900097216{display:inline-block;font-size:12px;height:auto;line-height:14px;-webkit-transform:translate(0,8px);-ms-transform:translate(0,8px);transform:translate(0,8px);width:auto;}.label.dense.jsx-1900097216{height:").concat(_constants3.inputHeightDense, "px;line-height:47px;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}.label.dense.focused.jsx-1900097216,.label.dense.has-value.jsx-1900097216{height:auto;line-height:12px;-webkit-transform:translate(0,7px);-ms-transform:translate(0,7px);transform:translate(0,7px);}.label.required.jsx-1900097216::after{content:'*';}.label.focused.jsx-1900097216{color:").concat(_theme.theme.secondary600, ";}.label.valid.jsx-1900097216{color:").concat(_constants.statusColors[_constants.iconStatuses.VALID], ";}.label.warning.jsx-1900097216{color:").concat(_constants.statusColors[_constants.iconStatuses.WARNING], ";}.label.error.jsx-1900097216{color:").concat(_constants.statusColors[_constants.iconStatuses.ERROR], ";}"));
styles.__hash = "1900097216";

var createLabelClassName = function createLabelClassName(props) {
  return (0, _classnames.default)('label', {
    focused: props.isFocused,
    required: props.required,
    valid: props.status === _constants.iconStatuses.VALID,
    warning: props.status === _constants.iconStatuses.WARNING,
    error: props.status === _constants.iconStatuses.ERROR,
    dense: props.size === _constants2.inputSizes.DENSE,
    'has-value': props.hasValue
  });
};

var Label = function Label(props) {
  return _react.default.createElement("label", {
    htmlFor: props.htmlFor,
    className: "jsx-".concat(styles.__hash) + " " + (createLabelClassName(props) || "")
  }, props.label, _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.Label = Label;