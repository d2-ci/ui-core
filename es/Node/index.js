import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { ArrowDown } from '../icons/Arrow';
import { colors, spacers } from '../theme.js';

const Label = ({
  icon,
  children
}) => React.createElement("div", {
  className: _JSXStyle.dynamic([["3830157399", [spacers.dp4]]]) + " " + "tree__label"
}, children, React.createElement(_JSXStyle, {
  id: "3830157399",
  dynamic: [spacers.dp4]
}, [`div.__jsx-style-dynamic-selector{min-height:24px;padding:${spacers.dp4} 0;}`]));

const Contents = ({
  children,
  open
}) => React.createElement("div", {
  className: "jsx-3677374542" + " " + (cx('tree__contents', {
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
  hasLeaves,
  open,
  onOpen,
  onClose
}) => {
  const arrowIcon = hasLeaves ? _ref : _ref2;
  const onClick = open ? onClose : onOpen;
  return React.createElement("div", {
    className: _JSXStyle.dynamic([["930079085", [colors.grey400, colors.grey700]]]) + " " + (cx('tree__arrow', {
      open,
      'has-leaves': hasLeaves
    }) || "")
  }, React.createElement("span", {
    onClick: onClick,
    className: _JSXStyle.dynamic([["930079085", [colors.grey400, colors.grey700]]])
  }, arrowIcon), React.createElement(_JSXStyle, {
    id: "930079085",
    dynamic: [colors.grey400, colors.grey700]
  }, ["div.__jsx-style-dynamic-selector{width:24px;position:relative;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", `div.__jsx-style-dynamic-selector:after{background:${colors.grey400};height:calc(100% - 24px);left:12px;position:absolute;top:15px;width:1px;z-index:1;}`, ".has-leaves.open.__jsx-style-dynamic-selector:after{content:'';}", `span.__jsx-style-dynamic-selector{display:block;position:relative;z-index:2;fill:${colors.grey700};}`, "div.__jsx-style-dynamic-selector svg{vertical-align:top;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}", ".open.__jsx-style-dynamic-selector svg{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}"]));
};

const Content = ({
  open,
  children,
  label
}) => React.createElement("div", null, label, React.createElement(Contents, {
  open: open
}, children));

export const Node = ({
  open,
  component,
  children,
  onOpen,
  onClose
}) => {
  const hasLeaves = !!React.Children.toArray(children).filter(i => i).length;
  const className = cx('tree', {
    open,
    'has-leaves': hasLeaves
  });
  return React.createElement("div", {
    className: "jsx-446742573" + " " + (className || "")
  }, React.createElement(Arrow, {
    open: open,
    hasLeaves: hasLeaves,
    onOpen: onOpen,
    onClose: onClose
  }), React.createElement(Content, {
    open: open,
    label: component,
    children: children
  }), React.createElement(_JSXStyle, {
    id: "446742573"
  }, ["div.jsx-446742573{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]));
};
Node.propTypes = {
  component: propTypes.element.isRequired,
  open: propTypes.bool,
  onOpen: propTypes.func,
  onClose: propTypes.func
};