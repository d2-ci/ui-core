"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableBody = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = function TableBody(_ref) {
  var children = _ref.children;
  return _react.default.createElement("tbody", {
    className: "jsx-1905405001"
  }, children, _react.default.createElement(_style.default, {
    id: "1905405001"
  }, ["@media (max-width:768px){tbody.jsx-1905405001{display:block;}}"]));
};

exports.TableBody = TableBody;