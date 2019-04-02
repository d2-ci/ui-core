"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LabelOutlined = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Content = require("./LabelOutlined/Content");

var _Label = require("./LabelOutlined/Label");

var _constants = require("./LabelOutlined/constants");

var _react2 = require("../utils/react");

var _theme = require("../theme");

var _constants2 = require("../icons/constants");

var _constants3 = require("./constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = new String(".fieldset.jsx-2291090312{padding-top:10px;height:".concat(_constants.inputHeight, "px;position:relative;}.fieldset.jsx-2291090312:before{border:1px solid ").concat(_constants2.statusColors[_constants2.iconStatuses.DEFAULT], ";border-top:0;border-radius:0 0 ").concat(_constants.borderRadius, " ").concat(_constants.borderRadius, ";box-sizing:border-box;bottom:0;content:'';height:75%;left:0;position:absolute;width:100%;}.fieldset.valid.jsx-2291090312:before{border-color:").concat(_constants2.statusColors[_constants2.iconStatuses.VALID], ";}.fieldset.warning.jsx-2291090312:before{border-color:").concat(_constants2.statusColors[_constants2.iconStatuses.WARNING], ";}.fieldset.error.jsx-2291090312:before{border-color:").concat(_constants2.statusColors[_constants2.iconStatuses.ERROR], ";}.fieldset.dense.jsx-2291090312{height:34px;}"));
styles.__hash = "2291090312";

var createLabelOutlinedClassName = function createLabelOutlinedClassName(props) {
  return (0, _classnames.default)('fieldset', {
    focused: props.isFocused,
    dense: props.size === _constants3.inputSizes.DENSE,
    valid: props.status === _constants2.iconStatuses.VALID,
    warning: props.status === _constants2.iconStatuses.WARNING,
    error: props.status === _constants2.iconStatuses.ERROR
  });
};

var LabelOutlined = function LabelOutlined(props) {
  return _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + (createLabelOutlinedClassName(props) || "")
  }, _react.default.createElement(_Label.Label, {
    size: props.size,
    status: props.status,
    hasValue: props.hasValue,
    label: props.label,
    htmlFor: props.htmlFor
  }), _react.default.createElement(_Content.Content, {
    size: props.size
  }, props.children), _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.LabelOutlined = LabelOutlined;
LabelOutlined.propTypes = {
  label: _propTypes.default.string.isRequired,
  children: _react2.children.isRequired,
  hasValue: _propTypes.default.bool.isRequired,
  status: _constants2.iconStatusPropType,
  size: _constants3.inputSizesPropTypes,
  htmlFor: _propTypes.default.string
};
LabelOutlined.defaultProps = {
  status: _constants2.iconStatuses.DEFAULT,
  size: _constants3.inputSizes.DEFAULT,
  htmlFor: ''
};
var _default = LabelOutlined;
exports.default = _default;