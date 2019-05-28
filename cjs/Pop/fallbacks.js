"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FALLBACKS = void 0;

var _positions = require("./positions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var invertPointHorizontal = function invertPointHorizontal(point) {
  return _objectSpread({}, point, {
    horizontal: point.horizontal === 'right' ? 'left' : point.horizontal === 'left' ? 'right' : point.horizontal
  });
};

var invertPointVertical = function invertPointVertical(point) {
  return _objectSpread({}, point, {
    vertical: point.vertical === 'top' ? 'bottom' : point.vertical === 'bottom' ? 'top' : point.vertical
  });
};

var invertHorizontal = function invertHorizontal(position) {
  return position.map(invertPointHorizontal);
};

var invertVertical = function invertVertical(position) {
  return position.map(invertPointVertical);
};

var invertBoth = function invertBoth(position) {
  return position.map(invertPointVertical).map(invertPointHorizontal);
};

var isSpecialCase = function isSpecialCase(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      anchor = _ref2[0],
      pop = _ref2[1];

  var aVertical = anchor.vertical,
      aHorizontal = anchor.horizontal;
  var pVertical = pop.vertical,
      pHorizontal = pop.horizontal;
  var all = [aVertical, aHorizontal, pVertical, pHorizontal];
  return 2 < all.reduce(function (centeredEdgeAmount, edge) {
    return edge === 'center' ? centeredEdgeAmount + 1 : centeredEdgeAmount;
  }, 0);
};

var generateFallbacksForSpecialCase = function generateFallbacksForSpecialCase(position, invertAnchor) {
  var _position = _slicedToArray(position, 2),
      anchor = _position[0],
      pop = _position[1];

  var _ref3 = invertAnchor ? anchor : pop,
      vertical = _ref3.vertical;

  var isVerticalCentered = vertical === 'center';
  return [invertBoth(position)].concat(_toConsumableArray(invertAnchor ? isVerticalCentered ? [_positions.positions.TOP_CENTER_CENTER_CENTER, _positions.positions.BOTTOM_CENTER_CENTER_CENTER] : [_positions.positions.CENTER_RIGHT_CENTER_CENTER, _positions.positions.CENTER_LEFT_CENTER_CENTER] : isVerticalCentered ? [_positions.positions.CENTER_CENTER_TOP_CENTER, _positions.positions.CENTER_CENTER_BOTTOM_CENTER] : [_positions.positions.CENTER_CENTER_CENTER_RIGHT, _positions.positions.CENTER_CENTER_CENTER_LEFT]));
};

var generateFallbacksForAllSpecialCases = function generateFallbacksForAllSpecialCases(position) {
  var _position2 = _slicedToArray(position, 2),
      anchor = _position2[0],
      pop = _position2[1];

  var aVertical = anchor.vertical,
      aHorizontal = anchor.horizontal;
  var pVertical = pop.vertical,
      pHorizontal = pop.horizontal;

  if (aVertical === 'center' && aHorizontal === 'center') {
    if (pVertical === 'center' && pHorizontal === 'center') {
      return [_positions.positions.TOP_CENTER_BOTTOM_CENTER, _positions.positions.BOTTOM_CENTER_TOP_CENTER, _positions.positions.RIGHT_CENTER_LEFT_CENTER, _positions.positions.LEFT_CENTER_RIGHT_CENTER];
    }

    return generateFallbacksForSpecialCase(position, false);
  }

  return generateFallbacksForSpecialCase(position, true);
};

var generateFallbacks = function generateFallbacks(position) {
  return isSpecialCase(position) ? generateFallbacksForAllSpecialCases(position) : [invertHorizontal(position), invertVertical(position), invertBoth(position)];
};
/**
 * This determins the order in which to check whether the pop will fit
 * on the screen or not, if the provided position doesn't fit, this order
 * will be used starting at the next position.
 *
 * Structure of a position is:
 * [
 *   { vertical: string; horizontal: string }, // anchor
 *   { vertical: string; horizontal: string }, // pop
 *   [ ...Fallback positions ]
 * ]
 */


var FALLBACKS = _positions.combinations.map(function (position) {
  return [].concat(_toConsumableArray(position), [generateFallbacks(position)]);
});

exports.FALLBACKS = FALLBACKS;