"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropMenu = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getPosition = require("./getPosition");

var _theme = require("../theme.js");

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

var DropMenu =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DropMenu, _PureComponent);

  function DropMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      top: 'auto',
      left: 'auto'
    });

    _defineProperty(_assertThisInitialized(_this), "elContainer", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "updatePosition", function () {
      _this.setState((0, _getPosition.getPosition)(_this.props.anchorEl));
    });

    _defineProperty(_assertThisInitialized(_this), "onDocClick", function (evt) {
      if (_this.elContainer.current && !_this.elContainer.current.contains(evt.target) && !_this.props.stayOpen) {
        _this.props.onClose();
      }
    });

    return _this;
  }

  _createClass(DropMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.onDocClick);
      window.addEventListener('resize', this.updatePosition);
      this.updatePosition();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onDocClick);
      window.removeEventListener('resize', this.updatePosition);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          component = _this$props.component;
      var _this$state = this.state,
          top = _this$state.top,
          left = _this$state.left;
      return _reactDom.default.createPortal(_react.default.createElement("div", {
        ref: this.elContainer,
        className: _style.default.dynamic([["2447591424", [_theme.layers.applicationTop, top, left]]]) + " " + (className || "")
      }, component, _react.default.createElement(_style.default, {
        id: "2447591424",
        dynamic: [_theme.layers.applicationTop, top, left]
      }, "div.__jsx-style-dynamic-selector{z-index:".concat(_theme.layers.applicationTop, ";position:absolute;top:").concat(top, ";left:").concat(left, ";}"))), document.body);
    }
  }]);

  return DropMenu;
}(_react.PureComponent);

exports.DropMenu = DropMenu;
DropMenu.propTypes = {
  className: _propTypes.default.string,

  /** The component to use as the dropdown component */
  component: _propTypes.default.element,

  /** Function to trigger when click happens outside of the DOM element */
  onClose: _propTypes.default.func,

  /** Decides if the menu should call the onClose function or not */
  stayOpen: _propTypes.default.bool,

  /** DOM node to position itself against */
  anchorEl: _propTypes.default.shape({
    getBoundingClientRect: _propTypes.default.func.isRequired
  })
};