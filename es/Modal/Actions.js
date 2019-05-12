import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '../index';
export const Actions = ({
  children
}) => React.createElement("div", {
  className: "jsx-1953267682"
}, children, React.createElement(_JSXStyle, {
  id: "1953267682"
}, ["div.jsx-1953267682{padding:0 24px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}"]));
Actions.propTypes = {
  children: propTypes.oneOfType([propTypes.element, propTypes.arrayOf(propTypes.element)]).isRequired
};