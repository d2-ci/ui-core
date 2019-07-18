"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCell = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tableContext = require("./tableContext");

var _TableCellText = require("./TableCellText");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableCellStyles = ["td.jsx-2476768987{border-bottom:1px solid #e8edf2;padding:0 12px;font-size:14px;}", "div.jsx-2476768987{min-height:45px;}", "tfooter div.jsx-2476768987{min-height:36px;}"];
tableCellStyles.__hash = "2476768987";
var tableCellStylesResponsive = ["@media (max-width:768px){td.jsx-3995202917{width:100%;display:block;}}"];
tableCellStylesResponsive.__hash = "3995202917";

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

var ContentWithTitle = function ContentWithTitle(_ref2) {
  var title = _ref2.title,
      children = _ref2.children;
  return _react.default.createElement(_react.Fragment, null, title && _react.default.createElement("span", {
    className: "jsx-1484001192" + " " + "title"
  }, title), _react.default.createElement("span", {
    className: "jsx-1484001192" + " " + "content"
  }, children), _react.default.createElement(_style.default, {
    id: "1484001192"
  }, [".title.jsx-1484001192{display:none;}", ".content.jsx-1484001192{display:block;}", "@media (max-width:768px){.title.jsx-1484001192{display:block;white-space:normal;min-height:24px;line-height:18px;padding:8px 0 0 0;font-weight:bold;white-space:nowrap;}.content.jsx-1484001192{display:block;padding:0;min-height:32px;}.content.jsx-1484001192:first-child{padding-top:8px;padding-bottom:8px;}}"]));
};

var TableCellResponsive = function TableCellResponsive(_ref3) {
  var children = _ref3.children,
      colSpan = _ref3.colSpan,
      rowSpan = _ref3.rowSpan,
      title = _ref3.title;
  return _react.default.createElement("td", {
    colSpan: colSpan,
    rowSpan: rowSpan,
    className: "jsx-".concat(tableCellStyles.__hash, " jsx-").concat(tableCellStylesResponsive.__hash)
  }, _react.default.createElement(ContentWithTitle, {
    title: title
  }, children), _react.default.createElement(_style.default, {
    id: tableCellStyles.__hash
  }, tableCellStyles), _react.default.createElement(_style.default, {
    id: tableCellStylesResponsive.__hash
  }, tableCellStylesResponsive));
};

var TableCell = function TableCell(_ref4) {
  var children = _ref4.children,
      colSpan = _ref4.colSpan,
      rowSpan = _ref4.rowSpan,
      column = _ref4.column;

  var _ref6 =
  /*#__PURE__*/
  _react.default.createElement(_TableCellText.TableCellText, null, children);

  return _react.default.createElement(_tableContext.Consumer, null, function (_ref5) {
    var staticLayout = _ref5.staticLayout,
        headerLabels = _ref5.headerLabels;
    var title = staticLayout ? '' : headerLabels[column];
    var TableCellComponent = staticLayout ? TableCellStatic : TableCellResponsive;
    return _react.default.createElement(TableCellComponent, {
      column: column,
      colSpan: colSpan,
      rowSpan: rowSpan,
      title: title
    }, _ref6);
  });
};

exports.TableCell = TableCell;
TableCell.propTypes = {
  colSpan: _propTypes.default.string,
  rowSpan: _propTypes.default.string,
  column: _propTypes.default.number
};