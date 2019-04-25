import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles';
import { ChevronRight } from '../icons/Chevron.js';
const subChevron = {
  styles: React.createElement(_JSXStyle, {
    id: "2023721407"
  }, "svg.jsx-2023721407{margin:0 -14px 0 auto;width:18px;height:18px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"),
  className: "jsx-2023721407"
};
const subMenu = {
  styles: React.createElement(_JSXStyle, {
    id: "2069506860"
  }, "div.jsx-2069506860{display:none;position:absolute;top:0;left:100%;white-space:nowrap;}li.jsx-2069506860:hover>div.jsx-2069506860{display:block;}"),
  className: "jsx-2069506860"
};

const SubMenu = ({
  children,
  onClick,
  className
}) => React.createElement("div", {
  className: className
}, children);

const MenuItem = ({
  value,
  label,
  icon,
  children,
  active,
  disabled,
  dense,
  onClick,
  className
}) => {
  const hasMenu = !!children;
  return React.createElement("li", {
    onClick: evt => {
      if (onClick) {
        evt.preventDefault();
        evt.stopPropagation();
        onClick(value);
      }
    },
    className: `jsx-${styles.__hash}` + " " + (cx(className, subMenu.className, {
      disabled,
      dense,
      active
    }) || "")
  }, icon, React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "label"
  }, label), hasMenu && React.createElement(ChevronRight, {
    className: subChevron.className
  }), subChevron.styles, hasMenu && React.createElement(SubMenu, {
    className: subMenu.className
  }, children), subMenu.styles, React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};

MenuItem.defaultProps = {
  active: false,
  disabled: false
};
MenuItem.propTypes = {
  label: propTypes.oneOf([propTypes.string, propTypes.element]).isRequired,
  value: propTypes.any.isRequired,
  dense: propTypes.boolean,
  className: propTypes.string,
  icon: propTypes.element,
  children: propTypes.element,
  active: propTypes.bool,
  disabled: propTypes.bool,
  onClick: propTypes.func
};
export { MenuItem };