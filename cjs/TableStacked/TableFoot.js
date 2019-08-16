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

var tableFootStyles = ["tfoot.jsx-2482116578{display:block;margin-top:32px;}"];
tableFootStyles.__hash = "2482116578";

var TableFoot = function TableFoot(_ref) {
  var children = _ref.children;
  return _react.default.createElement("tfoot", {
    className: "jsx-".concat(tableFootStyles.__hash)
  }, children, _react.default.createElement(_style.default, {
    id: tableFootStyles.__hash
  }, tableFootStyles));
};

exports.TableFoot = TableFoot;
var childPropType = (0, _instanceOfComponent.instanceOfComponent)(_TableRow.TableRow);
TableFoot.propTypes = {
  children: _propTypes.default.oneOfType([childPropType, _propTypes.default.arrayOf(childPropType)]).isRequired
};