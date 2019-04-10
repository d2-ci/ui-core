"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputFontSizeValue = exports.innerSpacingSides = exports.heightDense = exports.heightDefault = exports.inputSizesPropTypes = exports.inputSizes = exports.inputKindPropTypes = exports.inputKinds = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Variants
 * ========
 */
var inputKinds = {
  FILLED: 'filled',
  OUTLINED: 'outlined'
};
exports.inputKinds = inputKinds;

var inputKindPropTypes = _propTypes.default.oneOf([inputKinds.FILLED, inputKinds.OUTLINED]);

exports.inputKindPropTypes = inputKindPropTypes;
var inputSizes = {
  DEFAULT: 'default',
  DENSE: 'dense'
};
exports.inputSizes = inputSizes;

var inputSizesPropTypes = _propTypes.default.oneOf([inputSizes.DEFAULT, inputSizes.DENSE]);
/**
 * Box model values
 * ================
 */


exports.inputSizesPropTypes = inputSizesPropTypes;
var heightDefault = '56px';
exports.heightDefault = heightDefault;
var heightDense = '44px';
exports.heightDense = heightDense;
var innerSpacingSides = '16px';
/**
 * Font sizes
 * ==========
 */

exports.innerSpacingSides = innerSpacingSides;
var inputFontSizeValue = '16px';
exports.inputFontSizeValue = inputFontSizeValue;