"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutContent = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutContent = function LayoutContent(_ref) {
  var Element = _ref.as,
      children = _ref.children;
  return _react.default.createElement(Element, {
    className: "jsx-2065439825" + " " + "layout-content"
  }, children, _react.default.createElement(_style.default, {
    id: "2065439825"
  }, [".layout-content.jsx-2065439825{grid-area:content;}"]));
};

exports.LayoutContent = LayoutContent;
LayoutContent.propTypes = {
  as: _propTypes.default.oneOf(['main', 'div'])
};
LayoutContent.defaultProps = {
  as: 'main'
};