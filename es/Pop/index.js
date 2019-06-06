import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { createPortal } from 'react-dom';
import React, { Component, createRef } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { reactRef } from '../prop-validators/reactRef';
import { BackgroundCover } from './BackgroundCover';
import { Content, arePositionsEqual, getPosition, getScrollAndClientOffset, propPosition } from './helpers';
/**
 * The Pop component is a content container that behaves like a context menu
 * container. It can be used to create multi level context menus that won't be
 * displayed off-screen by wrapping each level with the Pop component.
 */

class Pop extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ref", createRef());

    _defineProperty(this, "state", {
      position: {}
    });

    _defineProperty(this, "updatePosition", () => {
      if (this.props.open && this.ref.current) {
        const {
          anchorRef,
          side
        } = this.props;
        const position = getPosition({
          pop: this.ref.current,
          anchor: anchorRef.current,
          side
        });

        if (!arePositionsEqual(position, this.state.position)) {
          this.setState({
            position
          });
        }
      }
    });
  }

  componentDidMount() {
    this.updatePosition();
    window.addEventListener('resize', this.updatePosition);
  }

  render() {
    if (!this.props.open) return null;
    const {
      children,
      onClose
    } = this.props;
    const {
      position
    } = this.state;
    return createPortal(React.createElement("div", {
      className: "jsx-2814193699"
    }, React.createElement(BackgroundCover, {
      onClick: onClose
    }), React.createElement(Content, {
      ref: this.ref,
      position: position,
      children: children
    }), React.createElement(_JSXStyle, {
      id: "2814193699"
    }, ["div.jsx-2814193699{left:0;height:100%;position:fixed;top:0;width:100%;z-index:2000;}"])), document.body);
  }

}

Pop.propTypes = {
  /* Must be created with `React.createRef()` */
  anchorRef: reactRef.isRequired,

  /* Pop will always be centered to the center of the anchor's side */
  side: propTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
  open: propTypes.bool,
  onClose: propTypes.func
};
export { Pop };