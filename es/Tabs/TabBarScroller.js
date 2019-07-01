import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from '../icons/Chevron';
import cx from 'classnames';
import { colors } from '../theme.js';

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
  onClick: scrolledToStart ? undefined : scrollLeft,
  className: _JSXStyle.dynamic([["660344677", [marginBottom]], ["2545553313", [colors.white, colors.grey400, colors.grey600, colors.grey100, colors.grey200, colors.grey500]]]) + " " + (cx('scroll-button', {
    disabled: scrolledToStart
  }) || "")
}, _ref), React.createElement("div", {
  className: _JSXStyle.dynamic([["660344677", [marginBottom]], ["2545553313", [colors.white, colors.grey400, colors.grey600, colors.grey100, colors.grey200, colors.grey500]]]) + " " + "scroll-box-clipper"
}, React.createElement("div", {
  ref: scrollBoxRef,
  className: _JSXStyle.dynamic([["660344677", [marginBottom]], ["2545553313", [colors.white, colors.grey400, colors.grey600, colors.grey100, colors.grey200, colors.grey500]]]) + " " + "scroll-box"
}, React.createElement("div", {
  ref: scrollAreaRef,
  className: _JSXStyle.dynamic([["660344677", [marginBottom]], ["2545553313", [colors.white, colors.grey400, colors.grey600, colors.grey100, colors.grey200, colors.grey500]]]) + " " + "scroll-area"
}, children))), React.createElement("button", {
  onClick: scrolledToEnd ? undefined : scrollRight,
  className: _JSXStyle.dynamic([["660344677", [marginBottom]], ["2545553313", [colors.white, colors.grey400, colors.grey600, colors.grey100, colors.grey200, colors.grey500]]]) + " " + (cx('scroll-button', {
    disabled: scrolledToEnd
  }) || "")
}, _ref2), React.createElement(_JSXStyle, {
  id: "660344677",
  dynamic: [marginBottom]
}, [`.scroll-box.__jsx-style-dynamic-selector{margin-bottom:${marginBottom}px;}`]), React.createElement(_JSXStyle, {
  id: "2545553313",
  dynamic: [colors.white, colors.grey400, colors.grey600, colors.grey100, colors.grey200, colors.grey500]
}, [`.scroll-button.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:inherit;background-color:${colors.white};border:none;border-bottom:1px solid ${colors.grey400};outline:none;padding:16px 16px 11px 16px;cursor:pointer;}`, `.scroll-button.__jsx-style-dynamic-selector svg{width:20px;height:20px;fill:${colors.grey600};-webkit-transition:opacity 150ms ease-in-out;transition:opacity 150ms ease-in-out;opacity:1;}`, `.scroll-button.__jsx-style-dynamic-selector:hover{background-color:${colors.grey100};}`, `.scroll-button.__jsx-style-dynamic-selector:active{background-color:${colors.grey200};}`, ".scroll-button.disabled.__jsx-style-dynamic-selector{cursor:not-allowed;}", ".scroll-button.disabled.__jsx-style-dynamic-selector:hover{background-color:transparent;}", `.scroll-button.disabled.__jsx-style-dynamic-selector svg{fill:${colors.grey500};}`, ".scroll-box-clipper.__jsx-style-dynamic-selector{overflow-y:hidden;}", ".scroll-box.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-x:scroll;-webkit-overflow-scrolling:touch;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".scroll-box.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}", ".scroll-area.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-transform:none;-ms-transform:none;transform:none;will-change:transform;}", "@-moz-document url-prefix(){.tab-container.__jsx-style-dynamic-selector{width:-moz-max-content;}}"]));

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