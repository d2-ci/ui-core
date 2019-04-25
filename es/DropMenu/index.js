import _JSXStyle from "styled-jsx/style";
import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

var _ref =
/*#__PURE__*/
React.createElement(_JSXStyle, {
  id: "1173471951"
}, "div.jsx-1173471951{z-index:1000;position:absolute;}");

const DropMenu = ({
  component,
  className
}) => ReactDOM.createPortal(React.createElement("div", {
  className: "jsx-1173471951" + " " + (className || "")
}, component, _ref), document.body);

DropMenu.propTypes = {
  className: propTypes.string,

  /** The component to use as the dropdown component */
  component: propTypes.element
};
export { DropMenu };