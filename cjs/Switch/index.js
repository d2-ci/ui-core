"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

var _Switch = require("../icons/Switch.js");

var _styles = _interopRequireDefault(require("./styles"));

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

var Switch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Switch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      checked: _this.props.defaultChecked || false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (evt) {
      var checked = evt.target.checked;

      _this.setState({
        checked: checked
      });

      _this.props.onChange(_this.props.name, checked);
    });

    return _this;
  }

  _createClass(Switch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          required = _this$props.required,
          valid = _this$props.valid,
          error = _this$props.error,
          warning = _this$props.warning,
          className = _this$props.className,
          disabled = _this$props.disabled,
          name = _this$props.name,
          _this$props$checked = _this$props.checked,
          checked = _this$props$checked === void 0 ? this.state.checked : _this$props$checked;
      return _react.default.createElement("label", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)(className, {
          disabled: disabled
        }) || "")
      }, _react.default.createElement("input", {
        type: "checkbox",
        disabled: disabled,
        name: name,
        checked: checked,
        onChange: this.onChange,
        className: "jsx-".concat(_styles.default.__hash)
      }), _react.default.createElement(_Switch.SwitchIcon, {
        checked: checked,
        disabled: disabled,
        valid: valid,
        warning: warning,
        error: error
      }), _react.default.createElement("span", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)({
          required: required,
          disabled: disabled
        }) || "")
      }, this.props.label), _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default));
    }
  }]);

  return Switch;
}(_react.default.Component);

exports.Switch = Switch;
Switch.defaultProps = {
  onChange: function onChange() {}
};
Switch.propTypes = {
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  className: _propTypes.default.string,
  label: _propTypes.default.string,
  required: _propTypes.default.bool,
  defaultChecked: _propTypes.default.bool,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  error: _propTypes.default.bool
};