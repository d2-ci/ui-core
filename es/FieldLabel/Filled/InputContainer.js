import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import cx from 'classnames';
import { inputHeight, inputHeightDense } from '../constants.js';
const styles = [`div.jsx-2868989515{box-sizing:border-box;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:100%;line-height:${inputHeight}px;min-width:0;position:relative;}`, ".focus.jsx-2868989515,.value.jsx-2868989515{visibility:visible;}", `.dense.jsx-2868989515{line-height:${inputHeightDense}px;}`];
styles.__hash = "2868989515";
export const InputContainer = ({
  focus,
  dense,
  value,
  children
}) => React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + (cx({
    focus,
    dense,
    value
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));