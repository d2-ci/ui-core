import _JSXStyle from "styled-jsx/style";
import propTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { inputHeight, inputHeightDense } from '../constants';
const styles = [`div.jsx-617431840{height:100%;line-height:${inputHeight}px;min-width:0;overflow:hidden;padding:0;position:relative;width:100%;}`, `.dense.jsx-617431840{line-height:${inputHeightDense}px;}`];
styles.__hash = "617431840";
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