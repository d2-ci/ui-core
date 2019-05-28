"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.positions = exports.combinations = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var points = function () {
  var verticalPositions = ['top', 'center', 'bottom'];
  var horizontalPositions = ['left', 'center', 'right'];
  return verticalPositions.reduce(function (all, vertical) {
    return horizontalPositions.reduce(function (all, horizontal) {
      all.push({
        vertical: vertical,
        horizontal: horizontal
      });
      return all;
    }, all);
  }, []);
}();

var combinations = function () {
  return points.reduce(function (all, anchorPoint) {
    return points.reduce(function (all, popPoint) {
      all.push([anchorPoint, popPoint]);
      return all;
    }, all);
  }, []);
}();

exports.combinations = combinations;

var positions = function () {
  return combinations.reduce(function (all, position) {
    var _position = _slicedToArray(position, 2),
        anchor = _position[0],
        pop = _position[1];

    var aVertical = anchor.vertical,
        aHorizontal = anchor.horizontal;
    var pVertical = pop.vertical,
        pHorizontal = pop.horizontal;
    var name = "".concat(aVertical, "_").concat(aHorizontal, "_").concat(pVertical, "_").concat(pHorizontal).toUpperCase();
    all[name] = position;
    return all;
  }, {});
}();

exports.positions = positions;