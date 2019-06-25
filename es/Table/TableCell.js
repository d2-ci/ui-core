import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
export const TableCell = ({
  children,
  title,
  colspan,
  rowspan
}) => React.createElement("td", {
  colspan: colspan,
  rowspan: rowspan,
  className: _JSXStyle.dynamic([["983265312", [title]]])
}, React.createElement("div", {
  className: _JSXStyle.dynamic([["983265312", [title]]])
}, children), React.createElement(_JSXStyle, {
  id: "983265312",
  dynamic: [title]
}, ["td.__jsx-style-dynamic-selector{border-bottom:1px solid #e8edf2;padding:0 12px;font-size:14px;}", "div.__jsx-style-dynamic-selector{min-height:45px;}", "tfooter div.__jsx-style-dynamic-selector{min-height:36px;}", `@media (max-width:768px){td.__jsx-style-dynamic-selector{display:table-row;width:100%;}td.__jsx-style-dynamic-selector:before{content:'${title}:';display:table-cell;white-space:nowrap;padding:0 16px;font-weight:bold;}tfoot td.__jsx-style-dynamic-selector:before{display:none;}div.__jsx-style-dynamic-selector{display:table-cell;width:100%;padding:0 16px;}}`, "@media (max-width:400px){td.__jsx-style-dynamic-selector{display:block;}td.__jsx-style-dynamic-selector:first-child{margin-top:0;}td.__jsx-style-dynamic-selector:before{display:block;white-space:normal;min-height:24px;line-height:18px;padding:8px 0 0 0;}tfooter td.__jsx-style-dynamic-selector:before{min-height:36px;}div.__jsx-style-dynamic-selector{display:block;padding:0;min-height:32px;}}"]));
TableCell.propTypes = {
  title: propTypes.string,
  colspan: propTypes.string,
  rowspan: propTypes.string
};