"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InputField = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Input = require("./InputField/Input");

var _LabelFilled = require("../forms/LabelFilled");

var _LabelOutlined = require("../forms/LabelOutlined");

var _theme = require("../theme");

var _constants = require("../icons/constants");

var _constants2 = require("../forms/constants");

var _Help = _interopRequireDefault(require("../Help"));

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

var styles = new String(".base.jsx-3338623497{display:inline-block;width:100%;color:".concat(_theme.colors.grey700, ";}"));
styles.__hash = "3338623497";
var types = {
  TEXT: 'text',
  EMAIL: 'email',
  NUMBER: 'number',
  PASSWORD: 'password',
  URL: 'url'
};

var InputField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputField, _React$Component);

  function InputField(props) {
    var _this;

    _classCallCheck(this, InputField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputField).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      focused: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function (evt) {
      _this.setState({
        focused: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (evt) {
      _this.setState({
        focused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (evt) {
      if (_this.props.disabled) {
        return;
      }

      _this.props.onChange(_this.props.name, evt.target.value);
    });

    _this.state = {
      focused: props.focus
    };
    return _this;
  }

  _createClass(InputField, [{
    key: "isFocused",
    value: function isFocused() {
      return this.state.focused;
    }
  }, {
    key: "render",
    value: function render() {
      var isFilled = this.props.kind === _constants2.inputKinds.FILLED;
      var isDense = this.props.size === _constants2.inputSizes.DENSE;
      var Container = this.props.kind === _constants2.inputKinds.FILLED ? _LabelFilled.LabelFilled : _LabelOutlined.LabelOutlined;
      return _react.default.createElement("div", {
        onClick: this.onFocus,
        className: "jsx-".concat(styles.__hash) + " " + _style.default.dynamic([["2004200063", [_theme.colors.grey500]]]) + " " + ((0, _classnames.default)('base', this.props.className, {
          disabled: this.props.disabled
        }) || "")
      }, _react.default.createElement(Container, {
        label: this.props.label,
        isFocused: this.state.focused,
        hasValue: !!this.props.value || this.props.placeholder,
        htmlFor: this.props.name,
        required: this.props.required,
        disabled: this.props.disabled,
        status: this.props.status,
        size: this.props.size,
        className: "jsx-".concat(styles.__hash) + " " + _style.default.dynamic([["2004200063", [_theme.colors.grey500]]])
      }, _react.default.createElement(_Input.Input, {
        name: this.props.name,
        type: this.props.type,
        kind: this.props.kind,
        value: this.props.value,
        placeholder: this.props.placeholder,
        isFocused: this.state.focused,
        disabled: this.props.disabled,
        isFilled: isFilled,
        isDense: isDense,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange
      })), this.props.help && _react.default.createElement(_Help.default, {
        text: this.props.help,
        status: this.props.status
      }), _react.default.createElement(_style.default, {
        id: "2004200063",
        dynamic: [_theme.colors.grey500]
      }, "div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::-webkit-input-placeholder{color:".concat(_theme.colors.grey500, ";cursor:not-allowed;}div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::-moz-placeholder{color:").concat(_theme.colors.grey500, ";cursor:not-allowed;}div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled:-ms-input-placeholder{color:").concat(_theme.colors.grey500, ";cursor:not-allowed;}div.__jsx-style-dynamic-selector .disabled,div.__jsx-style-dynamic-selector .disabled::placeholder{color:").concat(_theme.colors.grey500, ";cursor:not-allowed;}")), _react.default.createElement(_style.default, {
        id: styles.__hash
      }, styles));
    }
  }]);

  return InputField;
}(_react.default.Component);

exports.InputField = InputField;
InputField.defaultProps = {
  status: _constants.iconStatuses.DEFAULT,
  size: _constants2.inputSizes.DEFAULT,
  kind: _constants2.inputKinds.FILLED,
  type: types.TEXT,
  focus: false,
  disabled: false,
  required: false,
  placeholder: ''
};
InputField.propTypes = {
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired,
  help: _propTypes.default.string,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  focus: _propTypes.default.bool,
  status: _constants.iconStatusPropType,
  size: _propTypes.default.oneOf([_constants2.inputSizes.DEFAULT, _constants2.inputSizes.DENSE]),
  kind: _propTypes.default.oneOf([_constants2.inputKinds.FILLED, _constants2.inputKinds.OUTLINED]),
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  type: _propTypes.default.oneOf([types.TEXT, types.EMAIL, types.NUMBER, types.PASSWORD, types.URL])
};
var _default = InputField;
exports.default = _default;