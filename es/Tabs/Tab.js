import _JSXStyle from "styled-jsx/style";
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { colors } from '../theme.js';

const noop = () => {};

const Tab = forwardRef(({
  icon,
  onClick,
  selected,
  disabled,
  stacked,
  children
}, ref) => React.createElement("button", {
  onClick: disabled ? noop : onClick,
  ref: ref,
  className: _JSXStyle.dynamic([["2749516310", [colors.grey400, colors.grey700, colors.grey700, colors.grey100, colors.grey200, colors.grey900, colors.grey900, colors.grey500, colors.grey500]]]) + " " + `${cx('d2ui-align-icon', {
    selected,
    disabled,
    stacked
  })}`
}, icon && icon, children, React.createElement(_JSXStyle, {
  id: "2749516310",
  dynamic: [colors.grey400, colors.grey700, colors.grey700, colors.grey100, colors.grey200, colors.grey900, colors.grey900, colors.grey500, colors.grey500]
}, [`button.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;vertical-align:bottom;height:100%;max-width:320px;padding:19px 16px 14px 16px;background-color:transparent;border:none;outline:none;border-bottom:1px solid ${colors.grey400};color:${colors.grey700};font-size:14px;line-height:14px;-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;cursor:pointer;}`, `button.__jsx-style-dynamic-selector>svg{fill:${colors.grey700};width:14px;height:14px;margin:0 4px 0 0;}`, `button.__jsx-style-dynamic-selector:hover{background-color:${colors.grey100};}`, `button.__jsx-style-dynamic-selector:active{background-color:${colors.grey200};}`, `button.selected.__jsx-style-dynamic-selector{color:${colors.grey900};}`, `button.selected.__jsx-style-dynamic-selector>svg{fill:${colors.grey900};}`, `button.disabled.__jsx-style-dynamic-selector{color:${colors.grey500};cursor:not-allowed;}`, `button.disabled.__jsx-style-dynamic-selector>svg{fill:${colors.grey500};}`])));
Tab.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  addTabRef: PropTypes.func,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  stacked: PropTypes.bool,
  children: PropTypes.node
};
Tab.defaultProps = {
  active: false,
  disabled: false,
  stacked: false,
  onClick: () => {}
};
export { Tab };