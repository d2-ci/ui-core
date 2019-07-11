import _JSXStyle from "styled-jsx/style";
import React from 'react';
import cx from 'classnames';
import { instanceOfComponent } from '../prop-validators/instanceOfComponent';
import { childrenContainsSidebar, childrenContainsTopBar } from './helper';
import styles from './container.styles';

const determineLayoutClassName = children => {
  const withSidebar = childrenContainsSidebar(children);
  const withTopBar = childrenContainsTopBar(children);
  if (withSidebar && withTopBar) return 'with-topbar-sidebar';
  if (withSidebar) return 'with-sidebar';
  if (withTopBar) return 'with-topbar';
  return 'content-only';
};

const LayoutContainer = ({
  children
}) => {
  const layoutClassName = determineLayoutClassName(children);
  return React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + (cx('container', layoutClassName) || "")
  }, children, React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};

export { LayoutContainer };