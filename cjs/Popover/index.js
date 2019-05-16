"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popover = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _reactDom = require("react-dom");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ScreenCover = require("../ScreenCover");

var _helpers = require("./helpers");

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

/**
 * This popover is a content container that behaves like a context menu
 * container. It can be used to create multi level context menus that
 * won't be displayed off-screen by wrapping each level with the Popover
 * component.
 */
var Popover =
/*#__PURE__*/
function (_Component) {
  _inherits(Popover, _Component);

  function Popover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Popover)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ref", _react.default.createRef());

    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.alwaysOpen || this.props.open) {
        this.disableScroll();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.open || this.props.alwaysOpen) {
        this.enableScroll();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.open !== this.props.open) {
        this.handleScroll();
      }
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      if (this.props.open) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    }
  }, {
    key: "extractBodyStyles",
    value: function extractBodyStyles() {
      var bodyStyles = (0, _helpers.extractBodyStyles)();
      this.setState({
        bodyStyles: bodyStyles
      });
    }
  }, {
    key: "disableScroll",
    value: function disableScroll() {
      this.extractBodyStyles();
      (0, _helpers.disableScroll)();
    }
  }, {
    key: "enableScroll",
    value: function enableScroll() {
      (0, _helpers.setBodyStyles)(this.state.bodyStyles);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          alwaysOpen = _this$props.alwaysOpen,
          anchorEl = _this$props.anchorEl,
          children = _this$props.children,
          onClose = _this$props.onClose,
          open = _this$props.open,
          screencover = _this$props.screencover;
      if (!open && !alwaysOpen) return null;
      var position = (0, _helpers.getPosition)(anchorEl, this.ref.current, screencover);

      var content = _react.default.createElement(_helpers.Content, {
        ref: this.ref,
        position: position,
        children: children,
        level: this.props.level
      });

      if (!screencover) {
        return (0, _reactDom.createPortal)(content, document.body);
      }

      var _getScrollAndClientOf = (0, _helpers.getScrollAndClientOffset)(),
          scrollTop = _getScrollAndClientOf.scrollTop,
          clientTop = _getScrollAndClientOf.clientTop;

      var containerTop = "".concat(scrollTop || clientTop, "px");
      /**
       * For whatever reason, when setting "top" with styled-jsx,
       * the calculated value is wrong, so it's set a style directly
       */

      return (0, _reactDom.createPortal)(_react.default.createElement("div", {
        style: {
          top: containerTop
        },
        className: _style.default.dynamic([["22002151", [containerTop, 99999999 + this.props.level]]])
      }, _react.default.createElement(_ScreenCover.ScreenCover, {
        withoutBackgroundColor: true,
        onClick: onClose
      }), content, _react.default.createElement(_style.default, {
        id: "22002151",
        dynamic: [containerTop, 99999999 + this.props.level]
      }, ["div.__jsx-style-dynamic-selector{left:0;height:100vh;position:absolute;top:".concat(containerTop, ";width:100vw;z-index:").concat(99999999 + this.props.level, ";}")])), document.body);
    }
  }]);

  return Popover;
}(_react.Component);

exports.Popover = Popover;
Popover.propTypes = {
  /* Element the popover should be positioned against */
  anchorEl: _propTypes.default.element.isRequired,
  screencover: _propTypes.default.bool,
  level: _propTypes.default.number,
  open: _propTypes.default.bool,
  alwaysOpen: _propTypes.default.bool,
  onClose: _propTypes.default.func
};
Popover.defaultProps = {
  level: 0
};