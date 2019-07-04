"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerV2 = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _LayoutAreaContent = require("../LayoutAreaContent");

var _LayoutAreaNavigation = require("../LayoutAreaNavigation");

var _styles = require("./styles");

var _instanceOfComponent = require("../../prop-validators/instanceOfComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Layout Version 2
 * ================
 *
 * |-----------|
 * | Navigaton |
 * |-----------|
 * |  Content  |
 * |-----------|
 */
var ContainerV2 = function ContainerV2(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "jsx-".concat(_styles.containerStyles.__hash, " jsx-").concat(_styles.containerV2Styles.__hash) + " " + ((0, _classnames.default)('container', 'container-v2') || "")
  }, children, _react.default.createElement(_style.default, {
    id: _styles.containerStyles.__hash
  }, _styles.containerStyles), _react.default.createElement(_style.default, {
    id: _styles.containerV2Styles.__hash
  }, _styles.containerV2Styles));
};

exports.ContainerV2 = ContainerV2;

var containerV2Areas = _propTypes.default.oneOfType([(0, _instanceOfComponent.instanceOfComponent)(_LayoutAreaNavigation.LayoutAreaNavigation), (0, _instanceOfComponent.instanceOfComponent)(_LayoutAreaContent.LayoutAreaContent)]);

ContainerV2.propTypes = {
  children: _propTypes.default.arrayOf(containerV2Areas)
};