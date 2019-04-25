"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var type = _ref.type,
      children = _ref.children,
      icon = _ref.icon,
      name = _ref.name,
      value = _ref.value,
      disabled = _ref.disabled,
      _onClick = _ref.onClick,
      className = _ref.className,
      basic = _ref.basic,
      primary = _ref.primary,
      secondary = _ref.secondary,
      destructive = _ref.destructive,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large;
  return _react.default.createElement("button", {
    disabled: disabled,
    onClick: function onClick(evt) {
      return _onClick && _onClick(name, value);
    },
    type: type,
    name: name,
    value: value,
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)(className, {
      primary: primary,
      secondary: secondary,
      destructive: destructive,
      small: small,
      large: large,
      'icon-only': icon && !children,
      icon: icon
    }) || "")
  }, icon && _react.default.createElement("span", {
    className: "jsx-".concat(_styles.default.__hash) + " " + "button-icon"
  }, icon), children, _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
};

exports.Button = Button;
Button.defaultProps = {
  type: 'button'
};
Button.propTypes = {
  children: _propTypes.default.string,
  className: _propTypes.default.string,
  icon: _propTypes.default.element,
  name: _propTypes.default.string,
  value: _propTypes.default.string,
  type: _propTypes.default.oneOf(['submit', 'reset', 'button']),
  small: _propTypes.default.bool,
  large: _propTypes.default.bool,
  primary: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  destructive: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func
};