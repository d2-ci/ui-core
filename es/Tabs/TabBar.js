import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { colors } from '../theme';
import cx from 'classnames';

const TabBar = ({
  fixed,
  children
}) => React.createElement("div", {
  className: _JSXStyle.dynamic([["3887201227", [colors.grey400]]]) + " " + (cx('tab-bar', {
    fixed
  }) || "")
}, children, React.createElement(_JSXStyle, {
  id: "3887201227",
  dynamic: [colors.grey400]
}, [`div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;overflow:hidden;box-shadow:inset 0 -1px 0 0 ${colors.grey400};}`, "@-moz-document url-prefix(){div.__jsx-style-dynamic-selector{width:-moz-max-content;}}"]));

TabBar.propTypes = {
  fixed: propTypes.bool
};
export { TabBar };