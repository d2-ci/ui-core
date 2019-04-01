import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../theme.js';
const iconStyleValid = new String(`svg.jsx-1819142562{fill:${colors.blue600};width:24px;height:24px;margin-right:8px;}`);
iconStyleValid.__hash = "1819142562";
const iconStyleWarning = new String(`svg.jsx-1902194108{fill:${colors.yellow500};width:24px;height:24px;margin-right:8px;}`);
iconStyleWarning.__hash = "1902194108";
const iconStyleError = new String(`svg.jsx-6165027{fill:${colors.red500};width:24px;height:24px;margin-right:8px;}`);
/**
 * @param {Object} props
 * @param {string} props.className
 * @returns {ReactNode}
 */

iconStyleError.__hash = "6165027";
export function Valid({
  className
}) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: `jsx-${iconStyleValid.__hash}` + " " + (className || "")
  }, React.createElement("path", {
    d: "M0 0h48v48H0z",
    fill: "none",
    className: `jsx-${iconStyleValid.__hash}`
  }), React.createElement("path", {
    d: "M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z",
    className: `jsx-${iconStyleValid.__hash}`
  }), React.createElement(_JSXStyle, {
    id: iconStyleValid.__hash
  }, iconStyleValid));
}
Valid.propTypes = {
  className: PropTypes.string.isRequired
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
    className: `jsx-${iconStyleWarning.__hash}` + " " + (className || "")
  }, React.createElement("path", {
    d: "M0 0h48v48H0z",
    fill: "none",
    className: `jsx-${iconStyleWarning.__hash}`
  }), React.createElement("path", {
    d: "M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z",
    className: `jsx-${iconStyleWarning.__hash}`
  }), React.createElement(_JSXStyle, {
    id: iconStyleWarning.__hash
  }, iconStyleWarning));
}
Warning.propTypes = {
  className: PropTypes.string.isRequired
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
    className: `jsx-${iconStyleError.__hash}` + " " + (className || "")
  }, React.createElement("path", {
    d: "M0 0h48v48H0z",
    fill: "none",
    className: `jsx-${iconStyleError.__hash}`
  }), React.createElement("path", {
    d: "M24 4C12.96 4 4 12.95 4 24s8.96 20 20 20 20-8.95 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z",
    className: `jsx-${iconStyleError.__hash}`
  }), React.createElement(_JSXStyle, {
    id: iconStyleError.__hash
  }, iconStyleError));
}
Error.propTypes = {
  className: PropTypes.string.isRequired
};