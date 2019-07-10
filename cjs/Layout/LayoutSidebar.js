"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutSidebar = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutSidebar = function LayoutSidebar(_ref) {
  var children = _ref.children;
  return _react.default.createElement("section", {
    className: "jsx-2266834895"
  }, children, _react.default.createElement(_style.default, {
    id: "2266834895"
  }, ["section.jsx-2266834895{grid-area:sidebar;}"]));
};

exports.LayoutSidebar = LayoutSidebar;