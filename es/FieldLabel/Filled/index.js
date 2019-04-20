import _JSXStyle from "styled-jsx/style";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { InputContainer } from './InputContainer';
import { Label } from './Label';
import { StatusIconNoDefault } from '../../icons/Status';
import { children } from '../../utils/react';
import { colors } from '../../theme';
import { iconStatusPropType, iconStatuses, statusColors } from '../../icons/constants';
import { innerSpacingSides, inputSizes, inputSizesPropTypes } from '../../forms/constants';
const styles = new String(`.label-filled.jsx-1153177665{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,10,0.05);border-bottom:2px solid transparent;border-radius:4px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:56px;position:relative;}.label-filled.disabled.jsx-1153177665{cursor:not-allowed;}.label-filled.dense.jsx-1153177665{height:44px;}.label-filled.jsx-1153177665:not(.disabled):hover{background-color:rgba(0,0,10,0.08);}.label-filled.focused.jsx-1153177665{border-color:${colors.teal600};}.label-filled.valid.jsx-1153177665{border-color:${statusColors[iconStatuses.VALID]};}.label-filled.valid.focused.jsx-1153177665{border-color:${colors.blue700};}.label-filled.warning.jsx-1153177665{border-color:${statusColors[iconStatuses.WARNING]};}.label-filled.warning.focused.jsx-1153177665{border-color:${colors.yellow700};}.label-filled.error.jsx-1153177665{border-color:${statusColors[iconStatuses.ERROR]};}.label-filled.error.focused.jsx-1153177665{border-color:${colors.red700};}.content.jsx-1153177665{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;position:relative;width:100%;}.focused.jsx-1153177665 .content.jsx-1153177665,.has-value.jsx-1153177665 .content.jsx-1153177665{z-index:2;}.status-icon.jsx-1153177665{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:24px;height:24px;margin-right:4px;}.status-icon.jsx-1153177665:empty{display:none;}.status-icon.jsx-1153177665:last-child{margin-right:10px;}`);
styles.__hash = "1153177665";

const createLabelFilledClassName = props => cx('label-filled', {
  disabled: props.disabled,
  focused: props.isFocused,
  dense: props.size === inputSizes.DENSE,
  valid: props.status === iconStatuses.VALID,
  warning: props.status === iconStatuses.WARNING,
  error: props.status === iconStatuses.ERROR,
  'has-value': props.hasValue
});

export const Filled = (_ref) => {
  let props = _extends({}, _ref);

  return React.createElement("div", {
    onClick: props.onClick,
    className: `jsx-${styles.__hash}` + " " + (createLabelFilledClassName(props) || "")
  }, React.createElement(Label, {
    isFocused: props.isFocused,
    size: props.size,
    status: props.status,
    hasValue: props.isFocused || props.hasValue,
    label: props.label,
    htmlFor: props.htmlFor,
    disabled: props.disabled
  }), React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content"
  }, React.createElement(InputContainer, {
    size: props.size,
    isFocused: props.isFocused,
    hasValue: props.hasValue,
    size: props.size
  }, props.children), React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "status-icon"
  }, React.createElement(StatusIconNoDefault, {
    status: props.status
  }))), React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
Filled.propTypes = {
  label: propTypes.string.isRequired,
  children: children.isRequired,
  hasValue: propTypes.bool.isRequired,
  htmlFor: propTypes.string.isRequired,
  disabled: propTypes.bool,
  required: propTypes.bool,
  status: iconStatusPropType,
  size: inputSizesPropTypes,
  onClick: propTypes.func
};
Filled.defaultProps = {
  disabled: false,
  required: false,
  status: iconStatuses.DEFAULT,
  size: inputSizes.DEFAULT,
  onClick: null
};