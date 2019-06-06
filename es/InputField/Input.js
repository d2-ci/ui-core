import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import propTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import cx from 'classnames';
import { colors, theme, spacers } from '../theme';

const calculatePaddingTop = props => props.filled ? '14px' : '18.5px';

const styles = [`input.jsx-3753428802{color:${colors.grey900};background-color:transparent;border:0;box-sizing:border-box;font-size:16px;height:100%;line-height:16px;outline:0;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;width:100%;padding:18px 0 15px 16px;}`, `.dense.jsx-3753428802{padding-top:${spacers.dp12};padding-bottom:${spacers.dp12};font-size:14px;}`, `.disabled.jsx-3753428802{color:${theme.disabled};cursor:not-allowed;}`, `.filled.jsx-3753428802{padding:${spacers.dp32} 0 ${spacers.dp8} ${spacers.dp16};}`, `.filled.dense.jsx-3753428802{padding:${spacers.dp24} 0 ${spacers.dp4} ${spacers.dp16};}`];
styles.__hash = "3753428802";
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
      tabIndex: this.props.tabIndex,
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
  tabIndex: propTypes.string,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  focus: propTypes.bool,
  disabled: propTypes.bool,
  filled: propTypes.bool,
  dense: propTypes.bool
};