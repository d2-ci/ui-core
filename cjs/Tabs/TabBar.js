"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InnerTabBar = require("./InnerTabBar");

var _TabBarScroller = require("./TabBarScroller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TabBar = function TabBar(_ref) {
  var fixed = _ref.fixed,
      isScrollingRequired = _ref.isScrollingRequired,
      children = _ref.children,
      tabBarScrollerProps = _objectWithoutProperties(_ref, ["fixed", "isScrollingRequired", "children"]);

  return fixed || !isScrollingRequired ? _react.default.createElement(_InnerTabBar.InnerTabBar, {
    fixed: fixed
  }, children) : _react.default.createElement(_TabBarScroller.TabBarScroller, tabBarScrollerProps, _react.default.createElement(_InnerTabBar.InnerTabBar, {
    fixed: fixed
  }, children));
};

exports.TabBar = TabBar;
TabBar.propTypes = {
  isScrollingRequired: _propTypes.default.bool.isRequired,
  fixed: _InnerTabBar.InnerTabBar.propTypes.fixed,
  children: _propTypes.default.node.isRequired
};