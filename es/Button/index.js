import _JSXStyle from "styled-jsx/style";
import cx from 'classnames';
import React from 'react';
import propTypes from 'prop-types';
import styles from './styles.js';

const Button = ({
  type,
  children,
  kind,
  size,
  icon,
  name,
  value,
  disabled,
  onClick,
  className
}) => React.createElement("button", {
  disabled: disabled,
  onClick: evt => onClick && onClick(name, value),
  type: type,
  name: name,
  value: value,
  className: `jsx-${styles.__hash}` + " " + (cx('base', `kind-${kind}`, `size-${size}`, className, {
    'icon-only': icon && !children,
    icon
  }) || "")
}, icon && React.createElement("span", {
  className: `jsx-${styles.__hash}` + " " + "button-icon"
}, icon), children, React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));

Button.defaultProps = {
  name: '',
  value: '',
  kind: 'basic',
  type: 'button',
  size: 'medium',
  disabled: false
};
Button.propTypes = {
  children: propTypes.string,
  className: propTypes.string,
  icon: propTypes.element,
  name: propTypes.string,
  value: propTypes.string,
  kind: propTypes.oneOf(['basic', 'primary', 'secondary', 'destructive']),
  type: propTypes.oneOf(['submit', 'reset', 'button']),
  size: propTypes.oneOf(['small', 'medium', 'large']),
  disabled: propTypes.bool,
  onClick: propTypes.func
};
export { Button };