"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tableContext = require("./tableContext");

var _TableBody = require("./TableBody");

var _TableFoot = require("./TableFoot");

var _TableHead = require("./TableHead");

var _instanceOfComponent = require("../prop-validators/instanceOfComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableStyles = ["table.jsx-1002353828{display:block;border:0;background-color:#ffffff;min-width:100%;text-align:left;border-collapse:collapse;vertical-align:top;}"];
tableStyles.__hash = "1002353828";

var Table = function Table(_ref) {
  var children = _ref.children;
  return _react.default.createElement("table", {
    className: "jsx-".concat(tableStyles.__hash)
  }, children, _react.default.createElement(_style.default, {
    id: tableStyles.__hash
  }, tableStyles));
};

exports.Table = Table;

var childPropType = _propTypes.default.oneOfType([(0, _instanceOfComponent.instanceOfComponent)(_TableHead.TableHead), (0, _instanceOfComponent.instanceOfComponent)(_TableBody.TableBody), (0, _instanceOfComponent.instanceOfComponent)(_TableFoot.TableFoot)]);

Table.propTypes = {
  children: _propTypes.default.oneOfType([childPropType, _propTypes.default.arrayOf(childPropType)]).isRequired
};