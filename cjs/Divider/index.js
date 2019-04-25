"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider(_ref) {
  var margin = _ref.margin,
      className = _ref.className;
  return _react.default.createElement("div", {
    style: {
      margin: margin
    },
    className: _style.default.dynamic([["615716174", [_theme.colors.grey300]]]) + " " + ((0, _classnames.default)('base', className) || "")
  }, _react.default.createElement(_style.default, {
    id: "615716174",
    dynamic: [_theme.colors.grey300]
  }, [".base.__jsx-style-dynamic-selector{display:inline-block;width:100%;height:1px;background-color:".concat(_theme.colors.grey300, ";}")]));
};

exports.Divider = Divider;
Divider.defaultProps = {
  margin: '8px 0'
};
Divider.propTypes = {
  className: _propTypes.default.string,
  margin: _propTypes.default.string
};