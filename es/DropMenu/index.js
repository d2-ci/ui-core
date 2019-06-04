import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import { getPosition } from './getPosition';
import { layers } from '../theme.js';

class DropMenu extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      top: 'auto',
      left: 'auto'
    });

    _defineProperty(this, "elContainer", React.createRef());

    _defineProperty(this, "updatePosition", () => {
      this.setState(getPosition(this.props.anchorEl));
    });

    _defineProperty(this, "onDocClick", evt => {
      if (this.elContainer.current && !this.elContainer.current.contains(evt.target) && !this.props.stayOpen) {
        this.props.onClose();
      }
    });
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocClick);
    window.addEventListener('resize', this.updatePosition);
    this.updatePosition();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocClick);
    window.removeEventListener('resize', this.updatePosition);
  }

  render() {
    const {
      className,
      component
    } = this.props;
    const {
      top,
      left
    } = this.state;
    return ReactDOM.createPortal(React.createElement("div", {
      ref: this.elContainer,
      className: _JSXStyle.dynamic([["2447591424", [layers.applicationTop, top, left]]]) + " " + (className || "")
    }, component, React.createElement(_JSXStyle, {
      id: "2447591424",
      dynamic: [layers.applicationTop, top, left]
    }, [`div.__jsx-style-dynamic-selector{z-index:${layers.applicationTop};position:absolute;top:${top};left:${left};}`])), document.body);
  }

}

DropMenu.propTypes = {
  className: propTypes.string,

  /** The component to use as the dropdown component */
  component: propTypes.element,

  /** Function to trigger when click happens outside of the DOM element */
  onClose: propTypes.func,

  /** Decides if the menu should call the onClose function or not */
  stayOpen: propTypes.bool,

  /** DOM node to position itself against */
  anchorEl: propTypes.shape({
    getBoundingClientRect: propTypes.func.isRequired
  })
};
export { DropMenu };