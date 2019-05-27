"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

var _styles = _interopRequireDefault(require("./styles.js"));

var _Radio = require("../icons/Radio.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var icons = {
  styles: _react.default.createElement(_style.default, {
    id: "1822073958"
  }, ["svg.jsx-1822073958{display:block;height:24px;width:24px;fill:".concat(_theme.theme.default, ";}"), ".focus.jsx-1822073958{fill:".concat(_theme.colors.grey800, ";}"), ".checked.jsx-1822073958{fill:".concat(_theme.colors.teal400, ";}"), ".disabled.jsx-1822073958{fill:".concat(_theme.theme.disabled, ";}"), ".error.jsx-1822073958{fill:".concat(_theme.theme.error, ";}"), ".valid.jsx-1822073958{fill:".concat(_theme.theme.valid, ";}"), ".warning.jsx-1822073958{fill:".concat(_theme.theme.warning, ";}")]),
  className: "jsx-1822073958"
};

var Radio =
/*#__PURE__*/
function (_Component) {
  _inherits(Radio, _Component);

  function Radio(props) {
    var _this;

    _classCallCheck(this, Radio);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Radio).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ref", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function (e) {
      _this.setState({
        focus: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (e) {
      _this.setState({
        focus: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(e);
      }
    });

    _this.state = {
      focus: props.focus
    };
    return _this;
  }

  _createClass(Radio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.focus) {
        this.ref.current.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          name = _this$props.name,
          value = _this$props.value,
          className = _this$props.className,
          label = _this$props.label,
          required = _this$props.required,
          _this$props$checked = _this$props.checked,
          checked = _this$props$checked === void 0 ? false : _this$props$checked,
          disabled = _this$props.disabled,
          valid = _this$props.valid,
          warning = _this$props.warning,
          error = _this$props.error,
          autocomplete = _this$props.autocomplete,
          autofocus = _this$props.autofocus,
          readonly = _this$props.readonly,
          tabIndex = _this$props.tabIndex,
          _this$props$focus = _this$props.focus,
          focus = _this$props$focus === void 0 ? this.state.focus : _this$props$focus;
      var classes = (0, _classnames.default)(icons.className, {
        checked: checked && !valid && !error && !warning,
        disabled: disabled,
        valid: valid,
        error: error,
        warning: warning,
        focus: focus
      });
      var icon = checked ? _react.default.createElement(_Radio.Checked, {
        className: classes
      }) : _react.default.createElement(_Radio.Unchecked, {
        className: classes
      });
      return _react.default.createElement("label", {
        className: "jsx-".concat(_styles.default.__hash) + " " + _style.default.dynamic([["1171835330", [_theme.colors.blue400]]]) + " " + ((0, _classnames.default)(className, {
          disabled: disabled
        }) || "")
      }, _react.default.createElement("input", {
        ref: this.ref,
        type: "radio",
        name: name,
        value: value,
        focus: focus,
        checked: checked,
        disabled: disabled,
        autocomplete: autocomplete,
        autofocus: autofocus,
        tabIndex: tabIndex,
        readonly: readonly,
        onChange: onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        className: "jsx-".concat(_styles.default.__hash) + " " + _style.default.dynamic([["1171835330", [_theme.colors.blue400]]])
      }), _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + _style.default.dynamic([["1171835330", [_theme.colors.blue400]]]) + " " + ((0, _classnames.default)({
          focus: focus
        }) || "")
      }, icon), _react.default.createElement("span", {
        className: "jsx-".concat(_styles.default.__hash) + " " + _style.default.dynamic([["1171835330", [_theme.colors.blue400]]]) + " " + ((0, _classnames.default)({
          required: required
        }) || "")
      }, label), icons.styles, _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default), _react.default.createElement(_style.default, {
        id: "1171835330",
        dynamic: [_theme.colors.blue400]
      }, ["div.__jsx-style-dynamic-selector{position:relative;}", ".focus.__jsx-style-dynamic-selector:before{content:'';position:absolute;border:2px solid ".concat(_theme.colors.blue400, ";border-radius:50%;width:calc(100% + 2px);height:calc(100% + 2px);top:-1px;left:-1px;}")]));
    }
  }]);

  return Radio;
}(_react.Component);

exports.Radio = Radio;
Radio.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  label: _propTypes.default.string,
  autocomplete: _propTypes.default.string,
  tabIndex: _propTypes.default.string,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  required: _propTypes.default.bool,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  error: _propTypes.default.bool,
  autofocus: _propTypes.default.bool,
  readonly: _propTypes.default.bool
};
Radio.defaultProps = {
  tabIndex: '0'
};