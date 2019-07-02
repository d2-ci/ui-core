import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Provider } from './tableContext';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableCellHead } from './TableCellHead';
import { TableCellText } from './TableCellText';
import { Table as TableComponent } from './Table';
import { TableFoot } from './TableFoot';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';
import { TableRowHead } from './TableRowHead';
import { extractHeaderLabels } from './extractHeaderLabels';

const Table = ({
  children,
  staticLayout
}) => {
  const headerLabels = staticLayout ? null : extractHeaderLabels(children);
  return React.createElement("div", {
    className: "jsx-170237612"
  }, React.createElement(Provider, {
    value: {
      staticLayout,
      headerLabels
    }
  }, React.createElement(TableComponent, null, children)), React.createElement(_JSXStyle, {
    id: "170237612"
  }, ["div.jsx-170237612{overflow-x:auto;}"]));
};

Table.propTypes = {
  staticLayout: propTypes.bool
};
export { Table, TableRow, TableRowHead, TableHead, TableBody, TableFoot, TableCell, TableCellHead, TableCellText };