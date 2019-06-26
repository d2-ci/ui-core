"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableFoot = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _tableContext = require("./tableContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableFootStylesResponsive = ["@media (max-width:768px){tfoot.jsx-1784078313{display:block;margin-top:16px;}}", "@media (max-width:400px){tfoot.jsx-1784078313{margin-top:32px;}}"];
tableFootStylesResponsive.__hash = "1784078313";

var TFootStatic = function TFootStatic(_ref) {
  var children = _ref.children;
  return _react.default.createElement("tfoot", null, children);
};

var TFootResponsive = function TFootResponsive(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("tfoot", {
    className: "jsx-".concat(tableFootStylesResponsive.__hash)
  }, children, _react.default.createElement(_style.default, {
    id: tableFootStylesResponsive.__hash
  }, tableFootStylesResponsive));
};

var TableFoot = function TableFoot(_ref3) {
  var children = _ref3.children;

  var _useTableContext = (0, _tableContext.useTableContext)(),
      staticLayout = _useTableContext.staticLayout;

  var TFoot = staticLayout ? TFootStatic : TFootResponsive;
  return _react.default.createElement(TFoot, null, children);
};

exports.TableFoot = TableFoot;