"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectField = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Arrow = require("../icons/Arrow");

var _FieldLabel = require("../FieldLabel");

var _Select = require("./Select");

var _theme = require("../theme");

var _constants = require("../icons/constants");

var _constants2 = require("../forms/constants");

var _Help = require("../Help");

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

var styles = new String(".base.jsx-2528058342{display:inline-block;position:relative;width:100%;background-color:inherit;color:".concat(_theme.colors.grey700, ";pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.disabled.jsx-2528058342{cursor:not-allowed;opacity:1;}"));
styles.__hash = "2528058342";

var _ref =
/*#__PURE__*/
_react.default.createElement("div", {
  className: "jsx-3487810764"
}, _react.default.createElement(_Arrow.ArrowDown, null), _react.default.createElement(_style.default, {
  id: "3487810764"
}, "div.jsx-3487810764{pointer-events:none;position:absolute;right:4px;}"));

var TailIcon = function TailIcon() {
  return _ref;
};

var _ref2 =
/*#__PURE__*/
_react.default.createElement(TailIcon, null);

var SelectField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectField, _React$Component);

  function SelectField(props) {
    var _this;

    _classCallCheck(this, SelectField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectField).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "elContainer", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDocClick", function (evt) {
      if (_this.elContainer && !_this.elContainer.contains(evt.target)) {
        _this.setState({
          focused: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      if (!_this.props.disabled) {
        var value = event.target.value;

        _this.props.onChange(_this.props.name, value);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function (e) {
      _this.setState({
        focused: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (e) {
      _this.setState({
        focused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(e);
      }
    });

    _this.state = {
      focused: props.focused
    };
    return _this;
  }

  _createClass(SelectField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.onDocClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onDocClick);
    }
  }, {
    key: "isFocused",
    value: function isFocused() {
      return this.state.focused;
    }
  }, {
    key: "shrink",
    value: function shrink() {
      return !!(this.isFocused() || this.props.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isFilled = this.props.kind === _constants2.inputKinds.FILLED;
      var isDense = this.props.size === _constants2.inputSizes.DENSE;
      var Container = this.props.kind === _constants2.inputKinds.FILLED ? _FieldLabel.LabelFilled : _FieldLabel.LabelOutlined;
      return _react.default.createElement("div", {
        ref: function ref(c) {
          return _this2.elContainer = c;
        },
        className: "jsx-".concat(styles.__hash) + " " + ((0, _classnames.default)('base', this.props.className, _defineProperty({
          selected: !!this.props.value,
          disabled: this.props.disabled
        }, "size-".concat(this.props.size), true)) || "")
      }, _react.default.createElement(Container, {
        label: this.props.label,
        isFocused: this.isFocused(),
        hasValue: true,
        htmlFor: this.props.name,
        required: this.props.required,
        disabled: this.props.disabled,
        status: this.props.status,
        size: this.props.size,
        onClick: this.onFocus,
        className: "jsx-".concat(styles.__hash)
      }, _react.default.createElement(_Select.Select, {
        value: this.props.value,
        disabled: this.props.disabled,
        list: this.props.list,
        kind: this.props.kind,
        size: this.props.size,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }), _ref2), this.props.help && _react.default.createElement(_Help.Help, {
        text: this.props.help,
        status: this.props.status
      }), _react.default.createElement(_style.default, {
        id: styles.__hash
      }, styles));
    }
  }]);

  return SelectField;
}(_react.default.Component);

exports.SelectField = SelectField;
SelectField.defaultProps = {
  size: _constants2.inputSizes.DEFAULT,
  kind: _constants2.inputKinds.FILLED,
  status: _constants.iconStatuses.DEFAULT,
  help: '',
  className: '',
  disabled: false,
  required: false
};
SelectField.propTypes = {
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string.isRequired,
  list: _Select.Select.propTypes.list,
  help: _propTypes.default.string,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  focus: _propTypes.default.bool,
  size: _propTypes.default.oneOf([_constants2.inputSizes.DEFAULT, _constants2.inputSizes.DENSE]),
  kind: _propTypes.default.oneOf([_constants2.inputKinds.FILLED, _constants2.inputKinds.OUTLINED]),
  status: _constants.iconStatusPropType,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func
};