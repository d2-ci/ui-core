import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { layers } from '../theme.js';

const ComponentCover = ({
  children,
  className
}) => React.createElement("div", {
  className: _JSXStyle.dynamic([["2340774592", [layers.applicationTop - 1]]]) + " " + (className || "")
}, children, React.createElement(_JSXStyle, {
  id: "2340774592",
  dynamic: [layers.applicationTop - 1]
}, [`div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;height:inherit;width:inherit;z-index:${layers.applicationTop - 1};background:rgba(200,200,200,0.6);}`]));

ComponentCover.propTypes = {
  children: propTypes.node,
  className: propTypes.string
};
export { ComponentCover };