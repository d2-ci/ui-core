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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InnerTabBar = function InnerTabBar(_ref) {
  var cluster = _ref.cluster,
      contained = _ref.contained,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: "jsx-4082842688" + " " + ((0, _classnames.default)(_defineProperty({
      contained: contained
    }, "cluster-".concat(cluster), cluster && contained)) || "")
  }, children, _react.default.createElement(_style.default, {
    id: "4082842688"
  }, ["div.jsx-4082842688{position:relative;overflow-y:hidden;}", "div.contained.jsx-4082842688{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-x:hidden;}", "div.cluster-left.jsx-4082842688{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}", "div.cluster-centered.jsx-4082842688{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "div.cluster-right.jsx-4082842688{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}", "@-moz-document url-prefix(){div.jsx-4082842688{width:-moz-max-content;}}"]));
};

exports.InnerTabBar = InnerTabBar;
InnerTabBar.propTypes = {
  cluster: _propTypes.default.oneOf([null, 'left', 'centered', 'right']),
  contained: _propTypes.default.bool
};