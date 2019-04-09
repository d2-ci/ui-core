import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component, Fragment, createRef } from 'react';
import cx from 'classnames';
import { colors } from '../theme';
import { innerSpacingSides, inputFontSizeValue, inputKinds, inputSizes } from '../forms/constants';
const styles = new String(`select.jsx-3250355104{background:none;border:0;color:black;font-size:${inputFontSizeValue};height:100%;left:0;outline:0;padding:0 12px 0 16px;position:absolute;top:0;width:100%;-webkit-appearance:none;-moz-appearance:none;}select.disabled.jsx-3250355104{color:${colors.grey500};cursor:not-allowed;}select.dense.jsx-3250355104{font-size:14px;}select.outlined.jsx-3250355104{${
/** 15px => 16px inner spacing - 1px of the border**/
''} padding-left:15px;}select.filled.jsx-3250355104{padding-top:20px;}option.jsx-3250355104:not(:checked){color:black;}select.jsx-3250355104:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}`);
styles.__hash = "3250355104";
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.arrayOf([inputSizes.DEFAULT, inputSizes.DENSE]).isRequired,
  kind: PropTypes.arrayOf([inputKinds.FILLED, inputKinds.OUTLINED]).isRequired,
  list: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    list: PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  }).isRequired,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};
Select.defaultProps = {
  disabled: false,
  onFocus: null,
  onBlur: null
};