import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Consumer } from './tableContext';
const tableCellTextStyles = ["span.jsx-3355682525{display:inline-block;padding:9px 0;font-size:14px;line-height:18px;}", "tbody span.jsx-3355682525{padding:13px 0;}"];
tableCellTextStyles.__hash = "3355682525";
const tableCellTextStylesResponsive = ["@media (max-width:768px){tbody span.jsx-1412524969{padding:3px 0;}}"];
tableCellTextStylesResponsive.__hash = "1412524969";

const TableCellTextStatic = ({
  children
}) => React.createElement("span", {
  className: `jsx-${tableCellTextStyles.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableCellTextStyles.__hash
}, tableCellTextStyles));

const TableCellTextResponsive = ({
  children
}) => React.createElement("span", {
  className: `jsx-${tableCellTextStyles.__hash} jsx-${tableCellTextStylesResponsive.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableCellTextStyles.__hash
}, tableCellTextStyles), React.createElement(_JSXStyle, {
  id: tableCellTextStylesResponsive.__hash
}, tableCellTextStylesResponsive));

export const TableCellText = ({
  children
}) => React.createElement(Consumer, null, ({
  staticLayout
}) => {
  const TableCellTextComponent = staticLayout ? TableCellTextStatic : TableCellTextResponsive;
  return React.createElement(TableCellTextComponent, {
    children: children
  });
});
TableCellText.propTypes = {
  children: propTypes.element
};