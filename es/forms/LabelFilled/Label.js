import _JSXStyle from "styled-jsx/style";
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { colors, theme } from '../../theme';
import { iconStatuses, statusColors } from '../../icons/constants';
import { innerSpacingSides, inputFontSizeValue, inputSizes } from '../constants';
import { inputHeight, inputHeightDense } from '../LabelOutlined/constants';
const styles = new String(`.label.jsx-1900097216{box-sizing:border-box;color:${colors.grey700};display:block;font-size:${inputFontSizeValue};height:${inputHeight}px;left:0;line-height:${inputHeight}px;padding-left:${innerSpacingSides};position:absolute;top:0;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);-webkit-transition:all 0.1s;transition:all 0.1s;white-space:nowrap;width:100%;}.label.focused.jsx-1900097216,.label.has-value.jsx-1900097216{display:inline-block;font-size:12px;height:auto;line-height:14px;-webkit-transform:translate(0,8px);-ms-transform:translate(0,8px);transform:translate(0,8px);width:auto;}.label.dense.jsx-1900097216{height:${inputHeightDense}px;line-height:47px;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}.label.dense.focused.jsx-1900097216,.label.dense.has-value.jsx-1900097216{height:auto;line-height:12px;-webkit-transform:translate(0,7px);-ms-transform:translate(0,7px);transform:translate(0,7px);}.label.required.jsx-1900097216::after{content:'*';}.label.focused.jsx-1900097216{color:${theme.secondary600};}.label.valid.jsx-1900097216{color:${statusColors[iconStatuses.VALID]};}.label.warning.jsx-1900097216{color:${statusColors[iconStatuses.WARNING]};}.label.error.jsx-1900097216{color:${statusColors[iconStatuses.ERROR]};}`);
styles.__hash = "1900097216";

const createLabelClassName = props => cx('label', {
  focused: props.isFocused,
  required: props.required,
  valid: props.status === iconStatuses.VALID,
  warning: props.status === iconStatuses.WARNING,
  error: props.status === iconStatuses.ERROR,
  dense: props.size === inputSizes.DENSE,
  'has-value': props.hasValue
});

export const Label = props => React.createElement("label", {
  htmlFor: props.htmlFor,
  className: `jsx-${styles.__hash}` + " " + (createLabelClassName(props) || "")
}, props.label, React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));