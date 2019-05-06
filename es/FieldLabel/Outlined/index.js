import _JSXStyle from "styled-jsx/style";
import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { InputContainer } from './InputContainer';
import { Label } from './Label';
import { StatusIconNoDefault } from '../../icons/Status';
import { borderRadius, inputHeight, inputHeightDense } from '../constants';
import { colors, theme } from '../../theme';
const styles = [`.label-outlined.jsx-1781075751{height:${inputHeight + 10}px;position:relative;color:${colors.grey700};}`, ".disabled.jsx-1781075751{cursor:not-allowed;}", `.dense.jsx-1781075751{height:${inputHeightDense + 10}px;}`, `.label-outlined.jsx-1781075751:before{border:1px solid ${theme.default};border-top:0;border-radius:0 0 ${borderRadius} ${borderRadius};box-sizing:border-box;bottom:0;content:'';height:75%;left:0;position:absolute;width:100%;}`, `.focus.jsx-1781075751:before{border-color:${colors.teal400};}`, `.valid.jsx-1781075751:before{border-color:${theme.valid};}`, `.warning.jsx-1781075751:before{border-color:${theme.warning};}`, `.error.jsx-1781075751:before{border-color:${theme.error};}`, `.disabled.jsx-1781075751:before{border-color:${theme.disabled};}`, ".content.jsx-1781075751{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:54px;left:1px;position:relative;top:11px;width:calc(100% - 1px);}", ".dense.jsx-1781075751 .content.jsx-1781075751{height:42px;}", ".status-icon.jsx-1781075751{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:24px;height:24px;margin-right:4px;}", ".status-icon.jsx-1781075751:empty{display:none;}", ".status-icon.jsx-1781075751:last-child{margin-right:10px;}"];
styles.__hash = "1781075751";
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