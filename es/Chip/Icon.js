import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
export const Icon = ({
  icon
}) => {
  if (!icon) return null;
  return React.createElement("span", {
    className: "jsx-3691124138"
  }, icon, React.createElement(_JSXStyle, {
    id: "3691124138"
  }, ["span.jsx-3691124138{width:24px;height:24px;margin-left:4px;border-radius:50%;overflow:hidden;}"]));
};
Icon.propTypes = {
  icon: propTypes.element
};