import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Card } from '../Card';
import { MenuList } from '../MenuList';
import { spacers } from '../theme.js';

const Menu = ({
  children,
  className
}) => React.createElement(Card, null, React.createElement("div", {
  className: _JSXStyle.dynamic([["3466106094", [spacers.dp4]]])
}, React.createElement(MenuList, {
  className: className
}, children)), React.createElement(_JSXStyle, {
  id: "3466106094",
  dynamic: [spacers.dp4]
}, [`div.__jsx-style-dynamic-selector{padding:${spacers.dp4} 0;}`]));

Menu.propTypes = MenuList.propTypes;
export { Menu };