import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

const ComponentCover = ({
  children,
  className
}) => React.createElement("div", {
  className: "jsx-935926640" + " " + (className || "")
}, children, React.createElement(_JSXStyle, {
  id: "935926640"
}, ["div.jsx-935926640{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;height:inherit;width:inherit;z-index:900;background:rgba(200,200,200,0.6);}"]));

ComponentCover.propTypes = {
  children: propTypes.node,
  className: propTypes.string
};
export { ComponentCover };