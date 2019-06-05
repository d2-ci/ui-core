import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
export const Icon = ({
  icon
}) => {
  if (!icon) return null;
  return React.createElement("span", {
    className: "jsx-1357096397"
  }, icon, React.createElement(_JSXStyle, {
    id: "1357096397"
  }, ["span.jsx-1357096397{width:24px;height:24px;margin-left:4px;margin-right:-6px;border-radius:50%;overflow:hidden;}", "span.jsx-1357096397>*{width:24px;height:24px;}"]));
};
Icon.propTypes = {
  icon: propTypes.element
};