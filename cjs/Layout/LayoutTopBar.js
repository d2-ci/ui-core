"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutTopBar = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutTopBar = function LayoutTopBar(_ref) {
  var children = _ref.children;
  return _react.default.createElement("section", {
    className: "jsx-3664029056"
  }, children, _react.default.createElement(_style.default, {
    id: "3664029056"
  }, ["section.jsx-3664029056{grid-area:topbar;}"]));
};

exports.LayoutTopBar = LayoutTopBar;