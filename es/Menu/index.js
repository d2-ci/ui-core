import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Card } from '../Card';
import { MenuList } from '../MenuList';
import { spacers } from '../theme.js';

const Menu = ({
  children,
  className
}) => React.createElement("div", {
  className: _JSXStyle.dynamic([["2220475694", [spacers.dp4]]]) + " " + (className || "")
}, React.createElement(Card, null, React.createElement("div", {
  className: _JSXStyle.dynamic([["2220475694", [spacers.dp4]]]) + " " + "menu-list-wrapper"
}, React.createElement(MenuList, null, children))), React.createElement(_JSXStyle, {
  id: "2220475694",
  dynamic: [spacers.dp4]
}, [`.menu-list-wrapper.__jsx-style-dynamic-selector{padding:${spacers.dp4} 0;}`]));

Menu.propTypes = {
  children: MenuList.propTypes.children,
  className: propTypes.string
};
export { Menu };