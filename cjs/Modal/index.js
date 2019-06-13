"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ScreenCover = require("../ScreenCover");

var _Actions = require("./Actions");

var _Content = require("./Content");

var _ModalCard = require("./ModalCard");

var _Title = require("./Title");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modal provides a UI to prompt the user to respond to a question
 * or a note to the user.
 *
 * Use Model with the following Components:
 * Model.Title (optional)
 * Model.Content (required)
 * Model.Actions (required)
 */
var Modal = function Modal(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose,
      small = _ref.small,
      large = _ref.large,
      open = _ref.open;
  return (0, _reactDom.createPortal)(_react.default.createElement("aside", {
    className: "jsx-1183424492" + " " + ((0, _classnames.default)({
      open: open
    }) || "")
  }, _react.default.createElement(_ScreenCover.ScreenCover, {
    onClick: onClose
  }, _react.default.createElement(_ModalCard.ModalCard, {
    small: small,
    large: large
  }, children)), _react.default.createElement(_style.default, {
    id: "1183424492"
  }, ["aside.jsx-1183424492{display:none;}", ".open.jsx-1183424492{display:block;}"])), document.body);
};

exports.Modal = Modal;
Modal.Title = _Title.Title;
Modal.Content = _Content.Content;
Modal.Actions = _Actions.Actions;
Modal.propTypes = {
  // Can contain Modal.Title; Must contain Modal.Content and Modal.Actions
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.arrayOf(_propTypes.default.element)]).isRequired,
  // Callback used when clicking on the screen cover
  onClose: _propTypes.default.func,
  open: _propTypes.default.bool,
  small: _propTypes.default.bool,
  large: _propTypes.default.bool
};