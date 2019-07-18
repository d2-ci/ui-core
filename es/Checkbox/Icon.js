import _JSXStyle from "styled-jsx/style";
import cx from 'classnames';
import propTypes from 'prop-types';
import React from 'react';
import { statusPropType } from '../common-prop-types';
import { Checked, Indeterminate, Unchecked } from '../icons/Checkbox';
import { colors, theme } from '../theme.js';
const icons = {
  styles: React.createElement(_JSXStyle, {
    id: "63432708"
  }, [`svg.jsx-63432708{display:block;height:24px;width:24px;fill:${theme.default};}`, `.focus.jsx-63432708{fill:${colors.grey800};}`, `.checked.jsx-63432708{fill:${colors.teal400};}`, `.disabled.jsx-63432708{fill:${theme.disabled};}`, `.error.jsx-63432708{fill:${theme.error};}`, `.valid.jsx-63432708{fill:${theme.valid};}`, `.warning.jsx-63432708{fill:${theme.warning};}`]),
  className: "jsx-63432708"
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
  return React.createElement("div", {
    className: _JSXStyle.dynamic([["1369204040", [colors.blue600]]]) + " " + (cx({
      focus
    }) || "")
  }, indeterminate ? React.createElement(Indeterminate, {
    className: classes
  }) : checked ? React.createElement(Checked, {
    className: classes
  }) : React.createElement(Unchecked, {
    className: classes
  }), icons.styles, React.createElement(_JSXStyle, {
    id: "1369204040",
    dynamic: [colors.blue600]
  }, ["div.__jsx-style-dynamic-selector{position:relative;margin:0 6px 0 0;}", `.focus.__jsx-style-dynamic-selector:before{content:'';position:absolute;border:2px solid ${colors.blue600};border-radius:4px;width:100%;height:100%;}`]));
};
Icon.propTypes = {
  checked: propTypes.bool,
  disabled: propTypes.bool,
  valid: statusPropType,
  error: statusPropType,
  warning: statusPropType,
  indeterminate: propTypes.bool,
  focus: propTypes.bool
};