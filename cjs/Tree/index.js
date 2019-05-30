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

var _theme = require("../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function Label(_ref) {
  var icon = _ref.icon,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: "jsx-187745036"
  }, children, _react.default.createElement(_style.default, {
    id: "187745036"
  }, ["div.jsx-187745036{min-height:24px;padding:3px 0;}"]));
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

var arrowStyle = {
  styles: _react.default.createElement(_style.default, {
    id: "2568580958"
  }, ["div.jsx-2568580958>svg{fill:#e2e2e2;}"]),
  className: "jsx-2568580958"
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
      onToggleOpen = _ref3.onToggleOpen,
      arrowTopOffset = _ref3.arrowTopOffset;
  var arrowIcon = hasLeafes ? _ref4 : _ref5;
  return _react.default.createElement("div", {
    className: _style.default.dynamic([["2351483053", [_theme.colors.grey400, arrowTopOffset, _theme.colors.grey700]]]) + " " + ((0, _classnames.default)('arrow', arrowStyle.className, {
      open: open,
      'has-leafes': hasLeafes
    }) || "")
  }, _react.default.createElement("span", {
    onClick: onToggleOpen,
    className: _style.default.dynamic([["2351483053", [_theme.colors.grey400, arrowTopOffset, _theme.colors.grey700]]])
  }, arrowIcon), _react.default.createElement(_style.default, {
    id: "2351483053",
    dynamic: [_theme.colors.grey400, arrowTopOffset, _theme.colors.grey700]
  }, ["div.__jsx-style-dynamic-selector{width:24px;position:relative;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", ".has-leafes.open.__jsx-style-dynamic-selector:after{content:'';background:".concat(_theme.colors.grey400, ";height:calc(100% - 24px);left:12px;position:absolute;top:15px;width:1px;z-index:1;}"), "span.__jsx-style-dynamic-selector{display:block;padding-top:".concat(arrowTopOffset, ";position:relative;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);z-index:2;fill:").concat(_theme.colors.grey700, ";}"), ".open.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}"]), arrowStyle.styles);
};

var Content = function Content(_ref6) {
  var children = _ref6.children;
  return _react.default.createElement("div", null, children);
};

var Tree = function Tree(_ref7) {
  var children = _ref7.children,
      hasLeafes = _ref7.hasLeafes,
      open = _ref7.open,
      onToggleOpen = _ref7.onToggleOpen,
      arrowTopOffset = _ref7.arrowTopOffset;
  var className = (0, _classnames.default)('tree', {
    open: open,
    'has-leafes': hasLeafes
  });
  return _react.default.createElement("div", {
    className: "jsx-446742573" + " " + (className || "")
  }, _react.default.createElement(Arrow, {
    open: open,
    hasLeafes: hasLeafes,
    onToggleOpen: onToggleOpen,
    arrowTopOffset: arrowTopOffset
  }), _react.default.createElement(Content, {
    children: children
  }), _react.default.createElement(_style.default, {
    id: "446742573"
  }, ["div.jsx-446742573{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]));
};

exports.Tree = Tree;
Tree.propTypes = {
  open: _propTypes.default.bool,
  hasLeafes: _propTypes.default.bool,
  onToggleOpen: _propTypes.default.func,
  arrowTopOffset: _propTypes.default.string
};
Tree.defaultProps = {
  arrowTopOffset: '4px'
};
Tree.Label = Label;
Tree.Contents = Contents;