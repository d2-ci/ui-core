"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHead = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tableContext = require("./tableContext");

var _TableRowHead = require("./TableRowHead");

var _instanceOfComponent = require("../prop-validators/instanceOfComponent");

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
  return _react.default.createElement(_tableContext.Consumer, null, function (_ref4) {
    var staticLayout = _ref4.staticLayout;
    var THead = staticLayout ? THeadStatic : THeadResponsive;
    return _react.default.createElement(THead, null, children);
  });
};

exports.TableHead = TableHead;
var childPropType = (0, _instanceOfComponent.instanceOfComponent)(_TableRowHead.TableRowHead);
TableHead.propTypes = {
  children: _propTypes.default.oneOfType([childPropType, _propTypes.default.arrayOf(childPropType)]).isRequired
};