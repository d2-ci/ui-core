import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
const tableCellTextStyles = ["span.jsx-3355682525{display:inline-block;padding:9px 0;font-size:14px;line-height:18px;}", "tbody span.jsx-3355682525{padding:13px 0;}"];
tableCellTextStyles.__hash = "3355682525";
export const TableCellText = ({
  children
}) => React.createElement("span", {
  className: `jsx-${tableCellTextStyles.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableCellTextStyles.__hash
}, tableCellTextStyles));
TableCellText.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired
};