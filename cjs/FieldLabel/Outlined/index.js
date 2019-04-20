"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Outlined = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _InputContainer = require("./InputContainer");

var _Label = require("./Label");

var _Status = require("../../icons/Status");

var _constants = require("../constants");

var _react2 = require("../../utils/react");

var _theme = require("../../theme");

var _constants2 = require("../../icons/constants");

var _constants3 = require("../../forms/constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = [".label-outlined.jsx-2953596136{height:".concat(_constants.inputHeight + 10, "px;position:relative;}"), ".label-outlined.disabled.jsx-2953596136{cursor:not-allowed;}", ".label-outlined.dense.jsx-2953596136{height:".concat(_constants.inputHeightDense + 10, "px;}"), ".label-outlined.jsx-2953596136:before{border:1px solid ".concat(_constants2.statusColors[_constants2.iconStatuses.DEFAULT], ";border-top:0;border-radius:0 0 ").concat(_constants.borderRadius, " ").concat(_constants.borderRadius, ";box-sizing:border-box;bottom:0;content:'';height:75%;left:0;position:absolute;width:100%;}"), ".label-outlined.valid.jsx-2953596136:before{border-color:".concat(_constants2.statusColors[_constants2.iconStatuses.VALID], ";}"), ".label-outlined.warning.jsx-2953596136:before{border-color:".concat(_constants2.statusColors[_constants2.iconStatuses.WARNING], ";}"), ".label-outlined.error.jsx-2953596136:before{border-color:".concat(_constants2.statusColors[_constants2.iconStatuses.ERROR], ";}"), ".content.jsx-2953596136{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:54px;left:1px;position:relative;top:11px;width:calc(100% - 1px);}", ".dense.jsx-2953596136 .content.jsx-2953596136{height:42px;}", ".status-icon.jsx-2953596136{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:24px;height:24px;margin-right:4px;}", ".status-icon.jsx-2953596136:empty{display:none;}", ".status-icon.jsx-2953596136:last-child{margin-right:10px;}"];
styles.__hash = "2953596136";

var createLabelOutlinedClassName = function createLabelOutlinedClassName(props) {
  return (0, _classnames.default)('label-outlined', {
    focused: props.isFocused,
    dense: props.size === _constants3.inputSizes.DENSE,
    valid: props.status === _constants2.iconStatuses.VALID,
    warning: props.status === _constants2.iconStatuses.WARNING,
    error: props.status === _constants2.iconStatuses.ERROR,
    disabled: props.disabled
  });
};

var Outlined = function Outlined(_ref) {
  var props = _extends({}, _ref);

  return _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + (createLabelOutlinedClassName(props) || "")
  }, _react.default.createElement(_Label.Label, {
    size: props.size,
    status: props.status,
    hasValue: props.isFocused || props.hasValue,
    label: props.label,
    htmlFor: props.htmlFor,
    disabled: props.disabled
  }), _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "content"
  }, _react.default.createElement(_InputContainer.InputContainer, {
    size: props.size
  }, props.children), _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "status-icon"
  }, _react.default.createElement(_Status.StatusIconNoDefault, {
    status: props.status
  }))), _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.Outlined = Outlined;
Outlined.propTypes = {
  label: _propTypes.default.string.isRequired,
  children: _react2.children.isRequired,
  hasValue: _propTypes.default.bool.isRequired,
  htmlFor: _propTypes.default.string.isRequired,
  required: _propTypes.default.bool,
  status: _constants2.iconStatusPropType,
  size: _constants3.inputSizesPropTypes
};
Outlined.defaultProps = {
  status: _constants2.iconStatuses.DEFAULT,
  size: _constants3.inputSizes.DEFAULT,
  htmlFor: ''
};