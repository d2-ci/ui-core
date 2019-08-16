import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { TableCell } from './TableCell';
import { TableCellHead } from './TableCellHead';
import { instanceOfComponent } from '../prop-validators/instanceOfComponent';
const tableRowStyles = ["tr.jsx-3962819116{min-height:45px;}", "tr.jsx-3962819116:nth-child(even){background:#fbfcfd;}", "thead tr.jsx-3962819116,tbody tr.jsx-3962819116{min-height:36px;}"];
tableRowStyles.__hash = "3962819116";
export const TableRow = ({
  children
}) => React.createElement("tr", {
  className: `jsx-${tableRowStyles.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableRowStyles.__hash
}, tableRowStyles));
const childPropType = propTypes.oneOfType([instanceOfComponent(TableCell), instanceOfComponent(TableCellHead)]);
TableRow.propTypes = {
  children: propTypes.oneOfType([childPropType, propTypes.arrayOf(childPropType)]).isRequired
};