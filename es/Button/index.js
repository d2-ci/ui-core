import _JSXStyle from "styled-jsx/style";
import cx from 'classnames';
import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.js';

const Button = ({
  type,
  children,
  icon,
  name,
  value,
  disabled,
  onClick,
  className,
  basic,
  primary,
  secondary,
  destructive,
  small,
  medium,
  large
}) => React.createElement("button", {
  disabled: disabled,
  onClick: evt => onClick && onClick(name, value),
  type: type,
  name: name,
  value: value,
  className: `jsx-${styles.__hash}` + " " + (cx(className, {
    primary,
    secondary,
    destructive,
    small,
    large,
    'icon-only': icon && !children,
    icon
  }) || "")
}, icon && React.createElement("span", {
  className: `jsx-${styles.__hash}` + " " + "button-icon"
}, icon), children, React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));

Button.defaultProps = {
  type: 'button'
};
Button.propTypes = {
  children: propTypes.string,
  className: propTypes.string,
  icon: propTypes.element,
  name: propTypes.string,
  value: propTypes.string,
  type: propTypes.oneOf(['submit', 'reset', 'button']),
  small: propTypes.bool,
  large: propTypes.bool,
  primary: propTypes.bool,
  secondary: propTypes.bool,
  destructive: propTypes.bool,
  disabled: propTypes.bool,
  onClick: propTypes.func
};
export { Button };