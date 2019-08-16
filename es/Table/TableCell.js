import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { TableCellText } from './TableCellText';
const tableCellStyles = ["td.jsx-2476768987{border-bottom:1px solid #e8edf2;padding:0 12px;font-size:14px;}", "div.jsx-2476768987{min-height:45px;}", "tfooter div.jsx-2476768987{min-height:36px;}"];
tableCellStyles.__hash = "2476768987";
export const TableCell = ({
  children,
  colSpan,
  rowSpan
}) => React.createElement("td", {
  colSpan: colSpan,
  rowSpan: rowSpan,
  className: `jsx-${tableCellStyles.__hash}`
}, React.createElement("div", {
  className: `jsx-${tableCellStyles.__hash}`
}, React.createElement(TableCellText, null, children)), React.createElement(_JSXStyle, {
  id: tableCellStyles.__hash
}, tableCellStyles));
TableCell.propTypes = {
  colSpan: propTypes.string,
  rowSpan: propTypes.string,
  children: propTypes.node
};