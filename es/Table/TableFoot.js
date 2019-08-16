import React from 'react';
import propTypes from 'prop-types';
import { TableRow } from './TableRow';
import { instanceOfComponent } from '../prop-validators/instanceOfComponent';
export const TableFoot = ({
  children
}) => React.createElement("tfoot", null, children);
const childPropType = instanceOfComponent(TableRow);
TableFoot.propTypes = {
  children: propTypes.oneOfType([childPropType, propTypes.arrayOf(childPropType)]).isRequired
};