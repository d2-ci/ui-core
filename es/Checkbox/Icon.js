import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme';
import { Indeterminate, Checked, Unchecked } from '../icons/Checkbox';
const icons = {
  styles: React.createElement(_JSXStyle, {
    id: "871975739"
  }, [`svg.jsx-871975739{height:24px;width:24px;fill:${theme.default};}`, `.checked.jsx-871975739{fill:${colors.teal400};}`, `.disabled.jsx-871975739{fill:${theme.disabled};}`, `.error.jsx-871975739{fill:${theme.error};}`, `.valid.jsx-871975739{fill:${theme.valid};}`, `.warning.jsx-871975739{fill:${theme.warning};}`]),
  className: "jsx-871975739"
};
export const Icon = ({
  checked,
  disabled,
  valid,
  error,
  warning,
  indeterminate
}) => {
  const classes = cx(icons.className, {
    checked: checked && !valid && !error && !warning,
    disabled,
    valid,
    error,
    warning
  });
  return React.createElement(Fragment, null, indeterminate ? React.createElement(Indeterminate, {
    className: classes
  }) : checked ? React.createElement(Checked, {
    className: classes
  }) : React.createElement(Unchecked, {
    className: classes
  }), icons.styles);
};
Icon.propTypes = {
  checked: propTypes.bool,
  disabled: propTypes.bool,
  valid: propTypes.bool,
  error: propTypes.bool,
  warning: propTypes.bool,
  indeterminate: propTypes.bool
};