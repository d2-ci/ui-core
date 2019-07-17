"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _Status = require("../icons/Status");

var _index = require("./index");

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_Status.Error, null);

var _ref3 =
/*#__PURE__*/
_react.default.createElement(_Status.Warning, null);

var _ref4 =
/*#__PURE__*/
_react.default.createElement(_Status.Valid, null);

var _ref5 =
/*#__PURE__*/
_react.default.createElement(_Status.Info, null);

var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      success = _ref.success,
      warning = _ref.warning,
      critical = _ref.critical;

  if (icon === false) {
    return null;
  }

  var IconComponent;

  if (_react.default.isValidElement(icon)) {
    IconComponent = icon;
  } else if (critical) {
    IconComponent = _ref2;
  } else if (warning) {
    IconComponent = _ref3;
  } else if (success) {
    IconComponent = _ref4;
  } else {
    IconComponent = _ref5;
  }

  return _react.default.createElement("div", {
    className: _style.default.dynamic([["2765176098", [_theme.spacers.dp16]]])
  }, IconComponent, _react.default.createElement(_style.default, {
    id: "2765176098",
    dynamic: [_theme.spacers.dp16]
  }, ["div.__jsx-style-dynamic-selector{margin-right:".concat(_theme.spacers.dp16, ";}"), "div.__jsx-style-dynamic-selector svg{width:24px;height:24px;}"]));
};

exports.Icon = Icon;
Icon.propTypes = {
  icon: _index.iconPropType,
  success: _index.variantProptype,
  warning: _index.variantProptype,
  critical: _index.variantProptype
};