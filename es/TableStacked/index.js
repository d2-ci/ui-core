import React from 'react';
import propTypes from 'prop-types';
import { Provider } from './tableContext';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableCellHead } from './TableCellHead';
import { Table } from './Table';
import { TableFoot } from './TableFoot';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';
import { TableRowHead } from './TableRowHead';
import { extractHeaderLabels } from './extractHeaderLabels';

const TableStacked = ({
  children
}) => {
  const headerLabels = extractHeaderLabels(children);
  return React.createElement(Provider, {
    value: {
      headerLabels
    }
  }, React.createElement(Table, null, children));
};

export { TableStacked, TableRow, TableRowHead, TableHead, TableBody, TableFoot, TableCell, TableCellHead };