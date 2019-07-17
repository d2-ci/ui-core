import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import cx from 'classnames';
import React, { Component, createRef } from 'react';
import propTypes from 'prop-types';
import { mutuallyExclusive } from '@dhis2/prop-types';
import styles from './styles.js';
export class Button extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "buttonRef", createRef());
  }

  componentDidMount() {
    if (this.props.initialFocus) {
      this.buttonRef.current.focus();
    }
  }

  render() {
    const {
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
    } = this.props;
    return React.createElement("button", {
      disabled: disabled,
      onClick: onClick,
      type: type,
      name: name,
      value: value,
      ref: this.buttonRef,
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
  }

}
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
  disabled: propTypes.bool,
  initialFocus: propTypes.bool
};