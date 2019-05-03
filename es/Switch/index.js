import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme.js';
import { SwitchIcon } from '../icons/Switch.js';
import styles from './styles';

const Switch = ({
  onChange,
  name,
  className,
  label,
  required,
  checked,
  disabled,
  valid,
  warning,
  error
}) => React.createElement("label", {
  className: `jsx-${styles.__hash}` + " " + (cx(className, {
    disabled
  }) || "")
}, React.createElement("input", {
  type: "checkbox",
  disabled: disabled,
  name: name,
  checked: checked,
  onChange: () => onChange(name, !checked),
  className: `jsx-${styles.__hash}`
}), React.createElement(SwitchIcon, {
  checked: checked,
  disabled: disabled,
  valid: valid,
  warning: warning,
  error: error
}), React.createElement("span", {
  className: `jsx-${styles.__hash}` + " " + (cx({
    required,
    disabled
  }) || "")
}, label), React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));

Switch.propTypes = {
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  className: propTypes.string,
  label: propTypes.string,
  required: propTypes.bool,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool
};
export { Switch };