"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputField = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Input = require("./Input.js");

var _FieldLabel = require("../FieldLabel");

var _theme = require("../theme");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputField, _React$Component);

  function InputField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InputField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      focus: _this.props.focus
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function (e) {
      _this.setState({
        focus: true
      });

      _this.props.onFocus(e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (e) {
      _this.setState({
        focus: false
      });

      _this.props.onBlur(e);
    });

    return _this;
  }

  _createClass(InputField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          type = _this$props.type,
          filled = _this$props.filled,
          dense = _this$props.dense,
          required = _this$props.required,
          label = _this$props.label,
          disabled = _this$props.disabled,
          placeholder = _this$props.placeholder,
          name = _this$props.name,
          valid = _this$props.valid,
          error = _this$props.error,
          warning = _this$props.warning,
          loading = _this$props.loading,
          value = _this$props.value,
          _this$props$focus = _this$props.focus,
          focus = _this$props$focus === void 0 ? this.state.focus : _this$props$focus;
      var Container = filled ? _FieldLabel.LabelFilled : _FieldLabel.LabelOutlined;
      return _react.default.createElement(Container, {
        focus: focus,
        label: label,
        value: !!value || !!placeholder,
        htmlFor: name,
        required: required,
        disabled: disabled,
        valid: valid,
        warning: warning,
        error: error,
        loading: loading,
        dense: dense,
        className: _style.default.dynamic([["349714766", [_theme.theme.disabled]]])
      }, _react.default.createElement(_Input.Input, {
        focus: focus,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: onChange,
        name: name,
        type: type,
        value: value || '',
        placeholder: placeholder,
        filled: filled,
        disabled: disabled,
        valid: valid,
        warning: warning,
        error: error,
        loading: loading,
        dense: dense
      }), _react.default.createElement(_style.default, {
        id: "349714766",
        dynamic: [_theme.theme.disabled]
      }, ["div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::-webkit-input-placeholder{color:".concat(_theme.theme.disabled, ";cursor:not-allowed;}"), "div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::-moz-placeholder{color:".concat(_theme.theme.disabled, ";cursor:not-allowed;}"), "div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled:-ms-input-placeholder{color:".concat(_theme.theme.disabled, ";cursor:not-allowed;}"), "div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::placeholder{color:".concat(_theme.theme.disabled, ";cursor:not-allowed;}")]));
    }
  }]);

  return InputField;
}(_react.default.Component);

exports.InputField = InputField;
InputField.defaultProps = {
  type: 'text',
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
};
InputField.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  filled: _propTypes.default.bool,
  dense: _propTypes.default.bool,
  focus: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  error: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  onBlur: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  type: _propTypes.default.oneOf(['text', 'email', 'number', 'password', 'url'])
};