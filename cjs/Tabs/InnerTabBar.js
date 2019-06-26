"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerTabBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InnerTabBar = function InnerTabBar(_ref) {
  var cluster = _ref.cluster,
      contained = _ref.contained,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('tab-container', _defineProperty({
      contained: contained
    }, "cluster-".concat(cluster), cluster && contained))
  }, children);
};

exports.InnerTabBar = InnerTabBar;
InnerTabBar.propTypes = {
  cluster: _propTypes.default.oneOf([null, 'left', 'centered', 'right']),
  contained: _propTypes.default.bool
};