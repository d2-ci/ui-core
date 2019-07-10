import _JSXStyle from "styled-jsx/style";
import propTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { LayoutContent } from '../LayoutContent';
import { LayoutSidebar } from '../LayoutSidebar';
import { containerStyles, containerV3Styles } from './styles';
import { instanceOfComponent } from '../../prop-validators/instanceOfComponent';
/**
 *   Layout Version 3
 * =====================
 *
 * |-------------------|
 * | Sidebar | Content |
 * |-------------------|
 */

const ContainerV3 = ({
  children
}) => React.createElement("div", {
  className: `jsx-${containerStyles.__hash} jsx-${containerV3Styles.__hash}` + " " + (cx('container', 'container-v3') || "")
}, children, React.createElement(_JSXStyle, {
  id: containerStyles.__hash
}, containerStyles), React.createElement(_JSXStyle, {
  id: containerV3Styles.__hash
}, containerV3Styles));

const containerV3s = propTypes.oneOfType([instanceOfComponent(LayoutSidebar), instanceOfComponent(LayoutContent)]);
ContainerV3.propTypes = {
  children: propTypes.arrayOf(containerV3s)
};
export { ContainerV3 };