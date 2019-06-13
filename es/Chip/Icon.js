import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { spacers } from '../theme.js';
export const Icon = ({
  icon
}) => {
  if (!icon) return null;
  return React.createElement("span", {
    className: _JSXStyle.dynamic([["2159848327", [spacers.dp4]]])
  }, icon, React.createElement(_JSXStyle, {
    id: "2159848327",
    dynamic: [spacers.dp4]
  }, [`span.__jsx-style-dynamic-selector{width:24px;height:24px;margin-left:${spacers.dp4};margin-right:-6px;border-radius:50%;overflow:hidden;}`, "span.__jsx-style-dynamic-selector>*{max-height:24px;max-width:24px;}"]));
};
Icon.propTypes = {
  /** the slot for an icon is 24x24px, bigger elements will be clipped */
  icon: propTypes.element
};