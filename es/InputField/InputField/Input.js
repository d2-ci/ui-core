import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import cx from 'classnames';
import { inputFontSizeValue } from '../../forms/constants';

const calculatePaddingTop = props => props.filled ? '14px' : '18.5px';

const styles = new String(`.input.jsx-2196150148{background-color:transparent;border:0;box-sizing:border-box;font-size:${inputFontSizeValue};height:100%;line-height:19px;padding:0;outline:0;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;width:100%;}.input.filled.dense.jsx-2196150148{font-size:14px;}`);
styles.__hash = "2196150148";
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
      id: this.props.name,
      name: this.props.name,
      placeholder: this.props.placeholder,
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
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};