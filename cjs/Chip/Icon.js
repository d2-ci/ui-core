"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../theme.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var icon = _ref.icon;
  if (!icon) return null;
  return _react.default.createElement("span", {
    className: _style.default.dynamic([["3288399969", [_theme.spacers.dp4]]])
  }, icon, _react.default.createElement(_style.default, {
    id: "3288399969",
    dynamic: [_theme.spacers.dp4]
  }, ["span.__jsx-style-dynamic-selector{width:24px;height:24px;margin-left:".concat(_theme.spacers.dp4, ";margin-right:-6px;border-radius:50%;overflow:hidden;}"), "span.__jsx-style-dynamic-selector>*{height:24px;}"]));
};

exports.Icon = Icon;
Icon.propTypes = {
  /** the slot for an icon is 24x24px, bigger elements will be clipped */
  icon: _propTypes.default.element
};