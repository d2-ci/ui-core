"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
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
Object.defineProperty(exports, "TableBody", {
  enumerable: true,
  get: function get() {
    return _TableBody.TableBody;
  }
});
Object.defineProperty(exports, "TableRow", {
  enumerable: true,
  get: function get() {
    return _TableRow.TableRow;
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
Object.defineProperty(exports, "TableCellText", {
  enumerable: true,
  get: function get() {
    return _TableCellText.TableCellText;
  }
});
exports.Table = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _TableFoot = require("./TableFoot");

var _react = _interopRequireDefault(require("react"));

var _TableHead = require("./TableHead");

var _TableBody = require("./TableBody");

var _TableRow = require("./TableRow");

var _TableCell = require("./TableCell");

var _TableCellHead = require("./TableCellHead");

var _TableCellText = require("./TableCellText");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "jsx-3459583921"
  }, _react.default.createElement("table", {
    className: "jsx-3459583921"
  }, children), _react.default.createElement(_style.default, {
    id: "3459583921"
  }, ["div.jsx-3459583921{overflow-x:auto;}", "table.jsx-3459583921{border:1px solid #e8edf2;background-color:#ffffff;min-width:100%;text-align:left;border-collapse:collapse;vertical-align:top;}", "@media (max-width:768px){table.jsx-3459583921{display:block;border:0;}}"]));
};

exports.Table = Table;
Table.propTypes = {};