import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Consumer } from './tableContext';
import { TableRow } from './TableRow';
import { instanceOfComponent } from '../prop-validators/instanceOfComponent';
const tableBodyStylesResponsive = ["tbody.jsx-2389753173{display:block;}"];
tableBodyStylesResponsive.__hash = "2389753173";
export const TableBody = ({
  children
}) => React.createElement("tbody", {
  className: `jsx-${tableBodyStylesResponsive.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableBodyStylesResponsive.__hash
}, tableBodyStylesResponsive));
const childPropType = instanceOfComponent(TableRow);
TableBody.propTypes = {
  children: propTypes.oneOfType([childPropType, propTypes.arrayOf(childPropType)]).isRequired
};