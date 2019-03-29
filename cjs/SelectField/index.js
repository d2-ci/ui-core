"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
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
exports.default = exports.SelectField = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Arrow = require("../icons/Arrow");

var _Status = require("../icons/Status");

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
  var icon = status !== _constants.iconStatuses.DEFAULT ? _constants.statusToIcon[status] : trail;
  var options = {
    action: fn,
    className: _styles.selectIconStyles.className
  };
  return (0, _helpers.createIcon)(icon, options);
}

function markActive(list, value) {
  if (!value) {
    return list;
  }

  return list.slice(0).map(function (item) {
    item.active = item.value && item.value === value;

    if (Array.isArray(item.list)) {
      item.list = markActive(item.list, value);
    }

    return item;
  });
}

var SelectField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectField, _React$Component);

  function SelectField(props) {
    var _this;

    _classCallCheck(this, SelectField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectField).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false,
      labelWidth: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDocClick", function (evt) {
      if (_this.elContainer && _this.elMenu) {
        var target = {
          x: evt.clientX,
          y: evt.clientY
        };

        var menu = _this.elMenu.getBoundingClientRect();

        var container = _this.elContainer.getBoundingClientRect();

        if (!(0, _math.isPointInRect)(target, menu) && !(0, _math.isPointInRect)(target, container)) {
          _this.setState({
            open: false
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggle", function () {
      if (_this.props.disabled) {
        return false;
      }

      _this.setState({
        open: !_this.state.open
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (value) {
      if (_this.props.disabled) {
        return false;
      }

      _this.setState({
        open: false
      });

      _this.props.onChange(_this.props.name, value);
    });

    _this.labelRef = _react.default.createRef();
    return _this;
  }

  _createClass(SelectField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.onDocClick);
      this.setState({
        labelWidth: this.labelRef.current.offsetWidth
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onDocClick);
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      var _this2 = this;

      if (!this.props.value) {
        return false;
      }

      var selected = this.props.list.filter(function (_ref) {
        var value = _ref.value;
        return _this2.props.value === value;
      });
      return selected.length > 0 ? selected[0]['label'] : null;
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
      var _this3 = this,
          _cx2,
          _cx3,
          _cx4;

      var open = this.state.open;
      var selected = this.getLabel();
      var list = markActive(this.props.list, this.props.value);
      var legendWidth = this.shrink() ? {
        width: "".concat(this.state.labelWidth, "px")
      } : {
        width: '0.01px'
      };
      var width = open && this.elSelect ? "".concat(this.elSelect.getBoundingClientRect().width, "px") : 'inherit';
      var Arrow = open ? _react.default.createElement(_Arrow.ArrowUp, {
        className: _styles.arrowIcon.className
      }) : _react.default.createElement(_Arrow.ArrowDown, {
        className: _styles.arrowIcon.className
      });
      return _react.default.createElement("div", {
        ref: function ref(c) {
          return _this3.elContainer = c;
        },
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', this.props.className, _defineProperty({
          selected: !!this.props.value,
          disabled: this.props.disabled
        }, "size-".concat(this.props.size), true)) || "")
      }, _react.default.createElement("div", {
        ref: function ref(c) {
          return _this3.elSelect = c;
        },
        onClick: this.onToggle,
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('select', (_cx2 = {}, _defineProperty(_cx2, "kind-".concat(this.props.kind), true), _defineProperty(_cx2, "status-".concat(this.props.status), true), _defineProperty(_cx2, "disabled", this.props.disabled), _cx2)) || "")
      }, _react.default.createElement("label", {
        ref: this.labelRef,
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('label', (_cx3 = {}, _defineProperty(_cx3, "".concat(this.props.status), true), _defineProperty(_cx3, "".concat(this.props.size), true), _defineProperty(_cx3, "".concat(this.props.kind), true), _defineProperty(_cx3, 'has-icon', !!this.props.icon), _defineProperty(_cx3, "required", this.props.required), _defineProperty(_cx3, "disabled", this.props.disabled), _defineProperty(_cx3, "focused", this.isFocused()), _defineProperty(_cx3, "shrink", !!selected), _cx3)) || "")
      }, this.props.label), this.props.kind === 'outlined' && _react.default.createElement("fieldset", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('flatline', (_cx4 = {}, _defineProperty(_cx4, "".concat(this.props.status), true), _defineProperty(_cx4, "focused", this.isFocused()), _defineProperty(_cx4, "idle", !this.isFocused()), _defineProperty(_cx4, "filled", this.state.text), _cx4)) || "")
      }, _react.default.createElement("legend", {
        style: legendWidth,
        className: "jsx-".concat(_styles.default.__hash) + " " + "legend"
      }, _react.default.createElement("span", {
        className: "jsx-".concat(_styles.default.__hash)
      }, "\u200B"))), this.props.icon && _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + "lead-icon-field"
      }, this.props.icon), _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('input-field', {
          disabled: this.props.disabled
        }) || "")
      }, _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + "value"
      }, selected)), _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + "trail-icon-field"
      }, this.props.status !== _constants.iconStatuses.DEFAULT && createTrailIcon(this.props.status)), _react.default.createElement("div", {
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('trail-icon-field', {
          disabled: this.props.disabled
        }) || "")
      }, Arrow)), this.props.help && _react.default.createElement(_Help.default, {
        text: this.props.help,
        status: this.props.status
      }), open && _react.default.createElement("div", {
        ref: function ref(c) {
          return _this3.elMenu = c;
        },
        className: "jsx-".concat(_styles.default.__hash) + " " + "menu"
      }, _react.default.createElement(_Menu.default, {
        list: list,
        size: this.props.size,
        onClick: this.onClick,
        className: _styles.menuOverride.className
      })), _react.default.createElement("style", null, _styles.menuOverride.styles), _react.default.createElement("style", null, _styles.arrowIcon.styles), _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default), _react.default.createElement("style", null, _styles.selectIconStyles.styles));
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
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  list: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired
  })).isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  help: _propTypes.default.string,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  icon: _propTypes.default.element,
  size: _propTypes.default.oneOf([_constants2.inputSizes.DEFAULT, _constants2.inputSizes.DENSE]),
  kind: _propTypes.default.oneOf([_constants2.inputKinds.FILLED, _constants2.inputKinds.OUTLINED]),
  status: _constants.iconStatusPropType
};
var _default = SelectField;
exports.default = _default;