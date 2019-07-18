"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _commonPropTypes = require("../common-prop-types");

var _theme = require("../theme.js");

var _Icon = require("./Icon");

var _Input = require("./Input");

var _Label = require("./Label");

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

var Checkbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, props));

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

    _this.state = {
      focus: props.initialFocus
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$checked = _this$props.checked,
          checked = _this$props$checked === void 0 ? false : _this$props$checked,
          className = _this$props.className,
          disabled = _this$props.disabled,
          error = _this$props.error,
          icon = _this$props.icon,
          indeterminate = _this$props.indeterminate,
          label = _this$props.label,
          name = _this$props.name,
          onChange = _this$props.onChange,
          required = _this$props.required,
          tabIndex = _this$props.tabIndex,
          valid = _this$props.valid,
          value = _this$props.value,
          warning = _this$props.warning;
      var focus = this.state.focus;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("label", {
        className: _style.default.dynamic([["261820537", [_theme.theme.disabled]]]) + " " + ((0, _classnames.default)('base', className, {
          disabled: disabled,
          focus: focus
        }) || "")
      }, _react.default.createElement(_Input.Input, {
        name: name,
        value: value,
        checked: checked,
        disabled: disabled,
        focus: focus,
        onChange: onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        tabIndex: tabIndex
      }), _react.default.createElement(_Icon.Icon, {
        focus: focus,
        checked: checked,
        disabled: disabled,
        valid: valid,
        error: error,
        warning: warning,
        indeterminate: indeterminate
      }), icon, _react.default.createElement(_Label.Label, {
        required: required
      }, label), _react.default.createElement(_style.default, {
        id: "261820537",
        dynamic: [_theme.theme.disabled]
      }, ["label.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;cursor:pointer;pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", ".disabled.__jsx-style-dynamic-selector{cursor:not-allowed;color:".concat(_theme.theme.disabled, ";}"), ".focus.__jsx-style-dynamic-selector{outline:1px;}"])));
    }
  }]);

  return Checkbox;
}(_react.Component);

exports.Checkbox = Checkbox;
Checkbox.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  tabIndex: _propTypes.default.string,
  className: _propTypes.default.string,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  icon: _propTypes.default.element,
  indeterminate: _propTypes.default.bool,
  required: _propTypes.default.bool,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  valid: _commonPropTypes.statusPropType,
  warning: _commonPropTypes.statusPropType,
  error: _commonPropTypes.statusPropType,
  initialFocus: _propTypes.default.bool
};