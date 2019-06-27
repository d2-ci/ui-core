"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerTabBar = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InnerTabBar = function InnerTabBar(_ref) {
  var fixed = _ref.fixed,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: "jsx-664832750" + " " + ((0, _classnames.default)({
      fixed: fixed
    }) || "")
  }, children, _react.default.createElement(_style.default, {
    id: "664832750"
  }, ["div.jsx-664832750{position:relative;overflow-y:hidden;}", "div.fixed.jsx-664832750{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-x:hidden;}", "@-moz-document url-prefix(){div.jsx-664832750{width:-moz-max-content;}}"]));
};

exports.InnerTabBar = InnerTabBar;
InnerTabBar.propTypes = {
  fixed: _propTypes.default.bool.isRequired
};