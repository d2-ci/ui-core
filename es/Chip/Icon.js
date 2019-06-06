import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
export const Icon = ({
  icon
}) => {
  if (!icon) return null;
  return React.createElement("span", {
    className: "jsx-1519260970"
  }, icon, React.createElement(_JSXStyle, {
    id: "1519260970"
  }, ["span.jsx-1519260970{width:24px;height:24px;margin-left:4px;margin-right:-6px;border-radius:50%;overflow:hidden;}"]));
};
Icon.propTypes = {
  /** the slot for an icon is 24x24px, bigger elements will be clipped */
  icon: propTypes.element
};