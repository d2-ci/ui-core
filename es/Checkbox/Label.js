import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme, spacers } from '../theme.js';
export const Label = ({
  disabled,
  required,
  children
}) => {
  const className = cx('label', {
    disabled,
    required
  });
  return React.createElement("span", {
    className: _JSXStyle.dynamic([["1565685956", [spacers.dp8, colors.grey900, spacers.dp4, theme.disabled]]]) + " " + (className || "")
  }, children, React.createElement(_JSXStyle, {
    id: "1565685956",
    dynamic: [spacers.dp8, colors.grey900, spacers.dp4, theme.disabled]
  }, [`.label.__jsx-style-dynamic-selector{margin:0 0 0 ${spacers.dp8};color:${colors.grey900};cursor:pointer;}`, `.required.__jsx-style-dynamic-selector:after{padding-left:${spacers.dp4};content:'*';}`, `.disabled.__jsx-style-dynamic-selector{cursor:not-allowed;color:${theme.disabled};}`]));
};
Label.propTypes = {
  disabled: propTypes.bool,
  required: propTypes.bool
};