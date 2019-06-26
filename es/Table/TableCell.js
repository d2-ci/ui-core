import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { useTableContext } from './tableContext';
const tableCellStyles = ["td.jsx-2476768987{border-bottom:1px solid #e8edf2;padding:0 12px;font-size:14px;}", "div.jsx-2476768987{min-height:45px;}", "tfooter div.jsx-2476768987{min-height:36px;}"];
tableCellStyles.__hash = "2476768987";

const TableCellStatic = ({
  children,
  colSpan,
  rowSpan
}) => React.createElement("td", {
  colSpan: colSpan,
  rowSpan: rowSpan,
  className: `jsx-${tableCellStyles.__hash}`
}, React.createElement("div", {
  className: `jsx-${tableCellStyles.__hash}`
}, children), React.createElement(_JSXStyle, {
  id: tableCellStyles.__hash
}, tableCellStyles));

const TableCellResponsive = ({
  children,
  colSpan,
  rowSpan,
  title
}) => React.createElement("td", {
  colSpan: colSpan,
  rowSpan: rowSpan,
  className: `jsx-${tableCellStyles.__hash}` + " " + _JSXStyle.dynamic([["460684140", [title]]])
}, React.createElement("div", {
  className: `jsx-${tableCellStyles.__hash}` + " " + _JSXStyle.dynamic([["460684140", [title]]])
}, children), React.createElement(_JSXStyle, {
  id: tableCellStyles.__hash
}, tableCellStyles), React.createElement(_JSXStyle, {
  id: "460684140",
  dynamic: [title]
}, [`@media (max-width:768px){td.__jsx-style-dynamic-selector{display:table-row;width:100%;}td.__jsx-style-dynamic-selector:before{content:'${title}:';display:table-cell;white-space:nowrap;padding:0 16px;font-weight:bold;}tfoot td.__jsx-style-dynamic-selector:before{display:none;}div.__jsx-style-dynamic-selector{display:table-cell;width:100%;padding:0 16px;}}`, "@media (max-width:400px){td.__jsx-style-dynamic-selector{display:block;}td.__jsx-style-dynamic-selector:first-child{margin-top:0;}td.__jsx-style-dynamic-selector:before{display:block;white-space:normal;min-height:24px;line-height:18px;padding:8px 0 0 0;}div.__jsx-style-dynamic-selector{display:block;padding:0;min-height:32px;}}"]));

export const TableCell = ({
  children,
  title,
  colSpan,
  rowSpan
}) => {
  const {
    staticLayout
  } = useTableContext();
  const TableCell = staticLayout ? TableCellStatic : TableCellResponsive;
  return React.createElement(TableCell, {
    colSpan: colSpan,
    rowSpan: rowSpan,
    title: title
  }, React.createElement("div", null, children));
};
TableCell.propTypes = {
  title: propTypes.string,
  colSpan: propTypes.string,
  rowSpan: propTypes.string
};