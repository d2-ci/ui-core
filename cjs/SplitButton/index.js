"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SplitButton = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Arrow = require("../icons/Arrow.js");

var _DropMenu = require("../DropMenu");

var _Button = require("../Button");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var leftButton = {
  styles: _react.default.createElement(_style.default, {
    id: "1525662562"
  }, ["button.jsx-1525662562{border-top-right-radius:0;border-bottom-right-radius:0;}"]),
  className: "jsx-1525662562"
};
var rightButton = {
  styles: _react.default.createElement(_style.default, {
    id: "2744160004"
  }, ["button.jsx-2744160004{padding:0 9px;border-top-left-radius:0;border-bottom-left-radius:0;}"]),
  className: "jsx-2744160004"
};

var _ref =
/*#__PURE__*/
_react.default.createElement(_Arrow.ArrowUp, null);

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_Arrow.ArrowDown, null);

var SplitButton =
/*#__PURE__*/
function (_Component) {
  _inherits(SplitButton, _Component);

  function SplitButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SplitButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SplitButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "anchorRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggle", function () {
      return _this.setState({
        open: !_this.state.open
      });
    });

    return _this;
  }

  _createClass(SplitButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var icon = open ? _ref : _ref2;
      return _react.default.createElement("div", {
        ref: this.anchorRef,
        className: "jsx-3163060161"
      }, _react.default.createElement(_Button.Button, _extends({}, this.props, {
        className: (0, _classnames.default)(this.props.className, leftButton.className)
      }), this.props.children), _react.default.createElement(_Button.Button, _extends({}, this.props, {
        onClick: this.onToggle,
        className: (0, _classnames.default)(this.props.className, rightButton.className)
      }), icon), open && _react.default.createElement(_DropMenu.DropMenu, {
        component: this.props.component,
        onClose: function onClose() {
          return _this2.setState({
            open: false
          });
        },
        anchorEl: this.anchorRef.current
      }), leftButton.styles, rightButton.styles, _react.default.createElement(_style.default, {
        id: "3163060161"
      }, ["div.jsx-3163060161{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;color:inherit;white-space:nowrap;}"]));
    }
  }]);

  return SplitButton;
}(_react.Component);

exports.SplitButton = SplitButton;
SplitButton.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  component: _propTypes.default.element.isRequired,
  className: _propTypes.default.string,
  name: _propTypes.default.string,
  value: _propTypes.default.string,
  icon: _propTypes.default.element,
  small: _propTypes.default.bool,
  large: _propTypes.default.bool,
  primary: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  destructive: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};