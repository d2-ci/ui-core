import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { ArrowDown } from '../icons/Arrow';

const Label = ({
  icon,
  children
}) => React.createElement("div", null, children);

const Contents = ({
  children,
  open
}) => React.createElement("div", {
  className: "jsx-3677374542" + " " + (cx({
    open
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: "3677374542"
}, ["div.jsx-3677374542{height:0;overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", ".open.jsx-3677374542{height:auto;}"]));

var _ref =
/*#__PURE__*/
React.createElement(ArrowDown, null);

var _ref2 =
/*#__PURE__*/
React.createElement("span", null);

const Arrow = ({
  hasLeafes,
  open,
  onToggleOpen
}) => {
  const arrowIcon = hasLeafes ? _ref : _ref2;
  return React.createElement("div", {
    className: "jsx-2720529281" + " " + (cx('arrow', {
      open,
      'has-leafes': hasLeafes
    }) || "")
  }, React.createElement("span", {
    onClick: onToggleOpen,
    className: "jsx-2720529281"
  }, arrowIcon), React.createElement(_JSXStyle, {
    id: "2720529281"
  }, ["div.jsx-2720529281{width:24px;}", "span.jsx-2720529281{display:block;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}", ".open.jsx-2720529281 span.jsx-2720529281{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}"]));
};

const Content = ({
  children
}) => React.createElement("div", null, children);

export const Tree = ({
  children,
  hasLeafes,
  open,
  onToggleOpen
}) => {
  const className = cx('tree', {
    open,
    'has-leafes': hasLeafes
  });
  return React.createElement("div", {
    className: "jsx-446742573" + " " + (className || "")
  }, React.createElement(Arrow, {
    open: open,
    hasLeafes: hasLeafes,
    onToggleOpen: onToggleOpen
  }), React.createElement(Content, {
    children: children
  }), React.createElement(_JSXStyle, {
    id: "446742573"
  }, ["div.jsx-446742573{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]));
};
Tree.propTypes = {
  hasLeafes: propTypes.bool,
  onToggleOpen: propTypes.func,
  open: propTypes.bool
};
Tree.Label = Label;
Tree.Contents = Contents;