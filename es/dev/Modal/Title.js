import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { spacers } from '../theme.js';
export const Title = ({
  children
}) => React.createElement("h1", {
  className: _JSXStyle.dynamic([["608308278", [spacers.dp24, spacers.dp24, spacers.dp16]]]) + " " + (cx('title') || "")
}, children, React.createElement(_JSXStyle, {
  id: "608308278",
  dynamic: [spacers.dp24, spacers.dp24, spacers.dp16]
}, `h1.__jsx-style-dynamic-selector{font-size:20px;font-weight:500;line-height:24px;padding:${spacers.dp24} ${spacers.dp24} 0;margin:0 0 ${spacers.dp16};}`));
Title.propTypes = {
  children: propTypes.string.isRequired
};