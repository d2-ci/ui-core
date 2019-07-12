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

var styles = ["div.jsx-193341862{height:100%;line-height:40px;min-width:0;overflow:hidden;padding:0;position:relative;width:100%;}", ".dense.jsx-193341862{line-height:32px;}"];
styles.__hash = "193341862";

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