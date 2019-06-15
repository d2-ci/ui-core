"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Actions = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Actions = function Actions(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: _style.default.dynamic([["3709975811", [_theme.spacers.dp24, _theme.spacers.dp24]]])
  }, children, _react.default.createElement(_style.default, {
    id: "3709975811",
    dynamic: [_theme.spacers.dp24, _theme.spacers.dp24]
  }, "div.__jsx-style-dynamic-selector{padding:0 ".concat(_theme.spacers.dp24, " ").concat(_theme.spacers.dp24, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}")));
};

exports.Actions = Actions;
Actions.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.arrayOf(_propTypes.default.element)]).isRequired
};