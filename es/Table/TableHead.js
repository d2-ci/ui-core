import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Consumer } from './tableContext';
import { TableRowHead } from './TableRowHead';
import { instanceOfComponent } from '../prop-validators/instanceOfComponent';
const tableHeadStylesResponsive = ["@media (max-width:768px){thead.jsx-3333755757{display:none;}}"];
tableHeadStylesResponsive.__hash = "3333755757";

const THeadStatic = ({
  children
}) => React.createElement("thead", null, children);

const THeadResponsive = ({
  children
}) => React.createElement("thead", {
  className: `jsx-${tableHeadStylesResponsive.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableHeadStylesResponsive.__hash
}, tableHeadStylesResponsive));

export const TableHead = ({
  children
}) => React.createElement(Consumer, null, ({
  staticLayout
}) => {
  const THead = staticLayout ? THeadStatic : THeadResponsive;
  return React.createElement(THead, null, children);
});
const childPropType = instanceOfComponent(TableRowHead);
TableHead.propTypes = {
  children: propTypes.oneOfType([childPropType, propTypes.arrayOf(childPropType)]).isRequired
};