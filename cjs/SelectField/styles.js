"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectIconStyles = exports.menuOverride = exports.arrowIcon = exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _theme = require("../theme.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _defaultExport = new String(".base.jsx-2160295497{display:inline-block;position:relative;width:100%;background-color:inherit;color:".concat(_theme.colors.grey700, ";pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.select.jsx-2160295497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;padding-left:8px;border-radius:5px;}.select.jsx-2160295497:hover .flatline.jsx-2160295497,.select.jsx-2160295497:hover .flatline.idle.filled.jsx-2160295497,.select.jsx-2160295497:hover .flatline.focused.jsx-2160295497{border:1px solid ").concat(_theme.colors.grey700, ";}.select.kind-filled.jsx-2160295497{border-bottom:2px solid transparent;border-radius:5px;background-color:rgba(0,0,10,0.05);}.select.kind-filled.jsx-2160295497:hover,.select.kind-filled.focused.jsx-2160295497{border-bottom:2px solid ").concat(_theme.theme.secondary600, ";background-color:rgba(0,0,10,0.08);}.size-default.jsx-2160295497{height:56px;}.size-dense.jsx-2160295497{height:44px;}.menu.jsx-2160295497{z-index:1000;position:absolute;left:0;}.size-default.jsx-2160295497 .menu.jsx-2160295497{top:56px;}.size-dense.jsx-2160295497 .menu.jsx-2160295497{top:44px;}.icon.jsx-2160295497{color:").concat(_theme.colors.grey700, ";}.arrow-icon.jsx-2160295497{color:").concat(_theme.colors.grey900, ";}.lead-icon-field.jsx-2160295497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:4px;padding:0;}.trail-icon-field.jsx-2160295497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:4px;padding:0;}.input-field.jsx-2160295497{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;margin:12px 0 0 0;color:inherit;}.kind-outlined.jsx-2160295497 .input-field.jsx-2160295497{margin:0;border-radius:inherit;background-color:inherit;}.disabled.jsx-2160295497,.disabled.jsx-2160295497 .select.jsx-2160295497,.disabled.jsx-2160295497 .select.jsx-2160295497 .value.jsx-2160295497,.disabled.jsx-2160295497::-webkit-input-placeholder{color:").concat(_theme.colors.grey500, ";cursor:not-allowed;opacity:1;}.disabled.jsx-2160295497,.disabled.jsx-2160295497 .select.jsx-2160295497,.disabled.jsx-2160295497 .select.jsx-2160295497 .value.jsx-2160295497,.disabled.jsx-2160295497::-moz-placeholder{color:").concat(_theme.colors.grey500, ";cursor:not-allowed;opacity:1;}.disabled.jsx-2160295497,.disabled.jsx-2160295497 .select.jsx-2160295497,.disabled.jsx-2160295497 .select.jsx-2160295497 .value.jsx-2160295497,.disabled.jsx-2160295497:-ms-input-placeholder{color:").concat(_theme.colors.grey500, ";cursor:not-allowed;opacity:1;}.disabled.jsx-2160295497,.disabled.jsx-2160295497 .select.jsx-2160295497,.disabled.jsx-2160295497 .select.jsx-2160295497 .value.jsx-2160295497,.disabled.jsx-2160295497::placeholder{color:").concat(_theme.colors.grey500, ";cursor:not-allowed;opacity:1;}.flatline.jsx-2160295497{position:absolute;top:-8px;right:0;bottom:0;left:0;padding-left:8px;border:1px solid ").concat(_theme.colors.grey500, ";border-radius:5px;pointer-events:none;}.flatline.idle.filled.jsx-2160295497{border:1.5px solid ").concat(_theme.colors.grey500, ";}.flatline.focused.jsx-2160295497{border:1.5px solid ").concat(_theme.theme.secondary600, ";}.flatline.valid.jsx-2160295497,.flatline.valid.idle.filled.jsx-2160295497,.flatline.valid.focused.jsx-2160295497{border:1.5px solid ").concat(_theme.colors.blue600, ";}.flatline.warning.jsx-2160295497,.flatline.warning.idle.filled.jsx-2160295497,.flatline.warning.focused.jsx-2160295497{border:1.5px solid ").concat(_theme.colors.yellow500, ";}.flatline.error.jsx-2160295497,.flatline.error.idle.filled.jsx-2160295497,.flatline.error.focused.jsx-2160295497{border:1.5px solid ").concat(_theme.colors.red500, ";}.label.jsx-2160295497{display:block;position:absolute;left:8px;-webkit-transform:translate(8px,0px) scale(1);-ms-transform:translate(8px,0px) scale(1);transform:translate(8px,0px) scale(1);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;color:").concat(_theme.colors.grey700, ";white-space:nowrap;pointer-events:none;-webkit-transition:all 0.1s;transition:all 0.1s;}.label.required.jsx-2160295497::after{content:'*';}.label.filled.focused.jsx-2160295497{color:").concat(_theme.theme.secondary600, ";}.label.filled.shrink.jsx-2160295497{-webkit-transform:translate(8px,-12px) scale(0.75);-ms-transform:translate(8px,-12px) scale(0.75);transform:translate(8px,-12px) scale(0.75);}.label.filled.dense.shrink.jsx-2160295497{-webkit-transform:translate(8px,-8px) scale(0.75);-ms-transform:translate(8px,-8px) scale(0.75);transform:translate(8px,-8px) scale(0.75);}.label.filled.has-icon.jsx-2160295497{left:28px;}.label.filled.shrink.has-icon.jsx-2160295497{left:28px;}.label.outlined.focused.jsx-2160295497{color:").concat(_theme.theme.secondary600, ";}.label.outlined.shrink.jsx-2160295497{-webkit-transform:translate(8px,-24px) scale(0.75);-ms-transform:translate(8px,-24px) scale(0.75);transform:translate(8px,-24px) scale(0.75);}.label.outlined.shrink.dense.jsx-2160295497{-webkit-transform:translate(8px,-18px) scale(0.75);-ms-transform:translate(8px,-18px) scale(0.75);transform:translate(8px,-18px) scale(0.75);}.label.outlined.has-icon.jsx-2160295497{left:28px;}.label.outlined.shrink.has-icon.jsx-2160295497{left:8px;}.icon-valid.jsx-2160295497,.label.filled.valid.jsx-2160295497,.label.outlined.valid.jsx-2160295497{color:").concat(_theme.colors.blue600, ";}.icon-warning.jsx-2160295497,.label.filled.warning.jsx-2160295497,.label.outlined.warning.jsx-2160295497{color:").concat(_theme.colors.yellow500, ";}.icon-error.jsx-2160295497,.label.filled.error.jsx-2160295497,.label.outlined.error.jsx-2160295497{color:").concat(_theme.colors.red500, ";}.select.kind-filled.status-valid.jsx-2160295497:hover,.select.kind-filled.focused.status-valid.jsx-2160295497{border-bottom:2px solid ").concat(_theme.colors.blue600, ";}.select.kind-filled.status-warning.jsx-2160295497:hover,.select.kind-filled.focused.status-warning.jsx-2160295497{border-bottom:2px solid ").concat(_theme.colors.yellow500, ";}.select.kind-filled.status-error.jsx-2160295497:hover,.select.kind-filled.focused.status-error.jsx-2160295497{border-bottom:2px solid ").concat(_theme.colors.red500, ";}.label.filled.disabled.jsx-2160295497,.select.kind-filled.disabled.jsx-2160295497:hover,.select.kind-filled.disabled.jsx-2160295497{border:2px solid transparent;background-color:rgba(0,0,10,0.02);color:").concat(_theme.colors.grey500, ";}.label.filled.disabled.jsx-2160295497{background-color:transparent;}.select.disabled.jsx-2160295497 .flatline.jsx-2160295497,.select.disabled.jsx-2160295497:hover .flatline.jsx-2160295497{border:1px solid rgba(196,196,196,0.2);}.label.kind-outlined.disabled.jsx-2160295497{color:").concat(_theme.colors.grey500, ";}.disabled.jsx-2160295497,.disabled.jsx-2160295497::-webkit-input-placeholder{color:").concat(_theme.colors.grey500, ";cursor:not-allowed;}.disabled.jsx-2160295497,.disabled.jsx-2160295497::-moz-placeholder{color:").concat(_theme.colors.grey500, ";cursor:not-allowed;}.disabled.jsx-2160295497,.disabled.jsx-2160295497:-ms-input-placeholder{color:").concat(_theme.colors.grey500, ";cursor:not-allowed;}.disabled.jsx-2160295497,.disabled.jsx-2160295497::placeholder{color:").concat(_theme.colors.grey500, ";cursor:not-allowed;}_.jsx-2160295497:-ms-input-placeholder,.jsx-2160295497:root .flatline.jsx-2160295497,_.jsx-2160295497:-ms-input-placeholder,.jsx-2160295497:root .field.kind-filled.jsx-2160295497{border-radius:0px;}_.jsx-2160295497:-ms-input-placeholder,.jsx-2160295497:root .label.jsx-2160295497{-webkit-transform:translate(14px,-8px) scale(1);-ms-transform:translate(14px,-8px) scale(1);transform:translate(14px,-8px) scale(1);}_.jsx-2160295497:-ms-input-placeholder,.jsx-2160295497:root .label.filled.shrink.jsx-2160295497{-webkit-transform:translate(8px,-20px) scale(0.75);-ms-transform:translate(8px,-20px) scale(0.75);transform:translate(8px,-20px) scale(0.75);}_.jsx-2160295497:-ms-input-placeholder,.jsx-2160295497:root .label.filled.dense.shrink.jsx-2160295497{-webkit-transform:translate(8px,-18px) scale(0.75);-ms-transform:translate(8px,-18px) scale(0.75);transform:translate(8px,-18px) scale(0.75);}_.jsx-2160295497:-ms-input-placeholder,.jsx-2160295497:root .label.outlined.shrink.jsx-2160295497{-webkit-transform:translate(8px,-32px) scale(0.75);-ms-transform:translate(8px,-32px) scale(0.75);transform:translate(8px,-32px) scale(0.75);}_.jsx-2160295497:-ms-input-placeholder,.jsx-2160295497:root .label.outlined.shrink.dense.jsx-2160295497{-webkit-transform:translate(8px,-26px) scale(0.75);-ms-transform:translate(8px,-26px) scale(0.75);transform:translate(8px,-26px) scale(0.75);}"));

_defaultExport.__hash = "2160295497";
var _default = _defaultExport;
exports.default = _default;
var arrowIcon = {
  styles: _react.default.createElement(_style.default, {
    id: "1039571365"
  }, "svg.jsx-1039571365{fill:inherit;height:24px;width:24px;vertical-align:middle;pointer-events:none;}"),
  className: "jsx-1039571365"
};
exports.arrowIcon = arrowIcon;
var menuOverride = {
  styles: _react.default.createElement(_style.default, {
    id: "1122726799"
  }, ".jsx-1122726799{max-height:300px;overflow-y:auto;}"),
  className: "jsx-1122726799"
};
exports.menuOverride = menuOverride;
var selectIconStyles = {
  styles: _react.default.createElement(_style.default, {
    id: "1036212399"
  }, "svg.jsx-1036212399{margin:0;}"),
  className: "jsx-1036212399"
};
exports.selectIconStyles = selectIconStyles;