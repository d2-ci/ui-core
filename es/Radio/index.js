import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme.js';
import styles from './styles.js';
import { Checked, Unchecked } from '../icons/Radio.js';
const icons = {
  styles: React.createElement(_JSXStyle, {
    id: "871975739"
  }, `svg.jsx-871975739{height:24px;width:24px;fill:${theme.default};}.checked.jsx-871975739{fill:${colors.teal400};}.disabled.jsx-871975739{fill:${theme.disabled};}.error.jsx-871975739{fill:${theme.error};}.valid.jsx-871975739{fill:${theme.valid};}.warning.jsx-871975739{fill:${theme.warning};}`),
  className: "jsx-871975739"
};

const Radio = ({
  onChange,
  name,
  value,
  className,
  label,
  required,
  checked = false,
  disabled,
  valid,
  warning,
  error
}) => {
  const classes = cx(icons.className, {
    checked: checked && !valid && !error && !warning,
    disabled,
    valid,
    error,
    warning
  });
  const icon = checked ? React.createElement(Checked, {
    className: classes
  }) : React.createElement(Unchecked, {
    className: classes
  });
  return React.createElement("label", {
    className: `jsx-${styles.__hash}` + " " + (cx(className, {
      disabled
    }) || "")
  }, React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    className: `jsx-${styles.__hash}`
  }), icon, React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + (cx({
      required
    }) || "")
  }, label), icons.styles, React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};

Radio.propTypes = {
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  className: propTypes.string,
  label: propTypes.string,
  required: propTypes.bool,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool
};
export { Radio };