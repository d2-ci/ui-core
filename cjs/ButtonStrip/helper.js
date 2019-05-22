"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonArrayPropType = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonArrayPropType = function buttonArrayPropType(props, propName, componentName) {
  var prop = props[propName];
  var error = null;

  if (_react.default.Children.count(prop) < 2) {
    error = new Error("".concat(componentName, " should have at least 2 children."));
  }

  _react.default.Children.forEach(prop, function (child) {
    if (child.type !== _Button.Button) {
      error = new Error("".concat(componentName, " children should be of type 'Button'."));
    }
  });

  return error;
};

exports.buttonArrayPropType = buttonArrayPropType;