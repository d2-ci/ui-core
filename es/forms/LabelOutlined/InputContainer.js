import _JSXStyle from "styled-jsx/style";
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { children } from '../../utils/react';
import { innerSpacingSides, inputSizes, inputSizesPropTypes } from '../../forms/constants';
import { inputHeight, inputHeightDense } from './constants';
const styles = new String(`.input-container.jsx-3407983543{height:100%;line-height:${inputHeight}px;padding:0 0 0 ${innerSpacingSides};width:100%;}.input-container.dense.jsx-3407983543{line-height:${inputHeightDense}px;}`);
styles.__hash = "3407983543";

const createInputContainerClassName = props => cx('input-container', {
  dense: props.size === inputSizes.DENSE
});

export const InputContainer = props => React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + (createInputContainerClassName(props) || "")
}, props.children, React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));
InputContainer.propTypes = {
  size: inputSizesPropTypes.isRequired,
  children: children.isRequired
};