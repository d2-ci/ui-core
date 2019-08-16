import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { Consumer } from './tableContext';
import { TableCellText } from './TableCellText';
const tableCellStyles = ["td.jsx-3251990083{border-bottom:1px solid #e8edf2;padding:0 12px;font-size:14px;width:100%;display:block;}"];
tableCellStyles.__hash = "3251990083";

const ContentWithTitle = ({
  title,
  children
}) => React.createElement(Fragment, null, title && React.createElement("span", {
  className: "jsx-948695692" + " " + "title"
}, title), React.createElement("span", {
  className: "jsx-948695692" + " " + "content"
}, children), React.createElement(_JSXStyle, {
  id: "948695692"
}, [".title.jsx-948695692{display:block;white-space:normal;min-height:24px;line-height:18px;padding:8px 0 0 0;font-weight:bold;white-space:nowrap;}", ".content.jsx-948695692{display:block;padding:0;min-height:32px;}", ".content.jsx-948695692:first-child{padding-top:8px;padding-bottom:8px;}"]));

export const TableCell = ({
  children,
  colSpan,
  rowSpan,
  column
}) => React.createElement(React.Fragment, null, React.createElement(Consumer, null, ({
  staticLayout,
  headerLabels
}) => {
  const title = headerLabels[column];
  return React.createElement("td", {
    colSpan: colSpan,
    rowSpan: rowSpan,
    className: `jsx-${tableCellStyles.__hash}`
  }, React.createElement(ContentWithTitle, {
    title: title
  }, React.createElement(TableCellText, null, children)));
}), React.createElement(_JSXStyle, {
  id: tableCellStyles.__hash
}, tableCellStyles));
TableCell.propTypes = {
  colSpan: propTypes.string,
  rowSpan: propTypes.string,
  column: propTypes.number
};