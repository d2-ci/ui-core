import _JSXStyle from "styled-jsx/style";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { InputContainer } from './InputContainer';
import { Label } from './Label';
import { StatusIconNoDefault } from '../../icons/Status';
import { borderRadius, inputHeight, inputHeightDense } from '../constants';
import { children } from '../../utils/react';
import { colors } from '../../theme';
import { iconStatusPropType, iconStatuses, statusColors } from '../../icons/constants';
import { innerSpacingSides, inputSizes, inputSizesPropTypes } from '../../forms/constants';
const styles = new String(`.label-outlined.jsx-2953596136{height:${inputHeight + 10}px;position:relative;}.label-outlined.disabled.jsx-2953596136{cursor:not-allowed;}.label-outlined.dense.jsx-2953596136{height:${inputHeightDense + 10}px;}.label-outlined.jsx-2953596136:before{border:1px solid ${statusColors[iconStatuses.DEFAULT]};border-top:0;border-radius:0 0 ${borderRadius} ${borderRadius};box-sizing:border-box;bottom:0;content:'';height:75%;left:0;position:absolute;width:100%;}.label-outlined.valid.jsx-2953596136:before{border-color:${statusColors[iconStatuses.VALID]};}.label-outlined.warning.jsx-2953596136:before{border-color:${statusColors[iconStatuses.WARNING]};}.label-outlined.error.jsx-2953596136:before{border-color:${statusColors[iconStatuses.ERROR]};}.content.jsx-2953596136{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:54px;left:1px;position:relative;top:11px;width:calc(100% - 1px);}.dense.jsx-2953596136 .content.jsx-2953596136{height:42px;}.status-icon.jsx-2953596136{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:24px;height:24px;margin-right:4px;}.status-icon.jsx-2953596136:empty{display:none;}.status-icon.jsx-2953596136:last-child{margin-right:10px;}`);
styles.__hash = "2953596136";

const createLabelOutlinedClassName = props => cx('label-outlined', {
  focused: props.isFocused,
  dense: props.size === inputSizes.DENSE,
  valid: props.status === iconStatuses.VALID,
  warning: props.status === iconStatuses.WARNING,
  error: props.status === iconStatuses.ERROR,
  disabled: props.disabled
});

export const Outlined = (_ref) => {
  let props = _extends({}, _ref);

  return React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + (createLabelOutlinedClassName(props) || "")
  }, React.createElement(Label, {
    size: props.size,
    status: props.status,
    hasValue: props.isFocused || props.hasValue,
    label: props.label,
    htmlFor: props.htmlFor,
    disabled: props.disabled
  }), React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content"
  }, React.createElement(InputContainer, {
    size: props.size
  }, props.children), React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "status-icon"
  }, React.createElement(StatusIconNoDefault, {
    status: props.status
  }))), React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
Outlined.propTypes = {
  label: propTypes.string.isRequired,
  children: children.isRequired,
  hasValue: propTypes.bool.isRequired,
  htmlFor: propTypes.string.isRequired,
  required: propTypes.bool,
  status: iconStatusPropType,
  size: inputSizesPropTypes
};
Outlined.defaultProps = {
  status: iconStatuses.DEFAULT,
  size: inputSizes.DEFAULT,
  htmlFor: ''
};