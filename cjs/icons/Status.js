"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = Default;
exports.Valid = Valid;
exports.Warning = Warning;
exports.Error = Error;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesPropType = _propTypes.default.shape({
  className: _propTypes.default.string.isRequired,
  styles: _propTypes.default.object.isRequired
});
/**
 * Abstract icon component
 *
 * @param {Object} props
 * @param {Object} props.styles
 * @param {any} props.children
 * @returns {Object}
 */


function Icon(_ref) {
  var styles = _ref.styles,
      children = _ref.children,
      className = _ref.className;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    className: [_styles.iconStyle.className, styles.className, className].join(' ')
  }, children, _react.default.createElement("style", null, _styles.iconStyle.styles), _react.default.createElement("style", null, styles.styles));
}

Icon.propTypes = {
  children: _propTypes.default.node.isRequired,
  styles: stylesPropType.isRequired,
  className: _propTypes.default.string
};
Icon.defaultProps = {
  styles: _styles.iconStyleDefault,
  className: ''
  /**
   * @param {Object} props
   * @param {Object} props.styles
   * @returns {Object}
   */

};

var _ref3 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M0 0h48v48H0z",
  fill: "none"
});

function Default(_ref2) {
  var styles = _ref2.styles,
      className = _ref2.className;
  return _react.default.createElement(Icon, {
    className: className,
    styles: styles
  }, _ref3);
}

Default.propTypes = {
  styles: stylesPropType,
  className: _propTypes.default.string
};
Default.defaultProps = {
  styles: _styles.iconStyleDefault,
  className: ''
  /**
   * @param {Object} props
   * @param {Object} props.styles
   * @returns {Object}
   */

};

var _ref5 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z"
});

function Valid(_ref4) {
  var styles = _ref4.styles,
      className = _ref4.className;
  return _react.default.createElement(Icon, {
    className: className,
    styles: styles
  }, _ref5);
}

Valid.propTypes = {
  styles: stylesPropType,
  className: _propTypes.default.string
};
Valid.defaultProps = {
  styles: _styles.iconStyleValid,
  className: ''
  /**
   * @param {Object} props
   * @param {Object} props.styles
   * @returns {Object}
   */

};

var _ref7 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z"
});

function Warning(_ref6) {
  var styles = _ref6.styles,
      className = _ref6.className;
  return _react.default.createElement(Icon, {
    className: className,
    styles: styles
  }, _ref7);
}

Warning.propTypes = {
  styles: stylesPropType,
  className: _propTypes.default.string
};
Warning.defaultProps = {
  styles: _styles.iconStyleWarning,
  className: ''
  /**
   * @param {Object} props
   * @param {Object} props.styles
   * @returns {Object}
   */

};

var _ref9 =
/*#__PURE__*/
_react.default.createElement("path", {
  d: "M24 4C12.96 4 4 12.95 4 24s8.96 20 20 20 20-8.95 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z"
});

function Error(_ref8) {
  var styles = _ref8.styles,
      className = _ref8.className;
  return _react.default.createElement(Icon, {
    className: className,
    styles: styles
  }, _ref9);
}

Error.propTypes = {
  styles: stylesPropType,
  className: _propTypes.default.string
};
Error.defaultProps = {
  styles: _styles.iconStyleError,
  className: ''
};