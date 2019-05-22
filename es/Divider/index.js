import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { colors } from '../theme.js';

const Divider = ({
  margin,
  className
}) => React.createElement("div", {
  className: _JSXStyle.dynamic([["3889267139", [colors.grey300]], ["4237085572", [margin]]]) + " " + (className || "")
}, React.createElement(_JSXStyle, {
  id: "3889267139",
  dynamic: [colors.grey300]
}, [`div.__jsx-style-dynamic-selector{display:inline-block;width:100%;height:1px;background-color:${colors.grey300};}`]), React.createElement(_JSXStyle, {
  id: "4237085572",
  dynamic: [margin]
}, [`div.__jsx-style-dynamic-selector{margin:${margin};}`]));

Divider.defaultProps = {
  margin: '8px 0'
};
Divider.propTypes = {
  className: propTypes.string,
  margin: propTypes.string
};
export { Divider };