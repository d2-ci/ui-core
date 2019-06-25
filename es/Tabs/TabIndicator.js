import _JSXStyle from "styled-jsx/style";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class TabIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: false
    };
  }

  componentDidUpdate(prevProps) {
    // The tabindicator should not move with a CSS transition when it is first positioned into place
    // The tick after the visibility is true, the animation should start
    if (!prevProps.visible && this.props.visible) {
      this.setState({
        animated: true
      });
    }
  }

  getTransformStyle() {
    const activeTabNode = this.props.getSelectedTabRef();

    if (!activeTabNode) {
      return null;
    }

    const translateX = `translateX(${activeTabNode.offsetLeft}px)`;
    const scaleX = `scaleX(${activeTabNode.offsetWidth})`;
    return {
      transform: `${translateX} translateY(2px) ${scaleX}`
    };
  }

  render() {
    return React.createElement("span", {
      style: this.getTransformStyle(),
      className: "jsx-3163709226" + " " + (cx({
        visible: this.props.visible,
        animated: this.state.animated
      }) || "")
    }, React.createElement(_JSXStyle, {
      id: "3163709226"
    }, ["span.jsx-3163709226{display:block;position:absolute;bottom:0;left:0;height:4px;width:1px;background-color:#1976d2;-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:translateX(0) translateY(2px) scaleX(100);-ms-transform:translateX(0) translateY(2px) scaleX(100);transform:translateX(0) translateY(2px) scaleX(100);-webkit-transition:none;transition:none;visibility:hidden;}", "span.visible.jsx-3163709226{visibility:visible;}", "span.animated.jsx-3163709226{-webkit-transition:-webkit-transform 300ms ease-in-out;-webkit-transition:transform 300ms ease-in-out;transition:transform 300ms ease-in-out;}"]));
  }

}

TabIndicator.propTypes = {
  getSelectedTabRef: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};
export default TabIndicator;