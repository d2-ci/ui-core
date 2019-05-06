import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.js';

const Overlay = ({
  children
}) => React.createElement("div", {
  className: "jsx-2065676653"
}, children, React.createElement(_JSXStyle, {
  id: "2065676653"
}, ["div.jsx-2065676653{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;right:0;bottom:0;left:0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;background:rgba(0,0,0,0.08);}"]));

function CircularProgress({
  small,
  large,
  overlay,
  className
}) {
  const loader = React.createElement("div", {
    role: "progressbar",
    className: `jsx-${styles.__hash}` + " " + (cx(className, {
      small,
      large
    }) || "")
  }, React.createElement("svg", {
    viewBox: "22 22 44 44",
    className: `jsx-${styles.__hash}`
  }, React.createElement("circle", {
    cx: "44",
    cy: "44",
    r: "20.2",
    fill: "none",
    strokeWidth: "3.6",
    className: `jsx-${styles.__hash}` + " " + "circle"
  })), React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));

  if (overlay) {
    return React.createElement(Overlay, null, loader);
  }

  return loader;
}

CircularProgress.propTypes = {
  className: propTypes.string,
  overlay: propTypes.bool,
  small: propTypes.bool,
  large: propTypes.bool
};
export { CircularProgress };