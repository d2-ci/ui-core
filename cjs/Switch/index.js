"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

var _Switch = require("../icons/Switch.js");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switch = function Switch(_ref) {
  var onChange = _ref.onChange,
      name = _ref.name,
      className = _ref.className,
      label = _ref.label,
      required = _ref.required,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      disabled = _ref.disabled,
      valid = _ref.valid,
      warning = _ref.warning,
      error = _ref.error;
  return _react.default.createElement("label", {
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)(className, {
      disabled: disabled
    }) || "")
  }, _react.default.createElement("input", {
    type: "checkbox",
    disabled: disabled,
    name: name,
    checked: checked,
    onChange: onChange,
    className: "jsx-".concat(_styles.default.__hash)
  }), _react.default.createElement(_Switch.SwitchIcon, {
    checked: checked,
    disabled: disabled,
    valid: valid,
    warning: warning,
    error: error
  }), _react.default.createElement("span", {
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)({
      required: required,
      disabled: disabled
    }) || "")
  }, label), _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
};

exports.Switch = Switch;
Switch.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  label: _propTypes.default.string,
  required: _propTypes.default.bool,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  error: _propTypes.default.bool
};