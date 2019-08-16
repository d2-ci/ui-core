import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Consumer } from './tableContext';
const tableCellTextStyles = ["span.jsx-4149436548{display:inline-block;padding:9px 0;font-size:14px;line-height:18px;}", "tbody span.jsx-4149436548{padding:3px 0;}"];
tableCellTextStyles.__hash = "4149436548";
export const TableCellText = ({
  children
}) => React.createElement("span", {
  className: `jsx-${tableCellTextStyles.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableCellTextStyles.__hash
}, tableCellTextStyles));
TableCellText.propTypes = {
  children: propTypes.node
};