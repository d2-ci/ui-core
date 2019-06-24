import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { createPortal } from 'react-dom';
import React, { Component, createRef } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { reactRef } from '../prop-validators/reactRef';
import { BackgroundCover } from './BackgroundCover';
import { Content } from './Content';
import { arePositionsEqual, getPosition, getScrollAndClientOffset, propPosition } from './helpers';
/**
 * The Tooltip component is a content container that behaves like a context menu
 * container. It can be used to create multi level context menus that won't be
 * displayed off-screen by wrapping each level with the Tooltip component.
 */

class Tooltip extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ref", createRef());

    _defineProperty(this, "state", {
      position: {},
      adjustment: {}
    });

    _defineProperty(this, "updatePosition", () => {
      if (this.props.open && this.ref.current) {
        const {
          anchorRef,
          side,
          spacing
        } = this.props;
        const [position, adjustment] = getPosition({
          pop: this.ref.current,
          anchor: anchorRef.current,
          side,
          spacing
        });

        if (!arePositionsEqual(position, this.state.position)) {
          this.setState({
            position,
            adjustment
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
      side,
      children,
      onClose,
      withArrow
    } = this.props;
    const {
      position,
      adjustment
    } = this.state;
    return createPortal(React.createElement("div", {
      className: "jsx-1869453644"
    }, React.createElement(BackgroundCover, {
      onClick: onClose
    }), React.createElement(Content, {
      ref: this.ref,
      side: side,
      position: position,
      children: children,
      withArrow: withArrow,
      adjustment: adjustment
    }), React.createElement(_JSXStyle, {
      id: "1869453644"
    }, ["div.jsx-1869453644{left:0;height:100%;position:absolute;top:0;width:100%;z-index:2000;}"])), document.body);
  }

}

Tooltip.propTypes = {
  /**
   * Must be created with `React.createRef()`
   */
  anchorRef: reactRef.isRequired,

  /**
   * Tooltip will always be centered to the center of the anchor's side
   */
  side: propTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,

  /**
   * When false, the component will return null, effectively rendering nothing
   */
  open: propTypes.bool.isRequired,

  /**
   * This callback will only be called when clicking on the backdrop
   */
  onClose: propTypes.func.isRequired,

  /**
   * Spacing between anchor and pop in pixels
   */
  spacing: propTypes.number,

  /**
   * Will add a triangular arrow icon to the opposite side of "props.side"
   */
  withArrow: propTypes.bool
};
Tooltip.defaultProps = {
  spacing: 0
};
export { Tooltip };