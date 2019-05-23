"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pop = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _reactDom = require("react-dom");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BackgroundCover = require("./BackgroundCover");

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
 * The Pop component is a content container that behaves like a context menu
 * container. It can be used to create multi level context menus that won't be
 * displayed off-screen by wrapping each level with the Pop component.
 */
var Pop =
/*#__PURE__*/
function (_Component) {
  _inherits(Pop, _Component);

  function Pop() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ref", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      position: {}
    });

    return _this;
  }

  _createClass(Pop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.open) {
        this.updatePosition();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updatePosition();
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      if (this.ref.current) {
        var _this$props = this.props,
            anchorRef = _this$props.anchorRef,
            anchorPoint = _this$props.anchorPoint,
            popPoint = _this$props.popPoint,
            fallbackPoints = _this$props.fallbackPoints;
        var position = (0, _helpers.getPosition)({
          popPoint: popPoint,
          anchorPoint: anchorPoint,
          pop: this.ref.current,
          anchor: anchorRef.current,
          isNotRoot: !!this.props.level,
          fallbackPoints: fallbackPoints
        });

        if (!(0, _helpers.arePositionsEqual)(position, this.state.position)) {
          this.setState({
            position: position
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          onClose = _this$props2.onClose,
          open = _this$props2.open,
          level = _this$props2.level;
      var position = this.state.position;
      if (!open) return null;

      var content = _react.default.createElement(_helpers.Content, {
        ref: this.ref,
        position: position,
        children: children,
        level: level
      });

      if (!!level) {
        return (0, _reactDom.createPortal)(content, document.body);
      }

      return (0, _reactDom.createPortal)(_react.default.createElement("div", {
        className: _style.default.dynamic([["1709285359", [2000 + level]]])
      }, _react.default.createElement(_BackgroundCover.BackgroundCover, {
        onClick: onClose
      }), content, _react.default.createElement(_style.default, {
        id: "1709285359",
        dynamic: [2000 + level]
      }, ["div.__jsx-style-dynamic-selector{left:0;height:100vh;position:fixed;top:0;width:100vw;z-index:".concat(2000 + level, ";}")])), document.body);
    }
  }]);

  return Pop;
}(_react.Component);

exports.Pop = Pop;
Pop.propTypes = {
  /* Needs to be created with `React.createRef()` */
  anchorRef: _propTypes.default.shape({
    current: _propTypes.default.element
  }).isRequired,
  anchorPoint: _helpers.propPosition,
  popPoint: _helpers.propPosition,
  fallbackPoints: _propTypes.default.arrayOf([_propTypes.default.arrayOf([_helpers.propPosition])]),

  /* Is required for Pop components that are not the root level */
  level: _propTypes.default.number,
  open: _propTypes.default.bool,
  onClose: _propTypes.default.func
};
Pop.defaultProps = {
  anchorPoint: {
    vertical: 'top',
    horizontal: 'right'
  },
  popPoint: {
    vertical: 'top',
    horizontal: 'left'
  },
  level: 0
};