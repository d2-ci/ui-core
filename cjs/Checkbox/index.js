"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme");

var _Checkbox = require("../icons/Checkbox");

var _Icon = require("./Icon");

var _Label = require("./Label");

var _Input = require("./Input");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(_ref) {
  var onChange = _ref.onChange,
      name = _ref.name,
      label = _ref.label,
      className = _ref.className,
      indeterminate = _ref.indeterminate,
      required = _ref.required,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      disabled = _ref.disabled,
      valid = _ref.valid,
      warning = _ref.warning,
      error = _ref.error;
  return _react.default.createElement("label", {
    className: _style.default.dynamic([["2894878850", [_theme.theme.disabled]]]) + " " + ((0, _classnames.default)('base', className, {
      disabled: disabled
    }) || "")
  }, _react.default.createElement(_Input.Input, {
    name: name,
    onChange: onChange,
    checked: checked,
    disabled: disabled
  }), _react.default.createElement(_Icon.Icon, {
    checked: checked,
    disabled: disabled,
    valid: valid,
    error: error,
    warning: warning,
    indeterminate: indeterminate
  }), _react.default.createElement(_Label.Label, {
    required: required
  }, label), _react.default.createElement(_style.default, {
    id: "2894878850",
    dynamic: [_theme.theme.disabled]
  }, ["label.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;cursor:pointer;pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", ".disabled.__jsx-style-dynamic-selector{cursor:not-allowed;color:".concat(_theme.theme.disabled, ";}")]));
};

exports.Checkbox = Checkbox;
Checkbox.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  indeterminate: _propTypes.default.bool,
  required: _propTypes.default.bool,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  error: _propTypes.default.bool
};