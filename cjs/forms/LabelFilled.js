"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelFilled = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _InputContainer = require("./LabelFilled/InputContainer");

var _Label = require("./LabelFilled/Label");

var _Status = require("../icons/Status");

var _react2 = require("../utils/react");

var _theme = require("../theme");

var _constants = require("../icons/constants");

var _constants2 = require("./constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = new String(".label-filled.jsx-422363918{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,10,0.05);border-bottom:2px solid transparent;border-radius:4px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:56px;padding-left:".concat(_constants2.innerSpacingSides, ";position:relative;}.label-filled.dense.jsx-422363918{height:44px;}.label-filled.jsx-422363918:hover{background-color:rgba(0,0,10,0.08);}.label-filled.focused.jsx-422363918{border-color:").concat(_theme.colors.teal600, ";}.label-filled.valid.jsx-422363918{border-color:").concat(_constants.statusColors[_constants.iconStatuses.VALID], ";}.label-filled.warning.jsx-422363918{border-color:").concat(_constants.statusColors[_constants.iconStatuses.WARNING], ";}.label-filled.error.jsx-422363918{border-color:").concat(_constants.statusColors[_constants.iconStatuses.ERROR], ";}.content.jsx-422363918{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;position:relative;width:100%;z-index:-1;}.focused.jsx-422363918 .content.jsx-422363918,.has-value.jsx-422363918 .content.jsx-422363918{z-index:2;}"));
styles.__hash = "422363918";

var createLabelFilledClassName = function createLabelFilledClassName(props) {
  return (0, _classnames.default)('label-filled', {
    focused: props.isFocused,
    dense: props.size === _constants2.inputSizes.DENSE,
    valid: props.status === _constants.iconStatuses.VALID,
    warning: props.status === _constants.iconStatuses.WARNING,
    error: props.status === _constants.iconStatuses.ERROR,
    'has-value': props.hasValue
  });
};

var LabelFilled = function LabelFilled(_ref) {
  var TailIcon = _ref.tailIcon,
      props = _objectWithoutProperties(_ref, ["tailIcon"]);

  return _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + (createLabelFilledClassName(props) || "")
  }, _react.default.createElement(_Label.Label, {
    size: props.size,
    status: props.status,
    hasValue: props.isFocused || props.hasValue,
    label: props.label,
    htmlFor: props.htmlFor
  }), _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "content"
  }, _react.default.createElement(_InputContainer.InputContainer, _defineProperty({
    size: props.size,
    isFocused: props.isFocused,
    hasValue: props.hasValue
  }, "size", props.size), props.children), _react.default.createElement(_Status.StatusIconNoDefault, {
    status: props.status
  }), _react.default.createElement(TailIcon, {
    className: "jsx-".concat(styles.__hash)
  })), _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.LabelFilled = LabelFilled;
LabelFilled.propTypes = {
  label: _propTypes.default.string.isRequired,
  children: _react2.children.isRequired,
  hasValue: _propTypes.default.bool.isRequired,
  htmlFor: _propTypes.default.string.isRequired,
  tailIcon: _propTypes.default.element,
  required: _propTypes.default.bool,
  status: _constants.iconStatusPropType,
  size: _constants2.inputSizesPropTypes
};
LabelFilled.defaultProps = {
  required: false,
  status: _constants.iconStatuses.DEFAULT,
  size: _constants2.inputSizes.DEFAULT,
  tailIcon: function tailIcon() {
    return null;
  }
};