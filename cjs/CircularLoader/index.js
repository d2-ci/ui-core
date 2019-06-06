"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircularLoader = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircularLoader = function CircularLoader(_ref) {
  var small = _ref.small,
      large = _ref.large,
      className = _ref.className;
  return _react.default.createElement("div", {
    role: "progressbar",
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)(className, {
      small: small,
      large: large
    }) || "")
  }, _react.default.createElement("svg", {
    viewBox: "22 22 44 44",
    className: "jsx-".concat(_styles.default.__hash)
  }, _react.default.createElement("circle", {
    cx: "44",
    cy: "44",
    r: "20.2",
    fill: "none",
    strokeWidth: "3.6",
    className: "jsx-".concat(_styles.default.__hash) + " " + "circle"
  })), _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
};

exports.CircularLoader = CircularLoader;
CircularLoader.propTypes = {
  className: _propTypes.default.string,
  small: _propTypes.default.bool,
  large: _propTypes.default.bool
};