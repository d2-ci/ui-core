import _JSXStyle from "styled-jsx/style";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import propTypes from 'prop-types';
import React, { Children, cloneElement, createRef, PureComponent } from 'react';
import { instanceOfComponent } from '../prop-validators';
import { colors } from '../theme.js';
import { animatedSideScroll } from './animatedSideScroll';
import { Tab } from './Tab';
import { TabBar } from './TabBar';
import { TabIndicator } from './TabIndicator';

class Tabs extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "scrollBox", createRef());

    _defineProperty(this, "scrollArea", createRef());

    _defineProperty(this, "tabRefs", Children.map(this.props.children, createRef));

    _defineProperty(this, "state", {
      scrolledToStart: true,
      scrolledToEnd: true,
      showTabIndicator: false
    });

    _defineProperty(this, "getSelectedTabRef", () => {
      const {
        selected
      } = this.props;
      return this.tabRefs[selected].current;
    });

    _defineProperty(this, "scrollLeft", () => {
      const firstTab = this.tabRefs[0].current;
      const {
        scrollLeft,
        offsetWidth
      } = this.scrollBox.current;
      const offsetLeft = scrollLeft - offsetWidth;
      const targetTab = offsetLeft <= 0 ? firstTab : this.getTabAtOffsetLeft(offsetLeft);
      this.scrollToTab(targetTab);
    });

    _defineProperty(this, "scrollRight", () => {
      const lastTab = this.tabRefs[this.tabRefs.length - 1].current;
      const {
        scrollLeft,
        offsetWidth
      } = this.scrollBox.current;
      const {
        offsetWidth: areaOffsetWidth
      } = this.scrollArea.current;
      const offsetLeft = scrollLeft + offsetWidth * 2;
      const atEnd = areaOffsetWidth <= offsetLeft;
      const targetTab = atEnd ? lastTab : this.getTabAtOffsetLeft(offsetLeft);
      this.scrollToTab(targetTab);
    });

    _defineProperty(this, "initScrollableUI", () => {
      this.showTabIndicator();
      this.toggleScrollButtonVisibility();
      this.attachSideScrollListener();
    });

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
      const scrolledToStart = scrollLeft === 0;
      const scrolledToEnd = scrollLeft + offsetWidth === areaOffsetWidth;

      if (this.state.scrolledToStart !== scrolledToStart || this.state.scrolledToEnd !== scrolledToEnd) {
        this.setState({
          scrolledToStart,
          scrolledToEnd
        });
      }
    });
  }

  componentDidMount() {
    if (this.props.contained) {
      this.showTabIndicator();
      return;
    }

    this.setHorizontalScrollbarHeight();

    if (this.scrollRequiredToReachSelectedTab()) {
      const scrollProps = {
        duration: 1,
        callback: this.initScrollableUI
      };
      this.scrollToTab(this.getSelectedTabRef(), scrollProps);
    } else {
      this.initScrollableUI();
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.contained && this.props.selected !== prevProps.selected && this.scrollRequiredToReachSelectedTab()) {
      this.scrollToTab(this.getSelectedTabRef());
    }
  }

  componentWillUnmount() {
    if (!this.props.contained) {
      this.removeSideScrollListener();
    }
  }

  showTabIndicator() {
    this.setState({
      showTabIndicator: true
    });
  }

  setHorizontalScrollbarHeight() {
    const {
      offsetHeight,
      clientHeight
    } = this.scrollBox.current;
    this.horizontalScrollbarHeight = offsetHeight - clientHeight;
  }

  attachSideScrollListener() {
    this.scrollBox.current.addEventListener('scroll', this.toggleScrollButtonVisibility);
  }

  removeSideScrollListener() {
    this.scrollBox.current.removeEventListener('scroll', this.toggleScrollButtonVisibility);
  }

  getTabAtOffsetLeft(offsetLeft) {
    return this.tabRefs.find(({
      current: tab
    }) => offsetLeft >= tab.offsetLeft && offsetLeft <= tab.offsetLeft + tab.offsetWidth).current;
  }

  scrollRequiredToReachSelectedTab() {
    const {
      scrollLeft,
      offsetWidth
    } = this.scrollBox.current;
    const tab = this.getSelectedTabRef();
    const shouldScrollRight = tab.offsetLeft - scrollLeft + tab.offsetWidth > offsetWidth;
    const shouldScrollLeft = tab.offsetLeft < scrollLeft;
    return shouldScrollRight || shouldScrollLeft;
  }

  scrollToTab(tab, scrollProps = {
    callback: this.animatedScrollCallback
  }) {
    this.removeSideScrollListener();
    animatedSideScroll(_objectSpread({
      targetEl: tab,
      scrollBox: this.scrollBox.current
    }, scrollProps));
  }

  render() {
    const {
      scrolledToStart,
      scrolledToEnd,
      showTabIndicator
    } = this.state;
    const {
      className,
      contained,
      cluster,
      children,
      selected
    } = this.props;
    return React.createElement("div", {
      className: _JSXStyle.dynamic([["4177469255", [colors.white]]]) + " " + (className || "")
    }, React.createElement(TabBar, {
      cluster: cluster,
      contained: contained,
      scrollLeft: this.scrollLeft,
      scrollRight: this.scrollRight,
      scrolledToStart: scrolledToStart,
      scrolledToEnd: scrolledToEnd,
      scrollBoxRef: this.scrollBox,
      scrollAreaRef: this.scrollArea,
      marginBottom: -this.horizontalScrollbarHeight
    }, Children.map(children, (child, index) => cloneElement(child, {
      selected: index === selected,
      ref: this.tabRefs[index]
    })), React.createElement(TabIndicator, {
      getSelectedTabRef: this.getSelectedTabRef,
      visible: showTabIndicator
    })), React.createElement(_JSXStyle, {
      id: "4177469255",
      dynamic: [colors.white]
    }, [`div.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background-color:${colors.white};}`]));
  }

}

Tabs.propTypes = {
  className: propTypes.string,
  selected: propTypes.number.isRequired,
  contained: TabBar.propTypes.contained,
  cluster: TabBar.propTypes.cluster,
  children: propTypes.arrayOf(instanceOfComponent(Tab))
};
Tabs.defaultProps = {
  contained: false,
  position: 'relative',
  cluster: null
};
export { Tabs };