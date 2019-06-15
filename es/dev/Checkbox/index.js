import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { theme } from '../theme.js';
import { Icon } from './Icon';
import { Label } from './Label';
import { Input } from './Input';

class Checkbox extends Component {
  constructor(props) {
    super(props);

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

    this.state = {
      focus: props.initialFocus
    };
  }

  render() {
    const {
      onChange,
      name,
      value,
      label,
      className,
      indeterminate,
      required,
      checked = false,
      disabled,
      valid,
      warning,
      error,
      tabIndex
    } = this.props;
    const {
      focus
    } = this.state;
    return React.createElement(Fragment, null, React.createElement("label", {
      className: _JSXStyle.dynamic([["261820537", [theme.disabled]]]) + " " + (cx('base', className, {
        disabled,
        focus
      }) || "")
    }, React.createElement(Input, {
      name: name,
      value: value,
      checked: checked,
      disabled: disabled,
      focus: focus,
      onChange: onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      tabIndex: tabIndex
    }), React.createElement(Icon, {
      focus: focus,
      checked: checked,
      disabled: disabled,
      valid: valid,
      error: error,
      warning: warning,
      indeterminate: indeterminate
    }), React.createElement(Label, {
      required: required
    }, label), React.createElement(_JSXStyle, {
      id: "261820537",
      dynamic: [theme.disabled]
    }, `label.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;cursor:pointer;pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.disabled.__jsx-style-dynamic-selector{cursor:not-allowed;color:${theme.disabled};}.focus.__jsx-style-dynamic-selector{outline:1px;}`)));
  }

}

Checkbox.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  tabIndex: propTypes.string,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  className: propTypes.string,
  indeterminate: propTypes.bool,
  required: propTypes.bool,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool,
  initialFocus: propTypes.bool
};
export { Checkbox };