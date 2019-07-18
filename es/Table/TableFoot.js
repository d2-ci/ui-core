import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Consumer } from './tableContext';
import { TableRow } from './TableRow';
import { instanceOfComponent } from '../prop-validators/instanceOfComponent';
const tableFootStylesResponsive = ["@media (max-width:768px){tfoot.jsx-4197728934{display:block;margin-top:32px;}}"];
tableFootStylesResponsive.__hash = "4197728934";

const TFootStatic = ({
  children
}) => React.createElement("tfoot", null, children);

const TFootResponsive = ({
  children
}) => React.createElement("tfoot", {
  className: `jsx-${tableFootStylesResponsive.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableFootStylesResponsive.__hash
}, tableFootStylesResponsive));

export const TableFoot = ({
  children
}) => React.createElement(Consumer, null, ({
  staticLayout
}) => {
  const TFoot = staticLayout ? TFootStatic : TFootResponsive;
  return React.createElement(TFoot, null, children);
});
const childPropType = instanceOfComponent(TableRow);
TableFoot.propTypes = {
  children: propTypes.oneOfType([childPropType, propTypes.arrayOf(childPropType)]).isRequired
};