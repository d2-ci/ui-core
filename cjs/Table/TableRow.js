"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableRow = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tableContext = require("./tableContext");

var _TableCell = require("./TableCell");

var _TableCellHead = require("./TableCellHead");

var _instanceOfComponent = require("../prop-validators/instanceOfComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addColNumToChildren = function addColNumToChildren(children) {
  var curCol = 0;
  return _react.default.Children.map(children, function (child) {
    var column = curCol;
    var colSpan = child.props.colSpan ? parseInt(child.props.colSpan, 10) : 1;
    curCol += colSpan;
    return _react.default.cloneElement(child, {
      column: column
    });
  });
};

var tableRowStyles = ["tr.jsx-3962819116{min-height:45px;}", "tr.jsx-3962819116:nth-child(even){background:#fbfcfd;}", "thead tr.jsx-3962819116,tbody tr.jsx-3962819116{min-height:36px;}"];
tableRowStyles.__hash = "3962819116";
var tableRowStylesResponsive = ["@media (max-width:768px){tr.jsx-1714863467{display:block;border:1px solid #e8edf2;}tr.jsx-1714863467:nth-child(even){background:none;}tr.jsx-1714863467+tr.jsx-1714863467{margin-top:32px;}tr.jsx-1714863467:nth-child(even) td{background:#fbfcfd;}}"];
tableRowStylesResponsive.__hash = "1714863467";

var TableRowStatic = function TableRowStatic(_ref) {
  var children = _ref.children;
  return _react.default.createElement("tr", {
    className: "jsx-".concat(tableRowStyles.__hash)
  }, children, _react.default.createElement(_style.default, {
    id: tableRowStyles.__hash
  }, tableRowStyles));
};

var TableRowResponsive = function TableRowResponsive(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("tr", {
    className: "jsx-".concat(tableRowStyles.__hash, " jsx-").concat(tableRowStylesResponsive.__hash)
  }, children, _react.default.createElement(_style.default, {
    id: tableRowStyles.__hash
  }, tableRowStyles), _react.default.createElement(_style.default, {
    id: tableRowStylesResponsive.__hash
  }, tableRowStylesResponsive));
};

var TableRow = function TableRow(_ref3) {
  var children = _ref3.children,
      headerRow = _ref3.headerRow;
  return _react.default.createElement(_tableContext.Consumer, null, function (_ref4) {
    var staticLayout = _ref4.staticLayout;
    var TableRowComponent = staticLayout ? TableRowStatic : TableRowResponsive;
    return _react.default.createElement(TableRowComponent, null, addColNumToChildren(children));
  });
};

exports.TableRow = TableRow;

var childPropType = _propTypes.default.oneOfType([(0, _instanceOfComponent.instanceOfComponent)(_TableCell.TableCell), (0, _instanceOfComponent.instanceOfComponent)(_TableCellHead.TableCellHead)]);

TableRow.propTypes = {
  children: _propTypes.default.oneOfType([childPropType, _propTypes.default.arrayOf(childPropType)]).isRequired
};