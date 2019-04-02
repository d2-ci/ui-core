import _JSXStyle from "styled-jsx/style";
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { children } from '../../utils/react';
import { innerSpacingSides, inputSizes, inputSizesPropTypes } from '../../forms/constants';
import { inputHeight, inputHeightDense } from './constants';
const styles = new String(`.content.jsx-3722125387{height:${inputHeight + 2}px;line-height:${inputHeight + 2}px;padding:0 0 0 ${innerSpacingSides};position:relative;top:-2px;width:calc(100% - 1px);box-sizing:border-box;left:1px;}.content.dense.jsx-3722125387{height:${inputHeightDense + 2}px;line-height:${inputHeightDense + 2}px;}`);
styles.__hash = "3722125387";

const createContentClassName = props => cx('content', {
  dense: props.size === inputSizes.DENSE
});

export const Content = props => React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + (createContentClassName(props) || "")
}, props.children, React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));
Content.propTypes = {
  size: inputSizesPropTypes.isRequired,
  children: children.isRequired
};