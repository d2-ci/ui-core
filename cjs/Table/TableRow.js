"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableRow = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableCell = require("./TableCell");

var _TableCellHead = require("./TableCellHead");

var _instanceOfComponent = require("../prop-validators/instanceOfComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableRowStyles = ["tr.jsx-3962819116{min-height:45px;}", "tr.jsx-3962819116:nth-child(even){background:#fbfcfd;}", "thead tr.jsx-3962819116,tbody tr.jsx-3962819116{min-height:36px;}"];
tableRowStyles.__hash = "3962819116";

var TableRow = function TableRow(_ref) {
  var children = _ref.children;
  return _react.default.createElement("tr", {
    className: "jsx-".concat(tableRowStyles.__hash)
  }, children, _react.default.createElement(_style.default, {
    id: tableRowStyles.__hash
  }, tableRowStyles));
};

exports.TableRow = TableRow;

var childPropType = _propTypes.default.oneOfType([(0, _instanceOfComponent.instanceOfComponent)(_TableCell.TableCell), (0, _instanceOfComponent.instanceOfComponent)(_TableCellHead.TableCellHead)]);

TableRow.propTypes = {
  children: _propTypes.default.oneOfType([childPropType, _propTypes.default.arrayOf(childPropType)]).isRequired
};