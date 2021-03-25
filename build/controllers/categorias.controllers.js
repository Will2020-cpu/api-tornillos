"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCategoria = exports.updateCategorias = exports.addCategorias = exports.getCategoriasByName = exports.getCategoriaById = exports.getCategorias = void 0;

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getCategorias = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var datos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _database["default"].query('SELECT * FROM categorias');

          case 2:
            datos = _context.sent;
            res.json(datos);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getCategorias(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getCategorias = getCategorias;

var getCategoriaById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, datos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _database["default"].query('SELECT * FROM categorias WHERE id = ?', [id]);

          case 3:
            datos = _context2.sent;
            res.json(datos);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getCategoriaById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getCategoriaById = getCategoriaById;

var getCategoriasByName = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, datos;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _database["default"].query('SELECT * FROM categorias WHERE nombre = ? ', [id]);

          case 3:
            datos = _context3.sent;
            res.json(datos);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getCategoriasByName(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getCategoriasByName = getCategoriasByName;

var addCategorias = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, nombre, imagen, tipo, newCategoria;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, imagen = _req$body.imagen, tipo = _req$body.tipo;
            newCategoria = {
              nombre: nombre,
              imagen: imagen,
              tipo: tipo
            };
            _context4.next = 4;
            return _database["default"].query('INSERT INTO categorias set ?', [newCategoria]);

          case 4:
            res.json({
              message: 'Dato agregado correctamente'
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function addCategorias(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.addCategorias = addCategorias;

var updateCategorias = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nombre, imagen, tipo, updateCategoria;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, imagen = _req$body2.imagen, tipo = _req$body2.tipo;
            updateCategoria = {
              nombre: nombre,
              imagen: imagen,
              tipo: tipo
            };
            _context5.next = 5;
            return _database["default"].query('UPDATE categorias set ? WHERE id = ?', [updateCategoria, id]);

          case 5:
            res.status(204).json();

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateCategorias(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateCategorias = updateCategorias;

var deleteCategoria = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.next = 3;
            return _database["default"].query('DELETE FROM productos WHERE fk_categorias = ?', [id]);

          case 3:
            _context6.next = 5;
            return _database["default"].query('DELETE FROM categorias WHERE id = ?', [id]);

          case 5:
            res.status(204).json();

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteCategoria(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteCategoria = deleteCategoria;