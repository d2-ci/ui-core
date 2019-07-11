"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutContainer = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _instanceOfComponent = require("../prop-validators/instanceOfComponent");

var _helper = require("./helper");

var _container = _interopRequireDefault(require("./container.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var determineLayoutClassName = function determineLayoutClassName(children) {
  var withSidebar = (0, _helper.childrenContainsSidebar)(children);
  var withTopBar = (0, _helper.childrenContainsTopBar)(children);
  if (withSidebar && withTopBar) return 'with-topbar-sidebar';
  if (withSidebar) return 'with-sidebar';
  if (withTopBar) return 'with-topbar';
  return 'content-only';
};

var LayoutContainer = function LayoutContainer(_ref) {
  var children = _ref.children;
  var layoutClassName = determineLayoutClassName(children);
  return _react.default.createElement("div", {
    className: "jsx-".concat(_container.default.__hash) + " " + ((0, _classnames.default)('container', layoutClassName) || "")
  }, children, _react.default.createElement(_style.default, {
    id: _container.default.__hash
  }, _container.default));
};

exports.LayoutContainer = LayoutContainer;