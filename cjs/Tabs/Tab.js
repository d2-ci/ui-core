"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = (0, _react.forwardRef)(function (_ref, ref) {
  var icon = _ref.icon,
      label = _ref.label,
      onClick = _ref.onClick,
      selected = _ref.selected,
      disabled = _ref.disabled,
      stacked = _ref.stacked,
      children = _ref.children;
  return _react.default.createElement("button", {
    onClick: onClick,
    ref: ref,
    className: "jsx-2872561569" + " " + "".concat((0, _classnames.default)('d2ui-align-icon', {
      selected: selected,
      disabled: disabled,
      stacked: stacked
    }))
  }, children ? children : _react.default.createElement("span", {
    className: "jsx-2872561569"
  }, label), _react.default.createElement(_style.default, {
    id: "2872561569"
  }, ["button.jsx-2872561569{background-color:transparent;height:100%;border:none;outline:none;color:rgba(0,0,0,0.6);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;cursor:pointer;padding:0.375rem 1.5rem;text-transform:uppercase;font-size:0.875rem;line-height:2.25rem;font-weight:500;-webkit-letter-spacing:0.08929em;-moz-letter-spacing:0.08929em;-ms-letter-spacing:0.08929em;letter-spacing:0.08929em;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:20rem;}", "button.selected.jsx-2872561569{color:#000000;}", "button.disabled.jsx-2872561569{color:rgba(0,0,0,0.3);pointer-events:none;}", "button.stacked.jsx-2872561569{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", "button.jsx-2872561569>svg,button.jsx-2872561569>svg:first-child,button.jsx-2872561569>svg:last-child,button.jsx-2872561569>svg:only-child{margin:0.6rem 0 0 0;}", "button.jsx-2872561569:active{background-color:#e0e0e0;}"]));
});
Tab.propTypes = {
  label: _propTypes.default.string,
  icon: _propTypes.default.string,
  onClick: _propTypes.default.func,
  addTabRef: _propTypes.default.func,
  selected: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  stacked: _propTypes.default.bool,
  children: _propTypes.default.node
};
Tab.defaultProps = {
  active: false,
  disabled: false,
  stacked: false,
  onClick: function onClick() {}
};
var _default = Tab;
exports.default = _default;