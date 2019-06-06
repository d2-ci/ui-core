import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { spacers } from '../theme.js';

const Action = ({
  label,
  onClick
}) => React.createElement("span", {
  onClick: onClick,
  className: _JSXStyle.dynamic([["370017896", [spacers.dp12]]])
}, label, React.createElement(_JSXStyle, {
  id: "370017896",
  dynamic: [spacers.dp12]
}, [`span.__jsx-style-dynamic-selector{margin-right:${spacers.dp12};-webkit-text-decoration:underline;text-decoration:underline;}`, "span.__jsx-style-dynamic-selector:hover{cursor:pointer;}"]));

Action.propTypes = {
  label: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
};
export { Action };