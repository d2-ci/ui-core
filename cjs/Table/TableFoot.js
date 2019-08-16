"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableFoot = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableRow = require("./TableRow");

var _instanceOfComponent = require("../prop-validators/instanceOfComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableFoot = function TableFoot(_ref) {
  var children = _ref.children;
  return _react.default.createElement("tfoot", null, children);
};

exports.TableFoot = TableFoot;
var childPropType = (0, _instanceOfComponent.instanceOfComponent)(_TableRow.TableRow);
TableFoot.propTypes = {
  children: _propTypes.default.oneOfType([childPropType, _propTypes.default.arrayOf(childPropType)]).isRequired
};