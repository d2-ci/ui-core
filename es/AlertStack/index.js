import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles'; // import { AlertBar } from '../AlertBar'

const AlertStack = ({
  className,
  children
}) => React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + (cx(className) || "")
}, children, React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));

export { AlertStack };