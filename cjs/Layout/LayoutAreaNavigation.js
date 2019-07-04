"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutAreaNavigation = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutAreaNavigation = function LayoutAreaNavigation(_ref) {
  var children = _ref.children;
  return _react.default.createElement("section", {
    className: "jsx-1039941977"
  }, children, _react.default.createElement(_style.default, {
    id: "1039941977"
  }, ["section.jsx-1039941977{grid-area:navigation;}"]));
};

exports.LayoutAreaNavigation = LayoutAreaNavigation;