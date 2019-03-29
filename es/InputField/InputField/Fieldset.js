import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { inputFontSizeValue } from '../../forms/constants';
import { colors, theme } from '../../theme';
const styles = new String(`.flatline.jsx-3043130778{bottom:0;border:1px solid ${colors.grey500};border-radius:5px;box-sizing:border-box;display:block;height:100%;left:0;padding-left:8px;pointer-events:none;position:absolute;right:0;}.flatline.idle.filled.jsx-3043130778{border:1.5px solid ${colors.grey500};}.flatline.focused.jsx-3043130778{border:1.5px solid ${theme.secondary600};}.flatline.valid.jsx-3043130778,.flatline.valid.idle.filled.jsx-3043130778,.flatline.valid.focused.jsx-3043130778{border:1.5px solid ${colors.blue600};}.flatline.warning.jsx-3043130778,.flatline.warning.idle.filled.jsx-3043130778,.flatline.warning.focused.jsx-3043130778{border:1.5px solid ${colors.yellow500};}.flatline.error.jsx-3043130778,.flatline.error.idle.filled.jsx-3043130778,.flatline.error.focused.jsx-3043130778{border:1.5px solid ${colors.red500};}`);
styles.__hash = "3043130778";
export const Fieldset = props => {
  if (props.kind !== 'outlined') return null;
  const className = cx('flatline', props.status, {
    focused: props.isFocused,
    idle: !props.isFocused,
    filled: props.hasValue
  });
  return React.createElement("fieldset", {
    className: `jsx-${styles.__hash}` + " " + (className || "")
  }, React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};