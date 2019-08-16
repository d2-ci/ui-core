import _JSXStyle from "styled-jsx/style";
import React from 'react';
import propTypes from 'prop-types';
import { Consumer } from './tableContext';
import { TableRowHead } from './TableRowHead';
import { instanceOfComponent } from '../prop-validators/instanceOfComponent';
const tableHeadStyles = ["thead.jsx-2941265887{display:none;}"];
tableHeadStyles.__hash = "2941265887";
export const TableHead = ({
  children
}) => React.createElement("thead", {
  className: `jsx-${tableHeadStyles.__hash}`
}, children, React.createElement(_JSXStyle, {
  id: tableHeadStyles.__hash
}, tableHeadStyles));
const childPropType = instanceOfComponent(TableRowHead);
TableHead.propTypes = {
  children: propTypes.oneOfType([childPropType, propTypes.arrayOf(childPropType)]).isRequired
};