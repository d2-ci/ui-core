"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles"));

var _Chevron = require("../icons/Chevron.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subChevron = {
  styles: _react.default.createElement(_style.default, {
    id: "2023721407"
  }, ["svg.jsx-2023721407{margin:0 -14px 0 auto;width:18px;height:18px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]),
  className: "jsx-2023721407"
};
var subMenu = {
  styles: _react.default.createElement(_style.default, {
    id: "2242740484"
  }, ["div.jsx-2242740484{display:none;position:absolute;top:0;left:100%;white-space:nowrap;}", ".item.jsx-2242740484:hover>div.jsx-2242740484{display:block;}"]),
  className: "jsx-2242740484"
};

var SubMenu = function SubMenu(_ref) {
  var size = _ref.size,
      children = _ref.children,
      onClick = _ref.onClick,
      className = _ref.className;
  return _react.default.createElement("div", {
    className: className
  }, children);
};

var MenuItem = function MenuItem(_ref2) {
  var value = _ref2.value,
      label = _ref2.label,
      icon = _ref2.icon,
      children = _ref2.children,
      active = _ref2.active,
      disabled = _ref2.disabled,
      size = _ref2.size,
      _onClick = _ref2.onClick,
      className = _ref2.className;
  var hasMenu = !!children;
  return _react.default.createElement("li", {
    onClick: function onClick(evt) {
      if (_onClick) {
        evt.preventDefault();
        evt.stopPropagation();

        _onClick(value);
      }
    },
    className: "jsx-".concat(_styles.default.__hash) + " " + ((0, _classnames.default)('item', className, subMenu.className, {
      disabled: disabled,
      active: active
    }) || "")
  }, icon, _react.default.createElement("div", {
    className: "jsx-".concat(_styles.default.__hash) + " " + "label"
  }, label), hasMenu && _react.default.createElement(_Chevron.ChevronRight, {
    className: subChevron.className
  }), subChevron.styles, hasMenu && _react.default.createElement(SubMenu, {
    size: size,
    className: subMenu.className
  }, children), subMenu.styles, _react.default.createElement(_style.default, {
    id: _styles.default.__hash
  }, _styles.default));
};

exports.MenuItem = MenuItem;
MenuItem.defaultProps = {
  size: 'default',
  active: false,
  disabled: false
};
MenuItem.propTypes = {
  label: _propTypes.default.oneOf([_propTypes.default.string, _propTypes.default.element]).isRequired,
  value: _propTypes.default.any.isRequired,
  className: _propTypes.default.string,
  icon: _propTypes.default.element,
  children: _propTypes.default.element,
  active: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};