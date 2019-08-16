import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Consumer } from './tableContext';
import { TableRow } from './TableRow';
import { instanceOfComponent } from '../prop-validators/instanceOfComponent';
const tableFootStyles = ["tfoot.jsx-2482116578{display:block;margin-top:32px;}"];
tableFootStyles.__hash = "2482116578";
export const TableFoot = ({
  children
}) => React.createElement("tfoot", {
  className: `jsx-${tableFootStyles.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableFootStyles.__hash
}, tableFootStyles));
const childPropType = instanceOfComponent(TableRow);
TableFoot.propTypes = {
  children: propTypes.oneOfType([childPropType, propTypes.arrayOf(childPropType)]).isRequired
};