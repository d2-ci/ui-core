import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { layers } from '../theme.js';

const ComponentCover = ({
  children,
  className
}) => React.createElement("div", {
  className: _JSXStyle.dynamic([["3698233511", [layers.applicationTop - 1]]]) + " " + (className || "")
}, children, React.createElement(_JSXStyle, {
  id: "3698233511",
  dynamic: [layers.applicationTop - 1]
}, `div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;height:inherit;width:inherit;z-index:${layers.applicationTop - 1};background:rgba(33,43,54,0.4);}`));

ComponentCover.propTypes = {
  children: propTypes.node,
  className: propTypes.string
};
export { ComponentCover };