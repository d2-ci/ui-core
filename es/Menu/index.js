import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Card } from '../Card';
import { spacers } from '../theme.js';

const Menu = ({
  children,
  className
}) => React.createElement(Card, null, React.createElement("ul", {
  className: _JSXStyle.dynamic([["804892931", [spacers.dp4]]]) + " " + (className || "")
}, children), React.createElement(_JSXStyle, {
  id: "804892931",
  dynamic: [spacers.dp4]
}, [`ul.__jsx-style-dynamic-selector{display:block;position:relative;width:100%;margin:0;padding:${spacers.dp4} 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}`]));

Menu.propTypes = {
  className: propTypes.string,
  children: propTypes.any.isRequired
};
export { Menu };