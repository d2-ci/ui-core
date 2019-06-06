import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '../index.js';
import { spacers } from '../theme.js';
export const Actions = ({
  children
}) => React.createElement("div", {
  className: _JSXStyle.dynamic([["3709975811", [spacers.dp24, spacers.dp24]]])
}, children, React.createElement(_JSXStyle, {
  id: "3709975811",
  dynamic: [spacers.dp24, spacers.dp24]
}, [`div.__jsx-style-dynamic-selector{padding:0 ${spacers.dp24} ${spacers.dp24};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}`]));
Actions.propTypes = {
  children: propTypes.oneOfType([propTypes.element, propTypes.arrayOf(propTypes.element)]).isRequired
};