"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreenCover = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScreenCover = function ScreenCover(_ref) {
  var onClick = _ref.onClick,
      withoutBackgroundColor = _ref.withoutBackgroundColor;
  return _react.default.createElement("div", {
    onClick: onClick,
    className: "jsx-2926963015" + " " + ((0, _classnames.default)({
      'with-background-color': !withoutBackgroundColor
    }) || "")
  }, _react.default.createElement(_style.default, {
    id: "2926963015"
  }, ["div.jsx-2926963015{height:100%;left:0;position:absolute;top:0;width:100%;}", ".with-background-color.jsx-2926963015{background:rgba(200,200,200,0.6);}"]));
};

exports.ScreenCover = ScreenCover;
ScreenCover.propTypes = {
  onClick: _propTypes.default.func,
  withoutBackgroundColor: _propTypes.default.bool
};