"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchIcon = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var common = ["div.jsx-2158824847{display:inline-block;position:relative;width:44px;height:14px;cursor:pointer;}", ".path.jsx-2158824847{left:1px;width:34px;height:14px;border-radius:8px;opacity:0.5;background-color:#bbbaba;}", ".toggle.jsx-2158824847{left:0;width:20px;height:20px;border-radius:50%;box-shadow:0 0 1px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24);background-color:#efefef;position:relative;-webkit-transition:-webkit-transform 0.1s ease-in;-webkit-transition:transform 0.1s ease-in;transition:transform 0.1s ease-in;}", ".toggle.jsx-2158824847:before{content:'';position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%) scale(0.5);-ms-transform:translate(-50%,-50%) scale(0.5);transform:translate(-50%,-50%) scale(0.5);-webkit-transition:-webkit-transform 0.05s ease-in;-webkit-transition:transform 0.05s ease-in;transition:transform 0.05s ease-in;width:200%;height:200%;background-color:#efefef;border-radius:50%;z-index:-1;opacity:0.4;}", ".focus.jsx-2158824847 .toggle.jsx-2158824847:before{-webkit-transform:translate(-50%,-50%) scale(1);-ms-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);-webkit-transition:-webkit-transform 0.05s ease-out;-webkit-transition:transform 0.05s ease-out;transition:transform 0.05s ease-out;}", ".toggle.jsx-2158824847:after{content:'';width:100%;height:100%;position:absolute;top:0;left:0;z-index:1;background-color:#efefef;border-radius:50%;}", ".path.jsx-2158824847,.toggle.jsx-2158824847{position:absolute;top:50%;margin:0;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);outline:0;content:'';}", ".checked.jsx-2158824847 .path.jsx-2158824847{background-color:".concat(_theme.colors.teal400, ";}"), ".checked.jsx-2158824847 .toggle.jsx-2158824847{-webkit-transform:translate(80%,-50%);-ms-transform:translate(80%,-50%);transform:translate(80%,-50%);background-color:".concat(_theme.colors.teal400, ";-webkit-transition:-webkit-transform 0.1s ease-out;-webkit-transition:transform 0.1s ease-out;transition:transform 0.1s ease-out;}"), ".checked.jsx-2158824847 .toggle.jsx-2158824847:before,.checked.jsx-2158824847 .toggle.jsx-2158824847:after{background-color:".concat(_theme.colors.teal400, ";}"), ".valid.jsx-2158824847 .path.jsx-2158824847,.valid.jsx-2158824847 .toggle.jsx-2158824847{background-color:".concat(_theme.theme.valid, ";}"), ".valid.jsx-2158824847 .toggle.jsx-2158824847:before,.valid.jsx-2158824847 .toggle.jsx-2158824847:after{background-color:".concat(_theme.colors.valid, ";}"), ".warning.jsx-2158824847 .path.jsx-2158824847,.warning.jsx-2158824847 .toggle.jsx-2158824847{background-color:".concat(_theme.theme.warning, ";}"), ".warning.jsx-2158824847 .toggle.jsx-2158824847:before,.warning.jsx-2158824847 .toggle.jsx-2158824847:after{background-color:".concat(_theme.colors.warning, ";}"), ".error.jsx-2158824847 .path.jsx-2158824847,.error.jsx-2158824847 .toggle.jsx-2158824847{background-color:".concat(_theme.theme.error, ";}"), ".error.jsx-2158824847 .toggle.jsx-2158824847:before,.error.jsx-2158824847 .toggle.jsx-2158824847:after{background:".concat(_theme.colors.error, ";}"), ".disabled.jsx-2158824847{cursor:not-allowed;color:".concat(_theme.theme.disabled, ";}"), ".disabled.jsx-2158824847 .path.jsx-2158824847{background-color:#dadada;}", ".disabled.jsx-2158824847 .toggle.jsx-2158824847{background-color:#f5f5f5;}"];
common.__hash = "2158824847";

var SwitchIcon = function SwitchIcon(_ref) {
  var checked = _ref.checked,
      valid = _ref.valid,
      warning = _ref.warning,
      error = _ref.error,
      disabled = _ref.disabled,
      focus = _ref.focus;
  var classes = (0, _classnames.default)({
    checked: checked,
    disabled: disabled,
    valid: valid,
    error: error,
    warning: warning,
    focus: focus
  });
  return _react.default.createElement("div", {
    className: "jsx-".concat(common.__hash) + " " + (classes || "")
  }, _react.default.createElement("span", {
    className: "jsx-".concat(common.__hash) + " " + "path"
  }), _react.default.createElement("span", {
    className: "jsx-".concat(common.__hash) + " " + "toggle"
  }), _react.default.createElement(_style.default, {
    id: common.__hash
  }, common));
};

exports.SwitchIcon = SwitchIcon;
SwitchIcon.propTypes = {
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  error: _propTypes.default.bool
};