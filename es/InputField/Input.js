import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import propTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import cx from 'classnames';
import { colors, theme } from '../theme';

const calculatePaddingTop = props => props.filled ? '14px' : '18.5px';

const styles = [`input.jsx-3935505702{color:${colors.grey900};background-color:transparent;border:0;box-sizing:border-box;font-size:16px;height:100%;line-height:16px;outline:0;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;width:100%;padding:18px 0 15px 16px;}`, ".dense.jsx-3935505702{padding-top:12px;padding-bottom:12px;font-size:14px;}", `.disabled.jsx-3935505702{color:${theme.disabled};cursor:not-allowed;}`, ".filled.jsx-3935505702{padding:32px 0 8px 16px;}", ".filled.dense.jsx-3935505702{padding:25px 0 5px 16px;}"];
styles.__hash = "3935505702";
export class Input extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "inputRef", React.createRef());
  }

  componentDidMount() {
    if (this.props.focus) {
      this.inputRef.current.focus();
    }
  }

  render() {
    const paddingTop = calculatePaddingTop(this.props);
    const {
      dense,
      filled,
      disabled
    } = this.props;
    const classes = cx({
      dense,
      filled,
      outlined: !filled,
      disabled
    });
    return React.createElement(Fragment, null, React.createElement("input", {
      id: this.props.name,
      name: this.props.name,
      placeholder: this.props.placeholder,
      ref: this.inputRef,
      type: this.props.type,
      value: this.props.value,
      disabled: disabled,
      autocomplete: this.props.autocomplete,
      autofocus: this.props.autofocus,
      tabIndex: this.props.tabIndex,
      readonly: this.props.readonly,
      onFocus: this.props.onFocus,
      onBlur: this.props.onBlur,
      onChange: this.props.onChange,
      className: `jsx-${styles.__hash}` + " " + (classes || "")
    }), React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }

}
Input.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string,
  placeholder: propTypes.string,
  autocomplete: propTypes.string,
  tabIndex: propTypes.string,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  focus: propTypes.bool,
  disabled: propTypes.bool,
  filled: propTypes.bool,
  dense: propTypes.bool,
  autofocus: propTypes.bool,
  readonly: propTypes.bool
};