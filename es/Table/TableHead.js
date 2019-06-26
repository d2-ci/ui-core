import _JSXStyle from "styled-jsx/style";
import React from 'react';
import { useTableContext } from './tableContext';
const tableHeadStylesResponsive = ["@media (max-width:768px){thead.jsx-3333755757{display:none;}}"];
tableHeadStylesResponsive.__hash = "3333755757";

const THeadStatic = ({
  children
}) => React.createElement("thead", null, children);

const THeadResponsive = ({
  children
}) => React.createElement("thead", {
  className: `jsx-${tableHeadStylesResponsive.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableHeadStylesResponsive.__hash
}, tableHeadStylesResponsive));

export const TableHead = ({
  children
}) => {
  const {
    staticLayout
  } = useTableContext();
  const THead = staticLayout ? THeadStatic : THeadResponsive;
  return React.createElement(THead, null, children);
};