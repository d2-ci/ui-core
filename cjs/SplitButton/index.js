"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SplitButton = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("../Button/styles.js"));

var _Arrow = require("../icons/Arrow.js");

var _DropMenu = require("../DropMenu");

var _classnames = _interopRequireDefault(require("classnames"));

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

var _ref =
/*#__PURE__*/
_react.default.createElement(_Arrow.ArrowUp, null);

var _ref2 =
/*#__PURE__*/
_react.default.createElement(_Arrow.ArrowDown, null);

var _ref3 =
/*#__PURE__*/
_react.default.createElement(_style.default, {
  id: "686802189"
}, "div.jsx-686802189{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;color:inherit;white-space:nowrap;}button.jsx-686802189:first-child{border-top-right-radius:0;border-bottom-right-radius:0;}button.jsx-686802189:nth-child(2){padding:0 9px;border-top-left-radius:0;border-bottom-left-radius:0;}");

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDocClick", function (evt) {
      if (_this.elContainer && !_this.elContainer.contains(evt.target)) {
        _this.setState({
          open: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggle", function () {
      return _this.setState({
        open: !_this.state.open
      });
    });

    return _this;
  }

  _createClass(SplitButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.onDocClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onDocClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var icon = open ? _ref : _ref2;
      return _react.default.createElement("div", {
        ref: function ref(c) {
          return _this2.elContainer = c;
        },
        className: "jsx-686802189 " + "jsx-".concat(_styles.default.__hash)
      }, _react.default.createElement("button", {
        name: this.props.name,
        value: this.props.value,
        disabled: this.props.disabled,
        onClick: function onClick(evt) {
          return _this2.props.onClick && _this2.props.onClick(_this2.props.name, _this2.props.value);
        },
        className: "jsx-686802189 " + "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', "kind-".concat(this.props.kind), "size-".concat(this.props.size), this.props.className, {
          'icon-only': this.props.icon && !this.props.children,
          icon: this.props.icon
        }) || "")
      }, this.props.icon && _react.default.createElement("span", {
        className: "jsx-686802189 " + "jsx-".concat(_styles.default.__hash) + " " + "button-icon"
      }, this.props.icon), this.props.children), _react.default.createElement("button", {
        disabled: this.props.disabled,
        onClick: this.onToggle,
        className: "jsx-686802189 " + "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('base', "kind-".concat(this.props.kind), "size-".concat(this.props.size)) || "")
      }, icon), open && _react.default.createElement(_DropMenu.DropMenu, {
        component: this.props.component
      }), _react.default.createElement(_style.default, {
        id: _styles.default.__hash
      }, _styles.default), _ref3);
    }
  }]);

  return SplitButton;
}(_react.Component);

exports.SplitButton = SplitButton;
SplitButton.defaultProps = {
  size: 'medium',
  kind: 'basic',
  disabled: false,
  name: '',
  value: ''
};
SplitButton.propTypes = {
  component: _propTypes.default.element.isRequired,
  onClick: _propTypes.default.func.isRequired,
  children: _propTypes.default.string,
  name: _propTypes.default.string,
  value: _propTypes.default.string,
  className: _propTypes.default.string,
  kind: _propTypes.default.oneOf(['basic', 'primary']),
  icon: _propTypes.default.element,
  disabled: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small', 'medium', 'large'])
};