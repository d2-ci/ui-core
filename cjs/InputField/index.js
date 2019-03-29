"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InputField = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Status = require("../icons/Status.js");

var _theme = require("../theme.js");

var _constants = require("../forms/constants");

var _Input = require("./InputField/Input");

var _Label = require("./InputField/Label");

var _Fieldset = require("./InputField/Fieldset");

var _Field = require("./InputField/Field");

var _Help = _interopRequireDefault(require("../Help"));

var _styles = _interopRequireDefault(require("./styles.js"));

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var statusToIcon = {
  valid: _react.default.createElement(_Status.Valid, null),
  warning: _react.default.createElement(_Status.Warning, null),
  error: _react.default.createElement(_Status.Error, null)
};
var icons = {
  default: {
    styles: _react.default.createElement(_style.default, {
      id: "3033330349"
    }, "svg.jsx-3033330349{fill:".concat(_theme.colors.grey700, ";height:24px;width:24px;margin-right:8px;}")),
    className: "jsx-3033330349"
  },
  valid: {
    styles: _react.default.createElement(_style.default, {
      id: "3522955246"
    }, "svg.jsx-3522955246{fill:".concat(_theme.colors.blue600, ";height:24px;width:24px;margin-right:8px;}")),
    className: "jsx-3522955246"
  },
  warning: {
    styles: _react.default.createElement(_style.default, {
      id: "3520916525"
    }, "svg.jsx-3520916525{fill:".concat(_theme.colors.yellow500, ";height:24px;width:24px;margin-right:8px;}")),
    className: "jsx-3520916525"
  },
  error: {
    styles: _react.default.createElement(_style.default, {
      id: "898494457"
    }, "svg.jsx-898494457{fill:".concat(_theme.colors.red500, ";height:24px;width:24px;margin-right:8px;}")),
    className: "jsx-898494457"
  }
};

function icon(Icon) {
  var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

  if (Icon) {
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Icon.type, _extends({}, Icon.props, {
      className: icons[extra].className
    })), icons[extra].styles);
  }

  return null;
}

var TrailIcon = function TrailIcon(_ref) {
  var status = _ref.status,
      trail = _ref.trail;
  return status !== 'default' ? icon(statusToIcon[status], status) : trail;
};

TrailIcon.propTypes = {
  status: _propTypes.default.string,
  fn: _propTypes.default.func
};
TrailIcon.defaultProps = {
  trail: ''
};

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
      focused: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function (evt) {
      _this.setState({
        focused: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (evt) {
      _this.setState({
        focused: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (evt) {
      if (_this.props.disabled) {
        return;
      }

      _this.props.onChange(_this.props.name, evt.target.value);
    });

    return _this;
  }

  _createClass(InputField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        focused: this.props.focus
      });
    }
  }, {
    key: "isFocused",
    value: function isFocused() {
      return this.state.focused;
    }
  }, {
    key: "shouldShrink",
    value: function shouldShrink() {
      return !!(this.isFocused() || this.props.value || this.props.placeholder);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + _style.default.dynamic([["3717134333", [_theme.colors.grey500]]]) + " " + ((0, _classnames.default)('base', this.props.className, {
          focused: this.isFocused(),
          disabled: this.props.disabled
        }) || "")
      }, _react.default.createElement(_style.default, {
        id: "3717134333",
        dynamic: [_theme.colors.grey500]
      }, "div.__jsx-style-dynamic-selector global(.disabled).__jsx-style-dynamic-selector,div.__jsx-style-dynamic-selector global(.disabled.__jsx-style-dynamic-selector::-webkit-input-placeholder){color:".concat(_theme.colors.grey500, ";cursor:not-allowed;}div.__jsx-style-dynamic-selector global(.disabled).__jsx-style-dynamic-selector,div.__jsx-style-dynamic-selector global(.disabled.__jsx-style-dynamic-selector::-moz-placeholder){color:").concat(_theme.colors.grey500, ";cursor:not-allowed;}div.__jsx-style-dynamic-selector global(.disabled).__jsx-style-dynamic-selector,div.__jsx-style-dynamic-selector global(.disabled.__jsx-style-dynamic-selector:-ms-input-placeholder){color:").concat(_theme.colors.grey500, ";cursor:not-allowed;}div.__jsx-style-dynamic-selector global(.disabled).__jsx-style-dynamic-selector,div.__jsx-style-dynamic-selector global(.disabled.__jsx-style-dynamic-selector::placeholder){color:").concat(_theme.colors.grey500, ";cursor:not-allowed;}")), _react.default.createElement(_Field.Field, {
        value: this.props.value,
        size: this.props.size,
        status: this.props.status,
        kind: this.props.kind,
        isFocused: this.isFocused(),
        isFilled: this.props.kind === 'filled',
        isDisabled: this.props.disabled
      }, _react.default.createElement(_Fieldset.Fieldset, {
        kind: this.props.kind,
        status: this.props.status,
        isFocused: this.isFocused(),
        hasValue: !!this.props.value
      }), _react.default.createElement(_Label.Label, {
        status: this.props.status,
        size: this.props.size,
        kind: this.props.kind,
        isShrinked: this.shouldShrink(),
        isFocused: this.isFocused(),
        isDisabled: this.props.disabled,
        isRequired: this.props.required,
        hasIcon: !!this.props.icon,
        className: this.props.styles.label,
        styles: this.props.styles.label,
        label: this.props.label
      }), icon(this.props.icon), _react.default.createElement(_Input.Input, {
        type: this.props.type,
        value: this.props.value,
        placeholder: this.props.placeholder,
        isFocused: this.props.focus,
        disabled: this.props.disabled,
        filled: this.props.kind === 'filled',
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange
      }), _react.default.createElement(TrailIcon, {
        status: this.props.status,
        trail: this.props.trailIcon
      })), this.props.help && _react.default.createElement(_Help.default, {
        text: this.props.help,
        status: this.props.status
      }), _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default));
    }
  }]);

  return InputField;
}(_react.default.Component);

exports.InputField = InputField;
InputField.defaultProps = {
  status: 'default',
  size: 'default',
  kind: 'filled',
  type: 'text',
  focus: false,
  disabled: false,
  required: false,
  styles: {}
};
InputField.propTypes = {
  className: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  label: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  help: _propTypes.default.string,
  icon: _propTypes.default.element,
  trailIcon: _propTypes.default.element,
  status: _propTypes.default.oneOf(['default', 'valid', 'warning', 'error']),
  size: _propTypes.default.oneOf(['default', 'dense']),
  kind: _propTypes.default.oneOf(['filled', 'outlined']),
  type: _propTypes.default.oneOf(['text', 'email', 'number', 'password', 'url']),
  focus: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  styles: _propTypes.default.shape({
    label: _propTypes.default.oneOf([_propTypes.default.string, _propTypes.default.object])
  })
};
var _default = InputField;
exports.default = _default;