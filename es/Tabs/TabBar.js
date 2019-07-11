import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { colors } from '../theme';
import cx from 'classnames';

const TabBar = ({
  fixed,
  children
}) => React.createElement("div", {
  className: _JSXStyle.dynamic([["681661024", [colors.grey400]]]) + " " + (cx('tab-bar', {
    fixed
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: "681661024",
  dynamic: [colors.grey400]
}, [`div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;overflow:hidden;box-shadow:inset 0 -1px 0 0 ${colors.grey400};-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;}`]));

TabBar.propTypes = {
  fixed: propTypes.bool
};
export { TabBar };