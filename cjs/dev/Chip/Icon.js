"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var icon = _ref.icon;
  if (!icon) return null;
  return _react.default.createElement("span", {
    className: _style.default.dynamic([["2159848327", [_theme.spacers.dp4]]])
  }, icon, _react.default.createElement(_style.default, {
    id: "2159848327",
    dynamic: [_theme.spacers.dp4]
  }, "span.__jsx-style-dynamic-selector{width:24px;height:24px;margin-left:".concat(_theme.spacers.dp4, ";margin-right:-6px;border-radius:50%;overflow:hidden;}span.__jsx-style-dynamic-selector>*{max-height:24px;max-width:24px;}")));
};

exports.Icon = Icon;
Icon.propTypes = {
  /** the slot for an icon is 24x24px, bigger elements will be clipped */
  icon: _propTypes.default.element
};