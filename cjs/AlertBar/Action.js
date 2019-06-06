"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Action = function Action(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick;
  return _react.default.createElement("span", {
    onClick: onClick,
    className: _style.default.dynamic([["370017896", [_theme.spacers.dp12]]])
  }, label, _react.default.createElement(_style.default, {
    id: "370017896",
    dynamic: [_theme.spacers.dp12]
  }, ["span.__jsx-style-dynamic-selector{margin-right:".concat(_theme.spacers.dp12, ";-webkit-text-decoration:underline;text-decoration:underline;}"), "span.__jsx-style-dynamic-selector:hover{cursor:pointer;}"]));
};

exports.Action = Action;
Action.propTypes = {
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func.isRequired
};