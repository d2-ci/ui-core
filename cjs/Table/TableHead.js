"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHead = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _tableContext = require("./tableContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableHeadStylesResponsive = ["@media (max-width:768px){thead.jsx-3333755757{display:none;}}"];
tableHeadStylesResponsive.__hash = "3333755757";

var THeadStatic = function THeadStatic(_ref) {
  var children = _ref.children;
  return _react.default.createElement("thead", null, children);
};

var THeadResponsive = function THeadResponsive(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("thead", {
    className: "jsx-".concat(tableHeadStylesResponsive.__hash)
  }, children, _react.default.createElement(_style.default, {
    id: tableHeadStylesResponsive.__hash
  }, tableHeadStylesResponsive));
};

var TableHead = function TableHead(_ref3) {
  var children = _ref3.children;

  var _useTableContext = (0, _tableContext.useTableContext)(),
      staticLayout = _useTableContext.staticLayout;

  var THead = staticLayout ? THeadStatic : THeadResponsive;
  return _react.default.createElement(THead, null, children);
};

exports.TableHead = TableHead;