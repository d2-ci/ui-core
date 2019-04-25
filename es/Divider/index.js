import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors } from '../theme.js';

const Divider = ({
  margin,
  className
}) => React.createElement("div", {
  style: {
    margin
  },
  className: _JSXStyle.dynamic([["615716174", [colors.grey300]]]) + " " + (cx('base', className) || "")
}, React.createElement(_JSXStyle, {
  id: "615716174",
  dynamic: [colors.grey300]
}, `.base.__jsx-style-dynamic-selector{display:inline-block;width:100%;height:1px;background-color:${colors.grey300};}`));

Divider.defaultProps = {
  margin: '8px 0'
};
Divider.propTypes = {
  className: propTypes.string,
  margin: propTypes.string
};
export { Divider };