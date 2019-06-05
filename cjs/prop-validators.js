"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reactRef = exports.mutuallyExclusive = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mutuallyExclusive = function mutuallyExclusive(exlusivePropNames, propType) {
  return function (props, propName, componentName) {
    if (exlusivePropNames.length === 0) {
      return new Error("mutuallyExclusive was called without any arguments for property '".concat(propName, "'."));
    } // This is how to programatically invoke a propTypes check
    // https://github.com/facebook/prop-types#proptypescheckproptypes


    _propTypes.default.checkPropTypes(_defineProperty({}, propName, propType), props, propName, componentName);

    if (props[propName]) {
      var thruthySiblingPropName = exlusivePropNames.find(function (name) {
        return props[name] && name !== propName;
      });

      if (thruthySiblingPropName) {
        return new Error("Property '".concat(propName, "' is mutually exclusive with '").concat(thruthySiblingPropName, "', but both have a value."));
      }
    }

    return null;
  };
};

exports.mutuallyExclusive = mutuallyExclusive;

var reactRef = _propTypes.default.shape({
  current: _propTypes.default.element
});

exports.reactRef = reactRef;