"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function Label(_ref) {
  var htmlFor = _ref.htmlFor,
      disabled = _ref.disabled,
      required = _ref.required,
      children = _ref.children;
  var className = (0, _classnames.default)('label', {
    disabled: disabled,
    required: required
  });
  return _react.default.createElement("label", {
    className: _style.default.dynamic([["2534065500", [_theme.colors.grey900, _theme.theme.disabled]]]) + " " + (className || "")
  }, children, _react.default.createElement(_style.default, {
    id: "2534065500",
    dynamic: [_theme.colors.grey900, _theme.theme.disabled]
  }, [".label.__jsx-style-dynamic-selector{color:".concat(_theme.colors.grey900, ";cursor:pointer;}"), ".required.__jsx-style-dynamic-selector:after{padding-left:4px;content:'*';}", ".disabled.__jsx-style-dynamic-selector{cursor:not-allowed;color:".concat(_theme.theme.disabled, ";}")]));
};

exports.Label = Label;
Label.propTypes = {
  htmlFor: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool
};