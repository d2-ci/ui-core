import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors } from '../theme.js';

function Help({
  text,
  status,
  className
}) {
  return React.createElement("p", {
    className: _JSXStyle.dynamic([["4164704590", [colors.grey700, colors.blue600, colors.red500, colors.yellow500]]]) + " " + (cx('base', className, {
      [`status-${status}`]: true
    }) || "")
  }, text, React.createElement(_JSXStyle, {
    id: "4164704590",
    dynamic: [colors.grey700, colors.blue600, colors.red500, colors.yellow500]
  }, `.base.__jsx-style-dynamic-selector{height:12px;padding-top:8px;padding-left:12px;font-size:12px;margin:0;line-height:12px;cursor:help;}.status-default.__jsx-style-dynamic-selector{color:${colors.grey700};}.status-valid.__jsx-style-dynamic-selector{color:${colors.blue600};}.status-error.__jsx-style-dynamic-selector{color:${colors.red500};}.status-warning.__jsx-style-dynamic-selector{color:${colors.yellow500};}`));
}

Help.defaultProps = {
  status: 'default'
};
Help.propTypes = {
  className: propTypes.string,
  text: propTypes.string.isRequired,
  status: propTypes.oneOf(['default', 'valid', 'warning', 'error'])
};
export { Help };