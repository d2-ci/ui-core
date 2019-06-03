import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Input } from './Input.js';
import { LabelFilled, LabelOutlined } from '../FieldLabel';
import { theme } from '../theme';

class InputField extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      focus: this.props.focus
    });

    _defineProperty(this, "onFocus", e => {
      this.setState({
        focus: true
      });
      this.props.onFocus(e);
    });

    _defineProperty(this, "onBlur", e => {
      this.setState({
        focus: false
      });
      this.props.onBlur(e);
    });
  }

  render() {
    const {
      className,
      onChange,
      type,
      filled,
      dense,
      required,
      label,
      disabled,
      placeholder,
      name,
      valid,
      error,
      warning,
      loading,
      value,
      autocomplete,
      autofocus,
      readonly,
      tabIndex
    } = this.props;
    const {
      focus
    } = this.state;
    const Container = filled ? LabelFilled : LabelOutlined;
    return React.createElement(Container, {
      focus: focus,
      label: label,
      value: !!value || !!placeholder,
      htmlFor: name,
      required: required,
      disabled: disabled,
      valid: valid,
      warning: warning,
      error: error,
      loading: loading,
      dense: dense,
      className: _JSXStyle.dynamic([["349714766", [theme.disabled]]]) + " " + (className || "")
    }, React.createElement(Input, {
      focus: focus,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: onChange,
      name: name,
      type: type,
      value: value || '',
      placeholder: placeholder,
      filled: filled,
      disabled: disabled,
      valid: valid,
      warning: warning,
      error: error,
      loading: loading,
      dense: dense,
      autocomplete: autocomplete,
      autofocus: autofocus,
      tabIndex: tabIndex,
      readonly: readonly
    }), React.createElement(_JSXStyle, {
      id: "349714766",
      dynamic: [theme.disabled]
    }, [`div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::-webkit-input-placeholder{color:${theme.disabled};cursor:not-allowed;}`, `div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::-moz-placeholder{color:${theme.disabled};cursor:not-allowed;}`, `div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled:-ms-input-placeholder{color:${theme.disabled};cursor:not-allowed;}`, `div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::placeholder{color:${theme.disabled};cursor:not-allowed;}`]));
  }

}

InputField.defaultProps = {
  type: 'text',
  onBlur: () => {},
  onFocus: () => {}
};
InputField.propTypes = {
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  className: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string,
  autocomplete: propTypes.string,
  tabIndex: propTypes.string,
  required: propTypes.bool,
  disabled: propTypes.bool,
  filled: propTypes.bool,
  dense: propTypes.bool,
  focus: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool,
  loading: propTypes.bool,
  autofocus: propTypes.bool,
  readonly: propTypes.bool,
  onBlur: propTypes.func,
  onFocus: propTypes.func,
  type: propTypes.oneOf(['text', 'email', 'number', 'password', 'url'])
};
export { InputField };