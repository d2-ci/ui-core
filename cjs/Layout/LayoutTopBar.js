"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutTopBar = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutTopBar = function LayoutTopBar(_ref) {
  var Element = _ref.as,
      children = _ref.children;
  return _react.default.createElement(Element, {
    className: "jsx-439364583" + " " + "layout-top-bar"
  }, children, _react.default.createElement(_style.default, {
    id: "439364583"
  }, [".layout-top-bar.jsx-439364583{grid-area:topbar;}"]));
};

exports.LayoutTopBar = LayoutTopBar;
LayoutTopBar.propTypes = {
  as: _propTypes.default.oneOf(['header', 'nav', 'section', 'aside', 'div'])
};
LayoutTopBar.defaultProps = {
  as: 'div'
};