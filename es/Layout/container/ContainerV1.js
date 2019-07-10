import _JSXStyle from "styled-jsx/style";
import propTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { LayoutContent } from '../LayoutContent';
import { containerStyles, containerV1Styles } from './styles';
import { instanceOfComponent } from '../../prop-validators/instanceOfComponent';
/**
 * Layout Version 1
 * ================
 *
 * |---------|
 * | Content |
 * |---------|
 */

const ContainerV1 = ({
  children
}) => React.createElement("div", {
  className: `jsx-${containerStyles.__hash} jsx-${containerV1Styles.__hash}` + " " + (cx('container', 'container-v1') || "")
}, children, React.createElement(_JSXStyle, {
  id: containerStyles.__hash
}, containerStyles), React.createElement(_JSXStyle, {
  id: containerV1Styles.__hash
}, containerV1Styles));

ContainerV1.propTypes = {
  children: instanceOfComponent(LayoutContent)
};
export { ContainerV1 };