"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(_ref) {
  var children = _ref.children,
      scrollable = _ref.scrollable;
  return _react.default.createElement("div", {
    className: "jsx-110788704" + " " + ((0, _classnames.default)({
      scrollable: scrollable
    }) || "")
  }, children, _react.default.createElement(_style.default, {
    id: "110788704"
  }, ["div.jsx-110788704{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-bottom:35px;overflow-y:auto;padding:0 24px;}", "div.jsx-110788704:first-child{padding-top:20px;}"]));
};

exports.Content = Content;
Content.propTypes = {
  children: _propTypes.default.node.isRequired
};