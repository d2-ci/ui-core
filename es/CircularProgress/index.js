import _JSXStyle from "styled-jsx/style";
import React from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.js';

const CircularProgress = ({
  small,
  large,
  className
}) => React.createElement("div", {
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

CircularProgress.propTypes = {
  className: propTypes.string,
  small: propTypes.bool,
  large: propTypes.bool
};
export { CircularProgress };