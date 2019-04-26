import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import propTypes from 'prop-types';
import React, { Component, Fragment, createRef } from 'react';
import cx from 'classnames';
import { theme } from '../theme';
const styles = new String(`select.jsx-1780803264{background:none;border:0;color:black;font-size:16px;height:100%;left:0;outline:0;padding:0 12px 0 15px;position:absolute;top:0;width:100%;-webkit-appearance:none;-moz-appearance:none;}.disabled.jsx-1780803264{color:${theme.disabled};cursor:not-allowed;}.dense.jsx-1780803264{font-size:14px;}.filled.jsx-1780803264{padding-top:24px;padding-left:16px;}.filled.dense.jsx-1780803264{padding-top:20px;}option.jsx-1780803264:not(:checked){color:black;}select.jsx-1780803264:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}`);
styles.__hash = "1780803264";
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
    const {
      dense,
      filled,
      disabled,
      onChange,
      onFocus,
      onBlur,
      value
    } = this.props;
    const className = cx({
      dense,
      filled,
      disabled
    });
    return React.createElement("select", {
      onChange: onChange,
      value: value || -1,
      disabled: disabled,
      onFocus: onFocus,
      onBlur: onBlur,
      className: `jsx-${styles.__hash}` + " " + (className || "")
    }, React.createElement("option", {
      hidden: true,
      disabled: true,
      value: "-1",
      className: `jsx-${styles.__hash}`
    }), this.props.list.map(({
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
  value: propTypes.string,
  onChange: propTypes.func.isRequired,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  list: propTypes.arrayOf(propTypes.shape({
    value: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    list: propTypes.shape({
      value: propTypes.string.isRequired,
      label: propTypes.string.isRequired
    })
  })).isRequired,
  disabled: propTypes.bool,
  filled: propTypes.bool,
  dense: propTypes.bool
};
Select.defaultProps = {
  disabled: false
};