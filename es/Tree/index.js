import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { ArrowDown } from '../icons/Arrow';
import { colors } from '../theme';

const Label = ({
  icon,
  children
}) => React.createElement("div", {
  className: "jsx-187745036"
}, children, React.createElement(_JSXStyle, {
  id: "187745036"
}, ["div.jsx-187745036{min-height:24px;padding:3px 0;}"]));

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
  onToggleOpen,
  arrowTopOffset
}) => {
  const arrowIcon = hasLeafes ? _ref : _ref2;
  return React.createElement("div", {
    className: _JSXStyle.dynamic([["3487599391", [colors.grey400, arrowTopOffset, colors.grey700]]]) + " " + (cx('arrow', arrowStyle.className, {
      open,
      'has-leafes': hasLeafes
    }) || "")
  }, React.createElement("span", {
    onClick: onToggleOpen,
    className: _JSXStyle.dynamic([["3487599391", [colors.grey400, arrowTopOffset, colors.grey700]]])
  }, arrowIcon), React.createElement(_JSXStyle, {
    id: "3487599391",
    dynamic: [colors.grey400, arrowTopOffset, colors.grey700]
  }, ["div.__jsx-style-dynamic-selector{width:24px;position:relative;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", `div.__jsx-style-dynamic-selector:after{content:'';background:${colors.grey400};height:calc(100% - 24px);left:12px;position:absolute;top:15px;width:1px;z-index:1;}`, `span.__jsx-style-dynamic-selector{display:block;padding-top:${arrowTopOffset};position:relative;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);z-index:2;fill:${colors.grey700};}`, ".open.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}"]), arrowStyle.styles);
};

const Content = ({
  children
}) => React.createElement("div", null, children);

export const Tree = ({
  children,
  hasLeafes,
  open,
  onToggleOpen,
  arrowTopOffset
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
    onToggleOpen: onToggleOpen,
    arrowTopOffset: arrowTopOffset
  }), React.createElement(Content, {
    children: children
  }), React.createElement(_JSXStyle, {
    id: "446742573"
  }, ["div.jsx-446742573{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]));
};
Tree.propTypes = {
  open: propTypes.bool,
  hasLeafes: propTypes.bool,
  onToggleOpen: propTypes.func,
  arrowTopOffset: propTypes.string
};
Tree.defaultProps = {
  arrowTopOffset: '4px'
};
Tree.Label = Label;
Tree.Contents = Contents;