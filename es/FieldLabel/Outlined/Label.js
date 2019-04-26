import _JSXStyle from "styled-jsx/style";
import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { borderRadius, inputHeight, inputHeightDense, shrinkedLabelFontSize } from '../constants';
import { colors, theme } from '../../theme';
const styles = new String(`label.jsx-3643629999{box-sizing:border-box;height:20px;left:0;line-height:20px;padding-left:16px;position:absolute;top:0;width:100%;}.disabled.jsx-3643629999{cursor:not-allowed;}.value.jsx-3643629999{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}label.jsx-3643629999:before{border:1px solid ${theme.default};border-bottom:0;border-right:0;border-radius:${borderRadius} 0 0 0;content:'';height:${inputHeight * 0.75}px;left:0;position:absolute;top:10px;width:12px;}label.jsx-3643629999:after{border:1px solid ${theme.default};border-bottom:0;border-left:0;border-radius:0 ${borderRadius} 0 0;content:'';-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:${inputHeight * 0.75}px;right:0;position:absolute;top:10px;width:calc(100% - 12px);}.value.jsx-3643629999:after{width:auto;position:relative;}span.jsx-3643629999{display:inline-block;font-size:16px;padding:0 10px 0 0;position:relative;-webkit-transform:translate(0px,29px);-ms-transform:translate(0px,29px);transform:translate(0px,29px);-webkit-transition:-webkit-transform 0.05s ease-in;-webkit-transition:transform 0.05s ease-in;transition:transform 0.05s ease-in;}.disabled.jsx-3643629999 span.jsx-3643629999{color:${theme.disabled};}.disabled.jsx-3643629999:before,.disabled.jsx-3643629999:after{border-color:${theme.disabled};}.dense.jsx-3643629999:before,.dense.jsx-3643629999:after{height:${inputHeightDense * 0.75}px;}.dense.jsx-3643629999 span.jsx-3643629999{height:${inputHeightDense}px;line-height:${inputHeightDense}px;-webkit-transform:translate(0px,11px);-ms-transform:translate(0px,11px);transform:translate(0px,11px);}.value.jsx-3643629999 span.jsx-3643629999{font-size:${shrinkedLabelFontSize};height:auto;line-height:inherit;-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);}.focus.jsx-3643629999:before,.focus.jsx-3643629999:after{border-color:${colors.teal400};}.valid.jsx-3643629999:before,.valid.jsx-3643629999:after{border-color:${theme.valid};}.valid.jsx-3643629999 span.jsx-3643629999{color:${theme.valid};}.warning.jsx-3643629999:before,.warning.jsx-3643629999:after{border-color:${theme.warning};}.warning.jsx-3643629999 span.jsx-3643629999{color:${theme.warning};}.error.jsx-3643629999:before,.error.jsx-3643629999:after{border-color:${theme.error};}.error.jsx-3643629999 span.jsx-3643629999{color:${theme.error};}`);
styles.__hash = "3643629999";
export const Label = ({
  focus,
  required,
  valid,
  warning,
  error,
  dense,
  disabled,
  value,
  label,
  htmlFor
}) => React.createElement("label", {
  htmlFor: htmlFor,
  className: `jsx-${styles.__hash}` + " " + (cx({
    focus,
    required,
    valid,
    warning,
    error,
    dense,
    disabled,
    value
  }) || "")
}, React.createElement("span", {
  className: `jsx-${styles.__hash}`
}, label), React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));