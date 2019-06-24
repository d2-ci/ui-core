"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHead = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHead = function TableHead(_ref) {
  var children = _ref.children;
  return _react.default.createElement("thead", {
    className: "jsx-16478856"
  }, children, _react.default.createElement(_style.default, {
    id: "16478856"
  }, ["@media (max-width:768px){thead.jsx-16478856{display:none;}}"]));
};

exports.TableHead = TableHead;