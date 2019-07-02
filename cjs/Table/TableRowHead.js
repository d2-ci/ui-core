"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableRowHead = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableCellHead = require("./TableCellHead");

var _TableRow = require("./TableRow");

var _instanceOfComponent = require("../prop-validators/instanceOfComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableRowHead = function TableRowHead(props) {
  return _react.default.createElement(_TableRow.TableRow, props);
};

exports.TableRowHead = TableRowHead;
var childPropType = (0, _instanceOfComponent.instanceOfComponent)(_TableCellHead.TableCellHead);
TableRowHead.propTypes = {
  children: _propTypes.default.oneOfType([childPropType, _propTypes.default.arrayOf(childPropType)]).isRequired
};