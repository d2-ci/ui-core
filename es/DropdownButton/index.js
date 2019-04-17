import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { ArrowUp, ArrowDown } from '../icons/Arrow.js';
import { DropMenu } from '../DropMenu';
import buttons from '../Button/styles.js';

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
      className: "jsx-3163060161 " + `jsx-${buttons.__hash}`
    }, React.createElement("button", {
      disabled: this.props.disabled,
      onClick: this.onToggle,
      className: "jsx-3163060161 " + `jsx-${buttons.__hash}` + " " + (cx('base', `kind-${this.props.kind}`, `size-${this.props.size}`, this.props.className, {
        'icon-only': this.props.icon && !this.props.children,
        icon: this.props.icon
      }) || "")
    }, this.props.icon && React.createElement("span", {
      className: "jsx-3163060161 " + `jsx-${buttons.__hash}` + " " + "button-icon"
    }, this.props.icon), this.props.children, ArrowIcon), open && React.createElement(DropMenu, {
      component: this.props.component
    }), React.createElement(_JSXStyle, {
      id: buttons.__hash
    }, buttons), _ref3);
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
  children: propTypes.string,
  kind: propTypes.oneOf(['basic', 'primary', 'secondary', 'destructive']),
  type: propTypes.oneOf(['submit', 'reset', 'button']),
  size: propTypes.oneOf(['small', 'medium', 'large']),
  disabled: propTypes.bool,
  onClick: propTypes.func
};
export { DropdownButton };