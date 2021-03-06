import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors } from '../theme.js';

const Card = ({
  className,
  children
}) => React.createElement("div", {
  className: _JSXStyle.dynamic([["166161216", [colors.white]]]) + " " + (cx(className) || "")
}, children, React.createElement(_JSXStyle, {
  id: "166161216",
  dynamic: [colors.white]
}, [`div.__jsx-style-dynamic-selector{display:inline-block;position:relative;width:100%;height:100%;border-radius:3px;background:${colors.white};box-shadow:0 0 1px 0 rgba(64,75,90,0.2), 0 2px 1px 0 rgba(64,75,90,0.28);}`]));

Card.propTypes = {
  className: propTypes.string,
  children: propTypes.node
};
export { Card };