"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(_ref) {
  var children = _ref.children,
      overflow = _ref.overflow;
  return _react.default.createElement("span", {
    className: "jsx-2041291425" + " " + ((0, _classnames.default)({
      overflow: overflow
    }) || "")
  }, children, _react.default.createElement(_style.default, {
    id: "2041291425"
  }, ["span.jsx-2041291425{margin:0 12px;color:inherit;white-space:nowrap;}", ".overflow.jsx-2041291425{max-width:150px;overflow:hidden;text-overflow:ellipsis;}"]));
};

exports.Content = Content;
Content.propTypes = {
  overflow: _propTypes.default.bool
};