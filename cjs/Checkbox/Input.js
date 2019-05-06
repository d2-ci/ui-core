"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(_ref) {
  var onChange = _ref.onChange,
      checked = _ref.checked,
      disabled = _ref.disabled,
      name = _ref.name;
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("input", {
    type: "checkbox",
    name: name,
    onChange: onChange,
    checked: checked,
    disabled: disabled,
    className: "jsx-1568741591"
  }), _react.default.createElement(_style.default, {
    id: "1568741591"
  }, ["input.jsx-1568741591{display:none;}"]));
};

exports.Input = Input;
Input.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};