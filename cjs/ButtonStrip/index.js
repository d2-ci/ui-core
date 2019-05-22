"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonStrip = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helper = require("./helper");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonStrip = function ButtonStrip(_ref) {
  var className = _ref.className,
      children = _ref.children,
      compact = _ref.compact,
      alignEnd = _ref.alignEnd;
  return _react.default.createElement("div", {
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)(className, {
      compact: compact,
      'align-end': alignEnd
    }) || "")
  }, children, _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
};

exports.ButtonStrip = ButtonStrip;
ButtonStrip.propTypes = {
  className: _propTypes.default.string,
  children: _helper.buttonArrayPropType.isRequired,
  compact: _propTypes.default.bool,
  alignEnd: _propTypes.default.bool
};