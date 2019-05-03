import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import propTypes from 'prop-types';

var _ref =
/*#__PURE__*/
React.createElement(_JSXStyle, {
  id: "1568741591"
}, "input.jsx-1568741591{display:none;}");

export const Input = ({
  onChange,
  checked,
  disabled,
  name
}) => React.createElement(Fragment, null, React.createElement("input", {
  type: "checkbox",
  name: name,
  onChange: onChange,
  checked: checked,
  disabled: disabled,
  className: "jsx-1568741591"
}), _ref);
Input.propTypes = {
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  checked: propTypes.bool,
  disabled: propTypes.bool
};