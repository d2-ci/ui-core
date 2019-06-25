"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invertSide = exports.getPosition = exports.arePositionsEqual = void 0;

var _isElementInsideContainer = require("../helpers/isElementInsideContainer");

var arePositionsEqual = function arePositionsEqual(left, right) {
  return left.left === right.left && left.top === right.top;
};

exports.arePositionsEqual = arePositionsEqual;
var defaultStyles = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

var getPosition = function getPosition(_ref) {
  var pop = _ref.pop,
      anchor = _ref.anchor,
      side = _ref.side,
      spacing = _ref.spacing;

  if (!anchor || !pop) {
    return {
      left: 'auto',
      top: 'auto'
    };
  }

  var styles = getRelativePosition(anchor, pop, side, spacing);

  if (styles === null) {
    return [defaultStyles, {
      adjustmentVertical: 0,
      adjustmentHorizontal: 0
    }];
  }

  return [{
    left: styles.left,
    top: styles.top
  }, {
    adjustmentVertical: styles.adjustmentVertical,
    adjustmentHorizontal: styles.adjustmentHorizontal
  }];
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
      top: top - adjustmentVertical,
      adjustmentVertical: adjustmentVertical,
      adjustmentHorizontal: 0
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
      top: top - adjustmentVertical,
      adjustmentVertical: adjustmentVertical,
      adjustmentHorizontal: adjustmentHorizontal
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
      top: top - adjustmentVertical,
      adjustmentVertical: adjustmentVertical,
      adjustmentHorizontal: adjustmentHorizontal
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
      top: top - adjustmentVertical,
      adjustmentVertical: adjustmentVertical,
      adjustmentHorizontal: adjustmentHorizontal
    };
  }

  throw new Error("Position provided to getPosition must be \"top\", \"right\", \"bottom\" or \"left\", but got ".concat(side));
};

var invertSide = function invertSide(side) {
  if (side === 'right') return 'left';
  if (side === 'left') return 'right';
  if (side === 'top') return 'bottom';
  return 'top';
};

exports.invertSide = invertSide;