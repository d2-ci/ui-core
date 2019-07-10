"use strict";

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

var childrenContainsTopBar = childrenContainsComponent(_LayoutTopBar.LayoutTopBar);
var childrenContainsSidebar = childrenContainsComponent(_LayoutSidebar.LayoutSidebar);