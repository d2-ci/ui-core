import _JSXStyle from "styled-jsx/style";
import propTypes from 'prop-types';
import React from 'react';
import { theme, spacers } from '../theme.js';
/**
 * @param {Object} props
 * @param {string} props.className
 * @returns {ReactNode}
 */

export function Valid({
  className
}) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: _JSXStyle.dynamic([["3622499308", [theme.valid, spacers.dp4]]]) + " " + (className || "")
  }, React.createElement("path", {
    d: "M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z",
    className: _JSXStyle.dynamic([["3622499308", [theme.valid, spacers.dp4]]])
  }), React.createElement(_JSXStyle, {
    id: "3622499308",
    dynamic: [theme.valid, spacers.dp4]
  }, `svg.__jsx-style-dynamic-selector{fill:${theme.valid};width:24px;height:24px;margin-right:${spacers.dp4};}`));
}
Valid.propTypes = {
  className: propTypes.string
  /**
   * @param {Object} props
   * @param {string} props.className
   * @returns {ReactNode}
   */

};
export function Warning({
  className
}) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: _JSXStyle.dynamic([["3829333422", [theme.warning, spacers.dp4]]]) + " " + (className || "")
  }, React.createElement("path", {
    d: "M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z",
    className: _JSXStyle.dynamic([["3829333422", [theme.warning, spacers.dp4]]])
  }), React.createElement(_JSXStyle, {
    id: "3829333422",
    dynamic: [theme.warning, spacers.dp4]
  }, `svg.__jsx-style-dynamic-selector{fill:${theme.warning};width:24px;height:24px;margin-right:${spacers.dp4};}`));
}
Warning.propTypes = {
  className: propTypes.string
  /**
   * @param {Object} props
   * @param {string} props.className
   * @returns {ReactNode}
   */

};
export function Error({
  className
}) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: _JSXStyle.dynamic([["2400738350", [theme.error, spacers.dp4]]]) + " " + (className || "")
  }, React.createElement("path", {
    d: "M24 4C12.96 4 4 12.95 4 24s8.96 20 20 20 20-8.95 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z",
    className: _JSXStyle.dynamic([["2400738350", [theme.error, spacers.dp4]]])
  }), React.createElement(_JSXStyle, {
    id: "2400738350",
    dynamic: [theme.error, spacers.dp4]
  }, `svg.__jsx-style-dynamic-selector{fill:${theme.error};width:24px;height:24px;margin-right:${spacers.dp4};}`));
}
/**
 * @param {Object} props
 * @param {string} props.className
 * @returns {ReactNode}
 */

export function Info({
  className
}) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: _JSXStyle.dynamic([["2422113446", [theme.info]]]) + " " + (className || "")
  }, React.createElement("path", {
    d: "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z",
    className: _JSXStyle.dynamic([["2422113446", [theme.info]]])
  }), React.createElement(_JSXStyle, {
    id: "2422113446",
    dynamic: [theme.info]
  }, `svg.__jsx-style-dynamic-selector{fill:${theme.info};width:24px;height:24px;margin-right:4px;}`));
}
Error.propTypes = {
  className: propTypes.string
  /**
   * @param {Object} props
   * @param {string} props.className
   * @returns {ReactNode}
   */

};
export function Loading({
  className
}) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "22 22 44 44",
    className: _JSXStyle.dynamic([["3901507574", [theme.primary600, theme.primary600, spacers.dp4]]]) + " " + (className || "")
  }, React.createElement("circle", {
    cx: "44",
    cy: "44",
    r: "20.2",
    fill: "none",
    strokeWidth: "3.6",
    className: _JSXStyle.dynamic([["3901507574", [theme.primary600, theme.primary600, spacers.dp4]]]) + " " + "circle"
  }), React.createElement(_JSXStyle, {
    id: "3901507574",
    dynamic: [theme.primary600, theme.primary600, spacers.dp4]
  }, `svg.__jsx-style-dynamic-selector{fill:${theme.primary600};color:${theme.primary600};width:24px;height:24px;margin-right:${spacers.dp4};-webkit-animation:anim-rotate-__jsx-style-dynamic-selector 1.4s linear infinite;animation:anim-rotate-__jsx-style-dynamic-selector 1.4s linear infinite;}.circle.__jsx-style-dynamic-selector{stroke:currentColor;stroke-dasharray:80px,200px;stroke-dashoffset:0;-webkit-animation:anim-dash-__jsx-style-dynamic-selector 1.4s ease-in-out infinite;animation:anim-dash-__jsx-style-dynamic-selector 1.4s ease-in-out infinite;}@-webkit-keyframes anim-rotate-__jsx-style-dynamic-selector{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes anim-rotate-__jsx-style-dynamic-selector{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes anim-dash-__jsx-style-dynamic-selector{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0;}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px;}100%{stroke-dasharray:100px,200px;stroke-dashoffset:-120px;}}@keyframes anim-dash-__jsx-style-dynamic-selector{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0;}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px;}100%{stroke-dasharray:100px,200px;stroke-dashoffset:-120px;}}`));
}
Loading.propTypes = {
  className: propTypes.string
  /**
   * @param {Object} props
   * @param {string} props.status
   * @param {string} props.className
   * @returns {ReactNode}
   */

};
export const StatusIconNoDefault = ({
  error,
  warning,
  valid,
  loading,
  className
}) => valid ? React.createElement(Valid, {
  className: className
}) : warning ? React.createElement(Warning, {
  className: className
}) : error ? React.createElement(Error, {
  className: className
}) : loading ? React.createElement(Loading, {
  className: className
}) : null;
StatusIconNoDefault.propTypes = {
  valid: propTypes.bool,
  error: propTypes.bool,
  warning: propTypes.bool,
  loading: propTypes.bool,
  className: propTypes.string
};