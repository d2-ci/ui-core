import _JSXStyle from "styled-jsx/style";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { ArrowUp, ArrowDown } from '../icons/Arrow.js';
import { DropMenu } from '../DropMenu';
import { Button } from '../Button';

var _ref =
/*#__PURE__*/
React.createElement(ArrowUp, null);

var _ref2 =
/*#__PURE__*/
React.createElement(ArrowDown, null);

var _ref3 =
/*#__PURE__*/
React.createElement(_JSXStyle, {
  id: "3163060161"
}, "div.jsx-3163060161{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;color:inherit;white-space:nowrap;}");

class DropdownButton extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: false
    });

    _defineProperty(this, "onDocClick", evt => {
      if (this.elContainer && !this.elContainer.contains(evt.target)) {
        this.setState({
          open: false
        });
      }
    });

    _defineProperty(this, "onToggle", () => this.setState({
      open: !this.state.open
    }));
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocClick);
  }

  render() {
    const {
      open
    } = this.state;
    const ArrowIcon = open ? _ref : _ref2;
    return React.createElement("div", {
      ref: c => this.elContainer = c,
      className: "jsx-3163060161"
    }, React.createElement(Button, _extends({
      onClick: this.onToggle
    }, this.props), this.props.children, ArrowIcon), open && React.createElement(DropMenu, {
      component: this.props.component
    }), _ref3);
  }

}

DropdownButton.propTypes = {
  className: propTypes.string,
  component: propTypes.element.isRequired,
  icon: propTypes.element,
  children: propTypes.string,
  small: propTypes.bool,
  large: propTypes.bool,
  primary: propTypes.bool,
  secondary: propTypes.bool,
  destructive: propTypes.bool,
  disabled: propTypes.bool,
  onClick: propTypes.func
};
export { DropdownButton };