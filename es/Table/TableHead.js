import React from 'react';
import propTypes from 'prop-types';
import { TableRowHead } from './TableRowHead';
import { instanceOfComponent } from '../prop-validators/instanceOfComponent';
export const TableHead = ({
  children
}) => React.createElement("thead", null, children);
const childPropType = instanceOfComponent(TableRowHead);
TableHead.propTypes = {
  children: propTypes.oneOfType([childPropType, propTypes.arrayOf(childPropType)]).isRequired
};