"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabIndicator = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var TabIndicator =
/*#__PURE__*/
function (_Component) {
  _inherits(TabIndicator, _Component);

  function TabIndicator() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TabIndicator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TabIndicator)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      animated: false
    });

    return _this;
  }

  _createClass(TabIndicator, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      /* The tabindicator should not move with a CSS transition when
         it is first positioned into place. In the render cycle
         after it became visible the animation should be enabled  */
      if (!prevProps.visible && this.props.visible) {
        this.setState({
          animated: true
        });
      }
    }
  }, {
    key: "getTransformStyle",
    value: function getTransformStyle() {
      var activeTabNode = this.props.getSelectedTabRef();
      return {
        translateX: activeTabNode ? activeTabNode.offsetLeft : 0,
        scaleX: activeTabNode ? activeTabNode.offsetWidth : 100
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getTransformSty = this.getTransformStyle(),
          translateX = _this$getTransformSty.translateX,
          scaleX = _this$getTransformSty.scaleX;

      return _react.default.createElement("span", {
        style: this.getTransformStyle(),
        className: "jsx-1147635496 " + _style.default.dynamic([["3970204105", [translateX, scaleX]]]) + " " + ((0, _classnames.default)({
          visible: this.props.visible,
          animated: this.state.animated
        }) || "")
      }, _react.default.createElement(_style.default, {
        id: "3970204105",
        dynamic: [translateX, scaleX]
      }, ["span.__jsx-style-dynamic-selector{-webkit-transform:translateX(".concat(translateX, "px) translateY(2px) scaleX(").concat(scaleX, ");-ms-transform:translateX(").concat(translateX, "px) translateY(2px) scaleX(").concat(scaleX, ");transform:translateX(").concat(translateX, "px) translateY(2px) scaleX(").concat(scaleX, ");}")]), _react.default.createElement(_style.default, {
        id: "1147635496"
      }, ["span.jsx-1147635496{display:block;position:absolute;bottom:0;left:0;height:4px;width:1px;background-color:#1976d2;-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transition:none;transition:none;visibility:hidden;}", "span.visible.jsx-1147635496{visibility:visible;}", "span.animated.jsx-1147635496{-webkit-transition:-webkit-transform 300ms ease-in-out;-webkit-transition:transform 300ms ease-in-out;transition:transform 300ms ease-in-out;}"]));
    }
  }]);

  return TabIndicator;
}(_react.Component);

exports.TabIndicator = TabIndicator;
TabIndicator.propTypes = {
  getSelectedTabRef: _propTypes.default.func.isRequired,
  visible: _propTypes.default.bool.isRequired
};