"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Help = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Help = function Help(_ref) {
  var children = _ref.children,
      valid = _ref.valid,
      error = _ref.error,
      warning = _ref.warning,
      className = _ref.className;
  return _react.default.createElement("p", {
    className: _style.default.dynamic([["1415559217", [_theme.theme.default, _theme.theme.valid, _theme.theme.error, _theme.theme.warning]]]) + " " + ((0, _classnames.default)(className, {
      valid: valid,
      error: error,
      warning: warning
    }) || "")
  }, children, _react.default.createElement(_style.default, {
    id: "1415559217",
    dynamic: [_theme.theme.default, _theme.theme.valid, _theme.theme.error, _theme.theme.warning]
  }, ["p.__jsx-style-dynamic-selector{height:12px;padding-top:8px;padding-left:12px;font-size:12px;margin:0;line-height:12px;cursor:help;color:".concat(_theme.theme.default, ";}"), ".valid.__jsx-style-dynamic-selector{color:".concat(_theme.theme.valid, ";}"), ".error.__jsx-style-dynamic-selector{color:".concat(_theme.theme.error, ";}"), ".warning.__jsx-style-dynamic-selector{color:".concat(_theme.theme.warning, ";}")]));
};

exports.Help = Help;
Help.defaultProps = {};
Help.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.string.isRequired,
  error: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  warning: _propTypes.default.bool
};