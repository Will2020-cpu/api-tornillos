"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClientes = exports.getClientes = void 0;

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getClientes = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var totalDatos, datos, index, probando, newCliente;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            totalDatos = [];
            _context.next = 3;
            return _database["default"].query('SELECT * FROM clientes');

          case 3:
            datos = _context.sent;
            index = 0;

          case 5:
            if (!(index < datos.length - 1)) {
              _context.next = 14;
              break;
            }

            _context.next = 8;
            return _database["default"].query('SELECT * FROM productos WHERE id = ?', [datos[index].fk_productos]);

          case 8:
            probando = _context.sent;
            newCliente = {
              id: datos[index].id,
              email: datos[index].email,
              numero: datos[index].numero,
              producto: {
                nombre: probando[0].nombre,
                imagen: probando[0].imagen,
                precio: probando[0].precio
              }
            };
            totalDatos.push(newCliente);

          case 11:
            index++;
            _context.next = 5;
            break;

          case 14:
            res.json(totalDatos);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getClientes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getClientes = getClientes;

var addClientes = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, id, email, numero, producto, newCliente;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, id = _req$body.id, email = _req$body.email, numero = _req$body.numero, producto = _req$body.producto;
            newCliente = {
              id: id,
              email: email,
              numero: numero,
              fk_productos: producto
            };
            _context2.next = 4;
            return _database["default"].query('INSERT INTO clientes set ? ', [newCliente]);

          case 4:
            res.json({
              message: "Agregado Correctamente"
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addClientes(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.addClientes = addClientes;