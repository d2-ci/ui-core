"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertStack = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes2 = require("@dhis2/prop-types");

var _styles = _interopRequireDefault(require("./styles"));

var _AlertBar = require("../AlertBar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlertStack = function AlertStack(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return (0, _reactDom.createPortal)(_react.default.createElement("div", {
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)(className) || "")
  }, children, _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default)), document.body);
};

exports.AlertStack = AlertStack;
AlertStack.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.arrayOf((0, _propTypes2.instanceOfComponent)(_AlertBar.AlertBar))
};