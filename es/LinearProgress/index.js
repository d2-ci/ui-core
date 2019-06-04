import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { theme } from '../theme.js';

const Progress = ({
  amount
}) => {
  return React.createElement("div", {
    className: _JSXStyle.dynamic([["686723300", [amount]], ["1637603713", [theme.primary600]]])
  }, React.createElement(_JSXStyle, {
    id: "686723300",
    dynamic: [amount]
  }, [`div.__jsx-style-dynamic-selector{width:${amount}%;}`]), React.createElement(_JSXStyle, {
    id: "1637603713",
    dynamic: [theme.primary600]
  }, [`div.__jsx-style-dynamic-selector{background-color:${theme.primary600};-webkit-transition:width 0.3s linear;transition:width 0.3s linear;height:4px;}`]));
};

const LinearProgress = ({
  amount,
  width,
  margin,
  className
}) => {
  return React.createElement("div", {
    role: "progressbar",
    className: "jsx-1195089001 " + _JSXStyle.dynamic([["1108775591", [width, margin]]]) + " " + (className || "")
  }, React.createElement(Progress, {
    amount: amount
  }), React.createElement(_JSXStyle, {
    id: "1195089001"
  }, ["div.jsx-1195089001{display:block;overflow:hidden;overflow-x:hidden;overflow-y:hidden;background-color:rgba(110,122,138,0.2);}"]), React.createElement(_JSXStyle, {
    id: "1108775591",
    dynamic: [width, margin]
  }, [`.__jsx-style-dynamic-selector{width:${width};margin:${margin};}`]));
};

LinearProgress.defaultProps = {
  margin: '10px',
  width: '300px'
};
LinearProgress.propTypes = {
  className: propTypes.string,

  /** set the progression in percentage (without the % suffix) */
  amount: propTypes.number,
  margin: propTypes.string,

  /** set the width of the entire indicator, e.g. '100%' or '300px'. */
  width: propTypes.string
};
export { LinearProgress };