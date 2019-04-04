import _JSXStyle from "styled-jsx/style";
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { borderRadius, inputHeight, inputHeightDense, shrinkedLabelFontSize } from './constants';
import { iconStatusPropType, iconStatuses, statusColors } from '../../icons/constants';
import { innerSpacingSides, inputFontSizeValue, inputSizes, inputSizesPropTypes } from '../../forms/constants';
const styles = new String(`.legend.jsx-3179232220{box-sizing:border-box;height:20px;left:0;line-height:20px;padding-left:${innerSpacingSides};position:absolute;top:0;width:100%;}.legend.has-value.jsx-3179232220{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.legend.jsx-3179232220:before{border:1px solid ${statusColors[iconStatuses.DEFAULT]};border-bottom:0;border-right:0;border-radius:${borderRadius} 0 0 0;content:'';height:${inputHeight * 0.75}px;left:0;position:absolute;top:10px;width:12px;}.legend.jsx-3179232220:after{border:1px solid ${statusColors[iconStatuses.DEFAULT]};border-bottom:0;border-left:0;border-radius:0 ${borderRadius} 0 0;content:'';-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:${inputHeight * 0.75}px;right:0;position:absolute;top:10px;width:calc(100% - 20px);}.legend.has-value.jsx-3179232220:after{width:auto;position:relative;}.legend-label.jsx-3179232220{display:inline-block;font-size:${inputFontSizeValue};padding:0 10px 0 0;position:relative;-webkit-transform:translate(0px,29px);-ms-transform:translate(0px,29px);transform:translate(0px,29px);-webkit-transition:-webkit-transform 0.05s ease-in;-webkit-transition:transform 0.05s ease-in;transition:transform 0.05s ease-in;}.has-value.jsx-3179232220 .legend-label.jsx-3179232220{font-size:${shrinkedLabelFontSize};height:auto;line-height:inherit;-webkit-transform:translate(0px,0px);-ms-transform:translate(0px,0px);transform:translate(0px,0px);}.valid.jsx-3179232220:before,.valid.jsx-3179232220:after{border-color:${statusColors[iconStatuses.VALID]};}.valid.jsx-3179232220 .legend-label.jsx-3179232220{color:${statusColors[iconStatuses.VALID]};}.warning.jsx-3179232220:before,.warning.jsx-3179232220:after{border-color:${statusColors[iconStatuses.WARNING]};}.warning.jsx-3179232220 .legend-label.jsx-3179232220{color:${statusColors[iconStatuses.WARNING]};}.legend.error.jsx-3179232220:before,.legend.error.jsx-3179232220:after{border-color:${statusColors[iconStatuses.ERROR]};}.error.jsx-3179232220 .legend-label.jsx-3179232220{color:${statusColors[iconStatuses.ERROR]};}.dense.has-no-value.jsx-3179232220 .legend-label.jsx-3179232220{height:${inputHeightDense}px;line-height:${inputHeightDense}px;-webkit-transform:translate(0px,10px);-ms-transform:translate(0px,10px);transform:translate(0px,10px);}.legend.dense.jsx-3179232220:before,.legend.dense.jsx-3179232220:after{height:${inputHeightDense * 0.75}px;}`);
styles.__hash = "3179232220";

const createLabelClassName = props => cx('legend', {
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
  label: PropTypes.string.isRequired,
  hasValue: PropTypes.bool.isRequired,
  status: iconStatusPropType.isRequired,
  size: inputSizesPropTypes.isRequired,
  htmlFor: PropTypes.string.isRequired
};