"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("./helpers");

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Content = _react.default.forwardRef(function (_ref, ref) {
  var side = _ref.side,
      children = _ref.children,
      position = _ref.position,
      noArrow = _ref.noArrow,
      adjustment = _ref.adjustment;
  return _react.default.createElement("div", {
    ref: ref,
    style: position,
    className: _style.default.dynamic([["2029485037", [_theme.colors.white, _theme.colors.white, _theme.colors.white,
    /**
    * Pythagoras theorem in a square
    * s^2 + s^2 = d^2 (s = side, d = diagonal)
    *
    * diagonal = 10px
    * => side ~= 7px
    */
    '', adjustment.adjustmentHorizontal, adjustment.adjustmentHorizontal, adjustment.adjustmentVertical, adjustment.adjustmentVertical]]]) + " " + ((0, _classnames.default)('container', _defineProperty({
      'with-arrow': !noArrow
    }, "with-arrow-".concat((0, _helpers.invertSide)(side)), !noArrow)) || "")
  }, _react.default.createElement("div", {
    className: _style.default.dynamic([["2029485037", [_theme.colors.white, _theme.colors.white, _theme.colors.white, '', adjustment.adjustmentHorizontal, adjustment.adjustmentHorizontal, adjustment.adjustmentVertical, adjustment.adjustmentVertical]]]) + " " + "content"
  }, children), _react.default.createElement(_style.default, {
    id: "2029485037",
    dynamic: [_theme.colors.white, _theme.colors.white, _theme.colors.white, '', adjustment.adjustmentHorizontal, adjustment.adjustmentHorizontal, adjustment.adjustmentVertical, adjustment.adjustmentVertical]
  }, [".container.__jsx-style-dynamic-selector{background:".concat(_theme.colors.white, ";box-shadow:0 0 3px rgba(0,0,0,0.6);position:absolute;}"), ".content.__jsx-style-dynamic-selector{position:relative;z-index:2;max-height:100vh;overflow-y:auto;}", ".with-arrow.__jsx-style-dynamic-selector:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:".concat(_theme.colors.white, ";z-index:1;}"), ".with-arrow.__jsx-style-dynamic-selector:before{content:'';background:".concat(_theme.colors.white, ";position:absolute;z-index:0;box-shadow:0 0 3px black;", " width:7px;height:7px;}"), ".with-arrow-top.__jsx-style-dynamic-selector:before{top:-3px;left:calc(50% + ".concat(adjustment.adjustmentHorizontal, "px);-webkit-transform:translateX(-50%) rotate(45deg);-ms-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);}"), ".with-arrow-bottom.__jsx-style-dynamic-selector:before{bottom:-3px;left:calc(50% + ".concat(adjustment.adjustmentHorizontal, "px);-webkit-transform:translateX(-50%) rotate(45deg);-ms-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);}"), ".with-arrow-right.__jsx-style-dynamic-selector:before{right:-3px;top:calc(50% + ".concat(adjustment.adjustmentVertical, "px);-webkit-transform:translateY(-50%) rotate(45deg);-ms-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg);}"), ".with-arrow-left.__jsx-style-dynamic-selector:before{left:-3px;top:calc(50% + ".concat(adjustment.adjustmentVertical, "px);-webkit-transform:translateY(-50%) rotate(45deg);-ms-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg);}")]));
});

exports.Content = Content;