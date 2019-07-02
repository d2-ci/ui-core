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
var tableCellStylesResponsive = ["@media (max-width:768px){td.jsx-3119603203{display:table-row;width:100%;}}", "@media (max-width:400px){td.jsx-3119603203{display:block;}}"];
tableCellStylesResponsive.__hash = "3119603203";

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
  return _react.default.createElement(_react.Fragment, null, title && _react.default.createElement("td", {
    className: "jsx-2172026091" + " " + "title"
  }, title), _react.default.createElement("td", {
    colSpan: title ? '1' : '2',
    className: "jsx-2172026091" + " " + "content"
  }, children), _react.default.createElement(_style.default, {
    id: "2172026091"
  }, [".title.jsx-2172026091{display:none;}", ".content.jsx-2172026091{display:block;}", "@media (max-width:768px){.title.jsx-2172026091,.content.jsx-2172026091{display:table-cell;}.title.jsx-2172026091{white-space:nowrap;padding:0 16px;font-weight:bold;}tfoot .title.jsx-2172026091{display:none;}.content.jsx-2172026091{display:table-cell;width:100%;padding:0 16px;}}", "@media (max-width:400px){.title.jsx-2172026091{display:block;white-space:normal;min-height:24px;line-height:18px;padding:8px 0 0 0;}.content.jsx-2172026091{display:block;padding:0;min-height:32px;}.content.jsx-2172026091:first-child{padding-top:8px;padding-bottom:8px;}}"]));
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
      noTitle = _ref4.noTitle,
      colSpan = _ref4.colSpan,
      rowSpan = _ref4.rowSpan,
      column = _ref4.column;

  var _ref6 =
  /*#__PURE__*/
  _react.default.createElement(_TableCellText.TableCellText, {
    label: children
  });

  return _react.default.createElement(_tableContext.Consumer, null, function (_ref5) {
    var staticLayout = _ref5.staticLayout,
        headerLabels = _ref5.headerLabels;
    var title = noTitle || staticLayout ? '' : headerLabels[column];
    var TableCellComponent = staticLayout ? TableCellStatic : TableCellResponsive;
    var content = typeof children === 'string' ? _ref6 : children;
    return _react.default.createElement(TableCellComponent, {
      column: column,
      colSpan: colSpan,
      rowSpan: rowSpan,
      title: title
    }, _react.default.createElement("div", null, content));
  });
};

exports.TableCell = TableCell;
TableCell.propTypes = {
  noTitle: _propTypes.default.bool,
  colSpan: _propTypes.default.string,
  rowSpan: _propTypes.default.string,
  column: _propTypes.default.number
};