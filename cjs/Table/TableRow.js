"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableRow = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableRow = function TableRow(_ref) {
  var children = _ref.children;
  return _react.default.createElement("tr", {
    className: "jsx-1105106823"
  }, children, _react.default.createElement(_style.default, {
    id: "1105106823"
  }, ["tr.jsx-1105106823{min-height:45px;}", "tr.jsx-1105106823:nth-child(even){background:#fbfcfd;}", "thead tr.jsx-1105106823,tbody tr.jsx-1105106823{min-height:36px;}", "@media (max-width:768px){tr.jsx-1105106823{display:table;width:100%;border:1px solid #e8edf2;}tr.jsx-1105106823+tr.jsx-1105106823{margin-top:16px;}}", "@media (max-width:400px){tr.jsx-1105106823{display:block;border:0;}tr.jsx-1105106823:nth-child(even){background:none;}tr.jsx-1105106823+tr.jsx-1105106823{margin-top:32px;}tr.jsx-1105106823:nth-child(even) td{background:#fbfcfd;}}"]));
};

exports.TableRow = TableRow;