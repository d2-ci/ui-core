import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { layers } from '../theme.js';

const Backdrop = ({
  onClick
}) => React.createElement("div", {
  onClick: onClick,
  className: "jsx-3800920199" + " " + "backdrop"
}, React.createElement(_JSXStyle, {
  id: "3800920199"
}, ["div.jsx-3800920199{height:100%;width:100%;background:rgba(33,43,54,0.4);}"]));

const Content = ({
  children
}) => React.createElement("div", {
  className: "jsx-3777292165"
}, children, React.createElement(_JSXStyle, {
  id: "3777292165"
}, ["div.jsx-3777292165{position:absolute;top:50%;left:50%;width:auto;height:auto;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}"]));

const ScreenCover = ({
  children,
  onClick,
  className
}) => React.createElement("div", {
  className: _JSXStyle.dynamic([["3490552007", [layers.blocking]]]) + " " + (className || "")
}, React.createElement(Backdrop, {
  onClick: onClick
}), React.createElement(Content, null, children), React.createElement(_JSXStyle, {
  id: "3490552007",
  dynamic: [layers.blocking]
}, [`div.__jsx-style-dynamic-selector{position:fixed;height:100%;width:100%;left:0;top:0;z-index:${layers.blocking};}`]));

ScreenCover.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
  children: propTypes.node
};
export { ScreenCover };