"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme.js");

var _styles = _interopRequireDefault(require("./styles.js"));

var _Checkbox = require("../icons/Checkbox.js");

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
    id: "3627497902"
  }, ["svg.jsx-3627497902{height:24px;width:24px;fill:".concat(_theme.theme.default, ";}"), ".checked.jsx-3627497902{fill:".concat(_theme.colors.teal400, ";}"), ".disabled.jsx-3627497902{fill:".concat(_theme.theme.disabled, ";}"), ".error.jsx-3627497902{fill:".concat(_theme.theme.error, ";}"), ".valid.jsx-3627497902{fill:".concat(_theme.theme.valid, ";}"), ".warning.jsx-3627497902{fill:".concat(_theme.theme.warning, ";}")]),
  className: "jsx-3627497902"
};

var Checkbox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      indeterminate: _this.props.indeterminate,
      checked: _this.props.checked
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (evt) {
      var checked = !_this.state.checked;
      var indeterminate = _this.state.indeterminate ? false : null;

      _this.setState({
        checked: checked,
        indeterminate: indeterminate
      });

      _this.props.onChange(_this.props.name, checked);
    });

    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          required = _this$props.required,
          className = _this$props.className,
          disabled = _this$props.disabled,
          valid = _this$props.valid,
          error = _this$props.error,
          warning = _this$props.warning;
      var classes = (0, _classnames.default)(icons.className, {
        checked: this.state.checked && !valid && !error && !warning,
        disabled: disabled,
        valid: valid,
        error: error,
        warning: warning
      });

      var icon = _react.default.createElement(_Checkbox.Unchecked, {
        className: classes
      });

      if (this.state.indeterminate) {
        icon = _react.default.createElement(_Checkbox.Indeterminate, {
          className: classes
        });
      } else if (this.state.checked) {
        icon = _react.default.createElement(_Checkbox.Checked, {
          className: classes
        });
      }

      return _react.default.createElement("label", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', className, {
          disabled: this.props.disabled
        }) || "")
      }, _react.default.createElement("input", {
        type: "checkbox",
        onChange: this.onChange,
        checked: this.state.checked,
        disabled: this.props.disabled,
        className: "jsx-".concat(_styles.default.__hash)
      }), icon, _react.default.createElement("span", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('label', {
          required: required
        }) || "")
      }, this.props.label), icons.styles, _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default));
    }
  }]);

  return Checkbox;
}(_react.default.Component);

exports.Checkbox = Checkbox;
Checkbox.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  label: _propTypes.default.string,
  indeterminate: _propTypes.default.bool,
  required: _propTypes.default.bool,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  valid: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  error: _propTypes.default.bool
};