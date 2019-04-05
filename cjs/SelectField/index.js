"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SelectField = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Arrow = require("../icons/Arrow");

var _Status = require("../icons/Status");

var _Input = require("../InputField/InputField/Input");

var _LabelFilled = require("../forms/LabelFilled");

var _LabelOutlined = require("../forms/LabelOutlined");

var _Select = require("./SelectField/Select");

var _theme = require("../theme");

var _helpers = require("../icons/helpers");

var _constants = require("../icons/constants");

var _constants2 = require("../forms/constants");

var _math = require("../utils/math");

var _Help = _interopRequireDefault(require("../Help"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _styles = _interopRequireWildcard(require("./styles"));

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

function createTrailIcon(status, trail, fn) {
  var icon = status !== _constants.iconStatuses.DEFAULT ? _Status.statusToIcon[status] : trail;
  var options = {
    action: fn,
    className: _styles.selectIconStyles.className
  };
  return (0, _helpers.createIcon)(icon, options);
}

var _ref =
/*#__PURE__*/
_react.default.createElement(_style.default, {
  id: "1546415887"
}, ".select-value.jsx-1546415887{display:block;overflow:hidden;padding-right:10px;text-overflow:ellipsis;white-space:nowrap;}");

var SelectField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectField, _React$Component);

  function SelectField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "elContainer", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      focused: false,
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDocClick", function (evt) {
      if (_this.focused && _this.elContainer) {
        var target = {
          x: evt.clientX,
          y: evt.clientY
        };

        var container = _this.elContainer.getBoundingClientRect();

        if (!(0, _math.isPointInRect)(target, container)) {
          _this.setState({
            focused: false,
            open: false
          });
        }
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

      var open = this.state.open;
      var Arrow = open ? _Arrow.ArrowUp : _Arrow.ArrowDown;
      var isFilled = this.props.kind === _constants2.inputKinds.FILLED;
      var isDense = this.props.size === _constants2.inputSizes.DENSE;
      var Container = this.props.kind === _constants2.inputKinds.FILLED ? _LabelFilled.LabelFilled : _LabelOutlined.LabelOutlined;
      return _react.default.createElement("div", {
        ref: function ref(c) {
          return _this2.elContainer = c;
        },
        className: "jsx-1546415887 " + "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', this.props.className, _defineProperty({
          selected: !!this.props.value,
          disabled: this.props.disabled
        }, "size-".concat(this.props.size), true)) || "")
      }, _react.default.createElement(Container, {
        label: this.props.label,
        isFocused: this.state.focused,
        hasValue: true,
        htmlFor: this.props.name,
        required: this.props.required,
        status: this.props.status,
        size: this.props.size,
        tailIcon: Arrow,
        onClick: this.onFocus,
        className: "jsx-1546415887 " + "jsx-".concat(_styles.default.__hash)
      }, _react.default.createElement(_Select.Select, {
        value: this.props.value,
        disabled: this.props.disabled,
        list: this.props.list,
        kind: this.props.kind,
        size: this.props.size,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      })), this.props.help && _react.default.createElement(_Help.default, {
        text: this.props.help,
        status: this.props.status
      }), _react.default.createElement("style", null, _styles.menuOverride.styles), _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default), _react.default.createElement("style", null, _styles.selectIconStyles.styles), _ref);
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
  required: false,
  onFocus: null,
  onBlur: null
};
SelectField.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  list: _Select.Select.propTypes.list,
  value: _propTypes.default.string.isRequired,
  help: _propTypes.default.string,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  icon: _propTypes.default.element,
  size: _propTypes.default.oneOf([_constants2.inputSizes.DEFAULT, _constants2.inputSizes.DENSE]),
  kind: _propTypes.default.oneOf([_constants2.inputKinds.FILLED, _constants2.inputKinds.OUTLINED]),
  status: _constants.iconStatusPropType,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func
};
var _default = SelectField;
exports.default = _default;