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

var tableCellStyles = ["td.jsx-3251990083{border-bottom:1px solid #e8edf2;padding:0 12px;font-size:14px;width:100%;display:block;}"];
tableCellStyles.__hash = "3251990083";

var ContentWithTitle = function ContentWithTitle(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return _react.default.createElement(_react.Fragment, null, title && _react.default.createElement("span", {
    className: "jsx-948695692" + " " + "title"
  }, title), _react.default.createElement("span", {
    className: "jsx-948695692" + " " + "content"
  }, children), _react.default.createElement(_style.default, {
    id: "948695692"
  }, [".title.jsx-948695692{display:block;white-space:normal;min-height:24px;line-height:18px;padding:8px 0 0 0;font-weight:bold;white-space:nowrap;}", ".content.jsx-948695692{display:block;padding:0;min-height:32px;}", ".content.jsx-948695692:first-child{padding-top:8px;padding-bottom:8px;}"]));
};

var TableCell = function TableCell(_ref2) {
  var children = _ref2.children,
      colSpan = _ref2.colSpan,
      rowSpan = _ref2.rowSpan,
      column = _ref2.column;

  var _ref4 =
  /*#__PURE__*/
  _react.default.createElement(_TableCellText.TableCellText, null, children);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_tableContext.Consumer, null, function (_ref3) {
    var staticLayout = _ref3.staticLayout,
        headerLabels = _ref3.headerLabels;
    var title = headerLabels[column];
    return _react.default.createElement("td", {
      colSpan: colSpan,
      rowSpan: rowSpan,
      className: "jsx-".concat(tableCellStyles.__hash)
    }, _react.default.createElement(ContentWithTitle, {
      title: title
    }, _ref4));
  }), _react.default.createElement(_style.default, {
    id: tableCellStyles.__hash
  }, tableCellStyles));
};

exports.TableCell = TableCell;
TableCell.propTypes = {
  colSpan: _propTypes.default.string,
  rowSpan: _propTypes.default.string,
  column: _propTypes.default.number
};