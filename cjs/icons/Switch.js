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

var common = ["div.jsx-1391757285{display:inline-block;position:relative;width:44px;height:14px;cursor:pointer;}", ".path.jsx-1391757285{left:1px;width:34px;height:14px;border-radius:8px;opacity:0.5;background-color:#bbbaba;}", ".toggle.jsx-1391757285{left:0;width:20px;height:20px;border-radius:50%;box-shadow:0 0 1px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24);background-color:#efefef;}", ".path.jsx-1391757285,.toggle.jsx-1391757285{position:absolute;top:50%;margin:0;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);outline:0;content:'';}", ".checked.jsx-1391757285 .path.jsx-1391757285{background-color:".concat(_theme.colors.teal400, ";}"), ".checked.jsx-1391757285 .toggle.jsx-1391757285{-webkit-transform:translate(80%,-50%);-ms-transform:translate(80%,-50%);transform:translate(80%,-50%);background-color:".concat(_theme.colors.teal400, ";}"), ".valid.jsx-1391757285 .path.jsx-1391757285,.valid.jsx-1391757285 .toggle.jsx-1391757285{background-color:".concat(_theme.theme.valid, ";}"), ".warning.jsx-1391757285 .path.jsx-1391757285,.warning.jsx-1391757285 .toggle.jsx-1391757285{background-color:".concat(_theme.theme.warning, ";}"), ".error.jsx-1391757285 .path.jsx-1391757285,.error.jsx-1391757285 .toggle.jsx-1391757285{background-color:".concat(_theme.theme.error, ";}"), ".disabled.jsx-1391757285{cursor:not-allowed;color:".concat(_theme.colors.grey500, ";}"), ".disabled.jsx-1391757285 .path.jsx-1391757285{background-color:#dadada;}", ".disabled.jsx-1391757285 .toggle.jsx-1391757285{background-color:#f5f5f5;}"];
common.__hash = "1391757285";

var SwitchIcon = function SwitchIcon(_ref) {
  var checked = _ref.checked,
      valid = _ref.valid,
      warning = _ref.warning,
      error = _ref.error,
      disabled = _ref.disabled;
  var classes = (0, _classnames.default)({
    checked: checked,
    disabled: disabled,
    valid: valid,
    error: error,
    warning: warning
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