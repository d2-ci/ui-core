"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dismiss = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../theme.js");

var _Close = require("../icons/Close");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_Close.Close, null);

var Dismiss = function Dismiss(_ref) {
  var onClick = _ref.onClick;
  return _react.default.createElement("div", {
    onClick: onClick,
    className: _style.default.dynamic([["4165464483", [_theme.spacers.dp24]]])
  }, _ref2, _react.default.createElement(_style.default, {
    id: "4165464483",
    dynamic: [_theme.spacers.dp24]
  }, "div.__jsx-style-dynamic-selector{margin-left:".concat(_theme.spacers.dp24, ";}div.__jsx-style-dynamic-selector:hover{cursor:pointer;}div.__jsx-style-dynamic-selector svg{width:18px;height:18px;}")));
};

exports.Dismiss = Dismiss;
Dismiss.propTypes = {
  onClick: _propTypes.default.func.isRequired
};