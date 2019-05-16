import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

const ScreenCover = ({
  children,
  onClick
}) => React.createElement("div", {
  className: "jsx-3174044719" + " " + "screen-cover"
}, React.createElement("div", {
  onClick: onClick,
  className: "jsx-3174044719" + " " + "backdrop"
}), React.createElement("div", {
  className: "jsx-3174044719" + " " + "children"
}, children), React.createElement(_JSXStyle, {
  id: "3174044719"
}, [".screen-cover.jsx-3174044719{position:fixed;height:100%;width:100%;left:0;top:0;z-index:10000;}", ".backdrop.jsx-3174044719{height:100%;width:100%;background:rgba(200,200,200,0.6);}", ".children.jsx-3174044719{position:absolute;top:50%;left:50%;width:auto;height:auto;-webkit-transform:translate(-50% -50%);-ms-transform:translate(-50% -50%);transform:translate(-50% -50%);}"]));

ScreenCover.propTypes = {
  onClick: propTypes.func
};
export { ScreenCover };