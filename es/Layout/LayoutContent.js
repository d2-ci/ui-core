import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';

const LayoutContent = ({
  as: Element,
  children
}) => React.createElement(Element, {
  className: "jsx-2065439825" + " " + "layout-content"
}, children, React.createElement(_JSXStyle, {
  id: "2065439825"
}, [".layout-content.jsx-2065439825{grid-area:content;}"]));

LayoutContent.propTypes = {
  as: propTypes.oneOf(['main', 'div'])
};
LayoutContent.defaultProps = {
  as: 'main'
};
export { LayoutContent };