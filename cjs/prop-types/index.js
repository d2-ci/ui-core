"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boolAndMutuallyExclusiveWith = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var boolAndMutuallyExclusiveWith = function boolAndMutuallyExclusiveWith() {
  for (var _len = arguments.length, excludedPropNames = new Array(_len), _key = 0; _key < _len; _key++) {
    excludedPropNames[_key] = arguments[_key];
  }

  return function (props, propName, componentName) {
    var prop = props[propName];

    var propType = _typeof(prop);

    var error = null;

    if (excludedPropNames.length === 0) {
      error = new Error("boolAndMutuallyExclusiveWith was called without any arguments for property '".concat(propName, "'."));
    } // may be either true/false or undefined


    if (propType !== 'boolean' && propType !== 'undefined') {
      error = new Error("'".concat(propName, "' should be boolean. Instead received type '").concat(propType, "'."));
    }

    if (prop && excludedPropNames.some(function (propName) {
      return props[propName];
    })) {
      var names = excludedPropNames.join(', ');
      error = new Error("Property '".concat(propName, "' is mutually exclusive with '").concat(names, "', but multiple values are true."));
    }

    return error;
  };
};

exports.boolAndMutuallyExclusiveWith = boolAndMutuallyExclusiveWith;