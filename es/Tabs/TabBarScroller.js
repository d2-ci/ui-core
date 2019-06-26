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
  className: cx('scroll-button', {
    hidden: scrolledToStart
  })
}, _ref), React.createElement("div", {
  className: "scroll-box-clipper"
}, React.createElement("div", {
  className: "scroll-box",
  ref: scrollBoxRef,
  style: {
    marginBottom
  }
}, React.createElement("div", {
  className: 'scroll-area',
  ref: scrollAreaRef
}, children))), React.createElement("button", {
  onClick: scrollRight,
  className: cx('scroll-button', {
    hidden: scrolledToEnd
  })
}, _ref2));

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