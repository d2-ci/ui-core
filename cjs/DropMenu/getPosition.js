"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosition = void 0;

var getPosition = function getPosition(anchorEl) {
  if (!anchorEl) {
    return {
      top: 'auto',
      left: 'auto'
    };
  }

  var body = document.body;
  var docEl = document.documentElement;
  var rect = anchorEl.getBoundingClientRect();
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var top = rect.bottom + scrollTop - clientTop;
  var left = rect.left + scrollLeft - clientLeft;
  return {
    top: "".concat(top, "px"),
    left: "".concat(left, "px")
  };
};

exports.getPosition = getPosition;