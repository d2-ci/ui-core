import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { inputFontSizeValue } from '../../forms/constants';
import { colors, theme } from '../../theme';
const styles = new String(`.flatline.jsx-921583270{bottom:0;border:1px solid ${colors.grey500};border-radius:5px;box-sizing:border-box;display:block;height:100%;left:0;padding-left:8px;pointer-events:none;position:absolute;right:0;}.field.status-default:hover .flatline.jsx-921583270,.field.status-default:hover .flatline.idle.filled.jsx-921583270,.field.status-default:hover .flatline.focused.jsx-921583270{border:1px solid ${colors.grey700};}.field.status-default.disabled .flatline.jsx-921583270,.field.status-default.disabled:hover .flatline.jsx-921583270{border:1px solid rgba(196,196,196,0.2);}.flatline.idle.filled.jsx-921583270{border:1.5px solid ${colors.grey500};}.flatline.focused.jsx-921583270{border:1.5px solid ${theme.secondary600};}.flatline.valid.jsx-921583270,.flatline.valid.idle.filled.jsx-921583270,.flatline.valid.focused.jsx-921583270{border:1.5px solid ${colors.blue600};}.flatline.warning.jsx-921583270,.flatline.warning.idle.filled.jsx-921583270,.flatline.warning.focused.jsx-921583270{border:1.5px solid ${colors.yellow500};}.flatline.error.jsx-921583270,.flatline.error.idle.filled.jsx-921583270,.flatline.error.focused.jsx-921583270{border:1.5px solid ${colors.red500};}`);
styles.__hash = "921583270";
export const Fieldset = props => {
  if (props.kind !== 'outlined') return null;
  const className = cx('flatline', props.status, {
    focused: props.isFocused,
    idle: !props.isFocused,
    filled: props.hasValue
  });
  return React.createElement("fieldset", {
    className: `jsx-${styles.__hash}` + " " + (className || "")
  }, React.createElement(Legend, null, props.children), React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};

var _ref =
/*#__PURE__*/
React.createElement("span", {
  className: "jsx-2328510469"
}, "\xA0");

var _ref2 =
/*#__PURE__*/
React.createElement(_JSXStyle, {
  id: "2328510469"
}, "span.jsx-2328510469{display:inline-block;width:0;}");

const Legend = props => React.createElement("legend", {
  className: "jsx-2328510469"
}, _ref, props.children, _ref2);