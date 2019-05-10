import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme';
export const Label = ({
  htmlFor,
  disabled,
  required,
  children
}) => {
  const className = cx('label', {
    disabled,
    required
  });
  return React.createElement("label", {
    className: _JSXStyle.dynamic([["2534065500", [colors.grey900, theme.disabled]]]) + " " + (className || "")
  }, children, React.createElement(_JSXStyle, {
    id: "2534065500",
    dynamic: [colors.grey900, theme.disabled]
  }, [`.label.__jsx-style-dynamic-selector{color:${colors.grey900};cursor:pointer;}`, ".required.__jsx-style-dynamic-selector:after{padding-left:4px;content:'*';}", `.disabled.__jsx-style-dynamic-selector{cursor:not-allowed;color:${theme.disabled};}`]));
};
Label.propTypes = {
  htmlFor: propTypes.string.isRequired,
  disabled: propTypes.bool,
  required: propTypes.bool
};