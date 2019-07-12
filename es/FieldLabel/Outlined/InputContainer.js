import _JSXStyle from "styled-jsx/style";
import React from 'react';
import cx from 'classnames';
import { inputHeight, inputHeightDense } from '../constants.js';
const styles = ["div.jsx-193341862{height:100%;line-height:40px;min-width:0;overflow:hidden;padding:0;position:relative;width:100%;}", ".dense.jsx-193341862{line-height:32px;}"];
styles.__hash = "193341862";
export const InputContainer = ({
  dense,
  children
}) => React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + (cx({
    dense
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));