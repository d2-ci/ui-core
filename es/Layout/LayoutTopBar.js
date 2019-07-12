import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';

const LayoutTopBar = ({
  as: Element,
  children
}) => React.createElement(Element, {
  className: "jsx-439364583" + " " + "layout-top-bar"
}, children, React.createElement(_JSXStyle, {
  id: "439364583"
}, [".layout-top-bar.jsx-439364583{grid-area:topbar;}"]));

LayoutTopBar.propTypes = {
  as: propTypes.oneOf(['header', 'nav', 'section', 'aside', 'div'])
};
LayoutTopBar.defaultProps = {
  as: 'div'
};
export { LayoutTopBar };