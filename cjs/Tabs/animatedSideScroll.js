"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animatedSideScroll = animatedSideScroll;
var DURATION = 250;
var SCROLL_STEP = 0.5;

function animatedSideScroll(scrollBox, callback) {
  var goBackwards = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var startValue = scrollBox.scrollLeft;
  var endValue = getEndValue(scrollBox, startValue, goBackwards);
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

function getEndValue(scrollBox, startValue, goBackwards) {
  var scrollDistance = scrollBox.clientWidth * SCROLL_STEP;
  var inverter = goBackwards ? -1 : 1;
  return Math.floor(startValue + scrollDistance * inverter);
}

function createFrameStepper(_ref) {
  var scrollBox = _ref.scrollBox,
      callback = _ref.callback,
      startValue = _ref.startValue,
      endValue = _ref.endValue,
      change = _ref.change;
  var startTimestamp, elapsedTime, scrollValue;
  return function step(timestamp) {
    if (!startTimestamp) {
      startTimestamp = timestamp;
    }

    elapsedTime = timestamp - startTimestamp;
    scrollValue = easeInOutQuad({
      currentTime: elapsedTime,
      DURATION: DURATION,
      startValue: startValue,
      change: change
    });

    if (elapsedTime >= DURATION) {
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

function easeInOutQuad(_ref2) {
  var currentTime = _ref2.currentTime,
      startValue = _ref2.startValue,
      change = _ref2.change;
  return (currentTime /= DURATION / 2) < 1 ? change / 2 * currentTime * currentTime + startValue : -change / 2 * (--currentTime * (currentTime - 2) - 1) + startValue;
}