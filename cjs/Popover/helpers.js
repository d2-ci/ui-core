"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosition = exports.getScrollAndClientOffset = exports.setBodyStyles = exports.disableScroll = exports.extractBodyStyles = void 0;

var extractBodyStyles = function extractBodyStyles() {
  return {
    overflow: document.body.style.overflow,
    overflowX: document.body.style.overflowX,
    overflowY: document.body.style.overflowY
  };
};

exports.extractBodyStyles = extractBodyStyles;

var disableScroll = function disableScroll() {
  document.body.style.overflow = 'hidden';
  document.body.style.overflowX = 'hidden';
  document.body.style.overflowY = 'hidden';
};

exports.disableScroll = disableScroll;

var setBodyStyles = function setBodyStyles(styles) {
  Object.assign(document.body.style, styles);
};

exports.setBodyStyles = setBodyStyles;

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

var getPosition = function getPosition(anchorHorizontal, anchorVertical, popover, hasScreencover) {
  if (!anchorHorizontal || !anchorVertical || !popover) {
    return {
      left: 0,
      top: 0
    };
  }

  var styles = {};
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;

  var _getScrollAndClientOf = getScrollAndClientOffset(),
      scrollTop = _getScrollAndClientOf.scrollTop,
      clientTop = _getScrollAndClientOf.clientTop;

  var anchorRectHorizontal = anchorHorizontal.getBoundingClientRect();
  var anchorRectVertical = anchorVertical.getBoundingClientRect();
  var popoverRect = popover.getBoundingClientRect();
  var leftOffset = anchorRectHorizontal.x + anchorRectHorizontal.width;
  var rightOffset = anchorRectHorizontal.x - popoverRect.width;
  var fitsToTheLeft = viewportWidth - leftOffset - popoverRect.width > 0;
  var fitsToTheRight = rightOffset > 0;
  var fitsToTheTop = viewportHeight - anchorRectHorizontal.y > popoverRect.height;
  var left = fitsToTheLeft ? leftOffset : rightOffset;
  styles.left = left + 'px';

  if (fitsToTheTop) {
    if (hasScreencover) {
      styles.top = (scrollTop || clientTop) + anchorRectVertical.y + 'px';
    } else {
      styles.top = anchorRectVertical.y + 'px';
    }

    styles.bottom = 'auto';
  } else {
    styles.bottom = 0;
    styles.top = 'auto';
  }

  return styles;
};

exports.getPosition = getPosition;