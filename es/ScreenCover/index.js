import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

const Backdrop = ({
  onClick
}) => React.createElement("div", {
  onClick: onClick,
  className: "jsx-1699153514" + " " + "backdrop"
}, React.createElement(_JSXStyle, {
  id: "1699153514"
}, ["div.jsx-1699153514{height:100%;width:100%;background:rgba(200,200,200,0.6);}"]));

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
  className: "jsx-3477031661" + " " + (className || "")
}, React.createElement(Backdrop, {
  onClick: onClick
}), React.createElement(Content, null, children), React.createElement(_JSXStyle, {
  id: "3477031661"
}, ["div.jsx-3477031661{position:fixed;height:100%;width:100%;left:0;top:0;z-index:10000;}"]));

ScreenCover.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
  children: propTypes.node
};
export { ScreenCover };