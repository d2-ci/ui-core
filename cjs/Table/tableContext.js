"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consumer = exports.Provider = exports.TableContext = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var TableContext = (0, _react.createContext)({
  staticLayout: false
});
exports.TableContext = TableContext;
var Provider = TableContext.Provider,
    Consumer = TableContext.Consumer;
exports.Consumer = Consumer;
exports.Provider = Provider;