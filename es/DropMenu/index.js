import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

var _ref =
/*#__PURE__*/
React.createElement(_JSXStyle, {
  id: "4254054870"
}, "div.jsx-4254054870{z-index:1000;position:absolute;}");

class DropMenu extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onDocClick", evt => {
      if (this.elContainer && !this.elContainer.contains(evt.target) && !this.props.stayOpen) {
        this.props.onClose();
      }
    });
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocClick);
  }

  render() {
    const {
      className,
      component
    } = this.props;
    return ReactDOM.createPortal(React.createElement("div", {
      ref: c => this.elContainer = c,
      className: "jsx-4254054870" + " " + (className || "")
    }, component, _ref), document.body);
  }

}

DropMenu.propTypes = {
  className: propTypes.string,

  /** The component to use as the dropdown component */
  component: propTypes.element,

  /** Function to trigger when click happens outside of the DOM element */
  onClose: propTypes.func,

  /** Decides if the menu should call the onClose function or not */
  stayOpen: propTypes.bool
};
export { DropMenu };