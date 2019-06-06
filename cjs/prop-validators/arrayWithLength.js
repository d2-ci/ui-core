"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayWithLength = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var arrayWithLengthFactory = function arrayWithLengthFactory(_ref) {
  var _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? Infinity : _ref$max,
      propType = _ref.propType,
      isRequired = _ref.isRequired;
  return function (props, propName, componentName) {
    var arr = props[propName];

    if (isRequired && typeof arr === 'undefined') {
      return new Error("".concat(propName, " is required."));
    }

    if (arr && !Array.isArray(arr)) {
      return new Error("".concat(propName, " is not an array."));
    }

    if (arr && arr.length > max) {
      return new Error("".concat(propName, " array exceeds the maximum length of ").concat(max));
    }

    if (arr && arr.length < min) {
      return new Error("".concat(propName, " array length lower than the minimum of ").concat(min));
    }

    if (arr && propType) {
      var len = arr.length;

      for (var i = 0; i < len; i++) {
        _propTypes.default.checkPropTypes(_defineProperty({}, i, propType), arr, propName, componentName);
      }
    }

    return null;
  };
};

var arrayWithLength = function arrayWithLength(min, max, propType) {
  var fn = arrayWithLengthFactory({
    min: min,
    max: max,
    propType: propType,
    isRequired: false
  });
  fn.isRequired = arrayWithLengthFactory({
    min: min,
    max: max,
    propType: propType,
    isRequired: true
  });
  return fn;
};

exports.arrayWithLength = arrayWithLength;