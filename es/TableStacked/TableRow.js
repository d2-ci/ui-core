import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Consumer } from './tableContext';
import { TableCell } from './TableCell';
import { TableCellHead } from './TableCellHead';
import { instanceOfComponent } from '../prop-validators/instanceOfComponent';

const addColNumToChildren = children => {
  let curCol = 0;
  return React.Children.map(children, child => {
    const column = curCol;
    const colSpan = child.props.colSpan ? parseInt(child.props.colSpan, 10) : 1;
    curCol += colSpan;
    return React.cloneElement(child, {
      column
    });
  });
};

const tableRowStyles = ["tr.jsx-4263608095{min-height:45px;display:block;border:1px solid #e8edf2;}", "tr.jsx-4263608095:nth-child(even){background:none;}", "thead tr.jsx-4263608095,tbody tr.jsx-4263608095{min-height:36px;}", "tr.jsx-4263608095+tr.jsx-4263608095{margin-top:32px;}", "tr.jsx-4263608095:nth-child(even) td{background:#fbfcfd;}"];
tableRowStyles.__hash = "4263608095";
export const TableRow = ({
  children
}) => React.createElement("tr", {
  className: `jsx-${tableRowStyles.__hash}`
}, addColNumToChildren(children), React.createElement(_JSXStyle, {
  id: tableRowStyles.__hash
}, tableRowStyles));
const childPropType = propTypes.oneOfType([instanceOfComponent(TableCell), instanceOfComponent(TableCellHead)]);
TableRow.propTypes = {
  children: propTypes.oneOfType([childPropType, propTypes.arrayOf(childPropType)]).isRequired
};