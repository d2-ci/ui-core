"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider(_ref) {
  var margin = _ref.margin,
      className = _ref.className;
  return _react.default.createElement("div", {
    className: _style.default.dynamic([["3889267139", [_theme.colors.grey300]], ["4237085572", [margin]]]) + " " + (className || "")
  }, _react.default.createElement(_style.default, {
    id: "3889267139",
    dynamic: [_theme.colors.grey300]
  }, "div.__jsx-style-dynamic-selector{display:inline-block;width:100%;height:1px;background-color:".concat(_theme.colors.grey300, ";}")), _react.default.createElement(_style.default, {
    id: "4237085572",
    dynamic: [margin]
  }, "div.__jsx-style-dynamic-selector{margin:".concat(margin, ";}")));
};

exports.Divider = Divider;
Divider.defaultProps = {
  margin: "".concat(_theme.spacers.dp8, " 0")
};
Divider.propTypes = {
  className: _propTypes.default.string,
  margin: _propTypes.default.string
};