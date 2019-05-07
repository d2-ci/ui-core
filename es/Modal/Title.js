import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
export const Title = ({
  children
}) => React.createElement("h1", {
  className: "jsx-3311424108" + " " + (cx('title') || "")
}, children, React.createElement(_JSXStyle, {
  id: "3311424108"
}, [".title.jsx-3311424108{font-size:20px;font-weight:500;line-height:24px;padding:20px 24px 0;margin:0 0 17px;}"]));
Title.propTypes = {
  children: PropTypes.string.isRequired
};