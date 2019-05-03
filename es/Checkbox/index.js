import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme';
import { Indeterminate, Checked, Unchecked } from '../icons/Checkbox';
import { Icon } from './Icon';
import { Label } from './Label';
import { Input } from './Input';

class Checkbox extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      indeterminate: this.props.indeterminate,
      checked: this.props.defaultChecked || false
    });

    _defineProperty(this, "onChange", evt => {
      const {
        checked
      } = evt.target;
      const indeterminate = false;
      this.setState({
        checked,
        indeterminate
      });
      this.props.onChange(this.props.name, checked);
    });
  }

  render() {
    const {
      required,
      className,
      disabled,
      valid,
      error,
      warning,
      checked = this.state.checked
    } = this.props;
    return React.createElement("label", {
      className: _JSXStyle.dynamic([["3608855937", [theme.disabled]]]) + " " + (cx('base', className, {
        disabled: this.props.disabled
      }) || "")
    }, React.createElement(Input, {
      onChange: this.onChange,
      checked: checked,
      disabled: this.props.disabled
    }), React.createElement(Icon, {
      checked: checked,
      disabled: disabled,
      valid: valid,
      error: error,
      warning: warning,
      indeterminate: this.state.indeterminate
    }), React.createElement(Label, {
      required: required
    }, this.props.label), React.createElement(_JSXStyle, {
      id: "3608855937",
      dynamic: [theme.disabled]
    }, `label.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;cursor:pointer;pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.disabled.__jsx-style-dynamic-selector{cursor:not-allowed;color:${theme.disabled};}`));
  }

}

Checkbox.propTypes = {
  name: propTypes.string.isRequired,
  className: propTypes.string,
  label: propTypes.string,
  indeterminate: propTypes.bool,
  required: propTypes.bool,
  checked: propTypes.bool,
  defaultChecked: propTypes.bool,
  disabled: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool,
  onChange: propTypes.func
};
export { Checkbox };