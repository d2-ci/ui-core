import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { spacers } from '../theme.js';
export const Content = ({
  children,
  scrollable
}) => React.createElement("div", {
  className: _JSXStyle.dynamic([["3352954201", [spacers.dp32, spacers.dp24, spacers.dp24]]]) + " " + (cx({
    scrollable
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: "3352954201",
  dynamic: [spacers.dp32, spacers.dp24, spacers.dp24]
}, [`div.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-bottom:${spacers.dp32};overflow-y:auto;padding:0 ${spacers.dp24};}`, `div.__jsx-style-dynamic-selector:first-child{padding-top:${spacers.dp24};}`]));
Content.propTypes = {
  children: propTypes.node.isRequired
};