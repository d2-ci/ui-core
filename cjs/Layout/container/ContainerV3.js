"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerV3 = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _LayoutAreaContent = require("../LayoutAreaContent");

var _LayoutAreaSidebar = require("../LayoutAreaSidebar");

var _styles = require("./styles");

var _instanceOfComponent = require("../../prop-validators/instanceOfComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *   Layout Version 3
 * =====================
 *
 * |-------------------|
 * | Sidebar | Content |
 * |-------------------|
 */
var ContainerV3 = function ContainerV3(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "jsx-".concat(_styles.containerStyles.__hash, " jsx-").concat(_styles.containerV3Styles.__hash) + " " + ((0, _classnames.default)('container', 'container-v3') || "")
  }, children, _react.default.createElement(_style.default, {
    id: _styles.containerStyles.__hash
  }, _styles.containerStyles), _react.default.createElement(_style.default, {
    id: _styles.containerV3Styles.__hash
  }, _styles.containerV3Styles));
};

exports.ContainerV3 = ContainerV3;

var containerV3Areas = _propTypes.default.oneOfType([(0, _instanceOfComponent.instanceOfComponent)(_LayoutAreaSidebar.LayoutAreaSidebar), (0, _instanceOfComponent.instanceOfComponent)(_LayoutAreaContent.LayoutAreaContent)]);

ContainerV3.propTypes = {
  children: _propTypes.default.arrayOf(containerV3Areas)
};