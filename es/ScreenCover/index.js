import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

const ScreenCover = ({
  children,
  onClick
}) => React.createElement("div", {
  className: "jsx-2699124549" + " " + "screen-cover"
}, React.createElement("div", {
  onClick: onClick,
  className: "jsx-2699124549" + " " + "backdrop"
}), React.createElement("div", {
  className: "jsx-2699124549" + " " + "children"
}, children), React.createElement(_JSXStyle, {
  id: "2699124549"
}, [".screen-cover.jsx-2699124549{position:fixed;height:100%;width:100%;left:0;top:0;z-index:10000;background:rgba(200,200,200,0.6);}", ".backdrop.jsx-2699124549{height:100%;width:100%;}", ".children.jsx-2699124549{position:absolute;top:50%;left:50%;width:auto;height:auto;-webkit-transform-origin:-50% -50%;-ms-transform-origin:-50% -50%;transform-origin:-50% -50%;}"]));

ScreenCover.propTypes = {
  onClick: propTypes.func
};
export { ScreenCover };