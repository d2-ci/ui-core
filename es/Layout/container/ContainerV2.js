import _JSXStyle from "styled-jsx/style";
import propTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { LayoutAreaContent } from '../LayoutAreaContent';
import { LayoutAreaNavigation } from '../LayoutAreaNavigation';
import { containerStyles, containerV2Styles } from './styles';
import { instanceOfComponent } from '../../prop-validators/instanceOfComponent';
/**
 * Layout Version 2
 * ================
 *
 * |-----------|
 * | Navigaton |
 * |-----------|
 * |  Content  |
 * |-----------|
 */

const ContainerV2 = ({
  children
}) => React.createElement("div", {
  className: `jsx-${containerStyles.__hash} jsx-${containerV2Styles.__hash}` + " " + (cx('container', 'container-v2') || "")
}, children, React.createElement(_JSXStyle, {
  id: containerStyles.__hash
}, containerStyles), React.createElement(_JSXStyle, {
  id: containerV2Styles.__hash
}, containerV2Styles));

const containerV2Areas = propTypes.oneOfType([instanceOfComponent(LayoutAreaNavigation), instanceOfComponent(LayoutAreaContent)]);
ContainerV2.propTypes = {
  children: propTypes.arrayOf(containerV2Areas)
};
export { ContainerV2 };