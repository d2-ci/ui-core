import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Card } from '../Card';
import cx from 'classnames';
import styles from './styles';

const Menu = ({
  size,
  children,
  className
}) => React.createElement(Card, null, React.createElement("ul", {
  className: `jsx-${styles.__hash}` + " " + (cx('base', size, className) || "")
}, children), React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));

Menu.defaultProps = {
  size: 'default'
};
Menu.propTypes = {
  className: propTypes.string,
  children: propTypes.arrayOf(propTypes.element).isRequired,
  size: propTypes.oneOf(['default', 'dense'])
};
export { Menu };