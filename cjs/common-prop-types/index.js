"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizePropType = exports.buttonVariantPropType = exports.statusPropType = void 0;

var _propTypes = require("@dhis2/prop-types");

var _propTypes2 = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var statusPropType = (0, _propTypes.mutuallyExclusive)(['success', 'warning', 'critical'], _propTypes2.default.bool);
exports.statusPropType = statusPropType;
var buttonVariantPropType = (0, _propTypes.mutuallyExclusive)(['primary', 'secondary', 'destructive'], _propTypes2.default.bool);
exports.buttonVariantPropType = buttonVariantPropType;
var sizePropType = (0, _propTypes.mutuallyExclusive)(['small', 'large'], _propTypes2.default.bool);
exports.sizePropType = sizePropType;