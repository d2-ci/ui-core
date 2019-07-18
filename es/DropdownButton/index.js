import _JSXStyle from "styled-jsx/style";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import propTypes from 'prop-types';
import React, { Component } from 'react';
import { Button } from '../Button';
import { buttonVariantPropType, sizePropType } from '../common-prop-types';
import { DropMenu } from '../DropMenu';
import { ArrowDown, ArrowUp } from '../icons/Arrow.js';

var _ref =
/*#__PURE__*/
React.createElement(ArrowUp, null);

var _ref2 =
/*#__PURE__*/
React.createElement(ArrowDown, null);

class DropdownButton extends Component {
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
    const ArrowIcon = open ? _ref : _ref2;
    return React.createElement("div", {
      ref: this.anchorRef,
      className: "jsx-3163060161"
    }, React.createElement(Button, _extends({
      onClick: this.onToggle
    }, this.props), this.props.children, ArrowIcon), open && React.createElement(DropMenu, {
      component: this.props.component,
      onClose: () => this.setState({
        open: false
      }),
      anchorEl: this.anchorRef.current
    }), React.createElement(_JSXStyle, {
      id: "3163060161"
    }, ["div.jsx-3163060161{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;color:inherit;white-space:nowrap;}"]));
  }

}

DropdownButton.propTypes = {
  className: propTypes.string,
  component: propTypes.element.isRequired,
  icon: propTypes.element,
  children: propTypes.string,
  small: sizePropType,
  large: sizePropType,
  primary: buttonVariantPropType,
  secondary: buttonVariantPropType,
  destructive: buttonVariantPropType,
  disabled: propTypes.bool
};
export { DropdownButton };