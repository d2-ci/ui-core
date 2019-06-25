"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCellHead = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableCellHead = function TableCellHead(_ref) {
  var children = _ref.children;
  return _react.default.createElement("th", {
    className: "jsx-1014159493"
  }, _react.default.createElement("div", {
    className: "jsx-1014159493"
  }, children), _react.default.createElement(_style.default, {
    id: "1014159493"
  }, ["th.jsx-1014159493{border-bottom:1px solid #e8edf2;padding:0 12px;}", "@media (max-width:768px){th.jsx-1014159493{display:block;}}", "div.jsx-1014159493{min-height:36px;}"]));
};

exports.TableCellHead = TableCellHead;