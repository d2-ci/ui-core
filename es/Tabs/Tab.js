import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { colors, theme } from '../theme.js';

const Tab = ({
  icon,
  onClick,
  selected,
  disabled,
  children
}) => React.createElement("button", {
  onClick: disabled ? undefined : onClick,
  className: _JSXStyle.dynamic([["2685695938", [colors.grey400, colors.grey600, colors.grey600, colors.grey100, colors.grey200, theme.primary700, theme.primary700, theme.primary700, colors.grey500, colors.grey500]]]) + " " + `${cx({
    selected,
    disabled
  })}`
}, icon, React.createElement("span", {
  className: _JSXStyle.dynamic([["2685695938", [colors.grey400, colors.grey600, colors.grey600, colors.grey100, colors.grey200, theme.primary700, theme.primary700, theme.primary700, colors.grey500, colors.grey500]]])
}, children), React.createElement(_JSXStyle, {
  id: "2685695938",
  dynamic: [colors.grey400, colors.grey600, colors.grey600, colors.grey100, colors.grey200, theme.primary700, theme.primary700, theme.primary700, colors.grey500, colors.grey500]
}, [`button.__jsx-style-dynamic-selector{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;vertical-align:bottom;height:100%;padding:19px 16px 14px 16px;background-color:transparent;outline:none;border:none;border-bottom:1px solid ${colors.grey400};color:${colors.grey600};font-size:14px;line-height:14px;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;-webkit-transition-property:color,background-color;transition-property:color,background-color;cursor:pointer;}`, ".tab-bar.fixed button.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", "button.__jsx-style-dynamic-selector::after{content:' ';display:block;position:absolute;bottom:-1px;left:0;height:4px;width:100%;-webkit-transition:background-color 150ms ease-in-out;transition:background-color 150ms ease-in-out;background-color:transparent;}", "span.__jsx-style-dynamic-selector{max-width:320px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-transition:fill 150ms ease-in-out;transition:fill 150ms ease-in-out;}", `button.__jsx-style-dynamic-selector>svg{fill:${colors.grey600};width:14px;height:14px;margin:0 4px 0 0;}`, `button.__jsx-style-dynamic-selector:hover{background-color:${colors.grey100};}`, `button.__jsx-style-dynamic-selector:active{background-color:${colors.grey200};}`, `button.selected.__jsx-style-dynamic-selector{color:${theme.primary700};}`, `button.selected.__jsx-style-dynamic-selector::after{background-color:${theme.primary700};}`, `button.selected.__jsx-style-dynamic-selector>svg{fill:${theme.primary700};}`, `button.disabled.__jsx-style-dynamic-selector{color:${colors.grey500};cursor:not-allowed;}`, "button.disabled.__jsx-style-dynamic-selector:hover,button.selected.__jsx-style-dynamic-selector:hover{background-color:transparent;}", `button.disabled.__jsx-style-dynamic-selector>svg{fill:${colors.grey500};}`]));

Tab.propTypes = {
  icon: PropTypes.element,
  onClick: PropTypes.func,
  addTabRef: PropTypes.func,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
};
export { Tab };