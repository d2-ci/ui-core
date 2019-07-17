"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = require("@dhis2/prop-types");

var _styles = _interopRequireDefault(require("./styles.js"));

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

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "buttonRef", (0, _react.createRef)());

    return _this;
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.initialFocus) {
        this.buttonRef.current.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          children = _this$props.children,
          icon = _this$props.icon,
          name = _this$props.name,
          value = _this$props.value,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          className = _this$props.className,
          primary = _this$props.primary,
          secondary = _this$props.secondary,
          destructive = _this$props.destructive,
          small = _this$props.small,
          large = _this$props.large;
      return _react.default.createElement("button", {
        disabled: disabled,
        onClick: onClick,
        type: type,
        name: name,
        value: value,
        ref: this.buttonRef,
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)(className, {
          primary: primary,
          secondary: secondary,
          destructive: destructive,
          small: small,
          large: large,
          'icon-only': icon && !children,
          icon: icon
        }) || "")
      }, icon && _react.default.createElement("span", {
        className: "jsx-".concat(_styles.default.__hash) + " " + "button-icon"
      }, icon), children, _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default));
    }
  }]);

  return Button;
}(_react.Component);

exports.Button = Button;
Button.defaultProps = {
  type: 'button'
};
var variantPropType = (0, _propTypes2.mutuallyExclusive)(['primary', 'secondary', 'destructive'], _propTypes.default.bool);
var sizePropType = (0, _propTypes2.mutuallyExclusive)(['small', 'large'], _propTypes.default.bool);
Button.propTypes = {
  onClick: _propTypes.default.func,
  className: _propTypes.default.string,
  icon: _propTypes.default.element,
  name: _propTypes.default.string,
  value: _propTypes.default.string,
  type: _propTypes.default.oneOf(['submit', 'reset', 'button']),
  small: sizePropType,
  large: sizePropType,
  primary: variantPropType,
  secondary: variantPropType,
  destructive: variantPropType,
  disabled: _propTypes.default.bool,
  initialFocus: _propTypes.default.bool
};