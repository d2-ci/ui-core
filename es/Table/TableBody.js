import _JSXStyle from "styled-jsx/style";
import React from 'react';
import { Consumer } from './tableContext';
const tableBodyStylesResponsive = ["@media (max-width:768px){tbody.jsx-2019227652{display:block;}}"];
tableBodyStylesResponsive.__hash = "2019227652";

const TBodyStatic = ({
  children
}) => React.createElement("tbody", null, children);

const TBodyResponsive = ({
  children
}) => React.createElement("tbody", {
  className: `jsx-${tableBodyStylesResponsive.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableBodyStylesResponsive.__hash
}, tableBodyStylesResponsive));

export const TableBody = ({
  children
}) => React.createElement(Consumer, null, ({
  staticLayout
}) => {
  const TBody = staticLayout ? TBodyStatic : TBodyResponsive;
  return React.createElement(TBody, null, children);
});