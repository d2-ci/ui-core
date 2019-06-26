"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCellText = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableCellText = function TableCellText(_ref) {
  var label = _ref.label;
  return _react.default.createElement("span", {
    className: "jsx-1414322628"
  }, label, _react.default.createElement(_style.default, {
    id: "1414322628"
  }, ["span.jsx-1414322628{display:inline-block;padding:9px 0;font-size:14px;line-height:18px;}", "tbody span.jsx-1414322628{padding:13px 0;}", "@media (max-width:400px){tbody span.jsx-1414322628{padding:3px 0;}}"]));
};

exports.TableCellText = TableCellText;
TableCellText.propTypes = {
  label: _propTypes.default.string
};