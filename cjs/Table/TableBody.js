"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableBody = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _tableContext = require("./tableContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableBodyStylesResponsive = ["@media (max-width:768px){tbody.jsx-2019227652{display:block;}}"];
tableBodyStylesResponsive.__hash = "2019227652";

var TBodyStatic = function TBodyStatic(_ref) {
  var children = _ref.children;
  return _react.default.createElement("tbody", null, children);
};

var TBodyResponsive = function TBodyResponsive(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("tbody", {
    className: "jsx-".concat(tableBodyStylesResponsive.__hash)
  }, children, _react.default.createElement(_style.default, {
    id: tableBodyStylesResponsive.__hash
  }, tableBodyStylesResponsive));
};

var TableBody = function TableBody(_ref3) {
  var children = _ref3.children;

  var _useTableContext = (0, _tableContext.useTableContext)(),
      staticLayout = _useTableContext.staticLayout;

  var TBody = staticLayout ? TBodyStatic : TBodyResponsive;
  return _react.default.createElement(TBody, null, children);
};

exports.TableBody = TableBody;