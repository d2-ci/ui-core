import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';

const Message = ({
  children
}) => React.createElement("div", {
  className: "jsx-3951482246"
}, children, React.createElement(_JSXStyle, {
  id: "3951482246"
}, ["div.jsx-3951482246{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;min-width:240px;}"]));

Message.propTypes = {
  children: propTypes.string.isRequired
};
export { Message };