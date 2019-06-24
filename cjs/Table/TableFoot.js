"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableFoot = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableFoot = function TableFoot(_ref) {
  var children = _ref.children;
  return _react.default.createElement("tfoot", {
    className: "jsx-3347461446"
  }, children, _react.default.createElement(_style.default, {
    id: "3347461446"
  }, ["@media (max-width:768px){tfoot.jsx-3347461446{display:block;margin-top:16px;}}", "@media (max-width:400px){tfoot.jsx-3347461446{margin-top:32px;}}"]));
};

exports.TableFoot = TableFoot;