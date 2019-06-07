"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosition = exports.Content = exports.arePositionsEqual = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isElementInsideContainer = require("../helpers/isElementInsideContainer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arePositionsEqual = function arePositionsEqual(left, right) {
  return left.right === right.right && left.left === right.left && left.top === right.top && left.bottom === right.bottom;
};

exports.arePositionsEqual = arePositionsEqual;

var Content = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      position = _ref.position;
  return _react.default.createElement("div", {
    ref: ref,
    style: position,
    className: "jsx-4279786422"
  }, children, _react.default.createElement(_style.default, {
    id: "4279786422"
  }, ["div.jsx-4279786422{background:white;box-shadow:0 0 3px rgba(0,0,0,0.6);max-height:100vh;overflow-y:auto;position:absolute;}"]));
});

exports.Content = Content;

var getPosition = function getPosition(_ref2) {
  var pop = _ref2.pop,
      anchor = _ref2.anchor,
      side = _ref2.side,
      spacing = _ref2.spacing;

  if (!anchor || !pop) {
    return {
      left: 'auto',
      top: 'auto'
    };
  }

  var styles = getRelativePosition(anchor, pop, side, spacing);

  if (styles === null) {
    return {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    };
  }

  return styles;
};

exports.getPosition = getPosition;

var getRelativePosition = function getRelativePosition(anchor, pop, side, spacing) {
  var top, left, adjustmentVertical, adjustmentHorizontal;
  var bodyWidth = (0, _isElementInsideContainer.getElementInnerDimension)(document.body, 'horizontal');
  var bodyHeight = (0, _isElementInsideContainer.getElementInnerDimension)(document.body, 'vertical');
  var anchorWidth = (0, _isElementInsideContainer.getElementInnerDimension)(anchor, 'horizontal');
  var anchorHeight = (0, _isElementInsideContainer.getElementInnerDimension)(anchor, 'vertical');
  var anchorOffset = (0, _isElementInsideContainer.getElementOffset)(anchor);
  var popWidth = (0, _isElementInsideContainer.getElementInnerDimension)(pop, 'horizontal');
  var popHeight = (0, _isElementInsideContainer.getElementInnerDimension)(pop, 'vertical');
  if (!(0, _isElementInsideContainer.doesElementFitInsideContainer)(pop, document.body)) return null;

  if (side === 'left') {
    left = anchorOffset.left - popWidth - spacing;
    top = anchorOffset.top + anchorHeight / 2 - popHeight / 2;
    adjustmentVertical = top + popHeight > bodyHeight ? // The "+ 1" is due to a chrome calculation error
    top + popHeight - bodyHeight + 1 : top < 0 ? top : 0;
    return {
      left: left < 0 ? 0 : left,
      top: top - adjustmentVertical
    };
  }

  if (side === 'right') {
    left = anchorOffset.left + anchorWidth + spacing;
    top = anchorOffset.top + anchorHeight / 2 - popHeight / 2;
    adjustmentHorizontal = Math.max(0, // The "+ 1" is due to a chrome calculation error
    left + popWidth - bodyWidth + 1);
    adjustmentVertical = top + popHeight > bodyHeight ? // The "+ 1" is due to a chrome calculation error
    top + popHeight - bodyHeight + 1 : top < 0 ? top : 0;
    return {
      left: left - adjustmentHorizontal,
      top: top - adjustmentVertical
    };
  }

  if (side === 'top') {
    left = anchorOffset.left + anchorWidth / 2 - popWidth / 2;
    top = anchorOffset.top - popHeight - spacing;
    adjustmentHorizontal = left + popWidth > bodyWidth ? // The "+ 1" is due to a chrome calculation error
    left + popWidth - bodyWidth + 1 : left < 0 ? left : 0;
    adjustmentVertical = top < 0 ? top : 0;
    return {
      left: left - adjustmentHorizontal,
      top: top - adjustmentVertical
    };
  }

  if (side === 'bottom') {
    left = anchorOffset.left + anchorWidth / 2 - popWidth / 2;
    top = anchorOffset.top + anchorHeight + spacing;
    adjustmentHorizontal = left + popWidth > bodyWidth ? // The "+ 1" is due to a chrome calculation error
    left + popWidth - bodyWidth + 1 : left < 0 ? left : 0;
    adjustmentVertical = Math.max(0, // The "+ 1" is due to a chrome calculation error
    top + popHeight - bodyHeight + 1);
    return {
      left: left - adjustmentHorizontal,
      top: top - adjustmentVertical
    };
  }

  throw new Error("Position provided to getPosition must be \"top\", \"right\", \"bottom\" or \"left\", but got ".concat(side));
};