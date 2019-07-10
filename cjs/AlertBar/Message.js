"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "jsx-3951482246"
  }, children, _react.default.createElement(_style.default, {
    id: "3951482246"
  }, ["div.jsx-3951482246{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;min-width:240px;}"]));
};

exports.Message = Message;
Message.propTypes = {
  children: _propTypes.default.string.isRequired
};