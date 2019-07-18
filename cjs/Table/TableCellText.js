"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCellText = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tableContext = require("./tableContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableCellTextStyles = ["span.jsx-3355682525{display:inline-block;padding:9px 0;font-size:14px;line-height:18px;}", "tbody span.jsx-3355682525{padding:13px 0;}"];
tableCellTextStyles.__hash = "3355682525";
var tableCellTextStylesResponsive = ["@media (max-width:768px){tbody span.jsx-1412524969{padding:3px 0;}}"];
tableCellTextStylesResponsive.__hash = "1412524969";

var TableCellTextStatic = function TableCellTextStatic(_ref) {
  var label = _ref.label;
  return _react.default.createElement("span", {
    className: "jsx-".concat(tableCellTextStyles.__hash)
  }, label, _react.default.createElement(_style.default, {
    id: tableCellTextStyles.__hash
  }, tableCellTextStyles));
};

var TableCellTextResponsive = function TableCellTextResponsive(_ref2) {
  var label = _ref2.label;
  return _react.default.createElement("span", {
    className: "jsx-".concat(tableCellTextStyles.__hash, " jsx-").concat(tableCellTextStylesResponsive.__hash)
  }, label, _react.default.createElement(_style.default, {
    id: tableCellTextStyles.__hash
  }, tableCellTextStyles), _react.default.createElement(_style.default, {
    id: tableCellTextStylesResponsive.__hash
  }, tableCellTextStylesResponsive));
};

var TableCellText = function TableCellText(_ref3) {
  var label = _ref3.label;
  return _react.default.createElement(_tableContext.Consumer, null, function (_ref4) {
    var staticLayout = _ref4.staticLayout;
    var TableCellTextComponent = staticLayout ? TableCellTextStatic : TableCellTextResponsive;
    return _react.default.createElement(TableCellTextComponent, {
      label: label
    });
  });
};

exports.TableCellText = TableCellText;
TableCellText.propTypes = {
  label: _propTypes.default.string
};