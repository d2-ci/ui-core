import _JSXStyle from "styled-jsx/style";
import propTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { InputContainer } from './InputContainer';
import { Label } from './Label';
import { StatusIconNoDefault } from '../../icons/Status';
import { borderRadius, inputHeight, inputHeightDense } from '../constants.js';
import { colors, theme, spacers } from '../../theme.js';
const styles = [`.label-outlined.jsx-2513833268{position:relative;color:${colors.grey700};}`, ".disabled.jsx-2513833268{cursor:not-allowed;}", `.content.jsx-2513833268{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:42px;left:1px;position:relative;width:calc(100% - 1px);border:1px solid ${theme.default};border-radius:4px;}`, ".dense.jsx-2513833268 .content.jsx-2513833268{height:34px;}", `.focus.jsx-2513833268 .content.jsx-2513833268{border-color:${colors.teal400};}`, `.valid.jsx-2513833268 .content.jsx-2513833268{border-color:${theme.valid};}`, `.warning.jsx-2513833268 .content.jsx-2513833268{border-color:${theme.warning};}`, `.error.jsx-2513833268 .content.jsx-2513833268{border-color:${theme.error};}`, `.disabled.jsx-2513833268 .content.jsx-2513833268{border-color:${theme.disabled};}`, `.status-icon.jsx-2513833268{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:24px;height:24px;margin-right:${spacers.dp4};margin-left:${spacers.dp12};}`, ".status-icon.jsx-2513833268:empty{display:none;}", `.status-icon.jsx-2513833268:last-child{margin-right:${spacers.dp12};}`];
styles.__hash = "2513833268";
export const Outlined = ({
  children,
  disabled,
  focus,
  dense,
  valid,
  warning,
  error,
  onClick,
  htmlFor,
  value,
  required,
  label,
  loading,
  className
}) => React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + (cx('label-outlined', className, {
    disabled,
    focus,
    dense,
    valid,
    warning,
    error,
    value
  }) || "")
}, React.createElement(Label, {
  focus: focus,
  required: required,
  valid: valid,
  warning: warning,
  error: error,
  dense: dense,
  disabled: disabled,
  value: focus || value,
  label: label,
  htmlFor: htmlFor
}), React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + "content"
}, React.createElement(InputContainer, {
  dense: dense
}, children), React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + "status-icon"
}, React.createElement(StatusIconNoDefault, {
  error: error,
  valid: valid,
  loading: loading,
  warning: warning
}))), React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));
Outlined.propTypes = {
  label: propTypes.string.isRequired,
  htmlFor: propTypes.string.isRequired,
  onClick: propTypes.func,
  focus: propTypes.bool,
  value: propTypes.bool,
  disabled: propTypes.bool,
  required: propTypes.bool,
  valid: propTypes.bool,
  error: propTypes.bool,
  warning: propTypes.bool,
  loading: propTypes.bool,
  dense: propTypes.bool,
  className: propTypes.string
};