"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _reactDom = require("react-dom");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactRef = require("../prop-validators/reactRef");

var _BackgroundCover = require("./BackgroundCover");

var _Content = require("./Content");

var _helpers = require("./helpers");

var _theme = require("../theme");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tooltip =
/*#__PURE__*/
function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tooltip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "ref", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "state", {
      position: {},
      adjustment: {}
    });

    _defineProperty(_assertThisInitialized(_this), "updatePosition", function () {
      if (_this.props.open && _this.ref.current) {
        var _this$props = _this.props,
            anchorRef = _this$props.anchorRef,
            side = _this$props.side,
            spacing = _this$props.spacing;

        var _getPosition = (0, _helpers.getPosition)({
          pop: _this.ref.current,
          anchor: anchorRef.current,
          side: side,
          spacing: spacing
        }),
            _getPosition2 = _slicedToArray(_getPosition, 2),
            position = _getPosition2[0],
            adjustment = _getPosition2[1];

        if (!(0, _helpers.arePositionsEqual)(position, _this.state.position)) {
          _this.setState({
            position: position,
            adjustment: adjustment
          });
        }
      }
    });

    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updatePosition();
      window.addEventListener('resize', this.updatePosition);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.open) return null;
      var _this$props2 = this.props,
          side = _this$props2.side,
          children = _this$props2.children,
          onClose = _this$props2.onClose,
          noArrow = _this$props2.noArrow;
      var _this$state = this.state,
          position = _this$state.position,
          adjustment = _this$state.adjustment;
      return (0, _reactDom.createPortal)(_react.default.createElement("div", {
        className: _style.default.dynamic([["3523804534", [_theme.layers.applicationTop]]])
      }, _react.default.createElement(_BackgroundCover.BackgroundCover, {
        onClick: onClose
      }), _react.default.createElement(_Content.Content, {
        ref: this.ref,
        side: side,
        position: position,
        children: children,
        noArrow: noArrow,
        adjustment: adjustment
      }), _react.default.createElement(_style.default, {
        id: "3523804534",
        dynamic: [_theme.layers.applicationTop]
      }, ["div.__jsx-style-dynamic-selector{left:0;height:100%;position:absolute;top:0;width:100%;z-index:".concat(_theme.layers.applicationTop, ";}")])), document.body);
    }
  }]);

  return Tooltip;
}(_react.Component);

exports.Tooltip = Tooltip;
Tooltip.propTypes = {
  /**
   * Must be created with `React.createRef()`
   */
  anchorRef: _reactRef.reactRef.isRequired,

  /**
   * Tooltip will always be centered to the center of the anchor's side
   */
  side: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']).isRequired,

  /**
   * When false, the component will return null, effectively rendering nothing
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * This callback will only be called when clicking on the backdrop
   */
  onClose: _propTypes.default.func.isRequired,

  /**
   * Spacing between anchor and pop in pixels
   */
  spacing: _propTypes.default.number,

  /**
   * Will remove the triangular arrow icon to the opposite side of "props.side"
   */
  noArrow: _propTypes.default.bool
};
Tooltip.defaultProps = {
  spacing: 0,
  side: 'top'
};