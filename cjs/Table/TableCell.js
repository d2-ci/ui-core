"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCell = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableCellText = require("./TableCellText");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableCellStyles = ["td.jsx-2476768987{border-bottom:1px solid #e8edf2;padding:0 12px;font-size:14px;}", "div.jsx-2476768987{min-height:45px;}", "tfooter div.jsx-2476768987{min-height:36px;}"];
tableCellStyles.__hash = "2476768987";

var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      colSpan = _ref.colSpan,
      rowSpan = _ref.rowSpan;
  return _react.default.createElement("td", {
    colSpan: colSpan,
    rowSpan: rowSpan,
    className: "jsx-".concat(tableCellStyles.__hash)
  }, _react.default.createElement("div", {
    className: "jsx-".concat(tableCellStyles.__hash)
  }, _react.default.createElement(_TableCellText.TableCellText, null, children)), _react.default.createElement(_style.default, {
    id: tableCellStyles.__hash
  }, tableCellStyles));
};

exports.TableCell = TableCell;
TableCell.propTypes = {
  colSpan: _propTypes.default.string,
  rowSpan: _propTypes.default.string,
  children: _propTypes.default.node
};