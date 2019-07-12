import _JSXStyle from "styled-jsx/style";
import React from 'react';
import cx from 'classnames';
import { borderRadius, inputHeight, inputHeightDense, shrinkedLabelFontSize } from '../constants.js';
import { colors, theme, spacers } from '../../theme.js';
const styles = [`label.jsx-2496366900{display:block;box-sizing:border-box;height:24px;font-size:16px;line-height:20px;padding:0 ${spacers.dp16} ${spacers.dp4};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}`, ".disabled.jsx-2496366900{cursor:not-allowed;}", `.required.jsx-2496366900 span.jsx-2496366900::after{padding-left:${spacers.dp4};content:'*';}`];
styles.__hash = "2496366900";

const constructClassName = props => ({
  focus: props.focus,
  required: props.required,
  valid: props.valid,
  warning: props.warning,
  error: props.error,
  dense: props.dense,
  disabled: props.disabled,
  value: props.value
});

export const Label = props => React.createElement("label", {
  htmlFor: props.htmlFor,
  className: `jsx-${styles.__hash}` + " " + (constructClassName(props) || "")
}, props.label, React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));