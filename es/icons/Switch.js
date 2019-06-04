import _JSXStyle from "styled-jsx/style";
import React from 'react';
import cx from 'classnames';
import propTypes from 'prop-types';
import { colors, theme } from '../theme.js';
const common = ["div.jsx-2609680844{display:inline-block;position:relative;width:44px;height:14px;cursor:pointer;}", ".path.jsx-2609680844{left:1px;width:34px;height:14px;border-radius:8px;opacity:0.5;background-color:#bbbaba;}", ".toggle.jsx-2609680844{left:0;width:20px;height:20px;border-radius:50%;box-shadow:0 0 1px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24);position:relative;-webkit-transition:-webkit-transform 0.1s ease-in;-webkit-transition:transform 0.1s ease-in;transition:transform 0.1s ease-in;}", `.toggle.jsx-2609680844:before{box-sizing:content-box;border:2px solid ${colors.blue600};border-radius:50%;height:calc(100% + 2px);left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:calc(100% + 2px);z-index:2;}`, ".focus.jsx-2609680844 .toggle.jsx-2609680844:before{content:'';}", ".toggle.jsx-2609680844:after{content:'';background-color:#efefef;border-radius:50%;box-sizing:content-box;height:100%;left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:100%;z-index:1;}", ".focus.jsx-2609680844 .toggle.jsx-2609680844:after{border:2px solid white;}", ".path.jsx-2609680844,.toggle.jsx-2609680844{position:absolute;top:50%;margin:0;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);outline:0;content:'';}", `.checked.jsx-2609680844 .path.jsx-2609680844{background-color:${colors.teal400};}`, ".checked.jsx-2609680844 .toggle.jsx-2609680844{-webkit-transform:translate(80%,-50%);-ms-transform:translate(80%,-50%);transform:translate(80%,-50%);-webkit-transition:-webkit-transform 0.1s ease-out;-webkit-transition:transform 0.1s ease-out;transition:transform 0.1s ease-out;}", `.checked.jsx-2609680844 .toggle.jsx-2609680844:after{background-color:${colors.teal400};}`, `.valid.jsx-2609680844 .path.jsx-2609680844{background-color:${theme.valid};}`, `.valid.jsx-2609680844 .toggle.jsx-2609680844:after{background-color:${theme.valid};}`, `.warning.jsx-2609680844 .path.jsx-2609680844{background-color:${theme.warning};}`, `.warning.jsx-2609680844 .toggle.jsx-2609680844:after{background-color:${theme.warning};}`, `.error.jsx-2609680844 .path.jsx-2609680844{background-color:${theme.error};}`, `.error.jsx-2609680844 .toggle.jsx-2609680844:after{background:${theme.error};}`, `.disabled.jsx-2609680844{cursor:not-allowed;color:${theme.disabled};}`, ".disabled.jsx-2609680844 .path.jsx-2609680844{background-color:#dadada;}", ".disabled.jsx-2609680844 .toggle.jsx-2609680844:after{background-color:#f5f5f5;}"];
common.__hash = "2609680844";

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