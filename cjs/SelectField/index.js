"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectField = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Arrow = require("../icons/Arrow");

var _FieldLabel = require("../FieldLabel");

var _Select = require("./Select");

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

var _ref =
/*#__PURE__*/
_react.default.createElement(_Arrow.ArrowDown, null);

var TailIcon = function TailIcon() {
  return _react.default.createElement("div", {
    className: "jsx-3487810764"
  }, _ref, _react.default.createElement(_style.default, {
    id: "3487810764"
  }, ["div.jsx-3487810764{pointer-events:none;position:absolute;right:4px;}"]));
};

var _ref2 =
/*#__PURE__*/
_react.default.createElement(TailIcon, null);

var SelectField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectField, _React$Component);

  function SelectField(props) {
    var _this;

    _classCallCheck(this, SelectField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectField).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      if (!_this.props.disabled) {
        var value = event.target.value;

        _this.props.onChange(_this.props.name, value);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function (e) {
      _this.setState({
        focused: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (e) {
      _this.setState({
        focused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(e);
      }
    });

    _this.state = {
      focused: props.focused
    };
    return _this;
  }

  _createClass(SelectField, [{
    key: "isFocused",
    value: function isFocused() {
      return this.state.focused;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          list = _this$props.list,
          filled = _this$props.filled,
          focus = _this$props.focus,
          dense = _this$props.dense,
          required = _this$props.required,
          label = _this$props.label,
          disabled = _this$props.disabled,
          placeholder = _this$props.placeholder,
          value = _this$props.value,
          name = _this$props.name,
          valid = _this$props.valid,
          error = _this$props.error,
          warning = _this$props.warning,
          loading = _this$props.loading;
      var Container = filled ? _FieldLabel.LabelFilled : _FieldLabel.LabelOutlined;
      return _react.default.createElement(Container, {
        onClick: this.onFocus,
        focus: this.state.focus,
        label: label,
        value: !!value || placeholder,
        htmlFor: name,
        required: required,
        disabled: disabled,
        valid: valid,
        warning: warning,
        error: error,
        loading: loading,
        dense: dense
      }, _react.default.createElement(_Select.Select, {
        value: value,
        disabled: disabled,
        list: list,
        filled: filled,
        dense: dense,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }), _ref2);
    }
  }]);

  return SelectField;
}(_react.default.Component);

exports.SelectField = SelectField;
SelectField.propTypes = {
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired,
  list: _Select.Select.propTypes.list,
  className: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  filled: _propTypes.default.bool,
  dense: _propTypes.default.bool,
  focus: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  error: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func
};