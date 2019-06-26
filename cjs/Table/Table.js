"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _tableContext = require("./tableContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableStyles = ["table.jsx-2430604489{border:1px solid #e8edf2;background-color:#ffffff;min-width:100%;text-align:left;border-collapse:collapse;vertical-align:top;}"];
tableStyles.__hash = "2430604489";
var tableStylesResponsive = ["@media (max-width:768px){table.jsx-1164486484{display:block;border:0;}}"];
tableStylesResponsive.__hash = "1164486484";

var TableRepsonsive = function TableRepsonsive(_ref) {
  var children = _ref.children;
  return _react.default.createElement("table", {
    className: "jsx-".concat(tableStyles.__hash, " jsx-").concat(tableStylesResponsive.__hash)
  }, children, _react.default.createElement(_style.default, {
    id: tableStyles.__hash
  }, tableStyles), _react.default.createElement(_style.default, {
    id: tableStylesResponsive.__hash
  }, tableStylesResponsive));
};

var TableStatic = function TableStatic(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("table", {
    className: "jsx-".concat(tableStyles.__hash)
  }, children, _react.default.createElement(_style.default, {
    id: tableStyles.__hash
  }, tableStyles));
};

var Table = function Table(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement(_tableContext.Consumer, null, function (_ref4) {
    var staticLayout = _ref4.staticLayout;
    var TableComponent = staticLayout ? TableStatic : TableRepsonsive;
    return _react.default.createElement(TableComponent, null, children);
  });
};

exports.Table = Table;