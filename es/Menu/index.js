import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Card } from '../Card';

var _ref =
/*#__PURE__*/
React.createElement(_JSXStyle, {
  id: "3549878755"
}, "ul.jsx-3549878755{display:block;position:relative;width:100%;margin:0;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}");

const Menu = ({
  children,
  className
}) => React.createElement(Card, null, React.createElement("ul", {
  className: "jsx-3549878755" + " " + (className || "")
}, children), _ref);

Menu.propTypes = {
  className: propTypes.string,
  children: propTypes.arrayOf(propTypes.element).isRequired
};
export { Menu };