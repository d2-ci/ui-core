import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme';
import { Indeterminate, Checked, Unchecked } from '../icons/Checkbox';
import { Icon } from './Icon';
import { Label } from './Label';
import { Input } from './Input';

const Checkbox = ({
  onChange,
  name,
  label,
  className,
  indeterminate,
  required,
  checked = false,
  disabled,
  valid,
  warning,
  error
}) => React.createElement("label", {
  className: _JSXStyle.dynamic([["2894878850", [theme.disabled]]]) + " " + (cx('base', className, {
    disabled
  }) || "")
}, React.createElement(Input, {
  name: name,
  onChange: onChange,
  checked: checked,
  disabled: disabled
}), React.createElement(Icon, {
  checked: checked,
  disabled: disabled,
  valid: valid,
  error: error,
  warning: warning,
  indeterminate: indeterminate
}), React.createElement(Label, {
  required: required
}, label), React.createElement(_JSXStyle, {
  id: "2894878850",
  dynamic: [theme.disabled]
}, ["label.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;cursor:pointer;pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", `.disabled.__jsx-style-dynamic-selector{cursor:not-allowed;color:${theme.disabled};}`]));

Checkbox.propTypes = {
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  className: propTypes.string,
  indeterminate: propTypes.bool,
  required: propTypes.bool,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool
};
export { Checkbox };