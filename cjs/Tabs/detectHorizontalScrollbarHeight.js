"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectHorizontalScrollbarHeight = detectHorizontalScrollbarHeight;
var horizontalScrollbarHeight;
var className = '__vertical-scrollbar-height-test__';
var styles = "\n    .".concat(className, " {\n        position: absolute;\n        top: -9999px;\n        width: 100px;\n        height: 100px;\n        overflow-x: scroll;\n    }\n    .").concat(className, "::-webkit-scrollbar {\n        display: none;\n    }\n");

function detectHorizontalScrollbarHeight() {
  if (horizontalScrollbarHeight) {
    return horizontalScrollbarHeight;
  }

  var style = document.createElement('style');
  style.innerHTML = styles;
  var el = document.createElement('div');
  el.classList.add(className);
  document.body.appendChild(style);
  document.body.appendChild(el);
  horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
  document.body.removeChild(style);
  document.body.removeChild(el);
  return horizontalScrollbarHeight;
}