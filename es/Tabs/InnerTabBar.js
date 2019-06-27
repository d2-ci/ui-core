import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

const InnerTabBar = ({
  fixed,
  children
}) => React.createElement("div", {
  className: "jsx-664832750" + " " + (cx({
    fixed
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: "664832750"
}, ["div.jsx-664832750{position:relative;overflow-y:hidden;}", "div.fixed.jsx-664832750{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-x:hidden;}", "@-moz-document url-prefix(){div.jsx-664832750{width:-moz-max-content;}}"]));

InnerTabBar.propTypes = {
  fixed: propTypes.bool.isRequired
};
export { InnerTabBar };