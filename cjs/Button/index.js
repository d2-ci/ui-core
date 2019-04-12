"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  var type = _ref.type,
      children = _ref.children,
      kind = _ref.kind,
      size = _ref.size,
      icon = _ref.icon,
      name = _ref.name,
      value = _ref.value,
      disabled = _ref.disabled,
      _onClick = _ref.onClick,
      className = _ref.className;
  return _react.default.createElement("button", {
    disabled: disabled,
    onClick: function onClick(evt) {
      return _onClick && _onClick(name, value);
    },
    type: type,
    name: name,
    value: value,
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', "kind-".concat(kind), "size-".concat(size), className, {
      'icon-only': icon && !children,
      icon: icon
    }) || "")
  }, icon && _react.default.createElement("span", {
    className: "jsx-".concat(_styles.default.__hash) + " " + "button-icon"
  }, icon), children, _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

Button.defaultProps = {
  name: '',
  value: '',
  kind: 'basic',
  type: 'button',
  size: 'medium',
  disabled: false
};
Button.propTypes = {
  children: _propTypes.default.string,
  className: _propTypes.default.string,
  icon: _propTypes.default.element,
  name: _propTypes.default.string,
  value: _propTypes.default.string,
  kind: _propTypes.default.oneOf(['basic', 'primary', 'secondary', 'destructive']),
  type: _propTypes.default.oneOf(['submit', 'reset', 'button']),
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func
};