"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = ["select.jsx-4198221289{background:none;border:0;color:".concat(_theme.colors.grey900, ";font-size:16px;height:100%;left:0;outline:0;padding:0 12px 0 15px;position:absolute;top:0;width:100%;-webkit-appearance:none;-moz-appearance:none;}"), ".disabled.jsx-4198221289{color:".concat(_theme.theme.disabled, ";cursor:not-allowed;}"), ".dense.jsx-4198221289{font-size:14px;}", ".filled.jsx-4198221289{padding-top:24px;padding-left:16px;}", ".filled.dense.jsx-4198221289{padding-top:20px;}", "option.jsx-4198221289:not(:checked){color:black;}", "select.jsx-4198221289:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}"];
styles.__hash = "4198221289";

var Select =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "selectRef", (0, _react.createRef)());

    return _this;
  }

  _createClass(Select, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.focused !== this.props.focused) {
        if (this.props.focused) {
          this.selectRef.focus();
        } else {
          this.selectRef.blur();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dense = _this$props.dense,
          filled = _this$props.filled,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          value = _this$props.value,
          children = _this$props.children,
          name = _this$props.name;
      var className = (0, _classnames.default)({
        dense: dense,
        filled: filled,
        disabled: disabled
      });
      return _react.default.createElement("select", {
        onChange: onChange,
        value: value || -1,
        disabled: disabled,
        onFocus: onFocus,
        onBlur: onBlur,
        name: name,
        className: "jsx-".concat(styles.__hash) + " " + (className || "")
      }, _react.default.createElement("option", {
        key: "hidden-default-value",
        hidden: true,
        disabled: true,
        value: "-1",
        className: "jsx-".concat(styles.__hash)
      }), children, _react.default.createElement(_style.default, {
        id: styles.__hash
      }, styles));
    }
  }]);

  return Select;
}(_react.Component);

exports.Select = Select;
Select.propTypes = {
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.string,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.shape({
    tagName: _propTypes.default.oneOf(['OPTION', 'OPTGROUP'])
  })), _propTypes.default.shape({
    tagName: _propTypes.default.oneOf(['OPTION', 'OPTGROUP'])
  })]),
  disabled: _propTypes.default.bool,
  filled: _propTypes.default.bool,
  dense: _propTypes.default.bool
};