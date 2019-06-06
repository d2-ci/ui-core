"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertBar = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireWildcard(require("./styles"));

var _Actions = require("./Actions");

var _Dismiss = require("./Dismiss");

var _Icon = require("./Icon");

var _Message = require("./Message");

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

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: false,
      hidden: false
    });

    _defineProperty(_assertThisInitialized(_this), "startDisplayTimeout", function () {
      _this.displayTimeout = setTimeout(function () {
        _this.hide();
      }, _this.timeRemaining);
    });

    _defineProperty(_assertThisInitialized(_this), "stopDisplayTimeOut", function () {
      _this.timeRemaining = _this.timeRemaining - (Date.now() - _this.startTime);
      clearTimeout(_this.displayTimeout);
    });

    _defineProperty(_assertThisInitialized(_this), "hide", function () {
      clearTimeout(_this.displayTimeout);

      _this.setState({
        visible: false
      });

      _this.onHiddenTimeout = setTimeout(function () {
        _this.setState({
          hidden: true
        });

        _this.props.onHidden && _this.props.onHidden();
      }, _styles.ANIMATION_TIME);
    });

    return _this;
  }

  _createClass(AlertBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startTime = Date.now();
      this.timeRemaining = this.props.duration;
      this.startDisplayTimeout();
      this.show();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.displayTimeout);
      clearTimeout(this.onHiddenTimeout);
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      requestAnimationFrame(function () {
        _this2.setState({
          visible: true
        });
      });
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
      var _this$state = this.state,
          visible = _this$state.visible,
          hidden = _this$state.hidden;

      if (hidden) {
        return null;
      }

      var info = !critical && !success && !warning;
      var iconProps = {
        icon: icon,
        critical: critical,
        success: success,
        warning: warning
      };
      return _react.default.createElement("div", {
        onMouseEnter: this.stopDisplayTimeOut,
        onMouseLeave: this.startDisplayTimeout,
        className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)(className, {
          info: info,
          success: success,
          warning: warning,
          critical: critical,
          visible: visible
        }) || "")
      }, _react.default.createElement(_Icon.Icon, iconProps), _react.default.createElement(_Message.Message, null, children), _react.default.createElement(_Actions.Actions, {
        actions: actions
      }), _react.default.createElement(_Dismiss.Dismiss, {
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
  className: _propTypes.default.string,
  children: _propTypes.default.string.isRequired,
  success: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  critical: _propTypes.default.bool,
  icon: _Icon.iconPropType,
  duration: _propTypes.default.number,
  actions: _Actions.actionsPropType,
  onHidden: _propTypes.default.func
};
AlertBar.defaultProps = {
  icon: true,
  duration: 8000
};