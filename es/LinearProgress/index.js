import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles';
import { theme } from '../theme.js';

const Progress = ({
  indeterminate,
  amount
}) => {
  const width = amount ? `width: ${amount}%;` : '';
  return React.createElement("div", {
    className: _JSXStyle.dynamic([["1860207884", [width]], ["2270174337", [theme.primary600]]]) + " " + (cx({
      determinate: !!width,
      indeterminate: !width
    }) || "")
  }, React.createElement(_JSXStyle, {
    id: "1860207884",
    dynamic: [width]
  }, `div.__jsx-style-dynamic-selector{${width};}`), React.createElement(_JSXStyle, {
    id: "2270174337",
    dynamic: [theme.primary600]
  }, `div.__jsx-style-dynamic-selector{background-color:${theme.primary600};top:0;bottom:0;left:0;-webkit-transition:width 0.3s linear;transition:width 0.3s linear;}.determinate.__jsx-style-dynamic-selector{position:absolute;}.indeterminate.__jsx-style-dynamic-selector:before{position:absolute;top:0;bottom:0;left:0;background-color:inherit;-webkit-animation:anim-indeterminate-__jsx-style-dynamic-selector 2.1s cubic-bezier(0.65,0.815,0.735,0.395) infinite;animation:anim-indeterminate-__jsx-style-dynamic-selector 2.1s cubic-bezier(0.65,0.815,0.735,0.395) infinite;content:'';will-change:left,right;}.indeterminate.__jsx-style-dynamic-selector:after{position:absolute;top:0;bottom:0;left:0;background-color:inherit;-webkit-animation:anim-indeterminate-short-__jsx-style-dynamic-selector 2.1s cubic-bezier(0.165,0.84,0.44,1) infinite;animation:anim-indeterminate-short-__jsx-style-dynamic-selector 2.1s cubic-bezier(0.165,0.84,0.44,1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s;content:'';will-change:left,right;}@-webkit-keyframes anim-indeterminate-__jsx-style-dynamic-selector{0%{right:100%;left:-35%;}60%{right:-90%;left:100%;}100%{right:-90%;left:100%;}}@keyframes anim-indeterminate-__jsx-style-dynamic-selector{0%{right:100%;left:-35%;}60%{right:-90%;left:100%;}100%{right:-90%;left:100%;}}@-webkit-keyframes anim-indeterminate-short-__jsx-style-dynamic-selector{0%{right:100%;left:-200%;}60%{right:-8%;left:107%;}100%{right:-8%;left:107%;}}@keyframes anim-indeterminate-short-__jsx-style-dynamic-selector{0%{right:100%;left:-200%;}60%{right:-8%;left:107%;}100%{right:-8%;left:107%;}}`));
};

const LinearProgress = ({
  amount,
  margin,
  className
}) => {
  return React.createElement("div", {
    role: "progressbar",
    className: _JSXStyle.dynamic([["555193088", [theme.primary050]], ["3886587682", [margin]]]) + " " + (className || "")
  }, React.createElement(Progress, {
    amount: amount
  }), React.createElement(_JSXStyle, {
    id: "555193088",
    dynamic: [theme.primary050]
  }, `div.__jsx-style-dynamic-selector{display:block;position:relative;width:100%;height:4px;margin:0;overflow:hidden;overflow-x:hidden;overflow-y:hidden;background-color:${theme.primary050};}`), React.createElement(_JSXStyle, {
    id: "3886587682",
    dynamic: [margin]
  }, `.__jsx-style-dynamic-selector{margin:${margin};}`));
};

LinearProgress.propTypes = {
  className: propTypes.string,
  amount: propTypes.number,
  margin: propTypes.string
};
export { LinearProgress };