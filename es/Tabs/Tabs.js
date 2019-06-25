import _JSXStyle from "styled-jsx/style";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent, Children, cloneElement, createRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import TabIndicator from './TabIndicator';
import animatedSideScroll from './animatedSideScroll';
import { ChevronLeft, ChevronRight } from '../icons/Chevron';
import cx from 'classnames';
import styles from './styles';

var _ref =
/*#__PURE__*/
React.createElement(ChevronLeft, null);

var _ref2 =
/*#__PURE__*/
React.createElement(ChevronRight, null);

class Tabs extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "scrollBox", createRef());

    _defineProperty(this, "scrollArea", createRef());

    _defineProperty(this, "tabRefs", Children.map(this.props.children, createRef));

    _defineProperty(this, "nodes", {
      tabs: []
    });

    _defineProperty(this, "state", {
      scrolledToStart: true,
      scrolledToEnd: true,
      showTabIndicator: false
    });

    _defineProperty(this, "addTabRef", node => {
      this.nodes.tabs.push(node);
    });

    _defineProperty(this, "getSelectedTabRef", () => {
      const {
        selected
      } = this.props;
      return this.nodes.tabs[selected];
    });

    _defineProperty(this, "scrollLeft", () => {
      const {
        tabs
      } = this.nodes;
      const {
        scrollLeft,
        offsetWidth
      } = this.scrollBox.current;
      const offsetLeft = scrollLeft - offsetWidth;
      const targetTab = offsetLeft <= 0 ? tabs[0] : this.getTabAtOffsetLeft(offsetLeft);
      this.scrollToTab(targetTab);
    });

    _defineProperty(this, "scrollRight", () => {
      const {
        tabs
      } = this.nodes;
      const {
        scrollLeft,
        offsetWidth
      } = this.scrollBox.current;
      const {
        offsetWidth: areaOffsetWidth
      } = this.scrollArea.current;
      const offsetLeft = scrollLeft + offsetWidth * 2;
      const atEnd = areaOffsetWidth <= offsetLeft;
      const targetTab = atEnd ? tabs[tabs.length - 1] : this.getTabAtOffsetLeft(offsetLeft);
      this.scrollToTab(targetTab);
    });

    _defineProperty(this, "animatedScrollCallback", () => {
      this.toggleScrollButtonVisibility();
      this.attachSideScrollListener();
    });

    _defineProperty(this, "updateScrollableUiAfterMount", () => {
      this.showTabIndicator();
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

    if (this.scrollRequiredToReachActiveTab()) {
      const scrollProps = {
        duration: 1,
        callback: this.updateScrollableUiAfterMount
      };
      this.scrollToTab(this.getSelectedTabRef(), scrollProps);
    } else {
      this.updateScrollableUiAfterMount();
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.contained && this.props.selected !== prevProps.selected && this.scrollRequiredToReachActiveTab()) {
      this.scrollToTab(this.getSelectedTabRef());
    }
  }

  componentWillUnmount() {
    if (!this.props.contained) {
      this.removeSideScrollListener();
    }
  } // Refs


  // Methods
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
    return this.nodes.tabs.find(tab => offsetLeft >= tab.offsetLeft && offsetLeft <= tab.offsetLeft + tab.offsetWidth);
  }

  scrollRequiredToReachActiveTab() {
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

  renderChildren() {
    const {
      children,
      selected
    } = this.props;
    return Children.map(children, (child, index) => cloneElement(child, {
      active: index === selected,
      addTabRef: this.addTabRef
    }));
  } // Rendering


  renderTabBar() {
    const {
      cluster,
      contained
    } = this.props;
    const {
      showTabIndicator
    } = this.state;
    const className = cx('tab-container', // A scrollable tabBar cannot be clustered
    {
      [`cluster-${cluster}`]: cluster && contained,
      contained
    });
    return React.createElement("div", {
      className: className
    }, this.renderChildren(), React.createElement(TabIndicator, {
      getSelectedTabRef: this.getSelectedTabRef,
      visible: showTabIndicator
    }));
  }

  render() {
    const {
      scrolledToStart,
      scrolledToEnd
    } = this.state;
    const {
      className,
      position,
      contained
    } = this.props;
    const scrollBoxStyle = {
      marginBottom: -this.horizontalScrollbarHeight
    };
    let tabBar = this.renderTabBar();

    if (!contained) {
      tabBar = React.createElement(Fragment, null, React.createElement("button", {
        onClick: this.scrollLeft,
        className: cx('scroll-button', {
          hidden: scrolledToStart
        })
      }, _ref), React.createElement("div", {
        className: "scroll-box-clipper"
      }, React.createElement("div", {
        className: "scroll-box",
        ref: this.scrollBox,
        style: scrollBoxStyle
      }, React.createElement("div", {
        className: 'scroll-area',
        ref: this.scrollArea
      }, tabBar))), React.createElement("button", {
        onClick: this.scrollRight,
        className: cx('scroll-button', {
          hidden: scrolledToEnd
        })
      }, _ref2));
    }

    return React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + (cx(className, position) || "")
    }, tabBar, React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

Tabs.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.number.isRequired,
  position: PropTypes.oneOf(['relative', 'fixed', 'absolute', 'sticky']),
  contained: PropTypes.bool,
  cluster: PropTypes.oneOf([null, 'left', 'centered', 'right']),
  children: PropTypes.oneOfType([PropTypes.objectOf(Tab), PropTypes.arrayOf(Tab)])
};
Tabs.defaultProps = {
  items: [],
  contained: false,
  position: 'relative',
  cluster: null
};
export default Tabs;