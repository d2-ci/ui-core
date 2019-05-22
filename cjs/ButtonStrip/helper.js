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
  var count = 0;

  _react.default.Children.forEach(prop, function (child) {
    count++;

    if (child.type !== _Button.Button) {
      error = new Error("".concat(componentName, " children should be of type 'Button'."));
    }
  });

  if (count < 2) {
    error = new Error("".concat(componentName, " should have at least 2 children."));
  }

  return error;
};

exports.buttonArrayPropType = buttonArrayPropType;