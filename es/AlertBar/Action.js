import _JSXStyle from "styled-jsx/style";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { spacers } from '../theme.js';

class Action extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onClick", () => {
      this.props.onClick();
      this.props.hide();
    });
  }

  render() {
    return React.createElement("span", {
      onClick: this.onClick,
      className: _JSXStyle.dynamic([["663141299", [spacers.dp12]]])
    }, this.props.label, React.createElement(_JSXStyle, {
      id: "663141299",
      dynamic: [spacers.dp12]
    }, [`span.__jsx-style-dynamic-selector{margin-right:${spacers.dp12};-webkit-text-decoration:underline;text-decoration:underline;}`, "span.__jsx-style-dynamic-selector:hover{cursor:pointer;}"]));
  }

}

Action.propTypes = {
  label: propTypes.string.isRequired,
  hide: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired
};
export { Action };