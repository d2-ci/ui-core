import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import MenuItem from '../MenuItem';
import Divider from '../Divider';
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
  children: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.instanceOf(MenuItem), PropTypes.instanceOf(Divider)])).isRequired,
  size: PropTypes.oneOf(['default', 'dense'])
};
export { MenuItem };
export default Menu;