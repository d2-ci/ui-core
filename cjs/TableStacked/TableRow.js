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

var tableRowStyles = ["tr.jsx-4263608095{min-height:45px;display:block;border:1px solid #e8edf2;}", "tr.jsx-4263608095:nth-child(even){background:none;}", "thead tr.jsx-4263608095,tbody tr.jsx-4263608095{min-height:36px;}", "tr.jsx-4263608095+tr.jsx-4263608095{margin-top:32px;}", "tr.jsx-4263608095:nth-child(even) td{background:#fbfcfd;}"];
tableRowStyles.__hash = "4263608095";

var TableRow = function TableRow(_ref) {
  var children = _ref.children;
  return _react.default.createElement("tr", {
    className: "jsx-".concat(tableRowStyles.__hash)
  }, addColNumToChildren(children), _react.default.createElement(_style.default, {
    id: tableRowStyles.__hash
  }, tableRowStyles));
};

exports.TableRow = TableRow;

var childPropType = _propTypes.default.oneOfType([(0, _instanceOfComponent.instanceOfComponent)(_TableCell.TableCell), (0, _instanceOfComponent.instanceOfComponent)(_TableCellHead.TableCellHead)]);

TableRow.propTypes = {
  children: _propTypes.default.oneOfType([childPropType, _propTypes.default.arrayOf(childPropType)]).isRequired
};