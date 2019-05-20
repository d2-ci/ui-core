"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinearProgress = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = function Progress(_ref) {
  var indeterminate = _ref.indeterminate,
      amount = _ref.amount;
  var width = amount ? "width: ".concat(amount, "%;") : '';
  var height = '4px';
  return _react.default.createElement("div", {
    className: _style.default.dynamic([["1860207884", [width]], ["3540944979", [_theme.theme.primary600, height, height, height]]]) + " " + ((0, _classnames.default)({
      determinate: !!width,
      indeterminate: !width
    }) || "")
  }, _react.default.createElement(_style.default, {
    id: "1860207884",
    dynamic: [width]
  }, ["div.__jsx-style-dynamic-selector{".concat(width, ";}")]), _react.default.createElement(_style.default, {
    id: "3540944979",
    dynamic: [_theme.theme.primary600, height, height, height]
  }, ["div.__jsx-style-dynamic-selector{background-color:".concat(_theme.theme.primary600, ";-webkit-transition:width 0.3s linear;transition:width 0.3s linear;height:").concat(height, ";}"), ".determinate.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;}", ".indeterminate.__jsx-style-dynamic-selector:before{position:absolute;height:".concat(height, ";top:0;left:0;background-color:inherit;-webkit-animation:anim-indeterminate-__jsx-style-dynamic-selector 2.1s cubic-bezier(0.65,0.815,0.735,0.395) infinite;animation:anim-indeterminate-__jsx-style-dynamic-selector 2.1s cubic-bezier(0.65,0.815,0.735,0.395) infinite;content:'';will-change:left,right;}"), ".indeterminate.__jsx-style-dynamic-selector:after{position:absolute;height:".concat(height, ";top:0;left:0;background-color:inherit;-webkit-animation:anim-indeterminate-short-__jsx-style-dynamic-selector 2.1s cubic-bezier(0.165,0.84,0.44,1) infinite;animation:anim-indeterminate-short-__jsx-style-dynamic-selector 2.1s cubic-bezier(0.165,0.84,0.44,1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s;content:'';will-change:left,right;}"), "@-webkit-keyframes anim-indeterminate-__jsx-style-dynamic-selector{0%{right:100%;left:-35%;}60%{right:-90%;left:100%;}100%{right:-90%;left:100%;}}", "@keyframes anim-indeterminate-__jsx-style-dynamic-selector{0%{right:100%;left:-35%;}60%{right:-90%;left:100%;}100%{right:-90%;left:100%;}}", "@-webkit-keyframes anim-indeterminate-short-__jsx-style-dynamic-selector{0%{right:100%;left:-200%;}60%{right:-8%;left:107%;}100%{right:-8%;left:107%;}}", "@keyframes anim-indeterminate-short-__jsx-style-dynamic-selector{0%{right:100%;left:-200%;}60%{right:-8%;left:107%;}100%{right:-8%;left:107%;}}"]));
};

var LinearProgress = function LinearProgress(_ref2) {
  var amount = _ref2.amount,
      _ref2$margin = _ref2.margin,
      margin = _ref2$margin === void 0 ? '10px' : _ref2$margin,
      className = _ref2.className;
  return _react.default.createElement("div", {
    role: "progressbar",
    className: _style.default.dynamic([["292909190", [_theme.theme.primary050]], ["3886587682", [margin]]]) + " " + (className || "")
  }, _react.default.createElement(Progress, {
    amount: amount
  }), _react.default.createElement(_style.default, {
    id: "292909190",
    dynamic: [_theme.theme.primary050]
  }, ["div.__jsx-style-dynamic-selector{display:block;overflow:hidden;overflow-x:hidden;overflow-y:hidden;background-color:".concat(_theme.theme.primary050, ";}")]), _react.default.createElement(_style.default, {
    id: "3886587682",
    dynamic: [margin]
  }, [".__jsx-style-dynamic-selector{margin:".concat(margin, ";}")]));
};

exports.LinearProgress = LinearProgress;
LinearProgress.propTypes = {
  className: _propTypes.default.string,
  amount: _propTypes.default.number,
  margin: _propTypes.default.string
};