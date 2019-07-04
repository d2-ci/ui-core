"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutAreaContent = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutAreaContent = function LayoutAreaContent(_ref) {
  var children = _ref.children;
  return _react.default.createElement("section", {
    className: "jsx-800869476"
  }, children, _react.default.createElement(_style.default, {
    id: "800869476"
  }, ["section.jsx-800869476{grid-area:content;}"]));
};

exports.LayoutAreaContent = LayoutAreaContent;