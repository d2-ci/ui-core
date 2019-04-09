import _JSXStyle from "styled-jsx/style";
import React from 'react';
import PropTypes from 'prop-types';
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
    id: "2242740484"
  }, "div.jsx-2242740484{display:none;position:absolute;top:0;left:100%;white-space:nowrap;}.item.jsx-2242740484:hover>div.jsx-2242740484{display:block;}"),
  className: "jsx-2242740484"
};

function SubMenu({
  size,
  children,
  onClick,
  className
}) {
  return React.createElement("div", {
    className: className
  }, children);
}

export default function MenuItem({
  label,
  icon,
  children,
  active,
  disabled,
  size,
  onClick,
  className
}) {
  const hasMenu = !!children;
  return React.createElement("li", {
    onClick: evt => {
      if (onClick) {
        evt.preventDefault();
        evt.stopPropagation();
        onClick();
      }
    },
    className: `jsx-${styles.__hash}` + " " + (cx('item', className, subMenu.className, {
      disabled,
      active
    }) || "")
  }, icon, React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "label"
  }, label), hasMenu && React.createElement(ChevronRight, {
    className: subChevron.className
  }), subChevron.styles, hasMenu && React.createElement(SubMenu, {
    size: size,
    onClick: onClick,
    className: subMenu.className
  }, children), subMenu.styles, React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
}
MenuItem.defaultProps = {
  size: 'default',
  active: false,
  disabled: false
};
MenuItem.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOf([PropTypes.string, PropTypes.element]).isRequired,
  icon: PropTypes.element,
  children: PropTypes.element,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  onClick: PropTypes.func
};