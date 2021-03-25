"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _webPush = _interopRequireDefault(require("web-push"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PUBLIC_VAPID_KEY = _config["default"].PUBLIC_KEY;
var PRIVATE_VAPID_KEY = _config["default"].PRIVATE_KEY;

_webPush["default"].setVapidDetails("mailto:willianthehell0@gmail.com", PUBLIC_VAPID_KEY, PRIVATE_VAPID_KEY);

var _default = _webPush["default"];
exports["default"] = _default;