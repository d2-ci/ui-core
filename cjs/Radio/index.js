"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

var _styles = _interopRequireDefault(require("./styles.js"));

var _Radio = require("../icons/Radio.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  styles: _react.default.createElement(_style.default, {
    id: "871975739"
  }, ["svg.jsx-871975739{height:24px;width:24px;fill:".concat(_theme.theme.default, ";}"), ".checked.jsx-871975739{fill:".concat(_theme.colors.teal400, ";}"), ".disabled.jsx-871975739{fill:".concat(_theme.theme.disabled, ";}"), ".error.jsx-871975739{fill:".concat(_theme.theme.error, ";}"), ".valid.jsx-871975739{fill:".concat(_theme.theme.valid, ";}"), ".warning.jsx-871975739{fill:".concat(_theme.theme.warning, ";}")]),
  className: "jsx-871975739"
};

var Radio = function Radio(_ref) {
  var onChange = _ref.onChange,
      name = _ref.name,
      value = _ref.value,
      className = _ref.className,
      label = _ref.label,
      required = _ref.required,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      disabled = _ref.disabled,
      valid = _ref.valid,
      warning = _ref.warning,
      error = _ref.error;
  console.log("Radio checked (".concat(value, ")"), checked);
  var classes = (0, _classnames.default)(icons.className, {
    checked: checked && !valid && !error && !warning,
    disabled: disabled,
    valid: valid,
    error: error,
    warning: warning
  });
  var icon = checked ? _react.default.createElement(_Radio.Checked, {
    className: classes
  }) : _react.default.createElement(_Radio.Unchecked, {
    className: classes
  });
  return _react.default.createElement("label", {
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)(className, {
      disabled: disabled
    }) || "")
  }, _react.default.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    className: "jsx-".concat(_styles.default.__hash)
  }), icon, _react.default.createElement("span", {
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)({
      required: required
    }) || "")
  }, label), icons.styles, _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
};

exports.Radio = Radio;
Radio.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  label: _propTypes.default.string,
  required: _propTypes.default.bool,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  error: _propTypes.default.bool
};