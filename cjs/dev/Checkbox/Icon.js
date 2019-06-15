"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

var _Checkbox = require("../icons/Checkbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  styles: _react.default.createElement(_style.default, {
    id: "63432708"
  }, "svg.jsx-63432708{display:block;height:24px;width:24px;fill:".concat(_theme.theme.default, ";}.focus.jsx-63432708{fill:").concat(_theme.colors.grey800, ";}.checked.jsx-63432708{fill:").concat(_theme.colors.teal400, ";}.disabled.jsx-63432708{fill:").concat(_theme.theme.disabled, ";}.error.jsx-63432708{fill:").concat(_theme.theme.error, ";}.valid.jsx-63432708{fill:").concat(_theme.theme.valid, ";}.warning.jsx-63432708{fill:").concat(_theme.theme.warning, ";}")),
  className: "jsx-63432708"
};

var Icon = function Icon(_ref) {
  var focus = _ref.focus,
      checked = _ref.checked,
      disabled = _ref.disabled,
      valid = _ref.valid,
      error = _ref.error,
      warning = _ref.warning,
      indeterminate = _ref.indeterminate;
  var classes = (0, _classnames.default)(icons.className, {
    checked: checked && !valid && !error && !warning,
    focus: focus,
    disabled: disabled,
    valid: valid,
    error: error,
    warning: warning
  });
  return _react.default.createElement("div", {
    className: _style.default.dynamic([["3840453251", [_theme.colors.blue600]]]) + " " + ((0, _classnames.default)({
      focus: focus
    }) || "")
  }, indeterminate ? _react.default.createElement(_Checkbox.Indeterminate, {
    className: classes
  }) : checked ? _react.default.createElement(_Checkbox.Checked, {
    className: classes
  }) : _react.default.createElement(_Checkbox.Unchecked, {
    className: classes
  }), icons.styles, _react.default.createElement(_style.default, {
    id: "3840453251",
    dynamic: [_theme.colors.blue600]
  }, "div.__jsx-style-dynamic-selector{position:relative;}.focus.__jsx-style-dynamic-selector:before{content:'';position:absolute;border:2px solid ".concat(_theme.colors.blue600, ";border-radius:4px;width:100%;height:100%;}")));
};

exports.Icon = Icon;
Icon.propTypes = {
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  error: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  indeterminate: _propTypes.default.bool,
  focus: _propTypes.default.bool
};