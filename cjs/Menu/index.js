"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = require("../Card");

var _MenuList = require("../MenuList");

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react.default.createElement("div", {
    className: _style.default.dynamic([["2220475694", [_theme.spacers.dp4]]]) + " " + (className || "")
  }, _react.default.createElement(_Card.Card, null, _react.default.createElement("div", {
    className: _style.default.dynamic([["2220475694", [_theme.spacers.dp4]]]) + " " + "menu-list-wrapper"
  }, _react.default.createElement(_MenuList.MenuList, null, children))), _react.default.createElement(_style.default, {
    id: "2220475694",
    dynamic: [_theme.spacers.dp4]
  }, [".menu-list-wrapper.__jsx-style-dynamic-selector{padding:".concat(_theme.spacers.dp4, " 0;}")]));
};

exports.Menu = Menu;
Menu.propTypes = {
  children: _MenuList.MenuList.propTypes.children,
  className: _propTypes.default.string
};