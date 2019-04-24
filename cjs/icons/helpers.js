"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIcon = createIcon;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function createIcon(Icon) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      action = _ref.action,
      className = _ref.className;

  if (!Icon) return null;
  return _react.default.createElement(Icon, {
    onClick: action || null,
    className: className || ''
  });
}