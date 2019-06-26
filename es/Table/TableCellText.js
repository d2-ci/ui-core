import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { useTableContext } from './tableContext';
const tableCellTextStyles = ["span.jsx-3355682525{display:inline-block;padding:9px 0;font-size:14px;line-height:18px;}", "tbody span.jsx-3355682525{padding:13px 0;}"];
tableCellTextStyles.__hash = "3355682525";
const tableCellTextStylesResponsive = ["@media (max-width:400px){tbody span.jsx-665761134{padding:3px 0;}}"];
tableCellTextStylesResponsive.__hash = "665761134";

const TableCellTextStatic = ({
  label
}) => React.createElement("span", {
  className: `jsx-${tableCellTextStyles.__hash}`
}, label, React.createElement(_JSXStyle, {
  id: tableCellTextStyles.__hash
}, tableCellTextStyles));

const TableCellTextResponsive = ({
  label
}) => React.createElement("span", {
  className: `jsx-${tableCellTextStyles.__hash} jsx-${tableCellTextStylesResponsive.__hash}`
}, label, React.createElement(_JSXStyle, {
  id: tableCellTextStyles.__hash
}, tableCellTextStyles), React.createElement(_JSXStyle, {
  id: tableCellTextStylesResponsive.__hash
}, tableCellTextStylesResponsive));

export const TableCellText = ({
  label
}) => {
  const {
    staticLayout
  } = useTableContext();
  const TableCellTextComponent = staticLayout ? TableCellTextStatic : TableCellTextResponsive;
  return React.createElement(TableCellTextComponent, {
    label: label
  });
};
TableCellText.propTypes = {
  label: propTypes.string
};