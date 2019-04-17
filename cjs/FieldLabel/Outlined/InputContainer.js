"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputContainer = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react2 = require("../../utils/react");

var _constants = require("../../forms/constants");

var _constants2 = require("../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = new String(".input-container.jsx-2526961367{height:100%;line-height:".concat(_constants2.inputHeight, "px;min-width:0;overflow:hidden;padding:0;position:relative;width:100%;}.input-container.dense.jsx-2526961367{line-height:").concat(_constants2.inputHeightDense, "px;}"));
styles.__hash = "2526961367";

var createInputContainerClassName = function createInputContainerClassName(props) {
  return (0, _classnames.default)('input-container', {
    dense: props.size === _constants.inputSizes.DENSE
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
InputContainer.propTypes = {
  size: _constants.inputSizesPropTypes.isRequired,
  children: _react2.children.isRequired
};