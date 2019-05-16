"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var icon = _ref.icon;
  if (!icon) return null;
  return _react.default.createElement("span", {
    className: "jsx-3691124138"
  }, icon, _react.default.createElement(_style.default, {
    id: "3691124138"
  }, ["span.jsx-3691124138{width:24px;height:24px;margin-left:4px;border-radius:50%;overflow:hidden;}"]));
};

exports.Icon = Icon;
Icon.propTypes = {
  icon: _propTypes.default.element
};