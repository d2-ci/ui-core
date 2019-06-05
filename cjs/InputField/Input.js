"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var calculatePaddingTop = function calculatePaddingTop(props) {
  return props.filled ? '14px' : '18.5px';
};

var styles = ["input.jsx-3935505702{color:".concat(_theme.colors.grey900, ";background-color:transparent;border:0;box-sizing:border-box;font-size:16px;height:100%;line-height:16px;outline:0;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;width:100%;padding:18px 0 15px 16px;}"), ".dense.jsx-3935505702{padding-top:12px;padding-bottom:12px;font-size:14px;}", ".disabled.jsx-3935505702{color:".concat(_theme.theme.disabled, ";cursor:not-allowed;}"), ".filled.jsx-3935505702{padding:32px 0 8px 16px;}", ".filled.dense.jsx-3935505702{padding:25px 0 5px 16px;}"];
styles.__hash = "3935505702";

var Input =
/*#__PURE__*/
function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputRef", _react.default.createRef());

    return _this;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.focus) {
        this.inputRef.current.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var paddingTop = calculatePaddingTop(this.props);
      var _this$props = this.props,
          dense = _this$props.dense,
          filled = _this$props.filled,
          disabled = _this$props.disabled;
      var classes = (0, _classnames.default)({
        dense: dense,
        filled: filled,
        outlined: !filled,
        disabled: disabled
      });
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("input", {
        id: this.props.name,
        name: this.props.name,
        placeholder: this.props.placeholder,
        ref: this.inputRef,
        type: this.props.type,
        value: this.props.value,
        disabled: disabled,
        autocomplete: this.props.autocomplete,
        autofocus: this.props.autofocus,
        tabIndex: this.props.tabIndex,
        readonly: this.props.readonly,
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur,
        onChange: this.props.onChange,
        className: "jsx-".concat(styles.__hash) + " " + (classes || "")
      }), _react.default.createElement(_style.default, {
        id: styles.__hash
      }, styles));
    }
  }]);

  return Input;
}(_react.Component);

exports.Input = Input;
Input.propTypes = {
  name: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  autocomplete: _propTypes.default.string,
  tabIndex: _propTypes.default.string,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  focus: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  filled: _propTypes.default.bool,
  dense: _propTypes.default.bool,
  autofocus: _propTypes.default.bool,
  readonly: _propTypes.default.bool
};