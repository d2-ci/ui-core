import _JSXStyle from "styled-jsx/style";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import propTypes from 'prop-types';
import { arrayWithLength } from '../prop-validators';
import { Action } from './Action';
import { spacers } from '../theme.js';

const Actions = ({
  actions,
  hide
}) => {
  if (!actions) {
    return null;
  }

  return React.createElement("div", {
    className: _JSXStyle.dynamic([["961263490", [spacers.dp48, spacers.dp12]]])
  }, actions.map(action => React.createElement(Action, _extends({
    key: action.label
  }, action, {
    hide: hide
  }))), React.createElement(_JSXStyle, {
    id: "961263490",
    dynamic: [spacers.dp48, spacers.dp12]
  }, `div.__jsx-style-dynamic-selector{margin-left:${spacers.dp48};margin-right:-${spacers.dp12};}`));
};

const actionsPropType = arrayWithLength(0, 2, propTypes.shape({
  label: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
}));
Actions.propTypes = {
  actions: actionsPropType,
  hide: propTypes.func.isRequired
};
export { Actions, actionsPropType };