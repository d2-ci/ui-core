"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableBody = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableRow = require("./TableRow");

var _instanceOfComponent = require("../prop-validators/instanceOfComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = function TableBody(_ref) {
  var children = _ref.children;
  return _react.default.createElement("tbody", null, children);
};

exports.TableBody = TableBody;
var childPropType = (0, _instanceOfComponent.instanceOfComponent)(_TableRow.TableRow);
TableBody.propTypes = {
  children: _propTypes.default.oneOfType([childPropType, _propTypes.default.arrayOf(childPropType)]).isRequired
};