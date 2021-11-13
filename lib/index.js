"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = exports.ReactDemo = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ReactDemo = function ReactDemo() {
  return /*#__PURE__*/_react["default"].createElement("h1", null, "\u8FD9\u662F\u6211\u7684\u7B2C\u4E00\u4E2Areact npm \u7EC4\u4EF6", /*#__PURE__*/_react["default"].createElement("div", null, "\u6211\u53C8\u4E00\u6B21\u53D1\u5E03\u4E86\u4E00\u6B2111111"));
};

exports.ReactDemo = ReactDemo;

var fetch = function fetch(num1, num2) {
  return num1 + num2;
};

exports.fetch = fetch;