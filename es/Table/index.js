import _JSXStyle from "styled-jsx/style";
import { TableFoot } from './TableFoot';
import React from 'react';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableCellHead } from './TableCellHead';
import { TableCellText } from './TableCellText';

const Table = ({
  children
}) => React.createElement("div", {
  className: "jsx-3459583921"
}, React.createElement("table", {
  className: "jsx-3459583921"
}, children), React.createElement(_JSXStyle, {
  id: "3459583921"
}, ["div.jsx-3459583921{overflow-x:auto;}", "table.jsx-3459583921{border:1px solid #e8edf2;background-color:#ffffff;min-width:100%;text-align:left;border-collapse:collapse;vertical-align:top;}", "@media (max-width:768px){table.jsx-3459583921{display:block;border:0;}}"]));

Table.propTypes = {};
export { Table, TableRow, TableHead, TableBody, TableFoot, TableCell, TableCellHead, TableCellText };