import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, Fragment, createRef } from 'react';
import propTypes from 'prop-types';

var _ref =
/*#__PURE__*/
React.createElement(_JSXStyle, {
  id: "3255790221"
}, "div.jsx-3255790221{width:0;height:0;overflow:hidden;}");

export class Input extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ref", createRef());
  }

  componentDidMount() {
    if (this.props.focus) {
      this.ref.current.focus();
    }
  }

  render() {
    const {
      onChange,
      checked,
      disabled,
      name,
      value,
      onFocus,
      onBlur,
      tabIndex
    } = this.props;
    return React.createElement("div", {
      className: "jsx-3255790221"
    }, React.createElement("input", {
      ref: this.ref,
      type: "checkbox",
      name: name,
      value: value,
      onChange: onChange,
      onFocus: onFocus,
      onBlur: onBlur,
      checked: checked,
      disabled: disabled,
      tabIndex: tabIndex,
      className: "jsx-3255790221"
    }), _ref);
  }

}
Input.propTypes = {
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  tabIndex: propTypes.string,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  focus: propTypes.bool
};