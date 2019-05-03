import _JSXStyle from "styled-jsx/style";
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

var _ref =
/*#__PURE__*/
React.createElement(_JSXStyle, {
  id: "1568741591"
}, "input.jsx-1568741591{display:none;}");

export const Input = ({
  onChange,
  checked,
  disabled
}) => React.createElement(Fragment, null, React.createElement("input", {
  type: "checkbox",
  onChange: onChange,
  checked: checked,
  disabled: disabled,
  className: "jsx-1568741591"
}), _ref);
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};