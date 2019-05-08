"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chip = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../theme");

var _Content = require("./Content");

var _Icon = require("./Icon");

var _Remove = require("./Remove");

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

var Chip =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Chip, _PureComponent);

  function Chip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Chip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Chip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (e) {
      if (!_this.props.disabled && _this.props.onClick) {
        _this.props.onClick(e);
      }
    });

    return _this;
  }

  _createClass(Chip, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          selected = _this$props.selected,
          disabled = _this$props.disabled,
          dragging = _this$props.dragging,
          overflow = _this$props.overflow,
          className = _this$props.className,
          children = _this$props.children;
      return _react.default.createElement("div", {
        onClick: this.onClick,
        className: _style.default.dynamic([["2053480932", [_theme.colors.grey200, _theme.colors.grey900, _theme.colors.grey300, _theme.theme.secondary600, _theme.colors.white]]]) + " " + ((0, _classnames.default)(className, {
          selected: selected,
          disabled: disabled,
          dragging: dragging
        }) || "")
      }, _react.default.createElement(_Icon.Icon, {
        icon: this.props.icon
      }), _react.default.createElement(_Content.Content, {
        overflow: overflow,
        children: children
      }), _react.default.createElement(_Remove.Remove, {
        onRemove: this.props.onRemove
      }), _react.default.createElement(_style.default, {
        id: "2053480932",
        dynamic: [_theme.colors.grey200, _theme.colors.grey900, _theme.colors.grey300, _theme.theme.secondary600, _theme.colors.white]
      }, ["div.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:32px;margin:4px;border-radius:16px;background-color:".concat(_theme.colors.grey200, ";font-size:14px;line-height:16px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:").concat(_theme.colors.grey900, ";}"), "div.__jsx-style-dynamic-selector:hover{background-color:".concat(_theme.colors.grey300, ";}"), ".selected.__jsx-style-dynamic-selector{background-color:".concat(_theme.theme.secondary600, ";font-weight:500;}"), ".selected.__jsx-style-dynamic-selector:hover{background-color:#00695c;}", ".selected.__jsx-style-dynamic-selector,.selected.__jsx-style-dynamic-selector .icon.__jsx-style-dynamic-selector,.selected.__jsx-style-dynamic-selector .remove-icon.__jsx-style-dynamic-selector{color:".concat(_theme.colors.white, ";}"), ".disabled.__jsx-style-dynamic-selector{cursor:not-allowed;opacity:0.3;}", ".disabled.__jsx-style-dynamic-selector .remove-icon.__jsx-style-dynamic-selector{pointer-events:none;}", ".dragging.__jsx-style-dynamic-selector{box-shadow:0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12);}"]));
    }
  }]);

  return Chip;
}(_react.PureComponent);

exports.Chip = Chip;
Chip.propTypes = {
  children: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  icon: _propTypes.default.element,
  onClick: _propTypes.default.func,
  onRemove: _propTypes.default.func,
  selected: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  dragging: _propTypes.default.bool,
  overflow: _propTypes.default.bool
};