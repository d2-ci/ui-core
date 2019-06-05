import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, Fragment, createRef } from 'react';
import propTypes from 'prop-types';
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
    return React.createElement(Fragment, null, React.createElement("input", {
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
      className: "jsx-227425587"
    }), React.createElement(_JSXStyle, {
      id: "227425587"
    }, ["input.jsx-227425587{display:block;opacity:0;width:0;height:0;outline:0;}"]));
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