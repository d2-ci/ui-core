"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHead = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableRowHead = require("./TableRowHead");

var _instanceOfComponent = require("../prop-validators/instanceOfComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHead = function TableHead(_ref) {
  var children = _ref.children;
  return _react.default.createElement("thead", null, children);
};

exports.TableHead = TableHead;
var childPropType = (0, _instanceOfComponent.instanceOfComponent)(_TableRowHead.TableRowHead);
TableHead.propTypes = {
  children: _propTypes.default.oneOfType([childPropType, _propTypes.default.arrayOf(childPropType)]).isRequired
};