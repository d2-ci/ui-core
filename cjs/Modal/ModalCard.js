"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalCard = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Card = require("../Card");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var outerSpacing = 24;
var cardBoxStyle = {
  styles: _react.default.createElement(_style.default, {
    id: "2275384749"
  }, [".modal-card.jsx-2275384749{height:auto;left:50%;max-width:calc(100vw - ".concat(2 * outerSpacing, "px);max-height:calc(100vh - ").concat(2 * outerSpacing, "px);position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}"), ".modal-card.scrollable.jsx-2275384749{height:100%;}", ".size-small.jsx-2275384749{width:400px;}", ".size-medium.jsx-2275384749{width:600px;}", ".size-large.jsx-2275384749{width:800px;}"]),
  className: "jsx-2275384749"
};

var ModalCard = function ModalCard(_ref) {
  var children = _ref.children,
      scrollable = _ref.scrollable,
      size = _ref.size;
  console.log('scrollable', scrollable);
  return _react.default.createElement(_Card.Card, {
    className: (0, _classnames.default)(cardBoxStyle.className, 'modal-card', "size-".concat(size), {
      scrollable: scrollable
    })
  }, _react.default.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, children), cardBoxStyle.styles);
};

exports.ModalCard = ModalCard;
ModalCard.propTypes = {
  // Can be Modal.Title; Must be Modal.Content and Modal.Actions
  children: _propTypes.default.arrayOf(_propTypes.default.element).isRequired,
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  scrollable: _propTypes.default.bool
};
ModalCard.defaultProps = {
  size: 'small'
};