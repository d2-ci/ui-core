import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import cx from 'classnames';
import styles from './styles';
export function Menu({
  size,
  width,
  children,
  className
}) {
  return React.createElement(Card, null, React.createElement("ul", {
    className: `jsx-${styles.__hash}` + " " + (cx('base', size, className) || "")
  }, children), React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
}
Menu.defaultProps = {
  size: 'default'
};
Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  size: PropTypes.oneOf(['default', 'dense'])
};
export default Menu;