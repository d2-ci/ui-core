"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableFoot = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tableContext = require("./tableContext");

var _TableRow = require("./TableRow");

var _instanceOfComponent = require("../prop-validators/instanceOfComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableFootStylesResponsive = ["@media (max-width:768px){tfoot.jsx-4197728934{display:block;margin-top:32px;}}"];
tableFootStylesResponsive.__hash = "4197728934";

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
  return _react.default.createElement(_tableContext.Consumer, null, function (_ref4) {
    var staticLayout = _ref4.staticLayout;
    var TFoot = staticLayout ? TFootStatic : TFootResponsive;
    return _react.default.createElement(TFoot, null, children);
  });
};

exports.TableFoot = TableFoot;
var childPropType = (0, _instanceOfComponent.instanceOfComponent)(_TableRow.TableRow);
TableFoot.propTypes = {
  children: _propTypes.default.oneOfType([childPropType, _propTypes.default.arrayOf(childPropType)]).isRequired
};