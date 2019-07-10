"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.childrenContainsSidebar = exports.childrenContainsTopBar = exports.childrenContainsComponent = void 0;

var _react = require("react");

var _LayoutTopBar = require("./LayoutTopBar");

var _LayoutSidebar = require("./LayoutSidebar");

var childrenContainsComponent = function childrenContainsComponent(component) {
  return function (children) {
    return _react.Children.toArray(children).reduce(function (found, child) {
      return found || child.type === component;
    }, false);
  };
};

exports.childrenContainsComponent = childrenContainsComponent;
var childrenContainsTopBar = childrenContainsComponent(_LayoutTopBar.LayoutTopBar);
exports.childrenContainsTopBar = childrenContainsTopBar;
var childrenContainsSidebar = childrenContainsComponent(_LayoutSidebar.LayoutSidebar);
exports.childrenContainsSidebar = childrenContainsSidebar;