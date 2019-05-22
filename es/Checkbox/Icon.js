import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme';
import { Indeterminate, Checked, Unchecked } from '../icons/Checkbox';
const icons = {
  styles: React.createElement(_JSXStyle, {
    id: "931218017"
  }, [`svg.jsx-931218017{height:24px;width:24px;fill:${theme.default};}`, ".focus.jsx-931218017 path{stroke:#646464;stroke-width:2px;}", `.checked.jsx-931218017{fill:${colors.teal400};}`, `.disabled.jsx-931218017{fill:${theme.disabled};}`, `.error.jsx-931218017{fill:${theme.error};}`, `.valid.jsx-931218017{fill:${theme.valid};}`, `.warning.jsx-931218017{fill:${theme.warning};}`]),
  className: "jsx-931218017"
};
export const Icon = ({
  focus,
  checked,
  disabled,
  valid,
  error,
  warning,
  indeterminate
}) => {
  const classes = cx(icons.className, {
    checked: checked && !valid && !error && !warning,
    focus,
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