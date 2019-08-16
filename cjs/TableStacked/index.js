"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TableBody", {
  enumerable: true,
  get: function get() {
    return _TableBody.TableBody;
  }
});
Object.defineProperty(exports, "TableCell", {
  enumerable: true,
  get: function get() {
    return _TableCell.TableCell;
  }
});
Object.defineProperty(exports, "TableCellHead", {
  enumerable: true,
  get: function get() {
    return _TableCellHead.TableCellHead;
  }
});
Object.defineProperty(exports, "TableFoot", {
  enumerable: true,
  get: function get() {
    return _TableFoot.TableFoot;
  }
});
Object.defineProperty(exports, "TableHead", {
  enumerable: true,
  get: function get() {
    return _TableHead.TableHead;
  }
});
Object.defineProperty(exports, "TableRow", {
  enumerable: true,
  get: function get() {
    return _TableRow.TableRow;
  }
});
Object.defineProperty(exports, "TableRowHead", {
  enumerable: true,
  get: function get() {
    return _TableRowHead.TableRowHead;
  }
});
exports.TableStacked = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tableContext = require("./tableContext");

var _TableBody = require("./TableBody");

var _TableCell = require("./TableCell");

var _TableCellHead = require("./TableCellHead");

var _Table = require("./Table");

var _TableFoot = require("./TableFoot");

var _TableHead = require("./TableHead");

var _TableRow = require("./TableRow");

var _TableRowHead = require("./TableRowHead");

var _extractHeaderLabels = require("./extractHeaderLabels");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableStacked = function TableStacked(_ref) {
  var children = _ref.children;
  var headerLabels = (0, _extractHeaderLabels.extractHeaderLabels)(children);
  return _react.default.createElement(_tableContext.Provider, {
    value: {
      headerLabels: headerLabels
    }
  }, _react.default.createElement(_Table.Table, null, children));
};

exports.TableStacked = TableStacked;