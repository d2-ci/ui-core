import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Input } from '../Input';
import { LabelFilled, LabelOutlined } from '../FieldLabel';
import { theme } from '../theme';

class InputField extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      focus: false
    });

    _defineProperty(this, "onFocus", evt => {
      this.setState({
        focus: true
      });

      if (this.props.onFocus) {
        this.props.onFocus(evt);
      }
    });

    _defineProperty(this, "onBlur", evt => {
      this.setState({
        focus: false
      });

      if (this.props.onBlur) {
        this.props.onBlur(evt);
      }
    });

    _defineProperty(this, "onChange", evt => {
      if (this.props.disabled) {
        return;
      }

      this.props.onChange(this.props.name, evt.target.value);
    });

    this.state = {
      focus: props.focus
    };
  }

  render() {
    const {
      type,
      filled,
      focus,
      dense,
      required,
      label,
      disabled,
      placeholder,
      value,
      name,
      valid,
      error,
      warning,
      loading
    } = this.props;
    const Container = filled ? LabelFilled : LabelOutlined;
    return React.createElement(Container, {
      focus: this.state.focus,
      label: label,
      value: !!value || placeholder,
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
      focus: this.state.focused,
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
  type: 'text'
};
InputField.propTypes = {
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  className: propTypes.string,
  required: propTypes.bool,
  disabled: propTypes.bool,
  filled: propTypes.bool,
  dense: propTypes.bool,
  focus: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool,
  loading: propTypes.bool,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  placeholder: propTypes.string,
  type: propTypes.oneOf(['text', 'email', 'number', 'password', 'url'])
};
export { InputField };