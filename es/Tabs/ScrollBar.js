import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent, createRef } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { ChevronLeft, ChevronRight } from '../icons/Chevron';
import { colors } from '../theme';
import { detectHorizontalScrollbarHeight } from './detectHorizontalScrollbarHeight';
import { animatedSideScroll } from './animatedSideScroll';

var _ref =
/*#__PURE__*/
React.createElement(ChevronLeft, null);

var _ref2 =
/*#__PURE__*/
React.createElement(ChevronRight, null);

class ScrollBar extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "scrollBox", createRef());

    _defineProperty(this, "scrollArea", createRef());

    _defineProperty(this, "state", {
      scrolledToStart: false,
      scrolledToEnd: false
    });

    _defineProperty(this, "horizontalScrollBarHeight", detectHorizontalScrollbarHeight());

    _defineProperty(this, "scrollRight", () => this.scroll());

    _defineProperty(this, "scrollLeft", () => this.scroll(true));

    _defineProperty(this, "animatedScrollCallback", () => {
      this.toggleScrollButtonVisibility();
      this.attachSideScrollListener();
    });

    _defineProperty(this, "toggleScrollButtonVisibility", () => {
      const {
        scrollLeft,
        offsetWidth
      } = this.scrollBox.current;
      const {
        offsetWidth: areaOffsetWidth
      } = this.scrollArea.current;
      const scrolledToStart = scrollLeft <= 0;
      const scrolledToEnd = scrollLeft + offsetWidth >= areaOffsetWidth;

      if (this.state.scrolledToStart !== scrolledToStart || this.state.scrolledToEnd !== scrolledToEnd) {
        this.setState({
          scrolledToStart,
          scrolledToEnd
        });
      }
    });
  }

  componentDidMount() {
    this.scrollSelectedTabIntoView();
    this.attachSideScrollListener();
  }

  componentWillUnmount() {
    this.removeSideScrollListener();
  }

  scroll(goBackwards) {
    this.removeSideScrollListener();
    animatedSideScroll(this.scrollBox.current, this.animatedScrollCallback, goBackwards);
  }

  scrollSelectedTabIntoView() {
    const scrollBoxEl = this.scrollBox.current;
    const tab = scrollBoxEl.querySelector('.tab.selected');

    if (tab) {
      const tabEnd = tab.offsetLeft + tab.offsetWidth;

      if (tabEnd > scrollBoxEl.offsetWidth) {
        scrollBoxEl.scrollLeft = tabEnd - scrollBoxEl.offsetWidth;
      }
    }
  }

  attachSideScrollListener() {
    this.scrollBox.current.addEventListener('scroll', this.toggleScrollButtonVisibility);
  }

  removeSideScrollListener() {
    this.scrollBox.current.removeEventListener('scroll', this.toggleScrollButtonVisibility);
  }

  render() {
    const {
      scrolledToStart,
      scrolledToEnd
    } = this.state;
    const {
      children
    } = this.props;
    return React.createElement("div", {
      className: "jsx-4061674243 " + _JSXStyle.dynamic([["1341056994", [colors.white, colors.grey400, colors.grey600, colors.grey100, colors.grey200, colors.grey500]]]) + " " + "scroll-bar"
    }, React.createElement("button", {
      onClick: scrolledToStart ? undefined : this.scrollLeft,
      className: "jsx-4061674243 " + _JSXStyle.dynamic([["1341056994", [colors.white, colors.grey400, colors.grey600, colors.grey100, colors.grey200, colors.grey500]]]) + " " + (cx('scroll-button', {
        disabled: scrolledToStart
      }) || "")
    }, _ref), React.createElement("div", {
      className: "jsx-4061674243 " + _JSXStyle.dynamic([["1341056994", [colors.white, colors.grey400, colors.grey600, colors.grey100, colors.grey200, colors.grey500]]]) + " " + "scroll-box-clipper"
    }, React.createElement("div", {
      ref: this.scrollBox,
      className: "jsx-4061674243 " + _JSXStyle.dynamic([["1341056994", [colors.white, colors.grey400, colors.grey600, colors.grey100, colors.grey200, colors.grey500]]]) + " " + "scroll-box"
    }, React.createElement("div", {
      ref: this.scrollArea,
      className: "jsx-4061674243 " + _JSXStyle.dynamic([["1341056994", [colors.white, colors.grey400, colors.grey600, colors.grey100, colors.grey200, colors.grey500]]]) + " " + "scroll-area"
    }, children))), React.createElement("button", {
      onClick: scrolledToEnd ? undefined : this.scrollRight,
      className: "jsx-4061674243 " + _JSXStyle.dynamic([["1341056994", [colors.white, colors.grey400, colors.grey600, colors.grey100, colors.grey200, colors.grey500]]]) + " " + (cx('scroll-button', {
        disabled: scrolledToEnd
      }) || "")
    }, _ref2), React.createElement(_JSXStyle, {
      id: "4061674243"
    }, [`.scroll-box.jsx-4061674243{margin-bottom:${-this.horizontalScrollBarHeight}px;}`]), React.createElement(_JSXStyle, {
      id: "1341056994",
      dynamic: [colors.white, colors.grey400, colors.grey600, colors.grey100, colors.grey200, colors.grey500]
    }, [".scroll-bar.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}", `.scroll-button.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:inherit;background-color:${colors.white};border:none;border-bottom:1px solid ${colors.grey400};outline:none;padding:16px 16px 11px 16px;cursor:pointer;}`, `.scroll-button.__jsx-style-dynamic-selector svg{width:20px;height:20px;fill:${colors.grey600};-webkit-transition:opacity 150ms ease-in-out;transition:opacity 150ms ease-in-out;opacity:1;}`, `.scroll-button.__jsx-style-dynamic-selector:hover{background-color:${colors.grey100};}`, `.scroll-button.__jsx-style-dynamic-selector:active{background-color:${colors.grey200};}`, ".scroll-button.disabled.__jsx-style-dynamic-selector{cursor:not-allowed;}", ".scroll-button.disabled.__jsx-style-dynamic-selector:hover{background-color:transparent;}", `.scroll-button.disabled.__jsx-style-dynamic-selector svg{fill:${colors.grey500};}`, ".scroll-box-clipper.__jsx-style-dynamic-selector{overflow-y:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", ".scroll-box.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-x:scroll;-webkit-overflow-scrolling:touch;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".scroll-box.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}", ".scroll-area.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;overflow-x:hidden;}"]));
  }

}

ScrollBar.propTypes = {
  children: propTypes.node.isRequired
};
export { ScrollBar };