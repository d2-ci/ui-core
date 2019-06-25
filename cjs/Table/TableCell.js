"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCell = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      title = _ref.title,
      colspan = _ref.colspan,
      rowspan = _ref.rowspan;
  return _react.default.createElement("td", {
    colspan: colspan,
    rowspan: rowspan,
    className: _style.default.dynamic([["983265312", [title]]])
  }, _react.default.createElement("div", {
    className: _style.default.dynamic([["983265312", [title]]])
  }, children), _react.default.createElement(_style.default, {
    id: "983265312",
    dynamic: [title]
  }, ["td.__jsx-style-dynamic-selector{border-bottom:1px solid #e8edf2;padding:0 12px;font-size:14px;}", "div.__jsx-style-dynamic-selector{min-height:45px;}", "tfooter div.__jsx-style-dynamic-selector{min-height:36px;}", "@media (max-width:768px){td.__jsx-style-dynamic-selector{display:table-row;width:100%;}td.__jsx-style-dynamic-selector:before{content:'".concat(title, ":';display:table-cell;white-space:nowrap;padding:0 16px;font-weight:bold;}tfoot td.__jsx-style-dynamic-selector:before{display:none;}div.__jsx-style-dynamic-selector{display:table-cell;width:100%;padding:0 16px;}}"), "@media (max-width:400px){td.__jsx-style-dynamic-selector{display:block;}td.__jsx-style-dynamic-selector:first-child{margin-top:0;}td.__jsx-style-dynamic-selector:before{display:block;white-space:normal;min-height:24px;line-height:18px;padding:8px 0 0 0;}tfooter td.__jsx-style-dynamic-selector:before{min-height:36px;}div.__jsx-style-dynamic-selector{display:block;padding:0;min-height:32px;}}"]));
};

exports.TableCell = TableCell;
TableCell.propTypes = {
  title: _propTypes.default.string,
  colspan: _propTypes.default.string,
  rowspan: _propTypes.default.string
};