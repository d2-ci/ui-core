"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doesElementFitInsideContainer = exports.getElementOffset = exports.getViewportOffset = exports.getElementInnerDimension = void 0;

var getElementInnerDimension = function getElementInnerDimension(element, direction) {
  var attribute = direction === 'vertical' ? 'Height' : 'Width';

  if (element === window || element === document.documentElement) {
    return window["inner".concat(attribute)];
  }

  if (element === document.body) {
    return Math.max(document.documentElement["client".concat(attribute)], document.body["scroll".concat(attribute)], document.documentElement["scroll".concat(attribute)], document.body["offset".concat(attribute)], document.documentElement["offset".concat(attribute)]);
  }

  return parseInt(window.getComputedStyle(element, null).getPropertyValue(attribute.toLowerCase()).replace('px', ''), 10);
};

exports.getElementInnerDimension = getElementInnerDimension;

var getViewportOffset = function getViewportOffset() {
  var doc = document.documentElement;
  var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  return {
    left: left,
    top: top
  };
};

exports.getViewportOffset = getViewportOffset;

var getElementOffset = function getElementOffset(element) {
  if (element === document.body) {
    return 0;
  }

  var viewportOffset = getViewportOffset();

  if (element === window || element === document.documentElement) {
    return viewportOffset;
  }

  var rect = element.getBoundingClientRect();
  var left = viewportOffset.left + rect.left;
  var top = viewportOffset.top + rect.top;
  return {
    left: left,
    top: top
  };
};

exports.getElementOffset = getElementOffset;

var doesElementFitInsideContainer = function doesElementFitInsideContainer(element, container) {
  var containerWidth = getElementInnerDimension(container, 'horizontal');
  var containerHeight = getElementInnerDimension(container, 'vertical');
  var elementRect = element.getBoundingClientRect();
  return elementRect.width <= containerWidth && elementRect.height <= containerHeight;
};

exports.doesElementFitInsideContainer = doesElementFitInsideContainer;