import _JSXStyle from "styled-jsx/style";
import React from 'react';
import { useTableContext } from './tableContext';
const tableFootStylesResponsive = ["@media (max-width:768px){tfoot.jsx-1784078313{display:block;margin-top:16px;}}", "@media (max-width:400px){tfoot.jsx-1784078313{margin-top:32px;}}"];
tableFootStylesResponsive.__hash = "1784078313";

const TFootStatic = ({
  children
}) => React.createElement("tfoot", null, children);

const TFootResponsive = ({
  children
}) => React.createElement("tfoot", {
  className: `jsx-${tableFootStylesResponsive.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableFootStylesResponsive.__hash
}, tableFootStylesResponsive));

export const TableFoot = ({
  children
}) => {
  const {
    staticLayout
  } = useTableContext();
  const TFoot = staticLayout ? TFootStatic : TFootResponsive;
  return React.createElement(TFoot, {
    className: "jsx-431488448"
  }, children, React.createElement(_JSXStyle, {
    id: "431488448"
  }, []));
};