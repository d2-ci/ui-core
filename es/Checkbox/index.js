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
  error,
  children
}) => React.createElement("div", {
  className: _JSXStyle.dynamic([["731513832", [theme.disabled]]]) + " " + (cx('base', className, {
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
}), React.createElement("span", {
  class: cx('label'),
  className: _JSXStyle.dynamic([["731513832", [theme.disabled]]])
}, children ? children : React.createElement(Label, {
  htmlFor: name,
  required: required,
  disabled: disabled
}, label)), React.createElement(_JSXStyle, {
  id: "731513832",
  dynamic: [theme.disabled]
}, ["div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:top;-webkit-box-align:top;-ms-flex-align:top;align-items:top;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", "span.__jsx-style-dynamic-selector{padding-top:3px;margin:0 0 0 8px;}", `.disabled.__jsx-style-dynamic-selector{cursor:not-allowed;color:${theme.disabled};}`]));

Checkbox.propTypes = {
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string,
  className: propTypes.string,
  indeterminate: propTypes.bool,
  required: propTypes.bool,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool
};
Checkbox.Label = Label;
export { Checkbox };