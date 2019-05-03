import _JSXStyle from "styled-jsx/style";
import React from 'react';
import cx from 'classnames';
import propTypes from 'prop-types';
import { colors, theme } from '../theme.js';
const common = new String(`div.jsx-3351530921{display:inline-block;position:relative;width:44px;height:14px;cursor:pointer;}.path.jsx-3351530921{left:1px;width:34px;height:14px;border-radius:8px;opacity:0.5;background-color:#bbbaba;}.toggle.jsx-3351530921{left:0;width:20px;height:20px;border-radius:50%;box-shadow:0 0 1px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24);background-color:#efefef;}.path.jsx-3351530921,.toggle.jsx-3351530921{position:absolute;top:50%;margin:0;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);outline:0;content:'';}.checked.jsx-3351530921 .path.jsx-3351530921{background-color:${colors.teal400};}.checked.jsx-3351530921 .toggle.jsx-3351530921{-webkit-transform:translate(80%,-50%);-ms-transform:translate(80%,-50%);transform:translate(80%,-50%);background-color:${colors.teal400};}.valid.jsx-3351530921 .path.jsx-3351530921,.valid.jsx-3351530921 .toggle.jsx-3351530921{background-color:${theme.valid};}.warning.jsx-3351530921 .path.jsx-3351530921,.warning.jsx-3351530921 .toggle.jsx-3351530921{background-color:${theme.warning};}.error.jsx-3351530921 .path.jsx-3351530921,.error.jsx-3351530921 .toggle.jsx-3351530921{background-color:${theme.error};}.disabled.jsx-3351530921{cursor:not-allowed;color:${theme.disabled};}.disabled.jsx-3351530921 .path.jsx-3351530921{background-color:#dadada;}.disabled.jsx-3351530921 .toggle.jsx-3351530921{background-color:#f5f5f5;}`);
common.__hash = "3351530921";

const SwitchIcon = ({
  checked,
  valid,
  warning,
  error,
  disabled
}) => {
  const classes = cx({
    checked: checked,
    disabled,
    valid,
    error,
    warning
  });
  return React.createElement("div", {
    className: `jsx-${common.__hash}` + " " + (classes || "")
  }, React.createElement("span", {
    className: `jsx-${common.__hash}` + " " + "path"
  }), React.createElement("span", {
    className: `jsx-${common.__hash}` + " " + "toggle"
  }), React.createElement(_JSXStyle, {
    id: common.__hash
  }, common));
};

SwitchIcon.propTypes = {
  checked: propTypes.bool,
  disabled: propTypes.bool,
  valid: propTypes.bool,
  warning: propTypes.bool,
  error: propTypes.bool
};
export { SwitchIcon };