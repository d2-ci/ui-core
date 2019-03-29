import _JSXStyle from "styled-jsx/style";
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../../theme';
import { heightDefault, heightDense } from '../../forms/constants';
const styles = new String(`.size-default.jsx-2263637156{height:${heightDefault};}.size-dense.jsx-2263637156{height:${heightDense};}.field.jsx-2263637156{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:12px;}.field.kind-filled.jsx-2263637156{border-bottom:2px solid transparent;border-radius:5px;background-color:rgba(0,0,10,0.05);}.field.kind-filled.jsx-2263637156:hover,.field.kind-filled.focused.jsx-2263637156{border-bottom:2px solid ${theme.secondary600};background-color:rgba(0,0,10,0.08);}.field.kind-filled.status-valid.jsx-2263637156:hover,.field.kind-filled.focused.status-valid.jsx-2263637156{border-bottom:2px solid ${colors.blue600};}.field.kind-filled.status-warning.jsx-2263637156:hover,.field.kind-filled.focused.status-warning.jsx-2263637156{border-bottom:2px solid ${colors.yellow500};}.field.kind-filled.status-error.jsx-2263637156:hover,.field.kind-filled.focused.status-error.jsx-2263637156{border-bottom:2px solid ${colors.red500};}.field.kind-filled.disabled.jsx-2263637156:hover,.field.kind-filled.disabled.jsx-2263637156{border:2px solid transparent;background-color:rgba(0,0,10,0.02);color:${colors.grey500};}_.jsx-2263637156:-ms-input-placeholder,.jsx-2263637156:root .flatline.jsx-2263637156,_.jsx-2263637156:-ms-input-placeholder,.jsx-2263637156:root .field.kind-filled.jsx-2263637156{border-radius:0px;}`);
styles.__hash = "2263637156";
export const Field = props => {
  const className = cx('field', `size-${props.size}`, `status-${props.status}`, `kind-${props.kind}`, {
    focused: props.isFocused,
    filled: props.value,
    disabled: props.disabled
  });
  return React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + (className || "")
  }, props.children, React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
Field.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
  isFilled: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired
};