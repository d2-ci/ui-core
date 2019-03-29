import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { inputFontSizeValue } from '../../forms/constants';

const calculatePaddingTop = props => props.filled ? '14px' : '18.5px';

export class Input extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "inputRef", React.createRef());
  }

  componentDidMount() {
    if (this.props.isFocused) {
      this.inputRef.current.focus();
    }
  }

  render() {
    const paddingTop = calculatePaddingTop(this.props);
    const className = cx({
      disabled: this.props.disabled
    });
    return React.createElement(Fragment, null, React.createElement("input", {
      ref: this.inputRef,
      type: this.props.type,
      placeholder: this.props.placeholder,
      disabled: this.props.disabled,
      value: this.props.value,
      onFocus: this.props.onFocus,
      onBlur: this.props.onBlur,
      onChange: this.props.onChange,
      className: _JSXStyle.dynamic([["2878274301", [inputFontSizeValue, paddingTop]]]) + " " + (className || "")
    }), React.createElement(_JSXStyle, {
      id: "2878274301",
      dynamic: [inputFontSizeValue, paddingTop]
    }, `input.__jsx-style-dynamic-selector{background-color:transparent;border:0;box-sizing:border-box;font-size:${inputFontSizeValue};height:100%;line-height:19px;outline:0;padding:${paddingTop} 0 18.5px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;width:100%;}`));
  }

}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.string,
  disabled: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};