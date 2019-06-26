import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from '../icons/Chevron';
import cx from 'classnames';

var _ref =
/*#__PURE__*/
React.createElement(ChevronLeft, null);

var _ref2 =
/*#__PURE__*/
React.createElement(ChevronRight, null);

const TabBarScroller = ({
  marginBottom,
  scrollAreaRef,
  scrollBoxRef,
  scrolledToEnd,
  scrolledToStart,
  scrollLeft,
  scrollRight,
  children
}) => React.createElement(Fragment, null, React.createElement("button", {
  onClick: scrollLeft,
  className: "jsx-1963242254 " + _JSXStyle.dynamic([["644243040", [marginBottom]]]) + " " + (cx('scroll-button', {
    hidden: scrolledToStart
  }) || "")
}, _ref), React.createElement("div", {
  className: "jsx-1963242254 " + _JSXStyle.dynamic([["644243040", [marginBottom]]]) + " " + "scroll-box-clipper"
}, React.createElement("div", {
  ref: scrollBoxRef,
  className: "jsx-1963242254 " + _JSXStyle.dynamic([["644243040", [marginBottom]]]) + " " + "scroll-box"
}, React.createElement("div", {
  ref: scrollAreaRef,
  className: "jsx-1963242254 " + _JSXStyle.dynamic([["644243040", [marginBottom]]]) + " " + 'scroll-area'
}, children))), React.createElement("button", {
  onClick: scrollRight,
  className: "jsx-1963242254 " + _JSXStyle.dynamic([["644243040", [marginBottom]]]) + " " + (cx('scroll-button', {
    hidden: scrolledToEnd
  }) || "")
}, _ref2), React.createElement(_JSXStyle, {
  id: "644243040",
  dynamic: [marginBottom]
}, [`.scroll-box.__jsx-style-dynamic-selector{margin-bottom:${marginBottom}px;}`]), React.createElement(_JSXStyle, {
  id: "1963242254"
}, [".scroll-button.jsx-1963242254{-webkit-flex:0 0 3rem;-ms-flex:0 0 3rem;flex:0 0 3rem;color:inherit;border-radius:8px;background-color:transparent;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;border:none;outline:none;cursor:pointer;opacity:1;-webkit-transition:opacity 150ms ease-in-out;transition:opacity 150ms ease-in-out;height:4px;}", ".scroll-button.jsx-1963242254:active{background-color:#e0e0e0;}", ".scroll-button.hidden.jsx-1963242254{pointer-events:none;opacity:0;}", ".scroll-box-clipper.jsx-1963242254{overflow-y:hidden;}", ".scroll-box.jsx-1963242254{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-x:scroll;-webkit-overflow-scrolling:touch;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".scroll-box.jsx-1963242254::-webkit-scrollbar{display:none;}", ".scroll-area.jsx-1963242254{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-transform:none;-ms-transform:none;transform:none;will-change:transform;}", "@-moz-document url-prefix(){.tab-container.jsx-1963242254{width:-moz-max-content;}}"]));

const refPropType = propTypes.shape({
  current: propTypes.instanceOf(Element)
});
TabBarScroller.propTypes = {
  marginBottom: propTypes.number.isRequired,
  scrollAreaRef: refPropType,
  scrollBoxRef: refPropType,
  scrolledToEnd: propTypes.bool.isRequired,
  scrolledToStart: propTypes.bool.isRequired,
  scrollLeft: propTypes.func.isRequired,
  scrollRight: propTypes.func.isRequired,
  children: propTypes.node.isRequired
};
export { TabBarScroller };