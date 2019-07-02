import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { Consumer } from './tableContext';
import { TableCellText } from './TableCellText';
const tableCellStyles = ["td.jsx-2476768987{border-bottom:1px solid #e8edf2;padding:0 12px;font-size:14px;}", "div.jsx-2476768987{min-height:45px;}", "tfooter div.jsx-2476768987{min-height:36px;}"];
tableCellStyles.__hash = "2476768987";
const tableCellStylesResponsive = ["@media (max-width:768px){td.jsx-3119603203{display:table-row;width:100%;}}", "@media (max-width:400px){td.jsx-3119603203{display:block;}}"];
tableCellStylesResponsive.__hash = "3119603203";

const TableCellStatic = ({
  children,
  colSpan,
  rowSpan
}) => React.createElement("td", {
  colSpan: colSpan,
  rowSpan: rowSpan,
  className: `jsx-${tableCellStyles.__hash}`
}, React.createElement("div", {
  className: `jsx-${tableCellStyles.__hash}`
}, children), React.createElement(_JSXStyle, {
  id: tableCellStyles.__hash
}, tableCellStyles));

const ContentWithTitle = ({
  title,
  children
}) => React.createElement(Fragment, null, title && React.createElement("td", {
  className: "jsx-2172026091" + " " + "title"
}, title), React.createElement("td", {
  colSpan: title ? '1' : '2',
  className: "jsx-2172026091" + " " + "content"
}, children), React.createElement(_JSXStyle, {
  id: "2172026091"
}, [".title.jsx-2172026091{display:none;}", ".content.jsx-2172026091{display:block;}", "@media (max-width:768px){.title.jsx-2172026091,.content.jsx-2172026091{display:table-cell;}.title.jsx-2172026091{white-space:nowrap;padding:0 16px;font-weight:bold;}tfoot .title.jsx-2172026091{display:none;}.content.jsx-2172026091{display:table-cell;width:100%;padding:0 16px;}}", "@media (max-width:400px){.title.jsx-2172026091{display:block;white-space:normal;min-height:24px;line-height:18px;padding:8px 0 0 0;}.content.jsx-2172026091{display:block;padding:0;min-height:32px;}.content.jsx-2172026091:first-child{padding-top:8px;padding-bottom:8px;}}"]));

const TableCellResponsive = ({
  children,
  colSpan,
  rowSpan,
  title
}) => React.createElement("td", {
  colSpan: colSpan,
  rowSpan: rowSpan,
  className: `jsx-${tableCellStyles.__hash} jsx-${tableCellStylesResponsive.__hash}`
}, React.createElement(ContentWithTitle, {
  title: title
}, children), React.createElement(_JSXStyle, {
  id: tableCellStyles.__hash
}, tableCellStyles), React.createElement(_JSXStyle, {
  id: tableCellStylesResponsive.__hash
}, tableCellStylesResponsive));

export const TableCell = ({
  children,
  noTitle,
  colSpan,
  rowSpan,
  column
}) => React.createElement(Consumer, null, ({
  staticLayout,
  headerLabels
}) => {
  const title = noTitle || staticLayout ? '' : headerLabels[column];
  const TableCellComponent = staticLayout ? TableCellStatic : TableCellResponsive;
  const content = typeof children === 'string' ? React.createElement(TableCellText, {
    label: children
  }) : children;
  return React.createElement(TableCellComponent, {
    column: column,
    colSpan: colSpan,
    rowSpan: rowSpan,
    title: title
  }, React.createElement("div", null, content));
});
TableCell.propTypes = {
  noTitle: propTypes.bool,
  colSpan: propTypes.string,
  rowSpan: propTypes.string,
  column: propTypes.number
};