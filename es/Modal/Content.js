import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
export const Content = ({
  children,
  scrollable
}) => React.createElement("div", {
  className: "jsx-2811276750" + " " + (cx('content', {
    scrollable
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: "2811276750"
}, [".content.jsx-2811276750{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-bottom:35px;padding:0 24px;}", ".content.jsx-2811276750:first-child{padding-top:20px;}", ".scrollable.jsx-2811276750{overflow-y:scroll;}"]));
Content.propTypes = {
  children: PropTypes.node.isRequired,
  scrollable: PropTypes.bool
};
Content.defaultProps = {
  scrollable: false
};