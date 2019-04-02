import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { inputFontSizeValue } from '../../forms/constants';

const calculatePaddingTop = props => props.filled ? '14px' : '18.5px';

const styles = new String(`.input.jsx-3976741333{background-color:transparent;border:0;box-sizing:border-box;font-size:${inputFontSizeValue};height:100%;line-height:19px;outline:0;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;width:100%;}.input.outlined.jsx-3976741333{height:calc(100% - 12px);padding-top:12px;}.input.outlined.dense.jsx-3976741333{height:calc(100% - 12px);padding-top:12px;}.input.filled.jsx-3976741333{height:calc(100% - 20px);padding-top:20px;}.input.filled.dense.jsx-3976741333{height:calc(100% - 18px);padding-top:18px;font-size:14px;}`);
styles.__hash = "3976741333";
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
    const className = cx('input', {
      dense: this.props.isDense,
      filled: this.props.isFilled,
      outlined: !this.props.isFilled,
      disabled: this.props.disabled
    });
    return React.createElement(Fragment, null, React.createElement("input", {
      ref: this.inputRef,
      type: this.props.type,
      disabled: this.props.disabled,
      value: this.props.value,
      onFocus: this.props.onFocus,
      onBlur: this.props.onBlur,
      onChange: this.props.onChange,
      className: `jsx-${styles.__hash}` + " " + (className || "")
    }), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};