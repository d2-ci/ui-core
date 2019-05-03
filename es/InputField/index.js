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
      focus: this.props.focus,
      value: this.props.defaultValue || ''
    });

    _defineProperty(this, "onFocus", evt => {
      this.setState({
        focus: true
      });
      this.props.onFocus(this.props.name, evt.target.value);
    });

    _defineProperty(this, "onBlur", evt => {
      this.setState({
        focus: false
      });
      this.props.onBlur(this.props.name, evt.target.value);
    });

    _defineProperty(this, "onChange", evt => {
      if (this.props.disabled) {
        return;
      }

      this.setState({
        value: evt.target.value
      });
      this.props.onChange(this.props.name, evt.target.value);
    });
  }

  render() {
    const {
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
      focus = this.state.focus,
      value = this.state.value
    } = this.props;
    const Container = filled ? LabelFilled : LabelOutlined;
    return React.createElement(Container, {
      focus: this.state.focus,
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
      className: _JSXStyle.dynamic([["349714766", [theme.disabled]]])
    }, React.createElement(Input, {
      focus: this.state.focus,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onChange,
      name: name,
      type: type,
      value: value,
      placeholder: placeholder,
      filled: filled,
      disabled: disabled,
      valid: valid,
      warning: warning,
      error: error,
      loading: loading,
      dense: dense
    }), React.createElement(_JSXStyle, {
      id: "349714766",
      dynamic: [theme.disabled]
    }, `div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::-webkit-input-placeholder{color:${theme.disabled};cursor:not-allowed;}div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::-moz-placeholder{color:${theme.disabled};cursor:not-allowed;}div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled:-ms-input-placeholder{color:${theme.disabled};cursor:not-allowed;}div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::placeholder{color:${theme.disabled};cursor:not-allowed;}`));
  }

}

InputField.defaultProps = {
  type: 'text',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {}
};
InputField.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  className: propTypes.string,
  placeholder: propTypes.string,

  /** Controls the value from the outside, bypassing internal state. */
  value: propTypes.string,
  defaultValue: propTypes.string,
  required: propTypes.bool,
  disabled: propTypes.bool,
  filled: propTypes.bool,
  dense: propTypes.bool,
  focus: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool,
  loading: propTypes.bool,

  /** Handler function which is called with arguments: name, value */
  onBlur: propTypes.func,

  /** Handler function which is called with arguments: name, value */
  onChange: propTypes.func,

  /** Handler function which is called with arguments: name, value */
  onFocus: propTypes.func,
  type: propTypes.oneOf(['text', 'email', 'number', 'password', 'url'])
};
export { InputField };