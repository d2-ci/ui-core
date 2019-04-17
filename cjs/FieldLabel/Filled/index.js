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

var _react2 = require("../../utils/react");

var _theme = require("../../theme");

var _constants = require("../../icons/constants");

var _constants2 = require("../../forms/constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = new String(".label-filled.jsx-1153177665{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,10,0.05);border-bottom:2px solid transparent;border-radius:4px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:56px;position:relative;}.label-filled.disabled.jsx-1153177665{cursor:not-allowed;}.label-filled.dense.jsx-1153177665{height:44px;}.label-filled.jsx-1153177665:not(.disabled):hover{background-color:rgba(0,0,10,0.08);}.label-filled.focused.jsx-1153177665{border-color:".concat(_theme.colors.teal600, ";}.label-filled.valid.jsx-1153177665{border-color:").concat(_constants.statusColors[_constants.iconStatuses.VALID], ";}.label-filled.valid.focused.jsx-1153177665{border-color:").concat(_theme.colors.blue700, ";}.label-filled.warning.jsx-1153177665{border-color:").concat(_constants.statusColors[_constants.iconStatuses.WARNING], ";}.label-filled.warning.focused.jsx-1153177665{border-color:").concat(_theme.colors.yellow700, ";}.label-filled.error.jsx-1153177665{border-color:").concat(_constants.statusColors[_constants.iconStatuses.ERROR], ";}.label-filled.error.focused.jsx-1153177665{border-color:").concat(_theme.colors.red700, ";}.content.jsx-1153177665{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;position:relative;width:100%;}.focused.jsx-1153177665 .content.jsx-1153177665,.has-value.jsx-1153177665 .content.jsx-1153177665{z-index:2;}.status-icon.jsx-1153177665{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:24px;height:24px;margin-right:4px;}.status-icon.jsx-1153177665:empty{display:none;}.status-icon.jsx-1153177665:last-child{margin-right:10px;}"));
styles.__hash = "1153177665";

var createLabelFilledClassName = function createLabelFilledClassName(props) {
  return (0, _classnames.default)('label-filled', {
    disabled: props.disabled,
    focused: props.isFocused,
    dense: props.size === _constants2.inputSizes.DENSE,
    valid: props.status === _constants.iconStatuses.VALID,
    warning: props.status === _constants.iconStatuses.WARNING,
    error: props.status === _constants.iconStatuses.ERROR,
    'has-value': props.hasValue
  });
};

var Filled = function Filled(_ref) {
  var props = _extends({}, _ref);

  return _react.default.createElement("div", {
    onClick: props.onClick,
    className: "jsx-".concat(styles.__hash) + " " + (createLabelFilledClassName(props) || "")
  }, _react.default.createElement(_Label.Label, {
    isFocused: props.isFocused,
    size: props.size,
    status: props.status,
    hasValue: props.isFocused || props.hasValue,
    label: props.label,
    htmlFor: props.htmlFor,
    disabled: props.disabled
  }), _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "content"
  }, _react.default.createElement(_InputContainer.InputContainer, _defineProperty({
    size: props.size,
    isFocused: props.isFocused,
    hasValue: props.hasValue
  }, "size", props.size), props.children), _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "status-icon"
  }, _react.default.createElement(_Status.StatusIconNoDefault, {
    status: props.status
  }))), _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.Filled = Filled;
Filled.propTypes = {
  label: _propTypes.default.string.isRequired,
  children: _react2.children.isRequired,
  hasValue: _propTypes.default.bool.isRequired,
  htmlFor: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  status: _constants.iconStatusPropType,
  size: _constants2.inputSizesPropTypes,
  onClick: _propTypes.default.func
};
Filled.defaultProps = {
  disabled: false,
  required: false,
  status: _constants.iconStatuses.DEFAULT,
  size: _constants2.inputSizes.DEFAULT,
  onClick: null
};