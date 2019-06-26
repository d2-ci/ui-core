"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCell = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tableContext = require("./tableContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableCellStyles = ["td.jsx-2476768987{border-bottom:1px solid #e8edf2;padding:0 12px;font-size:14px;}", "div.jsx-2476768987{min-height:45px;}", "tfooter div.jsx-2476768987{min-height:36px;}"];
tableCellStyles.__hash = "2476768987";

var TableCellStatic = function TableCellStatic(_ref) {
  var children = _ref.children,
      colSpan = _ref.colSpan,
      rowSpan = _ref.rowSpan;
  return _react.default.createElement("td", {
    colSpan: colSpan,
    rowSpan: rowSpan,
    className: "jsx-".concat(tableCellStyles.__hash)
  }, _react.default.createElement("div", {
    className: "jsx-".concat(tableCellStyles.__hash)
  }, children), _react.default.createElement(_style.default, {
    id: tableCellStyles.__hash
  }, tableCellStyles));
};

var TableCellResponsive = function TableCellResponsive(_ref2) {
  var children = _ref2.children,
      colSpan = _ref2.colSpan,
      rowSpan = _ref2.rowSpan,
      title = _ref2.title;
  return _react.default.createElement("td", {
    colSpan: colSpan,
    rowSpan: rowSpan,
    className: "jsx-".concat(tableCellStyles.__hash) + " " + _style.default.dynamic([["460684140", [title]]])
  }, _react.default.createElement("div", {
    className: "jsx-".concat(tableCellStyles.__hash) + " " + _style.default.dynamic([["460684140", [title]]])
  }, children), _react.default.createElement(_style.default, {
    id: tableCellStyles.__hash
  }, tableCellStyles), _react.default.createElement(_style.default, {
    id: "460684140",
    dynamic: [title]
  }, ["@media (max-width:768px){td.__jsx-style-dynamic-selector{display:table-row;width:100%;}td.__jsx-style-dynamic-selector:before{content:'".concat(title, ":';display:table-cell;white-space:nowrap;padding:0 16px;font-weight:bold;}tfoot td.__jsx-style-dynamic-selector:before{display:none;}div.__jsx-style-dynamic-selector{display:table-cell;width:100%;padding:0 16px;}}"), "@media (max-width:400px){td.__jsx-style-dynamic-selector{display:block;}td.__jsx-style-dynamic-selector:first-child{margin-top:0;}td.__jsx-style-dynamic-selector:before{display:block;white-space:normal;min-height:24px;line-height:18px;padding:8px 0 0 0;}div.__jsx-style-dynamic-selector{display:block;padding:0;min-height:32px;}}"]));
};

var TableCell = function TableCell(_ref3) {
  var children = _ref3.children,
      title = _ref3.title,
      colSpan = _ref3.colSpan,
      rowSpan = _ref3.rowSpan;

  var _ref5 =
  /*#__PURE__*/
  _react.default.createElement("div", null, children);

  return _react.default.createElement(_tableContext.Consumer, null, function (_ref4) {
    var staticLayout = _ref4.staticLayout;
    var TableCell = staticLayout ? TableCellStatic : TableCellResponsive;
    return _react.default.createElement(TableCell, {
      colSpan: colSpan,
      rowSpan: rowSpan,
      title: title
    }, _ref5);
  });
};

exports.TableCell = TableCell;
TableCell.propTypes = {
  title: _propTypes.default.string,
  colSpan: _propTypes.default.string,
  rowSpan: _propTypes.default.string
};