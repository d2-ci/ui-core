"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propPosition = exports.arePositionsEqual = exports.getPosition = exports.getScrollAndClientOffset = exports.Content = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rotation = require("./rotation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Content = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      position = _ref.position,
      level = _ref.level;
  return _react.default.createElement("div", {
    ref: ref,
    style: position,
    className: _style.default.dynamic([["1214024287", [level + 99999999 || 1]]])
  }, children, _react.default.createElement(_style.default, {
    id: "1214024287",
    dynamic: [level + 99999999 || 1]
  }, ["div.__jsx-style-dynamic-selector{background:white;box-shadow:0 0 3px rgba(0,0,0,0.6);max-height:100vh;overflow-y:auto;position:fixed;z-index:".concat(level + 99999999 || 1, ";}")]));
});

exports.Content = Content;

var getScrollAndClientOffset = function getScrollAndClientOffset() {
  var body = document.body;
  var docEl = document.documentElement;
  return {
    scrollTop: window.pageYOffset || docEl.scrollTop || body.scrollTop,
    scrollLeft: window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
    clientTop: docEl.clientTop || body.clientTop || 0,
    clientLeft: docEl.clientLeft || body.clientLeft || 0
  };
};

exports.getScrollAndClientOffset = getScrollAndClientOffset;

var getPosition = function getPosition(_ref2) {
  var pop = _ref2.pop,
      anchor = _ref2.anchor,
      popPoint = _ref2.popPoint,
      anchorPoint = _ref2.anchorPoint,
      isNotRoot = _ref2.isNotRoot;

  if (!anchor || !pop) {
    return {
      left: 'auto',
      top: 'auto'
    };
  }

  var anchorRect = anchor.getBoundingClientRect();
  var popRect = pop.getBoundingClientRect();
  var relativePosition = getRelativePosition(anchorRect, popRect, anchorPoint, popPoint);

  var _relativePosition = _slicedToArray(relativePosition, 2),
      realAnchorPoint = _relativePosition[0],
      realPopPoint = _relativePosition[1];

  return _objectSpread({}, getPositionHorizontal(anchorRect, popRect, realAnchorPoint, realPopPoint), getPositionVertical(anchorRect, popRect, realAnchorPoint, realPopPoint, isNotRoot));
  return styles;
};

exports.getPosition = getPosition;

var getRelativePosition = function getRelativePosition(anchorRect, popRect, anchorPoint, popPoint) {
  var startRotation = [anchorPoint, popPoint];

  var startRotationIndex = _rotation.ROTATION.findIndex(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        anchor = _ref4[0],
        pop = _ref4[1];

    return anchor.vertical === startRotation[0].vertical && anchor.horizontal === startRotation[0].horizontal && pop.vertical === startRotation[1].vertical && pop.horizontal === startRotation[1].horizontal;
  });

  var updatedRotation = startRotationIndex === 0 ? _rotation.ROTATION : [].concat(_toConsumableArray(_rotation.ROTATION.slice(startRotationIndex)), _toConsumableArray(_rotation.ROTATION.slice(0, startRotationIndex)));
  var relativePosition = startRotation;

  for (var i = 0, l = updatedRotation.length; i < l; ++i) {
    var curRotation = updatedRotation[i];

    var _curRotation = _slicedToArray(curRotation, 2),
        curAnchorPoint = _curRotation[0],
        curPopPoint = _curRotation[1];

    if (doesPositionFitOnScreen(anchorRect, popRect, curAnchorPoint, curPopPoint)) {
      relativePosition = curRotation;
      break;
    }
  }

  return relativePosition;
};

var doesPositionFitOnScreen = function doesPositionFitOnScreen(anchor, pop, anchorPoint, popPoint) {
  return doesPositionFitOnScreenVertically(anchor, pop, anchorPoint, popPoint) && doesPositionFitOnScreenHorizontally(anchor, pop, anchorPoint, popPoint);
};

var doesPositionFitOnScreenHorizontally = function doesPositionFitOnScreenHorizontally(anchor, pop, anchorPoint, popPoint) {
  var viewportWidth = window.innerWidth;
  var anchorX = anchor.x,
      anchorWidth = anchor.width;
  var popX = pop.x,
      popWidth = pop.width;
  var aHorizontal = anchorPoint.horizontal;
  var pHorizontal = popPoint.horizontal;

  if (aHorizontal === 'left' && pHorizontal === 'right') {
    return anchorX - popWidth >= 0;
  }

  if (aHorizontal === 'center' && pHorizontal === 'right') {
    return anchorX + anchorWidth / 2 - popWidth >= 0;
  }

  if (aHorizontal === 'right' && pHorizontal === 'right') {
    return anchorX + anchorWidth - popWidth >= 0;
  }

  if (aHorizontal === 'left' && pHorizontal === 'left') {
    return anchorX + popWidth <= viewportWidth;
  }

  if (aHorizontal === 'center' && pHorizontal === 'left') {
    return anchorX + anchorWidth / 2 + popWidth <= viewportWidth;
  }

  if (aHorizontal === 'right' && pHorizontal === 'left') {
    return anchorWidth + anchorX + popWidth <= viewportWidth;
  }

  if (aHorizontal === 'left' && pHorizontal === 'center') {
    return anchorX + popWidth / 2 <= viewportWidth;
  }

  if (aHorizontal === 'center' && pHorizontal === 'center') {
    return anchorX + anchorWidth / 2 + popWidth / 2 <= viewportWidth;
  }

  if (aHorizontal === 'right' && pHorizontal === 'center') {
    return anchorWidth + anchorX + popWidth / 2 <= viewportWidth;
  }

  return false;
};

