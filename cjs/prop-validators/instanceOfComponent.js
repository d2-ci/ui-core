"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instanceOfComponent = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instanceOfComponentFactory = function instanceOfComponentFactory(Component, isRequired) {
  return function (props, propName) {
    var children = props[propName];

    var count = _react.default.Children.count(children);

    if (isRequired && count === 0) {
      return new Error("".concat(propName, " is required."));
    }

    if (count > 1) {
      return new Error("Prop validator 'instanceOfComponent' expected 1 component instance, instead found ".concat(count, "."));
    }

    if (children.type !== Component) {
      var componentName = Component.name || Component.displayName;
      return new Error("Child at index ".concat(propName, " is not an instance of component ").concat(componentName, "."));
    }

    return null;
  };
};

var instanceOfComponent = function instanceOfComponent(Component) {
  var fn = instanceOfComponentFactory(Component, false);
  fn.isRequired = instanceOfComponentFactory(Component, true);
  return fn;
};

exports.instanceOfComponent = instanceOfComponent;