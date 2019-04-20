"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.children = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _propTypes.default.oneOf([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]);

exports.children = children;