import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { spacers } from '../theme.js';
export const Content = ({
  children,
  overflow
}) => React.createElement("span", {
  className: _JSXStyle.dynamic([["765109298", [spacers.dp12]]]) + " " + (cx({
    overflow
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: "765109298",
  dynamic: [spacers.dp12]
}, [`span.__jsx-style-dynamic-selector{margin:0 ${spacers.dp12};color:inherit;white-space:nowrap;}`, ".overflow.__jsx-style-dynamic-selector{max-width:150px;overflow:hidden;text-overflow:ellipsis;}"]));
Content.propTypes = {
  overflow: propTypes.bool
};