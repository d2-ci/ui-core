import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

const InnerTabBar = ({
  cluster,
  contained,
  children
}) => React.createElement("div", {
  className: "jsx-4082842688" + " " + (cx({
    contained,
    // A scrollable tabBar cannot be clustered
    [`cluster-${cluster}`]: cluster && contained
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: "4082842688"
}, ["div.jsx-4082842688{position:relative;overflow-y:hidden;}", "div.contained.jsx-4082842688{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-x:hidden;}", "div.cluster-left.jsx-4082842688{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}", "div.cluster-centered.jsx-4082842688{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "div.cluster-right.jsx-4082842688{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}", "@-moz-document url-prefix(){div.jsx-4082842688{width:-moz-max-content;}}"]));

InnerTabBar.propTypes = {
  cluster: propTypes.oneOf([null, 'left', 'centered', 'right']),
  contained: propTypes.bool
};
export { InnerTabBar };