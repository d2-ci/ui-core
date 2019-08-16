import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { TableBody } from './TableBody';
import { TableFoot } from './TableFoot';
import { TableHead } from './TableHead';
import { instanceOfComponent } from '../prop-validators/instanceOfComponent';
const tableStyles = ["table.jsx-2430604489{border:1px solid #e8edf2;background-color:#ffffff;min-width:100%;text-align:left;border-collapse:collapse;vertical-align:top;}"];
tableStyles.__hash = "2430604489";
export const Table = ({
  children
}) => React.createElement("table", {
  className: `jsx-${tableStyles.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableStyles.__hash
}, tableStyles));
const childPropType = propTypes.oneOfType([instanceOfComponent(TableHead), instanceOfComponent(TableBody), instanceOfComponent(TableFoot)]);
Table.propTypes = {
  children: propTypes.oneOfType([childPropType, propTypes.arrayOf(childPropType)]).isRequired
};