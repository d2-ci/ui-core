import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { spacers } from '../theme.js';
import { Close } from '../icons/Close';

var _ref =
/*#__PURE__*/
React.createElement(Close, null);

const Dismiss = ({
  onClick
}) => React.createElement("div", {
  onClick: onClick,
  className: _JSXStyle.dynamic([["4165464483", [spacers.dp24]]])
}, _ref, React.createElement(_JSXStyle, {
  id: "4165464483",
  dynamic: [spacers.dp24]
}, [`div.__jsx-style-dynamic-selector{margin-left:${spacers.dp24};}`, "div.__jsx-style-dynamic-selector:hover{cursor:pointer;}", "div.__jsx-style-dynamic-selector svg{width:18px;height:18px;}"]));

Dismiss.propTypes = {
  onClick: propTypes.func.isRequired
};
export { Dismiss };