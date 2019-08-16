"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableBody = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tableContext = require("./tableContext");

var _TableRow = require("./TableRow");

var _instanceOfComponent = require("../prop-validators/instanceOfComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableBodyStylesResponsive = ["tbody.jsx-2389753173{display:block;}"];
tableBodyStylesResponsive.__hash = "2389753173";

var TableBody = function TableBody(_ref) {
  var children = _ref.children;
  return _react.default.createElement("tbody", {
    className: "jsx-".concat(tableBodyStylesResponsive.__hash)
  }, children, _react.default.createElement(_style.default, {
    id: tableBodyStylesResponsive.__hash
  }, tableBodyStylesResponsive));
};

exports.TableBody = TableBody;
var childPropType = (0, _instanceOfComponent.instanceOfComponent)(_TableRow.TableRow);
TableBody.propTypes = {
  children: _propTypes.default.oneOfType([childPropType, _propTypes.default.arrayOf(childPropType)]).isRequired
};