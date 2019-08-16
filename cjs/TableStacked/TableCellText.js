"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCellText = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tableContext = require("./tableContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableCellTextStyles = ["span.jsx-4149436548{display:inline-block;padding:9px 0;font-size:14px;line-height:18px;}", "tbody span.jsx-4149436548{padding:3px 0;}"];
tableCellTextStyles.__hash = "4149436548";

var TableCellText = function TableCellText(_ref) {
  var children = _ref.children;
  return _react.default.createElement("span", {
    className: "jsx-".concat(tableCellTextStyles.__hash)
  }, children, _react.default.createElement(_style.default, {
    id: tableCellTextStyles.__hash
  }, tableCellTextStyles));
};

exports.TableCellText = TableCellText;
TableCellText.propTypes = {
  children: _propTypes.default.node
};