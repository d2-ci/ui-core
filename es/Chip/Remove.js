function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import _JSXStyle from "styled-jsx/style";
import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { Cancel } from '../icons/Cancel';
import { colors, spacers } from '../theme.js';
const removeIcon = {
  styles: React.createElement(_JSXStyle, {
    id: "1204490597"
  }, [`svg.jsx-1204490597{margin-right:${spacers.dp4};color:${colors.grey700};height:18px;width:18px;cursor:pointer;opacity:1;pointer-events:all;}`, "svg.jsx-1204490597:hover{opacity:0.82;}"]),
  className: "jsx-1204490597"
};
export class Remove extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onRemove", e => {
      e.stopPropagation(); // stop onRemove from triggering onClick on container

      this.props.onRemove(e);
    });
  }

  render() {
    const onRemove = this.props.onRemove;
    if (!onRemove) return null;
    return React.createElement("span", {
      onClick: this.onRemove
    }, React.createElement(Cancel, {
      className: removeIcon.className
    }), removeIcon.styles);
  }

}
Remove.propTypes = {
  onRemove: propTypes.func
};