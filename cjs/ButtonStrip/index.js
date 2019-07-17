"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonStrip = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes2 = require("@dhis2/prop-types");

var _Button = require("../Button");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonStrip = function ButtonStrip(_ref) {
  var className = _ref.className,
      children = _ref.children,
      compact = _ref.compact,
      start = _ref.start,
      middle = _ref.middle,
      end = _ref.end;
  return _react.default.createElement("div", {
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)(className, {
      compact: compact,
      start: start,
      middle: middle,
      end: end
    }) || "")
  }, children, _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
};

exports.ButtonStrip = ButtonStrip;
ButtonStrip.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.arrayOf((0, _propTypes2.instanceOfComponent)(_Button.Button)),
  compact: _propTypes.default.bool,
  start: _propTypes.default.bool,
  middle: _propTypes.default.bool,
  end: _propTypes.default.bool
};