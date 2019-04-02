import _JSXStyle from "styled-jsx/style";
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { Fieldset } from './Fieldset';
import { colors, theme } from '../../theme';
import { innerSpacingSides, inputFontSizeValue } from '../../forms/constants';
const styles = new String(`.label.jsx-4219440431{color:${colors.grey700};display:inline-block;font-size:${inputFontSizeValue};line-height:19px;pointer-events:none;position:absolute;-webkit-transition:all 0.1s;transition:all 0.1s;white-space:nowrap;}.label.outlined.jsx-4219440431{-webkit-transform:translate(-2px,22px);-ms-transform:translate(-2px,22px);transform:translate(-2px,22px);padding:0 10px 0 2px;}.label.outlined.dense.jsx-4219440431{-webkit-transform:translate(-2px,18px);-ms-transform:translate(-2px,18px);transform:translate(-2px,18px);}.label.filled.jsx-4219440431{display:block;left:0;position:absolute;top:0;-webkit-transform:translate(${innerSpacingSides},20px);-ms-transform:translate(${innerSpacingSides},20px);transform:translate(${innerSpacingSides},20px);}.label.filled.dense.jsx-4219440431{-webkit-transform:translate(${innerSpacingSides},14px);-ms-transform:translate(${innerSpacingSides},14px);transform:translate(${innerSpacingSides},14px);}.label.focused.jsx-4219440431,.label.has-value.jsx-4219440431{font-size:12px;}.label.filled.focused.jsx-4219440431,.label.filled.has-value.jsx-4219440431{-webkit-transform:translate(${innerSpacingSides},8px);-ms-transform:translate(${innerSpacingSides},8px);transform:translate(${innerSpacingSides},8px);}.label.filled.dense.focused.jsx-4219440431,.label.filled.dense.has-value.jsx-4219440431{-webkit-transform:translate(${innerSpacingSides},6px);-ms-transform:translate(${innerSpacingSides},6px);transform:translate(${innerSpacingSides},6px);}.label.outlined.focused.jsx-4219440431,.label.outlined.has-value.jsx-4219440431{position:static;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}.label.required.jsx-4219440431::after{content:'*';}.label.filled.focused.jsx-4219440431{color:${theme.secondary600};}.label.filled.has-icon.jsx-4219440431{left:24px;}.label.filled.shrink.has-icon.jsx-4219440431{left:24px;}.label.outlined.focused.jsx-4219440431{color:${theme.secondary600};}.label.outlined.has-icon.jsx-4219440431{left:24px;}.label.outlined.shrink.has-icon.jsx-4219440431{left:8px;}.icon-valid.jsx-4219440431,.label.filled.valid.jsx-4219440431,.label.outlined.valid.jsx-4219440431{color:${colors.blue600};}.icon-warning.jsx-4219440431,.label.filled.warning.jsx-4219440431,.label.outlined.warning.jsx-4219440431{color:${colors.yellow500};}.icon-error.jsx-4219440431,.label.filled.error.jsx-4219440431,.label.outlined.error.jsx-4219440431{color:${colors.red500};}`);
styles.__hash = "4219440431";

const createClassName = props => cx('label', {
  shrink: props.isShrinked,
  focused: props.isFocused,
  required: props.isRequired,
  disabled: props.isDisabled,
  [props.status]: true,
  [props.size]: true,
  [props.kind]: true,
  'has-icon': props.hasIcon,
  'has-value': props.hasValue,
  [typeof className === 'string' ? props.className : '']: typeof className === 'string' && !!props.className
});

export const Label = props => {
  const renderedLabel = React.createElement("label", {
    style: props.styles instanceof Object ? props.styles : {},
    className: `jsx-${styles.__hash}` + " " + (createClassName(props) || "")
  }, props.label, React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));

  if (!props.isFilled) {
    return React.createElement(Fieldset, {
      kind: props.kind,
      status: props.status,
      isFocused: props.isFocused,
      hasValue: props.hasValue
    }, renderedLabel);
  }

  return renderedLabel;
};
Label.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  isShrinked: PropTypes.bool.isRequired,
  isFilled: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isRequired: PropTypes.bool.isRequired,
  isOutlined: PropTypes.bool.isRequired,
  hasValue: PropTypes.bool.isRequired,
  hasIcon: PropTypes.bool.isRequired,
  className: PropTypes.string,
  styles: PropTypes.object
};
Label.defaultProps = {
  className: '',
  styles: {}
};