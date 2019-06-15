"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputContainer = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("../constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = new String("div.jsx-2868989515{box-sizing:border-box;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:100%;line-height:".concat(_constants.inputHeight, "px;min-width:0;position:relative;}.focus.jsx-2868989515,.value.jsx-2868989515{visibility:visible;}.dense.jsx-2868989515{line-height:").concat(_constants.inputHeightDense, "px;}"));
styles.__hash = "2868989515";

var InputContainer = function InputContainer(_ref) {
  var focus = _ref.focus,
      dense = _ref.dense,
      value = _ref.value,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + ((0, _classnames.default)({
      focus: focus,
      dense: dense,
      value: value
    }) || "")
  }, children, _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.InputContainer = InputContainer;