import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { theme, spacers } from '../theme.js';

const Help = ({
  children,
  valid,
  error,
  warning,
  className
}) => React.createElement("p", {
  className: _JSXStyle.dynamic([["616122286", [spacers.dp8, spacers.dp16, theme.default, theme.valid, theme.error, theme.warning]]]) + " " + (cx(className, {
    valid,
    error,
    warning
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: "616122286",
  dynamic: [spacers.dp8, spacers.dp16, theme.default, theme.valid, theme.error, theme.warning]
}, `p.__jsx-style-dynamic-selector{height:12px;padding-top:${spacers.dp8};padding-left:${spacers.dp16};font-size:12px;margin:0;line-height:12px;cursor:help;color:${theme.default};}.valid.__jsx-style-dynamic-selector{color:${theme.valid};}.error.__jsx-style-dynamic-selector{color:${theme.error};}.warning.__jsx-style-dynamic-selector{color:${theme.warning};}`));

Help.defaultProps = {};
Help.propTypes = {
  className: propTypes.string,
  children: propTypes.string.isRequired,
  error: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool
};
export { Help };