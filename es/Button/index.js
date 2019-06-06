import _JSXStyle from "styled-jsx/style";
import cx from 'classnames';
import React from 'react';
import propTypes from 'prop-types';
import { mutuallyExclusive } from '../prop-validators/mutuallyExclusive';
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
const variantPropType = mutuallyExclusive(['primary', 'secondary', 'destructive'], propTypes.bool);
const sizePropType = mutuallyExclusive(['small', 'large'], propTypes.bool);
Button.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
  icon: propTypes.element,
  name: propTypes.string,
  value: propTypes.string,
  type: propTypes.oneOf(['submit', 'reset', 'button']),
  small: sizePropType,
  large: sizePropType,
  primary: variantPropType,
  secondary: variantPropType,
  destructive: variantPropType,
  disabled: propTypes.bool
};
export { Button };