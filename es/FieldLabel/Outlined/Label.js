import _JSXStyle from "styled-jsx/style";
import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { borderRadius, inputHeight, inputHeightDense, shrinkedLabelFontSize } from '../constants';
import { colors, theme } from '../../theme';
const styles = ["label.jsx-2738171818{box-sizing:border-box;height:20px;left:0;line-height:20px;position:absolute;top:0;width:100%;padding-left:4px;}", ".disabled.jsx-2738171818{cursor:not-allowed;}", ".value.jsx-2738171818{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", `label.jsx-2738171818:before{border:1px solid ${theme.default};border-bottom:0;border-right:0;border-radius:${borderRadius} 0 0 0;content:'';height:${inputHeight * 0.75}px;left:0;position:absolute;top:10px;width:12px;}`, `label.jsx-2738171818:after{border:1px solid ${theme.default};border-bottom:0;border-left:0;border-radius:0 ${borderRadius} 0 0;content:'';-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:${inputHeight * 0.75}px;right:0;position:absolute;top:10px;width:calc(100% - 12px);}`, ".value.jsx-2738171818:after{width:auto;position:relative;}", ".required.jsx-2738171818 span.jsx-2738171818::after{padding-left:4px;content:'*';}", "span.jsx-2738171818{display:inline-block;font-size:16px;padding:0 10px 0 12px;position:relative;-webkit-transform:translate(0px,29px);-ms-transform:translate(0px,29px);transform:translate(0px,29px);-webkit-transition:-webkit-transform 0.05s ease-in;-webkit-transition:transform 0.05s ease-in;transition:transform 0.05s ease-in;}", `.disabled.jsx-2738171818 span.jsx-2738171818{color:${theme.disabled};}`, `.disabled.jsx-2738171818:before,.disabled.jsx-2738171818:after{border-color:${theme.disabled};}`, `.dense.jsx-2738171818:before,.dense.jsx-2738171818:after{height:${inputHeightDense * 0.75}px;}`, `.dense.jsx-2738171818 span.jsx-2738171818{height:${inputHeightDense}px;line-height:${inputHeightDense}px;-webkit-transform:translate(0px,11px);-ms-transform:translate(0px,11px);transform:translate(0px,11px);}`, `.value.jsx-2738171818 span.jsx-2738171818{font-size:${shrinkedLabelFontSize};height:auto;line-height:inherit;-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);}`, `.focus.jsx-2738171818:before,.focus.jsx-2738171818:after{border-color:${colors.teal400};}`, `.valid.jsx-2738171818:before,.valid.jsx-2738171818:after{border-color:${theme.valid};}`, `.valid.jsx-2738171818 span.jsx-2738171818{color:${theme.valid};}`, `.warning.jsx-2738171818:before,.warning.jsx-2738171818:after{border-color:${theme.warning};}`, `.warning.jsx-2738171818 span.jsx-2738171818{color:${theme.warning};}`, `.error.jsx-2738171818:before,.error.jsx-2738171818:after{border-color:${theme.error};}`, `.error.jsx-2738171818 span.jsx-2738171818{color:${theme.error};}`];
styles.__hash = "2738171818";
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
}, label && React.createElement("span", {
  className: `jsx-${styles.__hash}`
}, label), React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));