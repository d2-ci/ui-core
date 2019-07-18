import _JSXStyle from "styled-jsx/style";
import cx from 'classnames';
import propTypes from 'prop-types';
import React from 'react';
import { sizePropType } from '../common-prop-types';
import styles from './styles.js';

const CircularLoader = ({
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

CircularLoader.propTypes = {
  className: propTypes.string,
  small: sizePropType,
  large: sizePropType
};
export { CircularLoader };