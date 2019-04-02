import _JSXStyle from "styled-jsx/style";
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { borderRadius, inputHeight, inputHeightDense, shrinkedLabelFontSize } from '../constants';
import { iconStatusPropType, iconStatuses, statusColors } from '../../icons/constants';
import { innerSpacingSides, inputFontSizeValue, inputSizes, inputSizesPropTypes } from '../../forms/constants';
const styles = new String(`.legend.jsx-1447444822{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;left:0;padding-left:${innerSpacingSides};position:absolute;top:0;width:100%;}.legend.jsx-1447444822:before{border:1px solid ${statusColors[iconStatuses.DEFAULT]};border-bottom:0;border-right:0;border-radius:${borderRadius} 0 0 0;content:'';height:${inputHeight * 0.75}px;left:0;position:absolute;top:7px;width:14px;}.legend.jsx-1447444822:after{border:1px solid ${statusColors[iconStatuses.DEFAULT]};border-bottom:0;border-left:0;border-radius:0 ${borderRadius} 0 0;content:'';-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:${inputHeight * 0.75}px;left:0;position:relative;top:7px;}.legend-label.jsx-1447444822{font-size:${inputFontSizeValue};height:${inputHeight + 2}px;left:${innerSpacingSides};line-height:${inputHeight + 2}px;padding:0 10px 0 2px;position:absolute;top:7px;}.has-value.jsx-1447444822 .legend-label.jsx-1447444822{font-size:${shrinkedLabelFontSize};height:auto;left:auto;line-height:inherit;position:relative;top:auto;}.valid.jsx-1447444822:before,.valid.jsx-1447444822:after{border-color:${statusColors[iconStatuses.VALID]};}.valid.jsx-1447444822 .legend-label.jsx-1447444822{color:${statusColors[iconStatuses.VALID]};}.warning.jsx-1447444822:before,.warning.jsx-1447444822:after{border-color:${statusColors[iconStatuses.WARNING]};}.warning.jsx-1447444822 .legend-label.jsx-1447444822{color:${statusColors[iconStatuses.WARNING]};}.legend.error.jsx-1447444822:before,.legend.error.jsx-1447444822:after{border-color:${statusColors[iconStatuses.ERROR]};}.error.jsx-1447444822 .legend-label.jsx-1447444822{color:${statusColors[iconStatuses.ERROR]};}.dense.has-no-value.jsx-1447444822 .legend-label.jsx-1447444822{height:${inputHeightDense + 2}px;line-height:${inputHeightDense + 2}px;}.legend.dense.jsx-1447444822:before,.legend.dense.jsx-1447444822:after{height:${inputHeightDense * 0.75}px;}`);
styles.__hash = "1447444822";

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