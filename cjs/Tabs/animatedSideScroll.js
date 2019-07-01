"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animatedSideScroll = animatedSideScroll;
var DURATION = 250;

function animatedSideScroll(_ref) {
  var targetEl = _ref.targetEl,
      scrollBox = _ref.scrollBox,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? DURATION : _ref$duration,
      callback = _ref.callback;
  var startValue = scrollBox.scrollLeft;
  var endValue = getEndValue(targetEl, scrollBox, startValue);
  var change = endValue - startValue;
  var step = createFrameStepper({
    scrollBox: scrollBox,
    duration: duration,
    callback: callback,
    startValue: startValue,
    endValue: endValue,
    change: change
  });
  window.requestAnimationFrame(step);
}

function getEndValue(targetEl, scrollBox, startValue) {
  return Math.floor(targetEl.offsetLeft > startValue ? // scrolling forward
  targetEl.offsetLeft + targetEl.offsetWidth - scrollBox.offsetWidth : // scrolling backwards
  targetEl.offsetLeft);
}

function createFrameStepper(_ref2) {
  var scrollBox = _ref2.scrollBox,
      duration = _ref2.duration,
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
    scrollValue = easeInOutQuad({
      currentTime: elapsedTime,
      duration: duration,
      startValue: startValue,
      change: change
    });

    if (elapsedTime >= duration) {
      if (scrollValue !== endValue) {
        scrollBox.scrollLeft = endValue;
      }

      callback && callback();
    } else {
      scrollBox.scrollLeft = scrollValue;
      window.requestAnimationFrame(step);
    }
  };
}

function easeInOutQuad(_ref3) {
  var currentTime = _ref3.currentTime,
      duration = _ref3.duration,
      startValue = _ref3.startValue,
      change = _ref3.change;
  return (currentTime /= duration / 2) < 1 ? change / 2 * currentTime * currentTime + startValue : -change / 2 * (--currentTime * (currentTime - 2) - 1) + startValue;
}