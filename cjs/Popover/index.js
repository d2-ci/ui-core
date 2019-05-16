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

var CONTENT_MIN_HEIGHT = 200;

var getScrollAndClientOffset = function getScrollAndClientOffset() {
  var body = document.body;
  var docEl = document.documentElement;
  return {
    scrollTop: window.pageYOffset || docEl.scrollTop || body.scrollTop,
    scrollLeft: window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
    clientTop: docEl.clientTop || body.clientTop || 0,
    clientLeft: docEl.clientLeft || body.clientLeft || 0
  };
};

var getPosition = function getPosition(anchorHorizontal, anchorVertical, popover, hasScreencover) {
  if (!anchorHorizontal || !anchorVertical || !popover) {
    return {
      left: 0,
      top: 0
    };
  }

  var styles = {};
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;

  var _getScrollAndClientOf = getScrollAndClientOffset(),
      scrollTop = _getScrollAndClientOf.scrollTop,
      clientTop = _getScrollAndClientOf.clientTop;

  var anchorRectHorizontal = anchorHorizontal.getBoundingClientRect();
  var anchorRectVertical = anchorVertical.getBoundingClientRect();
  var popoverRect = popover.getBoundingClientRect();
  var leftOffset = anchorRectHorizontal.x + anchorRectHorizontal.width;
  var rightOffset = anchorRectHorizontal.x - popoverRect.width;
  var fitsToTheLeft = viewportWidth - leftOffset - popoverRect.width > 0;
  var fitsToTheRight = rightOffset > 0;
  var fitsToTheTop = viewportHeight - anchorRectHorizontal.y > popoverRect.height;
  var left = fitsToTheLeft ? leftOffset : rightOffset;
  styles.left = left + 'px';

  if (fitsToTheTop) {
    if (hasScreencover) {
      styles.top = (scrollTop || clientTop) + anchorRectVertical.y + 'px';
    } else {
      styles.top = anchorRectVertical.y + 'px';
    }

    styles.bottom = 'auto';
  } else {
    styles.bottom = 0;
    styles.top = 'auto';
  }

  return styles;
};

var Content = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      position = _ref.position,
      level = _ref.level;
  return _react.default.createElement("div", {
    ref: ref,
    style: position,
    className: _style.default.dynamic([["4080441091", [level + 99999999 || 1]]])
  }, children, _react.default.createElement(_style.default, {
    id: "4080441091",
    dynamic: [level + 99999999 || 1]
  }, ["div.__jsx-style-dynamic-selector{background:white;box-shadow:0 0 3px rgba(0,0,0,0.6);max-height:100vh;overflow-y:auto;position:absolute;z-index:".concat(level + 99999999 || 1, ";}")]));
});
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
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.open !== this.props.open) this.handleScroll();
    }
  }, {
    key: "extractBodyStyles",
    value: function extractBodyStyles() {
      var overflowX = document.body.style.overflowX;
      var overflowY = document.body.style.overflowY;
      var overflow = document.body.style.overflow;
      this.setState({
        overflowX: overflowX,
        overflowY: overflowY,
        overflow: overflow
      });
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
    key: "disableScroll",
    value: function disableScroll() {
      this.extractBodyStyles();
      document.body.style.overflow = 'hidden';
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'hidden';
    }
  }, {
    key: "enableScroll",
    value: function enableScroll() {
      document.body.style.overflow = this.state.overflow;
      document.body.style.overflowX = this.state.overflowX;
      document.body.style.overflowY = this.state.overflowY;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          alwaysOpen = _this$props.alwaysOpen,
          anchorElHorizontal = _this$props.anchorElHorizontal,
          anchorElVertical = _this$props.anchorElVertical,
          children = _this$props.children,
          onClose = _this$props.onClose,
          open = _this$props.open,
          screencover = _this$props.screencover;
      if (!open && !alwaysOpen) return null;

      var _getScrollAndClientOf2 = getScrollAndClientOffset(),
          scrollTop = _getScrollAndClientOf2.scrollTop,
          clientTop = _getScrollAndClientOf2.clientTop;

      var position = getPosition(anchorElHorizontal, anchorElVertical, this.ref.current, screencover);
      var containerTop = "".concat(scrollTop || clientTop, "px");
      var containerHeight = '100vh';
      var containerWidth = '100vw';

      if (!screencover) {
        return (0, _reactDom.createPortal)(_react.default.createElement(Content, {
          ref: this.ref,
          position: position,
          children: children,
          level: this.props.level
        }), document.body);
      }

      return (0, _reactDom.createPortal)(_react.default.createElement("div", {
        style: {
          top: containerTop,
          height: containerHeight,
          width: containerWidth
        },
        className: _style.default.dynamic([["532243724", [99999999 + this.props.level]]])
      }, screencover && _react.default.createElement(_ScreenCover.ScreenCover, {
        withoutBackgroundColor: true,
        onClick: onClose
      }), _react.default.createElement(Content, {
        ref: this.ref,
        position: position,
        children: children
      }), _react.default.createElement(_style.default, {
        id: "532243724",
        dynamic: [99999999 + this.props.level]
      }, ["div.__jsx-style-dynamic-selector{left:0;position:absolute;z-index:".concat(99999999 + this.props.level, ";}")])), document.body);
    }
  }]);

  return Popover;
}(_react.Component);

exports.Popover = Popover;
Popover.propTypes = {
  /* Element the popover should be positioned against */
  anchorElHorizontal: _propTypes.default.element.isRequired,
  anchorElVertical: _propTypes.default.element.isRequired,
  screencover: _propTypes.default.bool,
  level: _propTypes.default.number,
  open: _propTypes.default.bool,
  alwaysOpen: _propTypes.default.bool,
  onClose: _propTypes.default.func
};
Popover.defaultProps = {
  level: 0
};