import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import propTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import cx from 'classnames';
import { colors } from '../theme';
import { innerSpacingSides, inputFontSizeValue, inputKinds } from '../forms/constants';

const calculatePaddingTop = props => props.filled ? '14px' : '18.5px';

const styles = new String(`input.jsx-2970721706{color:black;background-color:transparent;border:0;box-sizing:border-box;font-size:${inputFontSizeValue};height:100%;line-height:16px;outline:0;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;width:100%;}.filled.jsx-2970721706{padding:32px 0 8px 16px;}.outlined.jsx-2970721706{padding:18px 0 18px 16px;}.disabled.jsx-2970721706{color:${colors.grey500};cursor:not-allowed;}${
/** 15px => 16px inner spacing - 1px for border**/
''}.jsx-2970721706 .outlined.jsx-2970721706{padding-left:15px;}.filled.dense.jsx-2970721706{font-size:14px;padding:25px 0 5px 16px;}.outlined.dense.jsx-2970721706{padding-top:12px;padding-bottom:12px;}`);
styles.__hash = "2970721706";
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
      dense: this.props.isDense,
      filled: this.props.kind === inputKinds.FILLED,
      outlined: this.props.kind === inputKinds.OUTLINED,
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
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  disabled: propTypes.bool.isRequired,
  isFocused: propTypes.bool.isRequired,
  onFocus: propTypes.func.isRequired,
  onBlur: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string.isRequired,
  kind: propTypes.arrayOf([inputKinds.FILLED, inputKinds.OUTLINED]).isRequired
};