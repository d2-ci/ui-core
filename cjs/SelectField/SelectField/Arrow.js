"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arrow = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Arrow = require("../../icons/Arrow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = new String("div.jsx-4284139979{margin-right:4px;}");
styles.__hash = "4284139979";

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_Arrow.ArrowUp, null);

var _ref3 =
/*#__PURE__*/
_react.default.createElement(_Arrow.ArrowDown, null);

var Arrow = function Arrow(_ref) {
  var open = _ref.open;
  return _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash)
  }, open ? _ref2 : _ref3, _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.Arrow = Arrow;