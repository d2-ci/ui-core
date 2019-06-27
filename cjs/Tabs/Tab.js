"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = (0, _react.forwardRef)(function (_ref, ref) {
  var icon = _ref.icon,
      onClick = _ref.onClick,
      selected = _ref.selected,
      disabled = _ref.disabled,
      fixed = _ref.fixed,
      children = _ref.children;
  return _react.default.createElement("button", {
    onClick: disabled ? undefined : onClick,
    ref: ref,
    className: _style.default.dynamic([["3666495809", [fixed ? 1 : 0]], ["2750581602", [_theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.theme.primary800, _theme.theme.primary800, _theme.colors.grey500, _theme.colors.grey500]]]) + " " + "".concat((0, _classnames.default)({
      selected: selected,
      disabled: disabled,
      fixed: fixed
    }))
  }, icon, _react.default.createElement("span", {
    className: _style.default.dynamic([["3666495809", [fixed ? 1 : 0]], ["2750581602", [_theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.theme.primary800, _theme.theme.primary800, _theme.colors.grey500, _theme.colors.grey500]]])
  }, children), _react.default.createElement(_style.default, {
    id: "3666495809",
    dynamic: [fixed ? 1 : 0]
  }, ["button.__jsx-style-dynamic-selector{-webkit-box-flex:".concat(fixed ? 1 : 0, ";-webkit-flex-grow:").concat(fixed ? 1 : 0, ";-ms-flex-positive:").concat(fixed ? 1 : 0, ";flex-grow:").concat(fixed ? 1 : 0, ";}")]), _react.default.createElement(_style.default, {
    id: "2750581602",
    dynamic: [_theme.colors.grey400, _theme.colors.grey600, _theme.colors.grey600, _theme.colors.grey100, _theme.colors.grey200, _theme.theme.primary800, _theme.theme.primary800, _theme.colors.grey500, _theme.colors.grey500]
  }, ["button.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;vertical-align:bottom;height:100%;padding:19px 16px 14px 16px;background-color:transparent;border:none;outline:none;border-bottom:1px solid ".concat(_theme.colors.grey400, ";color:").concat(_theme.colors.grey600, ";font-size:14px;line-height:14px;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;cursor:pointer;}"), "button.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{max-width:320px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}", "button.__jsx-style-dynamic-selector>svg{fill:".concat(_theme.colors.grey600, ";width:14px;height:14px;margin:0 4px 0 0;}"), "button.__jsx-style-dynamic-selector:hover{background-color:".concat(_theme.colors.grey100, ";}"), "button.__jsx-style-dynamic-selector:active{background-color:".concat(_theme.colors.grey200, ";}"), "button.selected.__jsx-style-dynamic-selector{color:".concat(_theme.theme.primary800, ";}"), "button.selected.__jsx-style-dynamic-selector>svg{fill:".concat(_theme.theme.primary800, ";}"), "button.disabled.__jsx-style-dynamic-selector{color:".concat(_theme.colors.grey500, ";cursor:not-allowed;}"), "button.disabled.__jsx-style-dynamic-selector:hover,button.selected.__jsx-style-dynamic-selector:hover{background-color:transparent;}", "button.disabled.__jsx-style-dynamic-selector>svg{fill:".concat(_theme.colors.grey500, ";}")]));
});
exports.Tab = Tab;
Tab.propTypes = {
  icon: _propTypes.default.string,
  onClick: _propTypes.default.func,
  addTabRef: _propTypes.default.func,
  selected: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  children: _propTypes.default.node
};