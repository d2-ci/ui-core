"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerV1 = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _LayoutContent = require("../LayoutContent");

var _styles = require("./styles");

var _instanceOfComponent = require("../../prop-validators/instanceOfComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Layout Version 1
 * ================
 *
 * |---------|
 * | Content |
 * |---------|
 */
var ContainerV1 = function ContainerV1(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "jsx-".concat(_styles.containerStyles.__hash, " jsx-").concat(_styles.containerV1Styles.__hash) + " " + ((0, _classnames.default)('container', 'container-v1') || "")
  }, children, _react.default.createElement(_style.default, {
    id: _styles.containerStyles.__hash
  }, _styles.containerStyles), _react.default.createElement(_style.default, {
    id: _styles.containerV1Styles.__hash
  }, _styles.containerV1Styles));
};

exports.ContainerV1 = ContainerV1;
ContainerV1.propTypes = {
  children: (0, _instanceOfComponent.instanceOfComponent)(_LayoutContent.LayoutContent)
};