"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Node = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Arrow = require("../icons/Arrow");

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contents = function Contents(_ref) {
  var children = _ref.children,
      open = _ref.open;
  return _react.default.createElement("div", {
    className: "jsx-3677374542" + " " + ((0, _classnames.default)('tree__contents', {
      open: open
    }) || "")
  }, children, _react.default.createElement(_style.default, {
    id: "3677374542"
  }, ["div.jsx-3677374542{height:0;overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", ".open.jsx-3677374542{height:auto;}"]));
};

var _ref3 =
/*#__PURE__*/
_react.default.createElement(_Arrow.ArrowDown, null);

var _ref4 =
/*#__PURE__*/
_react.default.createElement("span", null);

var Arrow = function Arrow(_ref2) {
  var hasLeaves = _ref2.hasLeaves,
      open = _ref2.open,
      onOpen = _ref2.onOpen,
      onClose = _ref2.onClose;
  var arrowIcon = hasLeaves ? _ref3 : _ref4;
  var onClick = open ? onClose : onOpen;
  return _react.default.createElement("div", {
    className: _style.default.dynamic([["930079085", [_theme.colors.grey400, _theme.colors.grey700]]]) + " " + ((0, _classnames.default)('tree__arrow', {
      open: open,
      'has-leaves': hasLeaves
    }) || "")
  }, _react.default.createElement("span", {
    onClick: onClick,
    className: _style.default.dynamic([["930079085", [_theme.colors.grey400, _theme.colors.grey700]]])
  }, arrowIcon), _react.default.createElement(_style.default, {
    id: "930079085",
    dynamic: [_theme.colors.grey400, _theme.colors.grey700]
  }, ["div.__jsx-style-dynamic-selector{width:24px;position:relative;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", "div.__jsx-style-dynamic-selector:after{background:".concat(_theme.colors.grey400, ";height:calc(100% - 24px);left:12px;position:absolute;top:15px;width:1px;z-index:1;}"), ".has-leaves.open.__jsx-style-dynamic-selector:after{content:'';}", "span.__jsx-style-dynamic-selector{display:block;position:relative;z-index:2;fill:".concat(_theme.colors.grey700, ";}"), "div.__jsx-style-dynamic-selector svg{vertical-align:top;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}", ".open.__jsx-style-dynamic-selector svg{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}"]));
};

var Content = function Content(_ref5) {
  var open = _ref5.open,
      children = _ref5.children,
      label = _ref5.label;
  return _react.default.createElement("div", null, label, _react.default.createElement(Contents, {
    open: open
  }, children));
};

var Node = function Node(_ref6) {
  var open = _ref6.open,
      component = _ref6.component,
      children = _ref6.children,
      onOpen = _ref6.onOpen,
      onClose = _ref6.onClose;
  var hasLeaves = !!_react.default.Children.toArray(children).filter(function (i) {
    return i;
  }).length;
  var className = (0, _classnames.default)('tree', {
    open: open,
    'has-leaves': hasLeaves
  });
  return _react.default.createElement("div", {
    className: "jsx-446742573" + " " + (className || "")
  }, _react.default.createElement(Arrow, {
    open: open,
    hasLeaves: hasLeaves,
    onOpen: onOpen,
    onClose: onClose
  }), _react.default.createElement(Content, {
    open: open,
    label: component,
    children: children
  }), _react.default.createElement(_style.default, {
    id: "446742573"
  }, ["div.jsx-446742573{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]));
};

exports.Node = Node;
Node.propTypes = {
  component: _propTypes.default.element.isRequired,
  open: _propTypes.default.bool,
  onOpen: _propTypes.default.func,
  onClose: _propTypes.default.func
};