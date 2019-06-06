import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
export const Content = ({
  children,
  scrollable
}) => React.createElement("div", {
  className: "jsx-110788704" + " " + (cx({
    scrollable
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: "110788704"
}, ["div.jsx-110788704{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-bottom:35px;overflow-y:auto;padding:0 24px;}", "div.jsx-110788704:first-child{padding-top:20px;}"]));
Content.propTypes = {
  children: propTypes.node.isRequired
};