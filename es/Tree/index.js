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

const arrowStyle = {
  styles: React.createElement(_JSXStyle, {
    id: "2568580958"
  }, ["div.jsx-2568580958>svg{fill:#e2e2e2;}"]),
  className: "jsx-2568580958"
};

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
    className: "jsx-316501532" + " " + (cx('arrow', arrowStyle.className, {
      open,
      'has-leafes': hasLeafes
    }) || "")
  }, React.createElement("span", {
    onClick: onToggleOpen,
    className: "jsx-316501532"
  }, arrowIcon), React.createElement(_JSXStyle, {
    id: "316501532"
  }, ["div.jsx-316501532{width:24px;position:relative;}", "div.jsx-316501532:after{content:'';background:#e2e2e2;height:calc(100% - 24px);left:12px;position:absolute;top:12px;width:1px;z-index:1;}", "span.jsx-316501532{display:block;position:relative;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);z-index:2;}", ".open.jsx-316501532 span.jsx-316501532{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}"]), arrowStyle.styles);
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