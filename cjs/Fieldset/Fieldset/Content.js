"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react2 = require("../../utils/react");

var _constants = require("../../forms/constants");

var _constants2 = require("../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = new String(".content.jsx-3722125387{height:".concat(_constants2.inputHeight + 2, "px;line-height:").concat(_constants2.inputHeight + 2, "px;padding:0 0 0 ").concat(_constants.innerSpacingSides, ";position:relative;top:-2px;width:calc(100% - 1px);box-sizing:border-box;left:1px;}.content.dense.jsx-3722125387{height:").concat(_constants2.inputHeightDense + 2, "px;line-height:").concat(_constants2.inputHeightDense + 2, "px;}"));
styles.__hash = "3722125387";

var createContentClassName = function createContentClassName(props) {
  return (0, _classnames.default)('content', {
    dense: props.size === _constants.inputSizes.DENSE
  });
};

var Content = function Content(props) {
  return _react.default.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + (createContentClassName(props) || "")
  }, props.children, _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.Content = Content;
Content.propTypes = {
  size: _constants.inputSizesPropTypes.isRequired,
  children: _react2.children.isRequired
};