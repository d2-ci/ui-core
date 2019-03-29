"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../../theme");

var _constants = require("../../forms/constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = new String(".size-default.jsx-2263637156{height:".concat(_constants.heightDefault, ";}.size-dense.jsx-2263637156{height:").concat(_constants.heightDense, ";}.field.jsx-2263637156{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:12px;}.field.kind-filled.jsx-2263637156{border-bottom:2px solid transparent;border-radius:5px;background-color:rgba(0,0,10,0.05);}.field.kind-filled.jsx-2263637156:hover,.field.kind-filled.focused.jsx-2263637156{border-bottom:2px solid ").concat(_theme.theme.secondary600, ";background-color:rgba(0,0,10,0.08);}.field.kind-filled.status-valid.jsx-2263637156:hover,.field.kind-filled.focused.status-valid.jsx-2263637156{border-bottom:2px solid ").concat(_theme.colors.blue600, ";}.field.kind-filled.status-warning.jsx-2263637156:hover,.field.kind-filled.focused.status-warning.jsx-2263637156{border-bottom:2px solid ").concat(_theme.colors.yellow500, ";}.field.kind-filled.status-error.jsx-2263637156:hover,.field.kind-filled.focused.status-error.jsx-2263637156{border-bottom:2px solid ").concat(_theme.colors.red500, ";}.field.kind-filled.disabled.jsx-2263637156:hover,.field.kind-filled.disabled.jsx-2263637156{border:2px solid transparent;background-color:rgba(0,0,10,0.02);color:").concat(_theme.colors.grey500, ";}_.jsx-2263637156:-ms-input-placeholder,.jsx-2263637156:root .flatline.jsx-2263637156,_.jsx-2263637156:-ms-input-placeholder,.jsx-2263637156:root .field.kind-filled.jsx-2263637156{border-radius:0px;}"));
styles.__hash = "2263637156";

var Field = function Field(props) {
  var className = (0, _classnames.default)('field', "size-".concat(props.size), "status-".concat(props.status), "kind-".concat(props.kind), {
    focused: props.isFocused,
    filled: props.value,
    disabled: props.disabled
  });
  return _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + (className || "")
  }, props.children, _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.Field = Field;
Field.propTypes = {
  value: _propTypes.default.string.isRequired,
  size: _propTypes.default.string.isRequired,
  status: _propTypes.default.string.isRequired,
  kind: _propTypes.default.string.isRequired,
  isFocused: _propTypes.default.bool.isRequired,
  isFilled: _propTypes.default.bool.isRequired,
  isDisabled: _propTypes.default.bool.isRequired
};