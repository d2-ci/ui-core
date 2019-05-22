import _JSXStyle from "styled-jsx/style";
import cx from 'classnames';
import React from 'react';
import propTypes from 'prop-types';
import { boolAndMutuallyExclusiveWith } from '../prop-types';
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
  primary,
  secondary,
  destructive,
  small,
  large
}) => React.createElement("button", {
  disabled: disabled,
  onClick: onClick,
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
  onClick: propTypes.func,
  className: propTypes.string,
  icon: propTypes.element,
  name: propTypes.string,
  value: propTypes.string,
  type: propTypes.oneOf(['submit', 'reset', 'button']),
  small: propTypes.bool,
  large: propTypes.bool,
  primary: boolAndMutuallyExclusiveWith('secondary', 'destructive'),
  secondary: boolAndMutuallyExclusiveWith('primary', 'destructive'),
  destructive: boolAndMutuallyExclusiveWith('primary', 'secondary'),
  disabled: propTypes.bool
};
export { Button };