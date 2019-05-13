import _JSXStyle from "styled-jsx/style";
import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { colors, theme } from '../../theme';
import { inputHeight, inputHeightDense } from '../constants';
const styles = [`label.jsx-179922474{box-sizing:border-box;color:${colors.grey700};display:block;font-size:16px;height:${inputHeight}px;left:0;line-height:${inputHeight + 2}px;padding-left:16px;position:absolute;top:0;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);-webkit-transition:all 0.1s;transition:all 0.1s;white-space:nowrap;width:100%;}`, `.disabled.jsx-179922474{color:${theme.disabled};}`, ".focus.jsx-179922474,.value.jsx-179922474{display:inline-block;font-size:12px;height:auto;line-height:14px;-webkit-transform:translate(0,8px);-ms-transform:translate(0,8px);transform:translate(0,8px);width:auto;}", `.dense.jsx-179922474{height:${inputHeightDense}px;line-height:47px;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}`, ".dense.focus.jsx-179922474,.dense.value.jsx-179922474{height:auto;line-height:12px;-webkit-transform:translate(0,8px);-ms-transform:translate(0,8px);transform:translate(0,8px);}", ".required.jsx-179922474::after{padding-left:4px;content:'*';}", `.focus.jsx-179922474{color:${theme.secondary600};}`, `.valid.jsx-179922474{color:${theme.valid};}`, `.valid.focus.jsx-179922474{color:${colors.blue700};}`, `.warning.jsx-179922474{color:${theme.warning};}`, `.warning.focus.jsx-179922474{color:${colors.yellow700};}`, `.error.jsx-179922474{color:${theme.error};}`, `.error.focus.jsx-179922474{color:${colors.red800};}`];
styles.__hash = "179922474";
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
}, label, React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));