import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { LayoutAreaContent } from '../LayoutAreaContent';
import { LayoutAreaNavigation } from '../LayoutAreaNavigation';
import { LayoutAreaSidebar } from '../LayoutAreaSidebar';
import { containerStyles, containerV4Styles } from './styles';
import { instanceOfComponent } from '../../prop-validators/instanceOfComponent';
/**
 *   Layout Version 4
 * =====================
 *
 * |-------------------|
 * |     Navigaton     |
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

const containerV4Areas = propTypes.oneOfType([instanceOfComponent(LayoutAreaNavigation), instanceOfComponent(LayoutAreaSidebar), instanceOfComponent(LayoutAreaContent)]);
ContainerV4.propTypes = {
  children: propTypes.arrayOf(containerV4Areas)
};
export { ContainerV4 };