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
    className: _style.default.dynamic([["2678989862", [_theme.colors.grey400, _theme.colors.white]]]) + " " + ((0, _classnames.default)('tab-bar', {
      fixed: fixed
    }) || "")
  }, children, _react.default.createElement(_style.default, {
    id: "2678989862",
    dynamic: [_theme.colors.grey400, _theme.colors.white]
  }, ["div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;overflow:hidden;box-shadow:inset 0 -1px 0 0 ".concat(_theme.colors.grey400, ";-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;background:").concat(_theme.colors.white, ";}")]));
};

exports.TabBar = TabBar;
TabBar.propTypes = {
  fixed: _propTypes.default.bool
};