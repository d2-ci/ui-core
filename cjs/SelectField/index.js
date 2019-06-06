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

var _theme = require("../theme.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

  function SelectField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      focus: _this.props.initialFocus
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      _this.setState({
        focus: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (e) {
      _this.setState({
        focus: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(e);
      }
    });

    return _this;
  }

  _createClass(SelectField, [{
    key: "isFocused",
    value: function isFocused() {
      return this.state.focus;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          filled = _this$props.filled,
          dense = _this$props.dense,
          required = _this$props.required,
          label = _this$props.label,
          disabled = _this$props.disabled,
          name = _this$props.name,
          valid = _this$props.valid,
          error = _this$props.error,
          warning = _this$props.warning,
          loading = _this$props.loading,
          children = _this$props.children,
          value = _this$props.value,
          tabIndex = _this$props.tabIndex,
          onChange = _this$props.onChange;
      var focus = this.state.focus;
      var Container = filled ? _FieldLabel.LabelFilled : _FieldLabel.LabelOutlined;
      return _react.default.createElement(Container, {
        focus: focus,
        label: label,
        value: !!value,
        htmlFor: name,
        required: required,
        disabled: disabled,
        valid: valid,
        warning: warning,
        error: error,
        loading: loading,
        dense: dense
      }, _react.default.createElement(_Select.Select, {
        focus: focus,
        name: name,
        value: value,
        disabled: disabled,
        filled: filled,
        dense: dense,
        tabIndex: tabIndex,
        onChange: onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }, children), _ref2);
    }
  }]);

  return SelectField;
}(_react.default.Component);

exports.SelectField = SelectField;
SelectField.propTypes = {
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string,
  className: _propTypes.default.string,
  tabIndex: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.shape({
    tagName: _propTypes.default.oneOf(['OPTION', 'OPTGROUP'])
  })), _propTypes.default.shape({
    tagName: _propTypes.default.oneOf(['OPTION', 'OPTGROUP'])
  })]),
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  filled: _propTypes.default.bool,
  dense: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  error: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  initialFocus: _propTypes.default.bool,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func
};