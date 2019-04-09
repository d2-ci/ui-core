"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = Menu;
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("../Card"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Menu(_ref) {
  var size = _ref.size,
      width = _ref.width,
      children = _ref.children,
      className = _ref.className;
  return _react.default.createElement(_Card.default, null, _react.default.createElement("ul", {
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', size, className) || "")
  }, children), _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
}

Menu.defaultProps = {
  size: 'default'
};
Menu.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.arrayOf(_propTypes.default.element).isRequired,
  size: _propTypes.default.oneOf(['default', 'dense'])
};
var _default = Menu;
exports.default = _default;