var doesPositionFitOnScreenVertically = function doesPositionFitOnScreenVertically(anchor, pop, anchorPoint, popPoint) {
  var viewportHeight = window.innerHeight;
  var anchorY = anchor.y,
      anchorHeight = anchor.width;
  var popY = pop.y,
      popHeight = pop.width;
  var aVertical = anchorPoint.vertical;
  var pVertical = popPoint.vertical;

  if (aVertical === 'top' && pVertical === 'bottom') {
    return anchorY - popHeight >= 0;
  }

  if (aVertical === 'center' && pVertical === 'bottom') {
    return anchorY + anchorHeight / 2 - popHeight >= 0;
  }

  if (aVertical === 'bottom' && pVertical === 'bottom') {
    return anchorY + anchorHeight - popHeight >= 0;
  }

  if (aVertical === 'top' && pVertical === 'top') {
    return anchorY + popHeight <= viewportHeight;
  }

  if (aVertical === 'center' && pVertical === 'top') {
    return anchorY + anchorHeight / 2 + popHeight <= viewportHeight;
  }

  if (aVertical === 'bottom' && pVertical === 'top') {
    return anchorHeight + anchorY + popHeight <= viewportHeight;
  }

  if (aVertical === 'top' && pVertical === 'center') {
    return anchorY + popHeight / 2 <= viewportHeight;
  }

  if (aVertical === 'center' && pVertical === 'center') {
    return anchorY + anchorHeight / 2 + popHeight / 2 <= viewportHeight;
  }

  if (aVertical === 'bottom' && pVertical === 'center') {
    return anchorHeight + anchorY + popHeight / 2 <= viewportHeight;
  }

  return false;
};

var getPositionHorizontal = function getPositionHorizontal(anchorRect, popRect, anchorPoint, popPoint) {
  var left;
  var viewportWidth = window.innerWidth;
  var anchorX = anchorRect.x,
      anchorWidth = anchorRect.width;
  var popX = popRect.x,
      popWidth = popRect.width;
  var aHorizontal = anchorPoint.horizontal;
  var pHorizontal = popPoint.horizontal;

  if (aHorizontal === 'left' && pHorizontal === 'right') {
    left = anchorX - popWidth;
  }

  if (aHorizontal === 'center' && pHorizontal === 'right') {
    left = anchorX + anchorWidth / 2 - popWidth;
  }

  if (aHorizontal === 'right' && pHorizontal === 'right') {
    left = anchorX + anchorWidth - popWidth;
  }

  if (aHorizontal === 'left' && pHorizontal === 'left') {
    left = anchorX;
  }

  if (aHorizontal === 'center' && pHorizontal === 'left') {
    left = anchorX + anchorWidth / 2;
  }

  if (aHorizontal === 'right' && pHorizontal === 'left') {
    left = anchorWidth + anchorX;
  }

  if (aHorizontal === 'left' && pHorizontal === 'center') {
    return anchorX - popWidth / 2;
  }

  if (aHorizontal === 'center' && pHorizontal === 'center') {
    return anchorX + anchorWidth / 2 - popWidth / 2;
  }

  if (aHorizontal === 'right' && pHorizontal === 'center') {
    return anchorWidth + anchorX - popWidth / 2;
  }

  return {
    left: left || 0
  };
};

var getPositionVertical = function getPositionVertical(anchorRect, popRect, anchorPoint, popPoint, isNotRootLevel) {
  var top = 'auto';
  var viewportHeight = window.innerHeight;
  var anchorY = anchorRect.y,
      anchorHeight = anchorRect.height;
  var popY = popRect.y,
      popHeight = popRect.height;
  var aVertical = anchorPoint.vertical;
  var pVertical = popPoint.vertical;

  if (aVertical === 'top' && pVertical === 'bottom') {
    top = anchorY - popHeight;
  }

  if (aVertical === 'center' && pVertical === 'bottom') {
    top = anchorY + anchorHeight / 2 - popHeight;
  }

  if (aVertical === 'bottom' && pVertical === 'bottom') {
    top = anchorY + anchorHeight - popHeight;
  }

  if (aVertical === 'top' && pVertical === 'top') {
    top = anchorY;
  }

  if (aVertical === 'center' && pVertical === 'top') {
    top = anchorY + anchorHeight / 2;
  }

  if (aVertical === 'bottom' && pVertical === 'top') {
    top = viewportHeight + anchorY;
  }

  if (aVertical === 'top' && pVertical === 'center') {
    top = anchorY - popHeight / 2;
  }

  if (aVertical === 'center' && pVertical === 'center') {
    top = anchorY + anchorHeight / 2 - popHeight / 2;
  }

  if (aVertical === 'bottom' && pVertical === 'center') {
    top = anchorWidth + anchorY - popHeight / 2;
  }

  return {
    top: top || 0
  };
};

var arePositionsEqual = function arePositionsEqual(left, right) {
  return left.left === right.left && left.top === right.top && left.bottom === right.bottom;
};

exports.arePositionsEqual = arePositionsEqual;

var propPosition = _propTypes.default.shape({
  vertical: _propTypes.default.oneOf(['top', 'center', 'bottom']),
  horizontal: _propTypes.default.oneOf(['left', 'center', 'right'])
});

exports.propPosition = propPosition;