import _JSXStyle from "styled-jsx/style";
import React from 'react';
import cx from 'classnames';
import propTypes from 'prop-types';
import { colors, theme } from '../theme.js';
const common = ["div.jsx-1593816046{display:inline-block;position:relative;width:44px;height:14px;cursor:pointer;}", ".path.jsx-1593816046{left:1px;width:34px;height:14px;border-radius:8px;opacity:0.5;background-color:#bbbaba;}", ".toggle.jsx-1593816046{left:0;width:20px;height:20px;border-radius:50%;box-shadow:0 0 1px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24);background-color:#efefef;position:relative;-webkit-transition:-webkit-transform 0.1s ease-in;-webkit-transition:transform 0.1s ease-in;transition:transform 0.1s ease-in;}", `.toggle.jsx-1593816046:before{content:'';position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%) scale(0.5);-ms-transform:translate(-50%,-50%) scale(0.5);transform:translate(-50%,-50%) scale(0.5);-webkit-transition:-webkit-transform 0.05s ease-in;-webkit-transition:transform 0.05s ease-in;transition:transform 0.05s ease-in;width:100%;height:100%;border:2px solid ${colors.blue600};border-radius:50%;z-index:2;}`, ".focus.jsx-1593816046 .toggle.jsx-1593816046:before{-webkit-transform:translate(-50%,-50%) scale(1);-ms-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);-webkit-transition:-webkit-transform 0.05s ease-out;-webkit-transition:transform 0.05s ease-out;transition:transform 0.05s ease-out;}", ".toggle.jsx-1593816046:after{content:'';width:100%;height:100%;position:absolute;top:0;left:0;z-index:1;background-color:#efefef;border-radius:50%;}", ".path.jsx-1593816046,.toggle.jsx-1593816046{position:absolute;top:50%;margin:0;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);outline:0;content:'';}", `.checked.jsx-1593816046 .path.jsx-1593816046{background-color:${colors.teal400};}`, `.checked.jsx-1593816046 .toggle.jsx-1593816046{-webkit-transform:translate(80%,-50%);-ms-transform:translate(80%,-50%);transform:translate(80%,-50%);background-color:${colors.teal400};-webkit-transition:-webkit-transform 0.1s ease-out;-webkit-transition:transform 0.1s ease-out;transition:transform 0.1s ease-out;}`, `.checked.jsx-1593816046 .toggle.jsx-1593816046:before,.checked.jsx-1593816046 .toggle.jsx-1593816046:after{background-color:${colors.teal400};}`, `.valid.jsx-1593816046 .path.jsx-1593816046,.valid.jsx-1593816046 .toggle.jsx-1593816046{background-color:${theme.valid};}`, `.valid.jsx-1593816046 .toggle.jsx-1593816046:before,.valid.jsx-1593816046 .toggle.jsx-1593816046:after{background-color:${colors.valid};}`, `.warning.jsx-1593816046 .path.jsx-1593816046,.warning.jsx-1593816046 .toggle.jsx-1593816046{background-color:${theme.warning};}`, `.warning.jsx-1593816046 .toggle.jsx-1593816046:before,.warning.jsx-1593816046 .toggle.jsx-1593816046:after{background-color:${colors.warning};}`, `.error.jsx-1593816046 .path.jsx-1593816046,.error.jsx-1593816046 .toggle.jsx-1593816046{background-color:${theme.error};}`, `.error.jsx-1593816046 .toggle.jsx-1593816046:before,.error.jsx-1593816046 .toggle.jsx-1593816046:after{background:${colors.error};}`, `.disabled.jsx-1593816046{cursor:not-allowed;color:${theme.disabled};}`, ".disabled.jsx-1593816046 .path.jsx-1593816046{background-color:#dadada;}", ".disabled.jsx-1593816046 .toggle.jsx-1593816046{background-color:#f5f5f5;}"];
common.__hash = "1593816046";

const SwitchIcon = ({
  checked,
  valid,
  warning,
  error,
  disabled,
  focus
}) => {
  const classes = cx({
    checked: checked,
    disabled,
    valid,
    error,
    warning,
    focus
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