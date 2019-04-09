import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import propTypes from 'prop-types';
import React, { Component, Fragment, createRef } from 'react';
import cx from 'classnames';
import { colors } from '../theme';
import { innerSpacingSides, inputFontSizeValue, inputKinds, inputSizes } from '../forms/constants';
const styles = new String(`select.jsx-2468634884{background:none;border:0;color:black;font-size:${inputFontSizeValue};height:100%;left:0;outline:0;padding:0 12px 0 16px;position:absolute;top:0;width:100%;-webkit-appearance:none;-moz-appearance:none;}select.disabled.jsx-2468634884{color:${colors.grey500};cursor:not-allowed;}select.dense.jsx-2468634884{font-size:14px;}select.outlined.jsx-2468634884{${
/** 15px => 16px inner spacing - 1px of the border**/
''} padding-left:15px;}select.filled.jsx-2468634884{padding-top:24px;}select.filled.dense.jsx-2468634884{padding-top:20px;}option.jsx-2468634884:not(:checked){color:black;}select.jsx-2468634884:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}`);
styles.__hash = "2468634884";
export class Select extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "selectRef", createRef());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.focused !== this.props.focused) {
      if (this.props.focused) {
        this.selectRef.focus();
      } else {
        this.selectRef.blur();
      }
    }
  }

  render() {
    const className = cx({
      dense: this.props.size === inputSizes.DENSE,
      filled: this.props.kind === inputKinds.FILLED,
      outlined: this.props.kind === inputKinds.OUTLINED,
      disabled: this.props.disabled
    });
    return React.createElement("select", {
      onChange: this.props.onChange,
      value: this.props.value,
      disabled: this.props.disabled,
      onFocus: this.props.onFocus,
      onBlur: this.props.onBlur,
      className: `jsx-${styles.__hash}` + " " + (className || "")
    }, this.props.list.map(({
      value,
      label,
      list
    }) => React.createElement(Fragment, null, React.createElement("option", {
      key: label,
      value: value,
      className: `jsx-${styles.__hash}`
    }, label), list && list.length && React.createElement("optgroup", {
      label: label,
      className: `jsx-${styles.__hash}`
    }, list.map(({
      value,
      label
    }) => React.createElement("option", {
      key: label,
      value: value,
      className: `jsx-${styles.__hash}`
    }, label))))), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}
Select.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  size: propTypes.arrayOf([inputSizes.DEFAULT, inputSizes.DENSE]).isRequired,
  kind: propTypes.arrayOf([inputKinds.FILLED, inputKinds.OUTLINED]).isRequired,
  list: propTypes.shape({
    value: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    list: propTypes.shape({
      value: propTypes.string.isRequired,
      label: propTypes.string.isRequired
    })
  }).isRequired,
  disabled: propTypes.bool,
  onFocus: propTypes.func,
  onBlur: propTypes.func
};
Select.defaultProps = {
  disabled: false,
  onFocus: null,
  onBlur: null
};