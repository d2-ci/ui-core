import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
export const Content = ({
  children,
  overflow
}) => React.createElement("span", {
  className: "jsx-2041291425" + " " + (cx({
    overflow
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: "2041291425"
}, ["span.jsx-2041291425{margin:0 12px;color:inherit;white-space:nowrap;}", ".overflow.jsx-2041291425{max-width:150px;overflow:hidden;text-overflow:ellipsis;}"]));
Content.propTypes = {
  overflow: propTypes.bool
};