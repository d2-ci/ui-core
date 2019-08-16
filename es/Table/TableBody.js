import React from 'react';
import propTypes from 'prop-types';
import { TableRow } from './TableRow';
import { instanceOfComponent } from '../prop-validators/instanceOfComponent';
export const TableBody = ({
  children
}) => React.createElement("tbody", null, children);
const childPropType = instanceOfComponent(TableRow);
TableBody.propTypes = {
  children: propTypes.oneOfType([childPropType, propTypes.arrayOf(childPropType)]).isRequired
};