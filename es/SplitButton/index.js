function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import _JSXStyle from "styled-jsx/style";
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ArrowUp, ArrowDown } from '../icons/Arrow.js';
import { DropMenu } from '../DropMenu';
import { Button } from '../Button';
import { ButtonStrip } from '../ButtonStrip';
import cx from 'classnames';
const rightButton = {
  styles: React.createElement(_JSXStyle, {
    id: "554730144"
  }, ["button.jsx-554730144{padding:0 9px;}"]),
  className: "jsx-554730144"
};

var _ref =
/*#__PURE__*/
React.createElement(ArrowUp, null);

var _ref2 =
/*#__PURE__*/
React.createElement(ArrowDown, null);

class SplitButton extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: false
    });

    _defineProperty(this, "anchorRef", React.createRef());

    _defineProperty(this, "onToggle", () => this.setState({
      open: !this.state.open
    }));
  }

  render() {
    const {
      open
    } = this.state;
    const icon = open ? _ref : _ref2;
    return React.createElement("div", {
      ref: this.anchorRef,
      className: "jsx-3163060161"
    }, React.createElement(ButtonStrip, {
      compact: true
    }, React.createElement(Button, _extends({}, this.props, {
      className: cx(this.props.className)
    }), this.props.children), React.createElement(Button, _extends({}, this.props, {
      onClick: this.onToggle,
      className: cx(this.props.className, rightButton.className)
    }), icon)), open && React.createElement(DropMenu, {
      component: this.props.component,
      onClose: () => this.setState({
        open: false
      }),
      anchorEl: this.anchorRef.current
    }), rightButton.styles, React.createElement(_JSXStyle, {
      id: "3163060161"
    }, ["div.jsx-3163060161{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;color:inherit;white-space:nowrap;}"]));
  }

}

SplitButton.propTypes = {
  component: propTypes.element.isRequired,
  onClick: propTypes.func,
  className: propTypes.string,
  name: propTypes.string,
  value: propTypes.string,
  icon: propTypes.element,
  small: propTypes.bool,
  large: propTypes.bool,
  primary: propTypes.bool,
  secondary: propTypes.bool,
  destructive: propTypes.bool,
  disabled: propTypes.bool
};
export { SplitButton };