"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractHeaderLabels = void 0;

var _react = _interopRequireDefault(require("react"));

var _TableHead = require("./TableHead");

var _TableRow = require("./TableRow");

var _TableCellHead = require("./TableCellHead");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var extractRowsFromTableChildren = function extractRowsFromTableChildren(children) {
  return _react.default.Children.toArray(children) // extract theads
  .filter(function (child) {
    return child.type === _TableHead.TableHead;
  }) // flatten rows
  .map(function (_ref) {
    var props = _ref.props;
    return props.children;
  }).reduce(function (flattened, row) {
    return [].concat(_toConsumableArray(flattened), _toConsumableArray(row));
  }, []) // map row to array of cell components
  .map(function (_ref2) {
    var props = _ref2.props;
    return props.children;
  });
};

var calculateColumnCount = function calculateColumnCount(row) {
  return row.reduce(function (total, col) {
    return col.props.colSpan ? total + parseInt(col.props.colSpan, 10) : total + 1;
  }, 0);
};

var mapCellsToLabels = function mapCellsToLabels(row) {
  var labels = [];

  for (var i = 0, count = row.length; i < count; ++i) {
    var cell = row[i];
    var colSpan = cell.props.colSpan ? parseInt(cell.props.colSpan, 10) : 1;
    var label = extractLabelFromCell(cell);
    labels = [].concat(_toConsumableArray(labels), _toConsumableArray(Array(colSpan).fill(label)));
  }

  return labels;
};

var extractLabelFromCell = function extractLabelFromCell(cell) {
  return cell.props.label;
};

var combineRowLables = function combineRowLables(columnCount, rowCount, headerLabels) {
  return Array(columnCount).fill('').reduce(function (labels, _, colIndex) {
    var colLabels = Array(rowCount).fill('').map(function (__, rowIndex) {
      return headerLabels[rowIndex][colIndex];
    }).filter(function (val) {
      return val;
    }); // remove empty ones

    return [].concat(_toConsumableArray(labels), [colLabels.join(' / ')]);
  }, []);
};

var extractHeaderLabels = function extractHeaderLabels(children) {
  if (_react.default.Children.count(children) === 0) return [];
  var rows = extractRowsFromTableChildren(children);
  if (!rows.length) return [];
  var rowCount = rows.length;
  var columnCount = calculateColumnCount(rows[0]);
  var headerLabels = rows.map(mapCellsToLabels);
  return combineRowLables(columnCount, rowCount, headerLabels);
};

exports.extractHeaderLabels = extractHeaderLabels;