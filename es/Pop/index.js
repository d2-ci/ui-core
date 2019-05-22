import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { createPortal } from 'react-dom';
import React, { Component, createRef } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { ScreenCover } from '../ScreenCover';
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
  }

  componentDidMount() {
    if (this.props.open) {
      this.updatePosition();
    }
  }

  componentDidUpdate() {
    this.updatePosition();
  }

  updatePosition() {
    if (this.ref.current) {
      const {
        anchorRef,
        anchorPoint,
        popPoint
      } = this.props;
      const position = getPosition({
        popPoint,
        anchorPoint,
        pop: this.ref.current,
        anchor: anchorRef.current,
        isNotRoot: !!this.props.level
      });

      if (!arePositionsEqual(position, this.state.position)) {
        this.setState({
          position
        });
      }
    }
  }

  render() {
    const {
      children,
      onClose,
      open,
      level
    } = this.props;
    const {
      position
    } = this.state;
    if (!open) return null;
    const content = React.createElement(Content, {
      ref: this.ref,
      position: position,
      children: children,
      level: level
    });

    if (!level) {
      return createPortal(content, document.body);
    }

    return createPortal(React.createElement("div", {
      className: _JSXStyle.dynamic([["2553022475", [99999999 + level]]])
    }, React.createElement(ScreenCover, {
      withoutBackgroundColor: true,
      onClick: onClose
    }), content, React.createElement(_JSXStyle, {
      id: "2553022475",
      dynamic: [99999999 + level]
    }, [`div.__jsx-style-dynamic-selector{left:0;height:100vh;position:fixed;top:0;width:100vw;z-index:${99999999 + level};}`])), document.body);
  }

}

Pop.propTypes = {
  /* Needs to be created with `React.createRef()` */
  anchorRef: propTypes.shape({
    current: propTypes.element
  }).isRequired,
  anchorPoint: propPosition,
  popPoint: propPosition,

  /* Is required for Pop components that are not the root level */
  level: propTypes.number,
  open: propTypes.bool,
  onClose: propTypes.func
};
Pop.defaultProps = {
  anchorPoint: {
    vertical: 'top',
    horizontal: 'right'
  },
  popPoint: {
    vertical: 'top',
    horizontal: 'left'
  },
  level: 0
};
export { Pop };