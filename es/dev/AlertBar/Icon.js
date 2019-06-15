import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Valid, Warning, Error, Info } from '../icons/Status';
import { spacers } from '../theme.js';

var _ref =
/*#__PURE__*/
React.createElement(Error, null);

var _ref2 =
/*#__PURE__*/
React.createElement(Warning, null);

var _ref3 =
/*#__PURE__*/
React.createElement(Valid, null);

var _ref4 =
/*#__PURE__*/
React.createElement(Info, null);

const Icon = ({
  icon,
  success,
  warning,
  critical
}) => {
  if (icon === false) {
    return null;
  }

  let IconComponent;

  if (React.isValidElement(icon)) {
    IconComponent = icon;
  } else if (critical) {
    IconComponent = _ref;
  } else if (warning) {
    IconComponent = _ref2;
  } else if (success) {
    IconComponent = _ref3;
  } else {
    IconComponent = _ref4;
  }

  return React.createElement("div", {
    className: _JSXStyle.dynamic([["2765176098", [spacers.dp16]]])
  }, IconComponent, React.createElement(_JSXStyle, {
    id: "2765176098",
    dynamic: [spacers.dp16]
  }, `div.__jsx-style-dynamic-selector{margin-right:${spacers.dp16};}div.__jsx-style-dynamic-selector svg{width:24px;height:24px;}`));
};

const iconPropType = propTypes.oneOfType([propTypes.bool, propTypes.element]);
Icon.propTypes = {
  icon: iconPropType,
  success: propTypes.bool,
  warning: propTypes.bool,
  critical: propTypes.bool
};
export { Icon, iconPropType };