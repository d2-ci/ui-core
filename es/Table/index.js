import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Provider } from './tableContext';
import { Table as TableComponent } from './Table';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableFoot } from './TableFoot';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableCellHead } from './TableCellHead';
import { TableCellText } from './TableCellText';

const Table = ({
  children,
  staticLayout
}) => React.createElement("div", {
  className: "jsx-1054902827"
}, React.createElement(Provider, {
  value: {
    staticLayout
  }
}, React.createElement(TableComponent, null, children)), React.createElement(_JSXStyle, {
  id: "1054902827"
}, ["div.jsx-1054902827{overflow-x:auto;}"]));

Table.propTypes = {
  staticLayout: propTypes.bool
};
export { Table, TableRow, TableHead, TableBody, TableFoot, TableCell, TableCellHead, TableCellText };