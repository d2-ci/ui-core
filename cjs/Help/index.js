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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Help = function Help(_ref) {
  var children = _ref.children,
      status = _ref.status,
      className = _ref.className;
  return _react.default.createElement("p", {
    className: _style.default.dynamic([["614915997", [_theme.theme.default, _theme.theme.default, _theme.theme.valid, _theme.theme.error, _theme.theme.warning]]]) + " " + ((0, _classnames.default)('base', className, _defineProperty({}, "status-".concat(status), true)) || "")
  }, children, _react.default.createElement(_style.default, {
    id: "614915997",
    dynamic: [_theme.theme.default, _theme.theme.default, _theme.theme.valid, _theme.theme.error, _theme.theme.warning]
  }, [".base.__jsx-style-dynamic-selector{height:12px;padding-top:8px;padding-left:12px;font-size:12px;margin:0;line-height:12px;cursor:help;color:".concat(_theme.theme.default, ";}"), ".status-default.__jsx-style-dynamic-selector{color:".concat(_theme.theme.default, ";}"), ".status-valid.__jsx-style-dynamic-selector{color:".concat(_theme.theme.valid, ";}"), ".status-error.__jsx-style-dynamic-selector{color:".concat(_theme.theme.error, ";}"), ".status-warning.__jsx-style-dynamic-selector{color:".concat(_theme.theme.warning, ";}")]));
};

exports.Help = Help;
Help.defaultProps = {
  status: 'default'
};
Help.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.string.isRequired,
  status: _propTypes.default.oneOf(['default', 'valid', 'warning', 'error'])
};