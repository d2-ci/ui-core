"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCellHead = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableCellHead = function TableCellHead(_ref) {
  var children = _ref.children,
      colSpan = _ref.colSpan,
      rowSpan = _ref.rowSpan;
  return _react.default.createElement("th", {
    colSpan: colSpan,
    rowSpan: rowSpan,
    className: "jsx-1940747275"
  }, _react.default.createElement("div", {
    className: "jsx-1940747275"
  }, children), _react.default.createElement(_style.default, {
    id: "1940747275"
  }, ["th.jsx-1940747275{border-bottom:1px solid #e8edf2;padding:0 12px;}", "div.jsx-1940747275{min-height:36px;}"]));
};

exports.TableCellHead = TableCellHead;
TableCellHead.propTypes = {
  colSpan: _propTypes.default.string,
  rowSpan: _propTypes.default.string
};