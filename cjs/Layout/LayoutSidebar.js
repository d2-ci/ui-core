"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutSidebar = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutSidebar = function LayoutSidebar(_ref) {
  var Element = _ref.as,
      children = _ref.children;
  return _react.default.createElement(Element, {
    className: "jsx-2865265323" + " " + "layout-sidebar"
  }, children, _react.default.createElement(_style.default, {
    id: "2865265323"
  }, [".layout-sidebar.jsx-2865265323{grid-area:sidebar;}"]));
};

exports.LayoutSidebar = LayoutSidebar;
LayoutSidebar.propTypes = {
  as: _propTypes.default.oneOf(['section', 'aside', 'div'])
};
LayoutSidebar.defaultProps = {
  as: 'section'
};