"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reactRef = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reactRef = _propTypes.default.shape({
  current: _propTypes.default.element
});

exports.reactRef = reactRef;