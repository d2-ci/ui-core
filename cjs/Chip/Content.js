"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(_ref) {
  var children = _ref.children,
      overflow = _ref.overflow;
  return _react.default.createElement("span", {
    className: _style.default.dynamic([["765109298", [_theme.spacers.dp12]]]) + " " + ((0, _classnames.default)({
      overflow: overflow
    }) || "")
  }, children, _react.default.createElement(_style.default, {
    id: "765109298",
    dynamic: [_theme.spacers.dp12]
  }, ["span.__jsx-style-dynamic-selector{margin:0 ".concat(_theme.spacers.dp12, ";color:inherit;white-space:nowrap;}"), ".overflow.__jsx-style-dynamic-selector{max-width:150px;overflow:hidden;text-overflow:ellipsis;}"]));
};

exports.Content = Content;
Content.propTypes = {
  overflow: _propTypes.default.bool
};