"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuList = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuList = function MenuList(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react.default.createElement("ul", {
    className: "jsx-3549878755" + " " + (className || "")
  }, children, _react.default.createElement(_style.default, {
    id: "3549878755"
  }, ["ul.jsx-3549878755{display:block;position:relative;width:100%;margin:0;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]));
};

exports.MenuList = MenuList;
MenuList.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.any.isRequired
};