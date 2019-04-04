"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LabelOutlined = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _InputContainer = require("./LabelOutlined/InputContainer");

var _Label = require("./LabelOutlined/Label");

var _Status = require("../icons/Status");

var _constants = require("./LabelOutlined/constants");

var _react2 = require("../utils/react");

var _theme = require("../theme");

var _constants2 = require("../icons/constants");

var _constants3 = require("./constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = new String(".label-outlined.jsx-3266083721{height:".concat(_constants.inputHeight + 10, "px;position:relative;}.label-outlined.dense.jsx-3266083721{height:").concat(_constants.inputHeightDense + 10, "px;}.label-outlined.jsx-3266083721:before{border:1px solid ").concat(_constants2.statusColors[_constants2.iconStatuses.DEFAULT], ";border-top:0;border-radius:0 0 ").concat(_constants.borderRadius, " ").concat(_constants.borderRadius, ";box-sizing:border-box;bottom:0;content:'';height:75%;left:0;position:absolute;width:100%;}.label-outlined.valid.jsx-3266083721:before{border-color:").concat(_constants2.statusColors[_constants2.iconStatuses.VALID], ";}.label-outlined.warning.jsx-3266083721:before{border-color:").concat(_constants2.statusColors[_constants2.iconStatuses.WARNING], ";}.label-outlined.error.jsx-3266083721:before{border-color:").concat(_constants2.statusColors[_constants2.iconStatuses.ERROR], ";}.content.jsx-3266083721{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:54px;left:1px;position:relative;top:11px;width:calc(100% - 1px);}.dense.jsx-3266083721 .content.jsx-3266083721{height:42px;}"));
styles.__hash = "3266083721";

var createLabelOutlinedClassName = function createLabelOutlinedClassName(props) {
  return (0, _classnames.default)('label-outlined', {
    focused: props.isFocused,
    dense: props.size === _constants3.inputSizes.DENSE,
    valid: props.status === _constants2.iconStatuses.VALID,
    warning: props.status === _constants2.iconStatuses.WARNING,
    error: props.status === _constants2.iconStatuses.ERROR
  });
};

var LabelOutlined = function LabelOutlined(_ref) {
  var TailIcon = _ref.tailIcon,
      props = _objectWithoutProperties(_ref, ["tailIcon"]);

  return _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + (createLabelOutlinedClassName(props) || "")
  }, _react.default.createElement(_Label.Label, {
    size: props.size,
    status: props.status,
    hasValue: props.isFocused || props.hasValue,
    label: props.label,
    htmlFor: props.htmlFor
  }), _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "content"
  }, _react.default.createElement(_InputContainer.InputContainer, {
    size: props.size
  }, props.children), _react.default.createElement(_Status.StatusIconNoDefault, {
    status: props.status
  }), _react.default.createElement(TailIcon, {
    className: "jsx-".concat(styles.__hash)
  })), _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.LabelOutlined = LabelOutlined;
LabelOutlined.propTypes = {
  label: _propTypes.default.string.isRequired,
  children: _react2.children.isRequired,
  hasValue: _propTypes.default.bool.isRequired,
  htmlFor: _propTypes.default.string.isRequired,
  tailIcon: _propTypes.default.element,
  required: _propTypes.default.bool,
  status: _constants2.iconStatusPropType,
  size: _constants3.inputSizesPropTypes
};
LabelOutlined.defaultProps = {
  status: _constants2.iconStatuses.DEFAULT,
  size: _constants3.inputSizes.DEFAULT,
  htmlFor: '',
  tailIcon: function tailIcon() {
    return null;
  }
};
var _default = LabelOutlined;
exports.default = _default;