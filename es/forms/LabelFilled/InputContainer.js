import _JSXStyle from "styled-jsx/style";
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import cx from 'classnames';
import { children } from '../../utils/react';
import { iconStatusPropType, iconStatuses } from '../../icons/constants';
import { inputSizes, inputSizesPropTypes } from '../constants';
const styles = new String(".content.jsx-1303814091{box-sizing:border-box;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:100%;padding-top:27px;visibility:hidden;}.content.dense.jsx-1303814091{padding-top:22px;}.content.focused.jsx-1303814091,.content.has-value.jsx-1303814091{visibility:visible;}");
styles.__hash = "1303814091";

const createInputContainerClassName = props => cx('content', {
  focused: props.isFocused,
  dense: props.size === inputSizes.DENSE,
  'has-value': props.hasValue
});

export const InputContainer = props => React.createElement("div", {
  className: `jsx-${styles.__hash}` + " " + (createInputContainerClassName(props) || "")
}, props.children, React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));