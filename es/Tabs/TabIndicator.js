import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class TabIndicator extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      animated: false
    });
  }

  componentDidUpdate(prevProps) {
    /* The tabindicator should not move with a CSS transition when
       it is first positioned into place. In the render cycle
       after it became visible the animation should be enabled  */
    if (!prevProps.visible && this.props.visible) {
      this.setState({
        animated: true
      });
    }
  }

  getTransformStyle() {
    const activeTabNode = this.props.getSelectedTabRef();
    return {
      translateX: activeTabNode ? activeTabNode.offsetLeft : 0,
      scaleX: activeTabNode ? activeTabNode.offsetWidth : 100
    };
  }

  render() {
    const {
      translateX,
      scaleX
    } = this.getTransformStyle();
    return React.createElement("span", {
      style: this.getTransformStyle(),
      className: "jsx-2564779855 " + _JSXStyle.dynamic([["816389923", [translateX, scaleX]]]) + " " + (cx({
        visible: this.props.visible,
        animated: this.state.animated
      }) || "")
    }, React.createElement(_JSXStyle, {
      id: "816389923",
      dynamic: [translateX, scaleX]
    }, [`span.__jsx-style-dynamic-selector{-webkit-transform:translateX(${translateX}px) scaleX(${scaleX});-ms-transform:translateX(${translateX}px) scaleX(${scaleX});transform:translateX(${translateX}px) scaleX(${scaleX});}`]), React.createElement(_JSXStyle, {
      id: "2564779855"
    }, ["span.jsx-2564779855{display:block;position:absolute;bottom:0;left:0;height:4px;width:1px;background-color:#1976d2;-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transition:none;transition:none;visibility:hidden;z-index:99999;}", "span.visible.jsx-2564779855{visibility:visible;}", "span.animated.jsx-2564779855{-webkit-transition:-webkit-transform 300ms ease-in-out;-webkit-transition:transform 300ms ease-in-out;transition:transform 300ms ease-in-out;}"]));
  }

}

TabIndicator.propTypes = {
  getSelectedTabRef: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};
export { TabIndicator };