"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tree = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Arrow = require("../icons/Arrow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function Label(_ref) {
  var icon = _ref.icon,
      children = _ref.children;
  return _react.default.createElement("div", null, children);
};

var Contents = function Contents(_ref2) {
  var children = _ref2.children,
      open = _ref2.open;
  return _react.default.createElement("div", {
    className: "jsx-3677374542" + " " + ((0, _classnames.default)({
      open: open
    }) || "")
  }, children, _react.default.createElement(_style.default, {
    id: "3677374542"
  }, ["div.jsx-3677374542{height:0;overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", ".open.jsx-3677374542{height:auto;}"]));
};

var _ref4 =
/*#__PURE__*/
_react.default.createElement(_Arrow.ArrowDown, null);

var _ref5 =
/*#__PURE__*/
_react.default.createElement("span", null);

var Arrow = function Arrow(_ref3) {
  var hasLeafes = _ref3.hasLeafes,
      open = _ref3.open,
      onToggleOpen = _ref3.onToggleOpen;
  var arrowIcon = hasLeafes ? _ref4 : _ref5;
  return _react.default.createElement("div", {
    className: "jsx-2720529281" + " " + ((0, _classnames.default)('arrow', {
      open: open,
      'has-leafes': hasLeafes
    }) || "")
  }, _react.default.createElement("span", {
    onClick: onToggleOpen,
    className: "jsx-2720529281"
  }, arrowIcon), _react.default.createElement(_style.default, {
    id: "2720529281"
  }, ["div.jsx-2720529281{width:24px;}", "span.jsx-2720529281{display:block;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}", ".open.jsx-2720529281 span.jsx-2720529281{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}"]));
};

var Content = function Content(_ref6) {
  var children = _ref6.children;
  return _react.default.createElement("div", null, children);
};

var Tree = function Tree(_ref7) {
  var children = _ref7.children,
      hasLeafes = _ref7.hasLeafes,
      open = _ref7.open,
      onToggleOpen = _ref7.onToggleOpen;
  var className = (0, _classnames.default)('tree', {
    open: open,
    'has-leafes': hasLeafes
  });
  return _react.default.createElement("div", {
    className: "jsx-446742573" + " " + (className || "")
  }, _react.default.createElement(Arrow, {
    open: open,
    hasLeafes: hasLeafes,
    onToggleOpen: onToggleOpen
  }), _react.default.createElement(Content, {
    children: children
  }), _react.default.createElement(_style.default, {
    id: "446742573"
  }, ["div.jsx-446742573{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]));
};

exports.Tree = Tree;
Tree.propTypes = {
  hasLeafes: _propTypes.default.bool,
  onToggleOpen: _propTypes.default.func,
  open: _propTypes.default.bool
};
Tree.Label = Label;
Tree.Contents = Contents;