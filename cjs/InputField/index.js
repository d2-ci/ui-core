"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "iconStatuses", {
  enumerable: true,
  get: function get() {
    return _constants.iconStatuses;
  }
});
Object.defineProperty(exports, "inputKinds", {
  enumerable: true,
  get: function get() {
    return _constants2.inputKinds;
  }
});
Object.defineProperty(exports, "inputSizes", {
  enumerable: true,
  get: function get() {
    return _constants2.inputSizes;
  }
});
exports.default = exports.types = exports.InputField = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Status = require("../icons/Status.js");

var _theme = require("../theme.js");

var _helpers = require("../icons/helpers");

var _constants = require("../icons/constants");

var _constants2 = require("../forms/constants");

var _Help = _interopRequireDefault(require("../Help"));

var _styles = _interopRequireDefault(require("./styles.js"));

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

var types = {
  TEXT: 'text',
  EMAIL: 'email',
  NUMBER: 'number',
  PASSWORD: 'password',
  URL: 'url'
};
exports.types = types;

function createTrailIcon(status, trail, fn) {
  return status !== 'default' ? (0, _helpers.createIcon)(_constants.statusToIcon[status], {
    action: fn
  }) : trail;
}

var InputField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputField, _React$Component);

  function InputField(props) {
    var _this;

    _classCallCheck(this, InputField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputField).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      focused: false,
      labelWidth: 0
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

    _this.labelRef = _react.default.createRef();
    _this.inputRef = _react.default.createRef();
    return _this;
  }

  _createClass(InputField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        labelWidth: this.labelRef.current.offsetWidth,
        focused: this.props.focus
      });

      if (this.props.focus) {
        this.inputRef.current.focus();
      }
    }
  }, {
    key: "isFocused",
    value: function isFocused() {
      return this.state.focused;
    }
  }, {
    key: "shrink",
    value: function shrink() {
      return !!(this.isFocused() || this.props.value || this.props.placeholder);
    }
  }, {
    key: "render",
    value: function render() {
      var _cx, _cx2, _cx3;

      var legendWidth = this.shrink() ? {
        width: "".concat(this.state.labelWidth, "px")
      } : {
        width: '0.01px'
      };
      return _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', this.props.className, {
          focused: this.isFocused(),
          disabled: this.props.disabled
        }) || "")
      }, _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('field', (_cx = {}, _defineProperty(_cx, "size-".concat(this.props.size), true), _defineProperty(_cx, "status-".concat(this.props.status), true), _defineProperty(_cx, "kind-".concat(this.props.kind), true), _defineProperty(_cx, "focused", this.isFocused()), _defineProperty(_cx, "filled", this.props.value), _defineProperty(_cx, "disabled", this.props.disabled), _cx)) || "")
      }, _react.default.createElement("label", {
        ref: this.labelRef,
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('label', (_cx2 = {}, _defineProperty(_cx2, "".concat(this.props.status), true), _defineProperty(_cx2, "".concat(this.props.size), true), _defineProperty(_cx2, "".concat(this.props.kind), true), _defineProperty(_cx2, 'has-icon', !!this.props.icon), _defineProperty(_cx2, "required", this.props.required), _defineProperty(_cx2, "disabled", this.props.disabled), _defineProperty(_cx2, "focused", this.isFocused()), _defineProperty(_cx2, "shrink", this.shrink()), _cx2)) || "")
      }, this.props.label), this.props.kind === 'outlined' && _react.default.createElement("fieldset", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('flatline', (_cx3 = {}, _defineProperty(_cx3, "".concat(this.props.status), true), _defineProperty(_cx3, "focused", this.isFocused()), _defineProperty(_cx3, "idle", !this.isFocused()), _defineProperty(_cx3, "filled", this.props.value), _cx3)) || "")
      }, _react.default.createElement("legend", {
        style: legendWidth,
        className: "jsx-".concat(_styles.default.__hash) + " " + "legend"
      }, _react.default.createElement("span", {
        className: "jsx-".concat(_styles.default.__hash)
      }, "\u200B"))), (0, _helpers.createIcon)(this.props.icon), _react.default.createElement("input", {
        ref: this.inputRef,
        type: this.props.type,
        placeholder: this.props.placeholder,
        disabled: this.props.disabled,
        value: this.props.value,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)({
          disabled: this.props.disabled
        }) || "")
      }), createTrailIcon(this.props.status, this.props.trailIcon)), this.props.help && _react.default.createElement(_Help.default, {
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
  status: _constants.iconStatuses.DEFAULT,
  size: _constants2.inputSizes.DEFAULT,
  kind: _constants2.inputKinds.FILLED,
  type: types.TEXT,
  focus: false,
  disabled: false,
  required: false
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
  status: _constants.iconStatusPropType,
  size: _propTypes.default.oneOf([_constants2.inputSizes.DEFAULT, _constants2.inputSizes.DENSE]),
  kind: _propTypes.default.oneOf([_constants2.inputKinds.FILLED, _constants2.inputKinds.OUTLINED]),
  type: _propTypes.default.oneOf([types.TEXT, types.EMAIL, types.NUMBER, types.PASSWORD, types.URL]),
  focus: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool
};
var _default = InputField;
exports.default = _default;