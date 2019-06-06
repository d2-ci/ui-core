import _JSXStyle from "styled-jsx/style";
import React from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import cx from 'classnames';
import { instanceOfComponent } from '../prop-validators';
import styles from './styles';
import { AlertBar } from '../AlertBar';

const AlertStack = ({
  className,
  children
}) => createPortal(React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + (cx(className) || "")
}, children, React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles)), document.body);

AlertStack.propTypes = {
  className: propTypes.string,
  children: propTypes.arrayOf(instanceOfComponent(AlertBar))
};
export { AlertStack };