"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = function Tab(_ref) {
  var icon = _ref.icon,
      onClick = _ref.onClick,
      selected = _ref.selected,
      disabled = _ref.disabled,
      children = _ref.children;
  return _react.default.createElement("button", {
    onClick: disabled ? undefined : onClick,
    className: _style.default.dynamic([["1104539587", [_theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.theme.primary700, _theme.theme.primary700, _theme.theme.primary700, _theme.colors.grey500, _theme.colors.grey500]]]) + " " + "".concat((0, _classnames.default)({
      selected: selected,
      disabled: disabled
    }))
  }, icon, _react.default.createElement("span", {
    className: _style.default.dynamic([["1104539587", [_theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.theme.primary700, _theme.theme.primary700, _theme.theme.primary700, _theme.colors.grey500, _theme.colors.grey500]]])
  }, children), _react.default.createElement(_style.default, {
    id: "1104539587",
    dynamic: [_theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.theme.primary700, _theme.theme.primary700, _theme.theme.primary700, _theme.colors.grey500, _theme.colors.grey500]
  }, ["button.__jsx-style-dynamic-selector{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;vertical-align:bottom;height:100%;padding:19px 16px 14px 16px;background-color:transparent;outline:none;border:none;border-bottom:1px solid ".concat(_theme.colors.grey400, ";color:").concat(_theme.colors.grey600, ";font-size:14px;line-height:14px;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;-webkit-transition-property:color,background-color;transition-property:color,background-color;cursor:pointer;}"), ".fixed>button.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", "button.__jsx-style-dynamic-selector::after{content:' ';display:block;position:absolute;bottom:-1px;left:0;height:4px;width:100%;-webkit-transition:background-color 150ms ease-in-out;transition:background-color 150ms ease-in-out;background-color:transparent;}", "span.__jsx-style-dynamic-selector{max-width:320px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-transition:fill 150ms ease-in-out;transition:fill 150ms ease-in-out;}", "button.__jsx-style-dynamic-selector>svg{fill:".concat(_theme.colors.grey600, ";width:14px;height:14px;margin:0 4px 0 0;}"), "button.__jsx-style-dynamic-selector:hover{background-color:".concat(_theme.colors.grey100, ";}"), "button.__jsx-style-dynamic-selector:active{background-color:".concat(_theme.colors.grey200, ";}"), "button.selected.__jsx-style-dynamic-selector{color:".concat(_theme.theme.primary700, ";}"), "button.selected.__jsx-style-dynamic-selector::after{background-color:".concat(_theme.theme.primary700, ";}"), "button.selected.__jsx-style-dynamic-selector>svg{fill:".concat(_theme.theme.primary700, ";}"), "button.disabled.__jsx-style-dynamic-selector{color:".concat(_theme.colors.grey500, ";cursor:not-allowed;}"), "button.disabled.__jsx-style-dynamic-selector:hover,button.selected.__jsx-style-dynamic-selector:hover{background-color:transparent;}", "button.disabled.__jsx-style-dynamic-selector>svg{fill:".concat(_theme.colors.grey500, ";}")]));
};

exports.Tab = Tab;
Tab.propTypes = {
  icon: _propTypes.default.element,
  onClick: _propTypes.default.func,
  addTabRef: _propTypes.default.func,
  selected: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  children: _propTypes.default.node
};