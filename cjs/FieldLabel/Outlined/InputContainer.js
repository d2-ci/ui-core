"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputContainer = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = ["div.jsx-617431840{height:100%;line-height:".concat(_constants.inputHeight, "px;min-width:0;overflow:hidden;padding:0;position:relative;width:100%;}"), ".dense.jsx-617431840{line-height:".concat(_constants.inputHeightDense, "px;}")];
styles.__hash = "617431840";

var InputContainer = function InputContainer(_ref) {
  var dense = _ref.dense,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + ((0, _classnames.default)({
      dense: dense
    }) || "")
  }, children, _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.InputContainer = InputContainer;