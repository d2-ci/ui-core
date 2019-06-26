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
      className: "jsx-1147635496 " + _JSXStyle.dynamic([["3970204105", [translateX, scaleX]]]) + " " + (cx({
        visible: this.props.visible,
        animated: this.state.animated
      }) || "")
    }, React.createElement(_JSXStyle, {
      id: "3970204105",
      dynamic: [translateX, scaleX]
    }, [`span.__jsx-style-dynamic-selector{-webkit-transform:translateX(${translateX}px) translateY(2px) scaleX(${scaleX});-ms-transform:translateX(${translateX}px) translateY(2px) scaleX(${scaleX});transform:translateX(${translateX}px) translateY(2px) scaleX(${scaleX});}`]), React.createElement(_JSXStyle, {
      id: "1147635496"
    }, ["span.jsx-1147635496{display:block;position:absolute;bottom:0;left:0;height:4px;width:1px;background-color:#1976d2;-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transition:none;transition:none;visibility:hidden;}", "span.visible.jsx-1147635496{visibility:visible;}", "span.animated.jsx-1147635496{-webkit-transition:-webkit-transform 300ms ease-in-out;-webkit-transition:transform 300ms ease-in-out;transition:transform 300ms ease-in-out;}"]));
  }

}

TabIndicator.propTypes = {
  getSelectedTabRef: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};
export { TabIndicator };