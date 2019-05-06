"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: _style.default.dynamic([["166161216", [_theme.colors.white]]]) + " " + ((0, _classnames.default)(className) || "")
  }, children, _react.default.createElement(_style.default, {
    id: "166161216",
    dynamic: [_theme.colors.white]
  }, ["div.__jsx-style-dynamic-selector{display:inline-block;position:relative;width:100%;height:100%;border-radius:3px;background:".concat(_theme.colors.white, ";box-shadow:0 0 1px 0 rgba(64,75,90,0.2), 0 2px 1px 0 rgba(64,75,90,0.28);}")]));
};

exports.Card = Card;
Card.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node
};