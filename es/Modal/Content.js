import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
export const Content = ({
  children,
  scrollable
}) => React.createElement("div", {
  className: "jsx-3567242057" + " " + (cx('content', {
    scrollable
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: "3567242057"
}, [".content.jsx-3567242057{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-bottom:35px;overflow-y:auto;padding:0 24px;}", ".content.jsx-3567242057:first-child{padding-top:20px;}"]));
Content.propTypes = {
  children: propTypes.node.isRequired
};