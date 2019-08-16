import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { TableCellText } from './TableCellText';
export const TableCellHead = ({
  children,
  colSpan,
  rowSpan,
  label
}) => React.createElement("th", {
  colSpan: colSpan,
  rowSpan: rowSpan,
  className: "jsx-1940747275"
}, React.createElement("div", {
  className: "jsx-1940747275"
}, React.createElement(TableCellText, null, children)), React.createElement(_JSXStyle, {
  id: "1940747275"
}, ["th.jsx-1940747275{border-bottom:1px solid #e8edf2;padding:0 12px;}", "div.jsx-1940747275{min-height:36px;}"]));
TableCellHead.propTypes = {
  colSpan: propTypes.string,
  rowSpan: propTypes.string,
  label: propTypes.string
};