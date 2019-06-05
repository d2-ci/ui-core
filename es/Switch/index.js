import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, createRef } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme.js';
import { SwitchIcon } from '../icons/Switch.js';
import styles from './styles';

class Switch extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ref", createRef());

    _defineProperty(this, "state", {
      focus: this.props.initialFocus
    });

    _defineProperty(this, "onFocus", e => {
      this.setState({
        focus: true
      });

      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    });

    _defineProperty(this, "onBlur", e => {
      this.setState({
        focus: false
      });

      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    });
  }

  componentDidMount() {
    if (this.state.focus) {
      this.ref.current.focus();
    }
  }

  render() {
    const {
      onChange,
      name,
      className,
      label,
      required,
      checked = false,
      disabled,
      valid,
      warning,
      error
    } = this.props;
    const {
      focus
    } = this.state;
    return React.createElement("label", {
      className: `jsx-${styles.__hash}` + " " + (cx(className, {
        disabled,
        focus
      }) || "")
    }, React.createElement("input", {
      ref: this.ref,
      type: "checkbox",
      disabled: disabled,
      name: name,
      checked: checked,
      onChange: onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      className: `jsx-${styles.__hash}`
    }), React.createElement(SwitchIcon, {
      checked: checked,
      disabled: disabled,
      valid: valid,
      warning: warning,
      error: error,
      focus: focus
    }), React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + (cx({
        required,
        disabled
      }) || "")
    }, label), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

Switch.propTypes = {
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  className: propTypes.string,
  label: propTypes.string,
  required: propTypes.bool,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool,
  initialFocus: propTypes.bool,
  onFocus: propTypes.func,
  onBlur: propTypes.func
};
export { Switch };