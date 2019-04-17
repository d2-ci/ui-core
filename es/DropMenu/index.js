import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';

var _ref =
/*#__PURE__*/
React.createElement(_JSXStyle, {
  id: "795226118"
}, "div.jsx-795226118{z-index:1000;position:absolute;top:38px;left:0;}");

const DropMenu = ({
  component,
  className
}) => React.createElement("div", {
  className: "jsx-795226118" + " " + (className || "")
}, component, _ref);

DropMenu.propTypes = {
  className: propTypes.string,

  /** The component to use as the dropdown component */
  component: propTypes.element
};
export { DropMenu };