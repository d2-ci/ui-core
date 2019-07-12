import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';

const LayoutSidebar = ({
  as: Element,
  children
}) => React.createElement(Element, {
  className: "jsx-2865265323" + " " + "layout-sidebar"
}, children, React.createElement(_JSXStyle, {
  id: "2865265323"
}, [".layout-sidebar.jsx-2865265323{grid-area:sidebar;}"]));

LayoutSidebar.propTypes = {
  as: propTypes.oneOf(['section', 'aside', 'div'])
};
LayoutSidebar.defaultProps = {
  as: 'section'
};
export { LayoutSidebar };