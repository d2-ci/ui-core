import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import propTypes from 'prop-types';
import React, { Component, Fragment, createRef } from 'react';
import cx from 'classnames';
import { colors, theme } from '../theme';
const styles = [`select.jsx-4198221289{background:none;border:0;color:${colors.grey900};font-size:16px;height:100%;left:0;outline:0;padding:0 12px 0 15px;position:absolute;top:0;width:100%;-webkit-appearance:none;-moz-appearance:none;}`, `.disabled.jsx-4198221289{color:${theme.disabled};cursor:not-allowed;}`, ".dense.jsx-4198221289{font-size:14px;}", ".filled.jsx-4198221289{padding-top:24px;padding-left:16px;}", ".filled.dense.jsx-4198221289{padding-top:20px;}", "option.jsx-4198221289:not(:checked){color:black;}", "select.jsx-4198221289:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}"];
styles.__hash = "4198221289";
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
      value,
      children,
      name
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
      name: name,
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
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.shape({
    tagName: propTypes.oneOf(['OPTION', 'OPTGROUP'])
  })), propTypes.shape({
    tagName: propTypes.oneOf(['OPTION', 'OPTGROUP'])
  })]),
  disabled: propTypes.bool,
  filled: propTypes.bool,
  dense: propTypes.bool
};