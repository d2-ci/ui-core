import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import propTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import cx from 'classnames';
import { colors, theme, spacers } from '../theme.js';
const styles = [`select.jsx-2367090762{background:none;border:0;color:${colors.grey900};font-size:16px;height:100%;left:0;outline:0;padding:0 12px 0 15px;position:absolute;top:0;width:100%;-webkit-appearance:none;-moz-appearance:none;}`, `.disabled.jsx-2367090762{color:${theme.disabled};cursor:not-allowed;}`, ".dense.jsx-2367090762{font-size:14px;}", `.filled.jsx-2367090762{padding-top:${spacers.dp24};padding-left:${spacers.dp16};}`, `.filled.dense.jsx-2367090762{padding-top:${spacers.dp24};}`, "option.jsx-2367090762:not(:checked){color:black;}", "select.jsx-2367090762:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}"];
styles.__hash = "2367090762";
export class Select extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "selectRef", createRef());
  }

  componentDidMount() {
    if (this.props.focus) {
      this.selectRef.current.focus();
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
      value,
      children,
      name,
      tabIndex
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
      ref: this.selectRef,
      name: name,
      tabIndex: tabIndex,
      className: `jsx-${styles.__hash}` + " " + (className || "")
    }, React.createElement("option", {
      key: "hidden-default-value",
      hidden: true,
      disabled: true,
      value: "-1",
      className: `jsx-${styles.__hash}`
    }), children, React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}
Select.propTypes = {
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string,
  tabIndex: propTypes.string,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.shape({
    tagName: propTypes.oneOf(['OPTION', 'OPTGROUP'])
  })), propTypes.shape({
    tagName: propTypes.oneOf(['OPTION', 'OPTGROUP'])
  })]),
  disabled: propTypes.bool,
  filled: propTypes.bool,
  dense: propTypes.bool,
  focus: propTypes.bool
};