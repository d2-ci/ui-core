import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { inputFontSizeValue } from '../../forms/constants';
import { colors, theme } from '../../theme';
const styles = new String(`.label.jsx-1166603618{color:${colors.grey700};display:block;font-size:${inputFontSizeValue};padding:0 10px 0 2px;pointer-events:none;position:absolute;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-transform:translate(-2px,0) scale(1);-ms-transform:translate(-2px,0) scale(1);transform:translate(-2px,0) scale(1);-webkit-transition:all 0.1s;transition:all 0.1s;white-space:nowrap;}.label.outlined.jsx-1166603618{background:white;}.label.required.jsx-1166603618::after{content:'*';}.label.filled.focused.jsx-1166603618{color:${theme.secondary600};}.label.filled.shrink.jsx-1166603618{-webkit-transform:translate(-2px,-12px) scale(0.75);-ms-transform:translate(-2px,-12px) scale(0.75);transform:translate(-2px,-12px) scale(0.75);}.label.filled.dense.shrink.jsx-1166603618{-webkit-transform:translate(-2px,-8px) scale(0.75);-ms-transform:translate(-2px,-8px) scale(0.75);transform:translate(-2px,-8px) scale(0.75);}.label.filled.has-icon.jsx-1166603618{left:24px;}.label.filled.shrink.has-icon.jsx-1166603618{left:24px;}.label.outlined.focused.jsx-1166603618{color:${theme.secondary600};}.label.outlined.shrink.jsx-1166603618{-webkit-transform:translate(-2px,-24px) scale(0.75);-ms-transform:translate(-2px,-24px) scale(0.75);transform:translate(-2px,-24px) scale(0.75);}.label.outlined.shrink.dense.jsx-1166603618{-webkit-transform:translate(-2px,-18px) scale(0.75);-ms-transform:translate(-2px,-18px) scale(0.75);transform:translate(-2px,-18px) scale(0.75);}.label.outlined.has-icon.jsx-1166603618{left:24px;}.label.outlined.shrink.has-icon.jsx-1166603618{left:8px;}.icon-valid.jsx-1166603618,.label.filled.valid.jsx-1166603618,.label.outlined.valid.jsx-1166603618{color:${colors.blue600};}.icon-warning.jsx-1166603618,.label.filled.warning.jsx-1166603618,.label.outlined.warning.jsx-1166603618{color:${colors.yellow500};}.icon-error.jsx-1166603618,.label.filled.error.jsx-1166603618,.label.outlined.error.jsx-1166603618{color:${colors.red500};}`);
styles.__hash = "1166603618";

const createClassName = props => cx('label', {
  shrink: props.isShrinked,
  focused: props.isFocused,
  required: props.isRequired,
  disabled: props.isDisabled,
  [props.status]: true,
  [props.size]: true,
  [props.kind]: true,
  'has-icon': props.hasIcon,
  [typeof className === 'string' ? props.className : '']: typeof className === 'string' && !!props.className
});

export const Label = props => {
  return React.createElement("label", {
    style: props.styles instanceof Object ? props.styles : {},
    className: `jsx-${styles.__hash}` + " " + (createClassName(props) || "")
  }, props.label, React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
Label.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  isShrinked: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isRequired: PropTypes.bool.isRequired,
  hasIcon: PropTypes.bool.isRequired,
  className: PropTypes.string,
  styles: PropTypes.object
};
Label.defaultProps = {
  className: '',
  styles: {}
};