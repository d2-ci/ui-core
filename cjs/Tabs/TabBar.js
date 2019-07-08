"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabBar = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../theme");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabBar = function TabBar(_ref) {
  var fixed = _ref.fixed,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: _style.default.dynamic([["3887201227", [_theme.colors.grey400]]]) + " " + ((0, _classnames.default)('tab-bar', {
      fixed: fixed
    }) || "")
  }, children, _react.default.createElement(_style.default, {
    id: "3887201227",
    dynamic: [_theme.colors.grey400]
  }, ["div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;overflow:hidden;box-shadow:inset 0 -1px 0 0 ".concat(_theme.colors.grey400, ";}"), "@-moz-document url-prefix(){div.__jsx-style-dynamic-selector{width:-moz-max-content;}}"]));
};

exports.TabBar = TabBar;
TabBar.propTypes = {
  fixed: _propTypes.default.bool
};