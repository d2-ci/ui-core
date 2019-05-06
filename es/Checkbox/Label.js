import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme';
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
    className: _JSXStyle.dynamic([["1664474787", [colors.grey900, theme.disabled]]]) + " " + (className || "")
  }, children, React.createElement(_JSXStyle, {
    id: "1664474787",
    dynamic: [colors.grey900, theme.disabled]
  }, `.label.__jsx-style-dynamic-selector{margin:0 0 0 8px;color:${colors.grey900};cursor:pointer;}.required.__jsx-style-dynamic-selector:after{padding-left:4px;content:'*';}.disabled.__jsx-style-dynamic-selector{cursor:not-allowed;color:${theme.disabled};}`));
};
Label.propTypes = {
  disabled: PropTypes.bool,
  required: PropTypes.bool
};