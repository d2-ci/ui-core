import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

const ComponentCover = ({
  children
}) => React.createElement("div", {
  className: "jsx-1242714437" + " " + "component-cover"
}, children, React.createElement(_JSXStyle, {
  id: "1242714437"
}, ["div.jsx-1242714437{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;left:0;top:0;height:100%;width:100%;z-index:900;background:rgba(200,200,200,0.6);}"]));

ComponentCover.propTypes = {
  children: propTypes.node
};
export { ComponentCover };