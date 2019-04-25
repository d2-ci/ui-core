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

var _constants = require("../forms/constants");

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

var styles = ["input.jsx-2970721706{color:black;background-color:transparent;border:0;box-sizing:border-box;font-size:".concat(_constants.inputFontSizeValue, ";height:100%;line-height:16px;outline:0;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;width:100%;}"), ".filled.jsx-2970721706{padding:32px 0 8px 16px;}", ".outlined.jsx-2970721706{padding:18px 0 18px 16px;}", ".disabled.jsx-2970721706{color:".concat(_theme.colors.grey500, ";cursor:not-allowed;}"), ".jsx-2970721706 .outlined.jsx-2970721706{padding-left:15px;}", ".filled.dense.jsx-2970721706{font-size:14px;padding:25px 0 5px 16px;}", ".outlined.dense.jsx-2970721706{padding-top:12px;padding-bottom:12px;}"];
styles.__hash = "2970721706";

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
      if (this.props.isFocused) {
        this.inputRef.current.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var paddingTop = calculatePaddingTop(this.props);
      var className = (0, _classnames.default)({
        dense: this.props.isDense,
        filled: this.props.kind === _constants.inputKinds.FILLED,
        outlined: this.props.kind === _constants.inputKinds.OUTLINED,
        disabled: this.props.disabled
      });
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("input", {
        id: this.props.name,
        name: this.props.name,
        placeholder: this.props.placeholder,
        ref: this.inputRef,
        type: this.props.type,
        disabled: this.props.disabled,
        value: this.props.value,
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur,
        onChange: this.props.onChange,
        className: "jsx-".concat(styles.__hash) + " " + (className || "")
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
  value: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool.isRequired,
  isFocused: _propTypes.default.bool.isRequired,
  onFocus: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func.isRequired,
  onChange: _propTypes.default.func.isRequired,
  placeholder: _propTypes.default.string.isRequired,
  kind: _propTypes.default.arrayOf([_constants.inputKinds.FILLED, _constants.inputKinds.OUTLINED]).isRequired
};