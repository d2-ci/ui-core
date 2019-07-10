import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { LayoutContent } from '../LayoutContent';
import { LayoutTopBar } from '../LayoutTopBar';
import { LayoutSidebar } from '../LayoutSidebar';
import { containerStyles, containerV4Styles } from './styles';
import { instanceOfComponent } from '../../prop-validators/instanceOfComponent';
/**
 *   Layout Version 4
 * =====================
 *
 * |-------------------|
 * |      TopBar       |
 * |-------------------|
 * | Sidebar | Content |
 * |-------------------|
 */

const ContainerV4 = ({
  children
}) => React.createElement("div", {
  className: `jsx-${containerStyles.__hash} jsx-${containerV4Styles.__hash}` + " " + (cx('container', 'container-v4') || "")
}, children, React.createElement(_JSXStyle, {
  id: containerStyles.__hash
}, containerStyles), React.createElement(_JSXStyle, {
  id: containerV4Styles.__hash
}, containerV4Styles));

const containerV4s = propTypes.oneOfType([instanceOfComponent(LayoutTopBar), instanceOfComponent(LayoutSidebar), instanceOfComponent(LayoutContent)]);
ContainerV4.propTypes = {
  children: propTypes.arrayOf(containerV4s)
};
export { ContainerV4 };