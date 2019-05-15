"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentCover = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentCover = function ComponentCover(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: "jsx-1242714437" + " " + "component-cover"
  }, children, _react.default.createElement(_style.default, {
    id: "1242714437"
  }, ["div.jsx-1242714437{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;left:0;top:0;height:100%;width:100%;z-index:900;background:rgba(200,200,200,0.6);}"]));
};

exports.ComponentCover = ComponentCover;
ComponentCover.propTypes = {
  children: _propTypes.default.node
};