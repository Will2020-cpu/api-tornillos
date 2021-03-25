"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whoami = exports.signup = exports.signin = void 0;

var _database = _interopRequireDefault(require("../database"));

var _Encrypt = _interopRequireDefault(require("../libs/Encrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, email, password, datos, user, validPassword, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.next = 4;
            return _database["default"].query('SELECT * FROM users WHERE email =  ?', [email.toLowerCase()]);

          case 4:
            datos = _context.sent;

            if (!(datos.length > 0)) {
              _context.next = 16;
              break;
            }

            user = datos[0];
            _context.next = 9;
            return _Encrypt["default"].matchPassword(password, user.password);

          case 9:
            validPassword = _context.sent;

            if (!validPassword) {
              _context.next = 15;
              break;
            }

            token = _jsonwebtoken["default"].sign({
              email: email.toLowerCase(),
              password: user.password
            }, _config["default"].SECRET);
            return _context.abrupt("return", res.status(200).json({
              token: token
            }));

          case 15:
            return _context.abrupt("return", res.status(404).json({
              error: 'Contrasena Incorrecta'
            }));

          case 16:
            res.status(404).json({
              error: "El email no se encuentra registrado"
            });
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            res.json({
              error: _context.t0
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 19]]);
  }));

  return function signin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signin = signin;

var signup = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, email, password, datos, encryptPassword, newUser, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context2.next = 4;
            return _database["default"].query('SELECT * FROM users WHERE email = ?', [email.toLowerCase()]);

          case 4:
            datos = _context2.sent;

            if (!(datos.length > 0)) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              error: "El email ya se encuentra en uso"
            }));

          case 7:
            _context2.next = 9;
            return _Encrypt["default"].encryptPassword(password);

          case 9:
            encryptPassword = _context2.sent;
            newUser = {
              email: email.toLowerCase(),
              password: encryptPassword
            };
            token = _jsonwebtoken["default"].sign({
              email: newUser.email,
              password: newUser.password
            }, _config["default"].SECRET);
            _context2.next = 14;
            return _database["default"].query('INSERT INTO users set  ?', [newUser]);

          case 14:
            res.json({
              token: token
            });
            _context2.next = 20;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            res.json({
              error: _context2.t0
            });

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 17]]);
  }));

  return function signup(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signup = signup;

var whoami = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var token, pase, datos;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            token = req.headers["x-access-token"];

            if (token) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              error: "No hay token no puedes ingresar"
            }));

          case 4:
            pase = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            _context3.next = 7;
            return _database["default"].query('SELECT * FROM users WHERE email = ? AND password = ?', [pase.email, pase.password]);

          case 7:
            datos = _context3.sent;

            if (!(datos.length > 0)) {
              _context3.next = 12;
              break;
            }

            return _context3.abrupt("return", res.json({
              exito: "success"
            }));

          case 12:
            return _context3.abrupt("return", res.json({
              error: "Tu Token no es valido"
            }));

          case 13:
            _context3.next = 18;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.json({
              error: _context3.t0
            }));

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 15]]);
  }));

  return function whoami(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.whoami = whoami;