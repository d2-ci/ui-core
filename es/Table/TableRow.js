import _JSXStyle from "styled-jsx/style";
import React from 'react';
import { useTableContext } from './tableContext';
const tableRowStyles = ["tr.jsx-3962819116{min-height:45px;}", "tr.jsx-3962819116:nth-child(even){background:#fbfcfd;}", "thead tr.jsx-3962819116,tbody tr.jsx-3962819116{min-height:36px;}"];
tableRowStyles.__hash = "3962819116";
const tableRowStylesResponsive = ["@media (max-width:768px){tr.jsx-1489192940{display:table;width:100%;border:1px solid #e8edf2;}tr.jsx-1489192940+tr.jsx-1489192940{margin-top:16px;}}", "@media (max-width:400px){tr.jsx-1489192940{display:block;}tr.jsx-1489192940:nth-child(even){background:none;}tr.jsx-1489192940+tr.jsx-1489192940{margin-top:32px;}tr.jsx-1489192940:nth-child(even) td{background:#fbfcfd;}}"];
tableRowStylesResponsive.__hash = "1489192940";

const TableRowStatic = ({
  children
}) => React.createElement("tr", {
  className: `jsx-${tableRowStyles.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableRowStyles.__hash
}, tableRowStyles));

const TableRowResponsive = ({
  children
}) => React.createElement("tr", {
  className: `jsx-${tableRowStyles.__hash} jsx-${tableRowStylesResponsive.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableRowStyles.__hash
}, tableRowStyles), React.createElement(_JSXStyle, {
  id: tableRowStylesResponsive.__hash
}, tableRowStylesResponsive));

export const TableRow = ({
  children
}) => {
  const {
    staticLayout
  } = useTableContext();
  const TableRowComponent = staticLayout ? TableRowStatic : TableRowResponsive;
  return React.createElement(TableRowComponent, {
    className: "jsx-2085888330"
  }, children, React.createElement(_JSXStyle, {
    id: "2085888330"
  }, []));
};