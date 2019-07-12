"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("../constants.js");

var _theme = require("../../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = ["label.jsx-2496366900{display:block;box-sizing:border-box;height:24px;font-size:16px;line-height:20px;padding:0 ".concat(_theme.spacers.dp16, " ").concat(_theme.spacers.dp4, ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}"), ".disabled.jsx-2496366900{cursor:not-allowed;}", ".required.jsx-2496366900 span.jsx-2496366900::after{padding-left:".concat(_theme.spacers.dp4, ";content:'*';}")];
styles.__hash = "2496366900";

var constructClassName = function constructClassName(props) {
  return {
    focus: props.focus,
    required: props.required,
    valid: props.valid,
    warning: props.warning,
    error: props.error,
    dense: props.dense,
    disabled: props.disabled,
    value: props.value
  };
};

var Label = function Label(props) {
  return _react.default.createElement("label", {
    htmlFor: props.htmlFor,
    className: "jsx-".concat(styles.__hash) + " " + (constructClassName(props) || "")
  }, props.label, _react.default.createElement(_style.default, {
    id: styles.__hash
  }, styles));
};

exports.Label = Label;