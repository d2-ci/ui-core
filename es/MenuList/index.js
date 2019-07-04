import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';

const MenuList = ({
  children,
  className
}) => React.createElement("ul", {
  className: "jsx-3549878755" + " " + (className || "")
}, children, React.createElement(_JSXStyle, {
  id: "3549878755"
}, ["ul.jsx-3549878755{display:block;position:relative;width:100%;margin:0;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]));

MenuList.propTypes = {
  className: propTypes.string,
  children: propTypes.any.isRequired
};
export { MenuList };