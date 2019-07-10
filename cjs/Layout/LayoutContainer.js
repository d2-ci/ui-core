"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutContainer = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _instanceOfComponent = require("../prop-validators/instanceOfComponent");

var _ContainerV = require("./container/ContainerV1");

var _ContainerV2 = require("./container/ContainerV2");

var _ContainerV3 = require("./container/ContainerV3");

var _ContainerV4 = require("./container/ContainerV4");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutContainer = function LayoutContainer(_ref) {
  var withSidebar = _ref.withSidebar,
      withTopBar = _ref.withTopBar,
      children = _ref.children;

  if (withSidebar && withTopBar) {
    return _react.default.createElement(_ContainerV4.ContainerV4, {
      children: children
    });
  }

  if (withSidebar) {
    return _react.default.createElement(_ContainerV3.ContainerV3, {
      children: children
    });
  }

  if (withTopBar) {
    return _react.default.createElement(_ContainerV2.ContainerV2, {
      children: children
    });
  }

  return _react.default.createElement(_ContainerV.ContainerV1, {
    children: children
  });
};

exports.LayoutContainer = LayoutContainer;
LayoutContainer.propTypes = {
  withSidebar: _propTypes.default.bool,
  withTopBar: _propTypes.default.bool
};