"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertBar = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propValidators = require("../prop-validators");

var _Close = require("../icons/Close");

var _Status = require("../icons/Status");

var _styles = _interopRequireDefault(require("./styles"));

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _ref =
/*#__PURE__*/
_react.default.createElement(_Status.Valid, null);

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_Status.Warning, null);

var _ref3 =
/*#__PURE__*/
_react.default.createElement(_Status.Error, null);

var _ref4 =
/*#__PURE__*/
_react.default.createElement(_Status.Info, null);

var defaultIcons = {
  success: function success() {
    return _ref;
  },
  warning: function warning() {
    return _ref2;
  },
  critical: function critical() {
    return _ref3;
  },
  info: function info() {
    return _ref4;
  }
};

var Icon = function Icon(_ref5) {
  var icon = _ref5.icon,
      variant = _ref5.variant;

  if (icon === false) {
    return null;
  }

  return _react.default.createElement("div", {
    className: variant
  }, (0, _react.isValidElement)(icon) ? icon : defaultIcons[variant]());
};

var Message = function Message(_ref6) {
  var children = _ref6.children;
  return _react.default.createElement("div", null, children);
};

var Actions = function Actions(_ref7) {
  var actions = _ref7.actions;

  if (!actions) {
    return null;
  }

  return _react.default.createElement("div", null, actions.map(function (action) {
    return _react.default.createElement(Action, _extends({
      key: action.label
    }, action));
  }));
};

var Action = function Action(_ref8) {
  var label = _ref8.label,
      onClick = _ref8.onClick;
  return _react.default.createElement("span", {
    onClick: onClick
  }, label);
};

var _ref10 =
/*#__PURE__*/
_react.default.createElement(_Close.Close, null);

var Dismiss = function Dismiss(_ref9) {
  var variant = _ref9.variant,
      onClick = _ref9.onClick;
  return _react.default.createElement("div", {
    className: variant,
    onClick: onClick
  }, _ref10);
};

var AlertBar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AlertBar, _PureComponent);

  function AlertBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AlertBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AlertBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "startHideTimeout", function () {
      _this.timeout = setTimeout(function () {
        _this.hide();
      }, _this.timeRemaining);
    });

    _defineProperty(_assertThisInitialized(_this), "stopHideTimeOut", function () {
      _this.timeRemaining = _this.timeRemaining - (Date.now() - _this.startTime);
      clearTimeout(_this.timeout);
    });

    _defineProperty(_assertThisInitialized(_this), "hide", function () {
      console.log('hiding');
      clearTimeout(_this.timeout);
    });

    return _this;
  }

  _createClass(AlertBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startTime = Date.now();
      this.timeRemaining = this.props.duration;
      this.startHideTimeout();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "variant",
    value: function variant(status) {
      for (var key in status) {
        if (status[key]) {
          return key;
        }
      }

      return 'info';
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          success = _this$props.success,
          warning = _this$props.warning,
          critical = _this$props.critical,
          icon = _this$props.icon,
          actions = _this$props.actions;
      var variant = this.variant({
        success: success,
        warning: warning,
        critical: critical
      });
      return _react.default.createElement("div", {
        onMouseEnter: this.stopHideTimeOut,
        onMouseLeave: this.startHideTimeout,
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)(className, variant) || "")
      }, _react.default.createElement(Icon, {
        icon: icon,
        variant: variant
      }), _react.default.createElement(Message, null, children), _react.default.createElement(Actions, {
        actions: actions
      }), _react.default.createElement(Dismiss, {
        onClick: this.hide
      }), _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default));
    }
  }]);

  return AlertBar;
}(_react.PureComponent);

exports.AlertBar = AlertBar;
AlertBar.propTypes = {
  children: _propTypes.default.string.isRequired,
  success: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  critical: _propTypes.default.bool,
  icon: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.element]),
  duration: _propTypes.default.number,
  actions: (0, _propValidators.arrayWithLength)(0, 2, _propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    onClick: _propTypes.default.func.isRequired
  })),
  onHidden: _propTypes.default.func
};
AlertBar.defaultProps = {
  icon: true,
  duration: 15000
};