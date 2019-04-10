import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button';
import { ArrowUp, ArrowDown } from '../icons/Arrow.js';
import buttons from '../Button/styles.js';
import styles from './styles.js';

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
    const icon = open ? _ref : _ref2;
    return React.createElement("div", {
      ref: c => this.elContainer = c,
      className: `jsx-${buttons.__hash} jsx-${styles.__hash}`
    }, React.createElement("button", {
      disabled: this.props.disabled,
      onClick: this.onToggle,
      className: `jsx-${buttons.__hash} jsx-${styles.__hash}` + " " + (cx('base', `kind-${this.props.kind}`, `size-${this.props.size}`, this.props.className, {
        'icon-only': this.props.icon && !this.props.label && !this.props.children,
        icon: this.props.icon
      }) || "")
    }, this.props.icon && React.createElement("span", {
      className: `jsx-${buttons.__hash} jsx-${styles.__hash}` + " " + "button-icon"
    }, this.props.icon), this.props.label || this.props.children, icon), open && React.createElement("div", {
      className: `jsx-${buttons.__hash} jsx-${styles.__hash}` + " " + "menu"
    }, this.props.component), React.createElement(_JSXStyle, {
      id: buttons.__hash
    }, buttons), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}

DropdownButton.defaultProps = {
  size: 'medium',
  kind: 'basic',
  disabled: false
};
DropdownButton.propTypes = {
  className: propTypes.string,
  component: propTypes.element.isRequired,
  width: propTypes.string,
  icon: propTypes.element,
  label: propTypes.string,
  children: propTypes.string,
  kind: propTypes.oneOf(['basic', 'primary', 'secondary', 'destructive']),
  type: propTypes.oneOf(['submit', 'reset', 'button']),
  size: propTypes.oneOf(['small', 'medium', 'large']),
  disabled: propTypes.bool,
  onClick: propTypes.func
};
export { DropdownButton };