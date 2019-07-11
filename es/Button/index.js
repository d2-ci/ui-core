import _JSXStyle from "styled-jsx/style";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import cx from 'classnames';
import React, { Component, createRef } from 'react';
import propTypes from 'prop-types';
import { mutuallyExclusive } from '../prop-validators';
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

  getButtonProps() {
    const {
      as,
      disabled,
      type,
      name,
      value
    } = this.props;
    return as === 'button' ? {
      disabled,
      type,
      name,
      value
    } : {};
  }

  render() {
    const {
      as: Element,
      children,
      icon,
      onClick,
      className,
      primary,
      secondary,
      destructive,
      small,
      large
    } = this.props;
    return React.createElement(Element, _extends({
      onClick: onClick,
      ref: this.buttonRef
    }, this.getButtonProps(), {
      className: `jsx-${styles.__hash}` + " " + (cx('button', className, {
        primary,
        secondary,
        destructive,
        small,
        large,
        'icon-only': icon && !children,
        icon
      }) || "")
    }), icon && React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + "button-icon"
    }, icon), children, React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}
Button.defaultProps = {
  type: 'button',
  as: 'button'
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
  as: propTypes.oneOf(['button', 'span', 'a']),
  small: sizePropType,
  large: sizePropType,
  primary: variantPropType,
  secondary: variantPropType,
  destructive: variantPropType,
  disabled: propTypes.bool,
  initialFocus: propTypes.bool
};