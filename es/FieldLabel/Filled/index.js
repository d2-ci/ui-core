import _JSXStyle from "styled-jsx/style";
import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { InputContainer } from './InputContainer';
import { Label } from './Label';
import { StatusIconNoDefault } from '../../icons/Status';
import { colors, theme } from '../../theme';
const styles = [".label-filled.jsx-3103387163{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,10,0.05);border-bottom:2px solid transparent;border-radius:4px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:56px;position:relative;}", ".label-filled.jsx-3103387163:not(.disabled):hover{background-color:rgba(0,0,10,0.08);}", ".disabled.jsx-3103387163{cursor:not-allowed;}", ".dense.jsx-3103387163{height:44px;}", `.focus.jsx-3103387163{border-color:${colors.teal600};}`, `.valid.jsx-3103387163{border-color:${theme.valid};}`, `.valid.focus.jsx-3103387163{border-color:${colors.blue700};}`, `.warning.jsx-3103387163{border-color:${theme.warning};}`, `.warning.focus.jsx-3103387163{border-color:${colors.yellow700};}`, `.error.jsx-3103387163{border-color:${theme.error};}`, `.error.focus.jsx-3103387163{border-color:${colors.red700};}`, ".content.jsx-3103387163{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;position:relative;width:100%;}", ".focus.jsx-3103387163 .content.jsx-3103387163,.value.jsx-3103387163 .content.jsx-3103387163{z-index:2;}", ".status-icon.jsx-3103387163{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:24px;height:24px;margin-right:4px;}", ".status-icon.jsx-3103387163:empty{display:none;}", ".status-icon.jsx-3103387163:last-child{margin-right:10px;}"];
styles.__hash = "3103387163";
export const Filled = ({
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
  onClick: onClick,
  className: `jsx-${styles.__hash}` + " " + (cx('label-filled', className, {
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
  dense: dense,
  focus: focus,
  value: value
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
Filled.propTypes = {
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