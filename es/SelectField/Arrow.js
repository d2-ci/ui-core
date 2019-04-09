import _JSXStyle from "styled-jsx/style";
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { ArrowUp, ArrowDown } from '../icons/Arrow';
const styles = new String("div.jsx-4284139979{margin-right:4px;}");
styles.__hash = "4284139979";

var _ref =
/*#__PURE__*/
React.createElement(ArrowUp, null);

var _ref2 =
/*#__PURE__*/
React.createElement(ArrowDown, null);

export const Arrow = ({
  open
}) => React.createElement("div", {
  className: `jsx-${styles.__hash}`
}, open ? _ref : _ref2, React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));