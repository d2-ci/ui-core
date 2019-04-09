import _JSXStyle from "styled-jsx/style";
import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { borderRadius, inputHeight, inputHeightDense, shrinkedLabelFontSize } from '../constants';
import { colors } from '../../theme';
import { iconStatusPropType, iconStatuses, statusColors } from '../../icons/constants';
import { innerSpacingSides, inputFontSizeValue, inputSizes, inputSizesPropTypes } from '../../forms/constants';
const styles = new String(`.legend.jsx-3140227948{box-sizing:border-box;height:20px;left:0;line-height:20px;padding-left:${innerSpacingSides};position:absolute;top:0;width:100%;}.legend.disabled.jsx-3140227948{cursor:not-allowed;}.legend.has-value.jsx-3140227948{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.legend.jsx-3140227948:before{border:1px solid ${statusColors[iconStatuses.DEFAULT]};border-bottom:0;border-right:0;border-radius:${borderRadius} 0 0 0;content:'';height:${inputHeight * 0.75}px;left:0;position:absolute;top:10px;width:12px;}.legend.jsx-3140227948:after{border:1px solid ${statusColors[iconStatuses.DEFAULT]};border-bottom:0;border-left:0;border-radius:0 ${borderRadius} 0 0;content:'';-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:${inputHeight * 0.75}px;right:0;position:absolute;top:10px;width:calc(100% - 12px);}.legend.has-value.jsx-3140227948:after{width:auto;position:relative;}.legend-label.jsx-3140227948{display:inline-block;font-size:${inputFontSizeValue};padding:0 10px 0 0;position:relative;-webkit-transform:translate(0px,29px);-ms-transform:translate(0px,29px);transform:translate(0px,29px);-webkit-transition:-webkit-transform 0.05s ease-in;-webkit-transition:transform 0.05s ease-in;transition:transform 0.05s ease-in;}.legend.disabled.jsx-3140227948 .legend-label.jsx-3140227948{color:${colors.grey500};}.has-value.jsx-3140227948 .legend-label.jsx-3140227948{font-size:${shrinkedLabelFontSize};height:auto;line-height:inherit;-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);}.valid.jsx-3140227948:before,.valid.jsx-3140227948:after{border-color:${statusColors[iconStatuses.VALID]};}.valid.jsx-3140227948 .legend-label.jsx-3140227948{color:${statusColors[iconStatuses.VALID]};}.warning.jsx-3140227948:before,.warning.jsx-3140227948:after{border-color:${statusColors[iconStatuses.WARNING]};}.warning.jsx-3140227948 .legend-label.jsx-3140227948{color:${statusColors[iconStatuses.WARNING]};}.legend.error.jsx-3140227948:before,.legend.error.jsx-3140227948:after{border-color:${statusColors[iconStatuses.ERROR]};}.error.jsx-3140227948 .legend-label.jsx-3140227948{color:${statusColors[iconStatuses.ERROR]};}.dense.has-no-value.jsx-3140227948 .legend-label.jsx-3140227948{height:${inputHeightDense}px;line-height:${inputHeightDense}px;-webkit-transform:translate(0px,11px);-ms-transform:translate(0px,11px);transform:translate(0px,11px);}.legend.dense.jsx-3140227948:before,.legend.dense.jsx-3140227948:after{height:${inputHeightDense * 0.75}px;}`);
styles.__hash = "3140227948";

const createLabelClassName = props => cx('legend', {
  disabled: props.disabled,
  dense: props.size === inputSizes.DENSE,
  valid: props.status === iconStatuses.VALID,
  warning: props.status === iconStatuses.WARNING,
  error: props.status === iconStatuses.ERROR,
  'has-no-value': !props.hasValue,
  'has-value': props.hasValue
});

export const Label = props => React.createElement("label", {
  htmlFor: props.htmlFor,
  className: `jsx-${styles.__hash}` + " " + (createLabelClassName(props) || "")
}, React.createElement("span", {
  className: `jsx-${styles.__hash}` + " " + "legend-label"
}, props.label), React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));
Label.propTypes = {
  label: propTypes.string.isRequired,
  hasValue: propTypes.bool.isRequired,
  status: iconStatusPropType.isRequired,
  size: inputSizesPropTypes.isRequired,
  htmlFor: propTypes.string.isRequired,
  disabled: propTypes.bool
};
Label.defaultProps = {
  disabled: false
};