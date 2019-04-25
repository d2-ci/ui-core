import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { theme } from '../theme.js';

function Help({
  children,
  status,
  className
}) {
  return React.createElement("p", {
    className: _JSXStyle.dynamic([["1131653761", [theme.default, theme.default, theme.valid, theme.error, theme.warning]]]) + " " + (cx('base', className, {
      [`status-${status}`]: true
    }) || "")
  }, children, React.createElement(_JSXStyle, {
    id: "1131653761",
    dynamic: [theme.default, theme.default, theme.valid, theme.error, theme.warning]
  }, `.base.__jsx-style-dynamic-selector{height:12px;padding-top:8px;padding-left:12px;font-size:12px;margin:0;line-height:12px;cursor:help;color:${theme.default};}.status-default.__jsx-style-dynamic-selector{color:${theme.default};}.status-valid.__jsx-style-dynamic-selector{color:${theme.valid};}.status-error.__jsx-style-dynamic-selector{color:${theme.error};}.status-warning.__jsx-style-dynamic-selector{color:${theme.warning};}`));
}

Help.defaultProps = {
  status: 'default'
};
Help.propTypes = {
  className: propTypes.string,
  children: propTypes.string.isRequired,
  status: propTypes.oneOf(['default', 'valid', 'warning', 'error'])
};
export { Help };