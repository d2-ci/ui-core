import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import propTypes from 'prop-types';
import buttons from '../Button/styles.js';
import { ArrowUp, ArrowDown } from '../icons/Arrow.js';
import { DropMenu } from '../DropMenu';
import cx from 'classnames';

var _ref =
/*#__PURE__*/
React.createElement(ArrowUp, null);

var _ref2 =
/*#__PURE__*/
React.createElement(ArrowDown, null);

var _ref3 =
/*#__PURE__*/
React.createElement(_JSXStyle, {
  id: "686802189"
}, "div.jsx-686802189{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;color:inherit;white-space:nowrap;}button.jsx-686802189:first-child{border-top-right-radius:0;border-bottom-right-radius:0;}button.jsx-686802189:nth-child(2){padding:0 9px;border-top-left-radius:0;border-bottom-left-radius:0;}");

class SplitButton extends Component {
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
      className: "jsx-686802189 " + `jsx-${buttons.__hash}`
    }, React.createElement("button", {
      name: this.props.name,
      value: this.props.value,
      disabled: this.props.disabled,
      onClick: this.props.onClick,
      className: "jsx-686802189 " + `jsx-${buttons.__hash}` + " " + (cx('base', `kind-${this.props.kind}`, `size-${this.props.size}`, this.props.className, {
        'icon-only': this.props.icon && !this.props.children,
        icon: this.props.icon
      }) || "")
    }, this.props.icon && React.createElement("span", {
      className: "jsx-686802189 " + `jsx-${buttons.__hash}` + " " + "button-icon"
    }, this.props.icon), this.props.children), React.createElement("button", {
      disabled: this.props.disabled,
      onClick: this.onToggle,
      className: "jsx-686802189 " + `jsx-${buttons.__hash}` + " " + (cx('base', `kind-${this.props.kind}`, `size-${this.props.size}`) || "")
    }, icon), open && React.createElement(DropMenu, {
      component: this.props.component
    }), React.createElement(_JSXStyle, {
      id: buttons.__hash
    }, buttons), _ref3);
  }

}

SplitButton.defaultProps = {
  size: 'medium',
  kind: 'basic',
  disabled: false
};
SplitButton.propTypes = {
  component: propTypes.element.isRequired,
  onClick: propTypes.func.isRequired,
  children: propTypes.string,
  name: propTypes.string,
  value: propTypes.string,
  className: propTypes.string,
  kind: propTypes.oneOf(['basic', 'primary']),
  icon: propTypes.element,
  disabled: propTypes.bool,
  size: propTypes.oneOf(['small', 'medium', 'large'])
};
export { SplitButton };