"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundCover = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackgroundCover = function BackgroundCover(_ref) {
  var onClick = _ref.onClick;
  return _react.default.createElement("div", {
    className: "jsx-2997242272"
  }, _react.default.createElement(_style.default, {
    id: "2997242272"
  }, ["div.jsx-2997242272{height:100%;left:0;position:absolute;top:0;width:100%;}"]));
};

exports.BackgroundCover = BackgroundCover;
BackgroundCover.propTypes = {
  onClick: _propTypes.default.func.isRequired
};