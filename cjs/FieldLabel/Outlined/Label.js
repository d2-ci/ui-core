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

var _constants2 = require("../../icons/constants");

var _constants3 = require("../../forms/constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = new String(".legend.jsx-248698030{box-sizing:border-box;height:20px;left:0;line-height:20px;padding-left:".concat(_constants3.innerSpacingSides, ";position:absolute;top:0;width:100%;}.legend.disabled.jsx-248698030{cursor:not-allowed;}.legend.has-value.jsx-248698030{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.legend.jsx-248698030:before{border:1px solid ").concat(_constants2.statusColors[_constants2.iconStatuses.DEFAULT], ";border-bottom:0;border-right:0;border-radius:").concat(_constants.borderRadius, " 0 0 0;content:'';height:").concat(_constants.inputHeight * 0.75, "px;left:0;position:absolute;top:10px;width:12px;}.legend.jsx-248698030:after{border:1px solid ").concat(_constants2.statusColors[_constants2.iconStatuses.DEFAULT], ";border-bottom:0;border-left:0;border-radius:0 ").concat(_constants.borderRadius, " 0 0;content:'';-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:").concat(_constants.inputHeight * 0.75, "px;right:0;position:absolute;top:10px;width:calc(100% - 20px);}.legend.has-value.jsx-248698030:after{width:auto;position:relative;}.legend-label.jsx-248698030{display:inline-block;font-size:").concat(_constants3.inputFontSizeValue, ";padding:0 10px 0 0;position:relative;-webkit-transform:translate(0px,29px);-ms-transform:translate(0px,29px);transform:translate(0px,29px);-webkit-transition:-webkit-transform 0.05s ease-in;-webkit-transition:transform 0.05s ease-in;transition:transform 0.05s ease-in;}.legend.disabled.jsx-248698030 .legend-label.jsx-248698030{color:").concat(_theme.colors.grey500, ";}.has-value.jsx-248698030 .legend-label.jsx-248698030{font-size:").concat(_constants.shrinkedLabelFontSize, ";height:auto;line-height:inherit;-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);}.valid.jsx-248698030:before,.valid.jsx-248698030:after{border-color:").concat(_constants2.statusColors[_constants2.iconStatuses.VALID], ";}.valid.jsx-248698030 .legend-label.jsx-248698030{color:").concat(_constants2.statusColors[_constants2.iconStatuses.VALID], ";}.warning.jsx-248698030:before,.warning.jsx-248698030:after{border-color:").concat(_constants2.statusColors[_constants2.iconStatuses.WARNING], ";}.warning.jsx-248698030 .legend-label.jsx-248698030{color:").concat(_constants2.statusColors[_constants2.iconStatuses.WARNING], ";}.legend.error.jsx-248698030:before,.legend.error.jsx-248698030:after{border-color:").concat(_constants2.statusColors[_constants2.iconStatuses.ERROR], ";}.error.jsx-248698030 .legend-label.jsx-248698030{color:").concat(_constants2.statusColors[_constants2.iconStatuses.ERROR], ";}.dense.has-no-value.jsx-248698030 .legend-label.jsx-248698030{height:").concat(_constants.inputHeightDense, "px;line-height:").concat(_constants.inputHeightDense, "px;-webkit-transform:translate(0px,10px);-ms-transform:translate(0px,10px);transform:translate(0px,10px);}.legend.dense.jsx-248698030:before,.legend.dense.jsx-248698030:after{height:").concat(_constants.inputHeightDense * 0.75, "px;}"));
styles.__hash = "248698030";

var createLabelClassName = function createLabelClassName(props) {
  return (0, _classnames.default)('legend', {
    disabled: props.disabled,
    dense: props.size === _constants3.inputSizes.DENSE,
    valid: props.status === _constants2.iconStatuses.VALID,
    warning: props.status === _constants2.iconStatuses.WARNING,
    error: props.status === _constants2.iconStatuses.ERROR,
    'has-no-value': !props.hasValue,
    'has-value': props.hasValue
  });
};

var Label = function Label(props) {
  return _react.default.createElement("label", {
    htmlFor: props.htmlFor,
    className: "jsx-".concat(styles.__hash) + " " + (createLabelClassName(props) || "")
  }, _react.default.createElement("span", {
    className: "jsx-".concat(styles.__hash) + " " + "legend-label"
  }, props.label), _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.Label = Label;
Label.propTypes = {
  label: _propTypes.default.string.isRequired,
  hasValue: _propTypes.default.bool.isRequired,
  status: _constants2.iconStatusPropType.isRequired,
  size: _constants3.inputSizesPropTypes.isRequired,
  htmlFor: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool
};
Label.defaultProps = {
  disabled: false
};