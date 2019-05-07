"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Actions = require("./Actions");

var _Content = require("./Content");

var _ModalCard = require("./ModalCard");

var _ScreenCover = require("./ScreenCover");

var _Title = require("./Title");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var outerSpacing = 24;
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
      size = _ref.size,
      scrollable = _ref.scrollable;
  return _react.default.createElement("div", {
    className: "jsx-2117478159" + " " + "modal"
  }, _react.default.createElement(_ScreenCover.ScreenCover, {
    onClick: onClose
  }), _react.default.createElement(_ModalCard.ModalCard, {
    size: size,
    scrollable: scrollable
  }, _react.default.Children.map(children, function (child) {
    return _react.default.cloneElement(child, {
      scrollable: scrollable
    });
  })), _react.default.createElement(_style.default, {
    id: "2117478159"
  }, [".modal.jsx-2117478159{height:100%;left:0;position:fixed;top:0;width:100%;z-index:99999999;}"]));
};

exports.Modal = Modal;
Modal.Title = _Title.Title;
Modal.Content = _Content.Content;
Modal.Actions = _Actions.Actions;
Modal.propTypes = {
  // Can be Modal.Title; Must be Modal.Content and Modal.Actions
  children: _propTypes.default.arrayOf(_propTypes.default.element).isRequired,
  // Callback used when clicking on the screen cover
  onClose: _propTypes.default.func,
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  // Needs to b set in order to make the content scrollable!
  scrollable: _propTypes.default.bool
};
Modal.defaultProps = {
  size: 'small'
};