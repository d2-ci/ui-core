function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import _JSXStyle from "styled-jsx/style";
import cx from 'classnames';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { Button } from '../Button';
import { ButtonStrip } from '../ButtonStrip';
import { buttonVariantPropType } from '../common-prop-types';
import { DropMenu } from '../DropMenu';
import { ArrowDown, ArrowUp } from '../icons/Arrow.js';
import { spacers } from '../theme.js';
const rightButton = {
  styles: React.createElement(_JSXStyle, {
    id: "2614859619"
  }, [`button.jsx-2614859619{padding:0 ${spacers.dp8};}`]),
  className: "jsx-2614859619"
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
  primary: buttonVariantPropType,
  secondary: buttonVariantPropType,
  destructive: buttonVariantPropType,
  disabled: propTypes.bool
};
export { SplitButton };