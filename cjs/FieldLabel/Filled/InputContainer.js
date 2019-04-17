"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputContainer = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react2 = require("../../utils/react");

var _constants = require("../../icons/constants");

var _constants2 = require("../../forms/constants");

var _constants3 = require("../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = new String(".content.jsx-1843972625{box-sizing:border-box;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:100%;line-height:".concat(_constants3.inputHeight, "px;min-width:0;position:relative;}.content.focused.jsx-1843972625,.content.has-value.jsx-1843972625{visibility:visible;}.content.dense.jsx-1843972625{line-height:").concat(_constants3.inputHeightDense, "px;}"));
styles.__hash = "1843972625";

var createInputContainerClassName = function createInputContainerClassName(props) {
  return (0, _classnames.default)('content', {
    focused: props.isFocused,
    dense: props.size === _constants2.inputSizes.DENSE,
    'has-value': props.hasValue
  });
};

var InputContainer = function InputContainer(props) {
  return _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + (createInputContainerClassName(props) || "")
  }, props.children, _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.InputContainer = InputContainer;