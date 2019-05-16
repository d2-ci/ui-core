"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arePositionsEqual = exports.getPosition = exports.getScrollAndClientOffset = exports.Content = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var getPosition = function getPosition(anchor, popover, hasScreencover) {
  if (!anchor || !popover) {
    return {
      left: 0,
      top: 0
    };
  }

  var anchorRect = anchor.getBoundingClientRect();
  var popoverRect = popover.getBoundingClientRect();
  return _objectSpread({}, getPositionVertical(anchorRect, popoverRect), getPositionHorizontal(anchorRect, popoverRect, hasScreencover));
  return styles;
};

exports.getPosition = getPosition;

var getPositionVertical = function getPositionVertical(anchorRect, popoverRect) {
  var viewportWidth = window.innerWidth;
  var leftOffset = anchorRect.x + anchorRect.width;
  var rightOffset = anchorRect.x - popoverRect.width;
  var fitsToTheLeft = viewportWidth - leftOffset - popoverRect.width > 0;
  var left = fitsToTheLeft ? leftOffset : rightOffset;
  return {
    left: left
  };
};

var getPositionHorizontal = function getPositionHorizontal(anchorRect, popoverRect, hasScreencover) {
  var _getScrollAndClientOf = getScrollAndClientOffset(),
      scrollTop = _getScrollAndClientOf.scrollTop,
      clientTop = _getScrollAndClientOf.clientTop;

  var viewportHeight = window.innerHeight;
  var fitsToTheTop = viewportHeight - anchorRect.y > popoverRect.height;

  if (!fitsToTheTop) {
    return {
      bottom: 0,
      top: 'auto'
    };
  }

  if (hasScreencover) {
    return {
      top: (scrollTop || clientTop) + anchorRect.y + 'px',
      bottom: 'auto'
    };
  }

  return {
    top: anchorRect.y + 'px',
    bottom: 'auto'
  };
};

var arePositionsEqual = function arePositionsEqual(left, right) {
  return left.left === right.left && left.top === right.top && left.bottom === right.bottom;
};

exports.arePositionsEqual = arePositionsEqual;