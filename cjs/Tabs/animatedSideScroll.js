"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animatedSideScroll;
var DURATION = 350;

function animatedSideScroll(_ref) {
  var targetEl = _ref.targetEl,
      scrollBox = _ref.scrollBox,
      callback = _ref.callback;
  var startValue = scrollBox.scrollLeft;
  var endValue = getEndValue(targetEl, scrollBox, startValue);
  var change = endValue - startValue;
  var step = createFrameStepper({
    scrollBox: scrollBox,
    callback: callback,
    startValue: startValue,
    endValue: endValue,
    change: change
  });
  window.requestAnimationFrame(step);
}

function getEndValue(targetEl, scrollBox, startValue) {
  return Math.round(targetEl.offsetLeft > startValue ? // scrolling forward
  targetEl.offsetLeft + targetEl.offsetWidth - scrollBox.offsetWidth : // scrolling backwards
  targetEl.offsetLeft);
}

function createFrameStepper(_ref2) {
  var scrollBox = _ref2.scrollBox,
      callback = _ref2.callback,
      startValue = _ref2.startValue,
      endValue = _ref2.endValue,
      change = _ref2.change;
  var startTimestamp, elapsedTime, scrollValue;
  return function step(timestamp) {
    if (!startTimestamp) {
      startTimestamp = timestamp;
    }

    elapsedTime = timestamp - startTimestamp;
    scrollValue = easeInOutQuad(elapsedTime, startValue, change);

    if (elapsedTime >= DURATION) {
      if (scrollValue !== endValue) {
        scroll(scrollBox, endValue);
      }

      callback && callback();
    } else {
      scroll(scrollBox, scrollValue);
      window.requestAnimationFrame(step);
    }
  };
}

function scroll(scrollBox, scrollValue) {
  scrollBox.scrollLeft = scrollValue;
}

function easeInOutQuad(currentTime, initialValue, change) {
  return (currentTime /= DURATION / 2) < 1 ? change / 2 * currentTime * currentTime + initialValue : -change / 2 * (--currentTime * (currentTime - 2) - 1) + initialValue;
}