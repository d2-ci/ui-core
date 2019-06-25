"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionsPropType = exports.Actions = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propValidators = require("../prop-validators");

var _Action = require("./Action");

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Actions = function Actions(_ref) {
  var actions = _ref.actions,
      hide = _ref.hide;

  if (!actions) {
    return null;
  }

  return _react.default.createElement("div", {
    className: _style.default.dynamic([["961263490", [_theme.spacers.dp48, _theme.spacers.dp12]]])
  }, actions.map(function (action) {
    return _react.default.createElement(_Action.Action, _extends({
      key: action.label
    }, action, {
      hide: hide
    }));
  }), _react.default.createElement(_style.default, {
    id: "961263490",
    dynamic: [_theme.spacers.dp48, _theme.spacers.dp12]
  }, ["div.__jsx-style-dynamic-selector{margin-left:".concat(_theme.spacers.dp48, ";margin-right:-").concat(_theme.spacers.dp12, ";}")]));
};

exports.Actions = Actions;
var actionsPropType = (0, _propValidators.arrayWithLength)(0, 2, _propTypes.default.shape({
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func.isRequired
}));
exports.actionsPropType = actionsPropType;
Actions.propTypes = {
  actions: actionsPropType,
  hide: _propTypes.default.func.isRequired
};