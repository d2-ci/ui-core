import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { Consumer } from './tableContext';
import { TableCellText } from './TableCellText';
const tableCellStyles = ["td.jsx-2476768987{border-bottom:1px solid #e8edf2;padding:0 12px;font-size:14px;}", "div.jsx-2476768987{min-height:45px;}", "tfooter div.jsx-2476768987{min-height:36px;}"];
tableCellStyles.__hash = "2476768987";
const tableCellStylesResponsive = ["@media (max-width:768px){td.jsx-3995202917{width:100%;display:block;}}"];
tableCellStylesResponsive.__hash = "3995202917";

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
}) => React.createElement(Fragment, null, title && React.createElement("span", {
  className: "jsx-1484001192" + " " + "title"
}, title), React.createElement("span", {
  className: "jsx-1484001192" + " " + "content"
}, children), React.createElement(_JSXStyle, {
  id: "1484001192"
}, [".title.jsx-1484001192{display:none;}", ".content.jsx-1484001192{display:block;}", "@media (max-width:768px){.title.jsx-1484001192{display:block;white-space:normal;min-height:24px;line-height:18px;padding:8px 0 0 0;font-weight:bold;white-space:nowrap;}.content.jsx-1484001192{display:block;padding:0;min-height:32px;}.content.jsx-1484001192:first-child{padding-top:8px;padding-bottom:8px;}}"]));

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
}, tableCellStylesResponsive)); // Leveraging on being able to return before creating the text component
// If not extracted, TableCellText will be created on every render
// and throw a warning as children is not a string


const getContent = children => {
  if (typeof children !== 'string') return children;
  return React.createElement(TableCellText, {
    label: children
  });
};

export const TableCell = ({
  children,
  colSpan,
  rowSpan,
  column
}) => React.createElement(Consumer, null, ({
  staticLayout,
  headerLabels
}) => {
  const title = staticLayout ? '' : headerLabels[column];
  const TableCellComponent = staticLayout ? TableCellStatic : TableCellResponsive;
  const content = getContent(children);
  return React.createElement(TableCellComponent, {
    column: column,
    colSpan: colSpan,
    rowSpan: rowSpan,
    title: title
  }, content);
});
TableCell.propTypes = {
  colSpan: propTypes.string,
  rowSpan: propTypes.string,
  column: propTypes.number
};