import _JSXStyle from "styled-jsx/style";
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme.js';
const Tab = forwardRef(({
  icon,
  onClick,
  selected,
  disabled,
  fixed,
  children
}, ref) => React.createElement("button", {
  onClick: disabled ? undefined : onClick,
  ref: ref,
  className: _JSXStyle.dynamic([["3666495809", [fixed ? 1 : 0]], ["2750581602", [colors.grey400, colors.grey600, colors.grey600, colors.grey100, colors.grey200, theme.primary800, theme.primary800, colors.grey500, colors.grey500]]]) + " " + `${cx({
    selected,
    disabled,
    fixed
  })}`
}, icon, React.createElement("span", {
  className: _JSXStyle.dynamic([["3666495809", [fixed ? 1 : 0]], ["2750581602", [colors.grey400, colors.grey600, colors.grey600, colors.grey100, colors.grey200, theme.primary800, theme.primary800, colors.grey500, colors.grey500]]])
}, children), React.createElement(_JSXStyle, {
  id: "3666495809",
  dynamic: [fixed ? 1 : 0]
}, [`button.__jsx-style-dynamic-selector{-webkit-box-flex:${fixed ? 1 : 0};-webkit-flex-grow:${fixed ? 1 : 0};-ms-flex-positive:${fixed ? 1 : 0};flex-grow:${fixed ? 1 : 0};}`]), React.createElement(_JSXStyle, {
  id: "2750581602",
  dynamic: [colors.grey400, colors.grey600, colors.grey600, colors.grey100, colors.grey200, theme.primary800, theme.primary800, colors.grey500, colors.grey500]
}, [`button.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;vertical-align:bottom;height:100%;padding:19px 16px 14px 16px;background-color:transparent;border:none;outline:none;border-bottom:1px solid ${colors.grey400};color:${colors.grey600};font-size:14px;line-height:14px;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;cursor:pointer;}`, "button.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{max-width:320px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}", `button.__jsx-style-dynamic-selector>svg{fill:${colors.grey600};width:14px;height:14px;margin:0 4px 0 0;}`, `button.__jsx-style-dynamic-selector:hover{background-color:${colors.grey100};}`, `button.__jsx-style-dynamic-selector:active{background-color:${colors.grey200};}`, `button.selected.__jsx-style-dynamic-selector{color:${theme.primary800};}`, `button.selected.__jsx-style-dynamic-selector>svg{fill:${theme.primary800};}`, `button.disabled.__jsx-style-dynamic-selector{color:${colors.grey500};cursor:not-allowed;}`, "button.disabled.__jsx-style-dynamic-selector:hover,button.selected.__jsx-style-dynamic-selector:hover{background-color:transparent;}", `button.disabled.__jsx-style-dynamic-selector>svg{fill:${colors.grey500};}`])));
Tab.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  addTabRef: PropTypes.func,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
};
export { Tab };