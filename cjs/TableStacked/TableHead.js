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

var tableHeadStyles = ["thead.jsx-2941265887{display:none;}"];
tableHeadStyles.__hash = "2941265887";

var TableHead = function TableHead(_ref) {
  var children = _ref.children;
  return _react.default.createElement("thead", {
    className: "jsx-".concat(tableHeadStyles.__hash)
  }, children, _react.default.createElement(_style.default, {
    id: tableHeadStyles.__hash
  }, tableHeadStyles));
};

exports.TableHead = TableHead;
var childPropType = (0, _instanceOfComponent.instanceOfComponent)(_TableRowHead.TableRowHead);
TableHead.propTypes = {
  children: _propTypes.default.oneOfType([childPropType, _propTypes.default.arrayOf(childPropType)]).isRequired
};