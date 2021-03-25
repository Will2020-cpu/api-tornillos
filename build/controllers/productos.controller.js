"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTenProducts = exports.getProductosByCategoria = exports.deleteProducto = exports.updateProducto = exports.addProductos = exports.getProductosById = exports.getProductos = void 0;

var _database = _interopRequireDefault(require("../database"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getProductos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var datos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _database["default"].query('SELECT * FROM productos');

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

  return function getProductos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProductos = getProductos;

var getProductosById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, datos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _database["default"].query('SELECT * FROM productos WHERE id = ?', [id]);

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

  return function getProductosById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProductosById = getProductosById;

var addProductos = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre, marca, imagen, largo, diametro, precio, fk_categorias, newProducto;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, marca = _req$body.marca, imagen = _req$body.imagen, largo = _req$body.largo, diametro = _req$body.diametro, precio = _req$body.precio, fk_categorias = _req$body.fk_categorias;
            newProducto = {
              id: (0, _uuid.v4)(),
              nombre: nombre,
              marca: marca,
              imagen: imagen,
              largo: largo,
              diametro: diametro,
              precio: precio,
              fk_categorias: fk_categorias
            };
            _context3.next = 4;
            return _database["default"].query('INSERT INTO productos set ?', [newProducto]);

          case 4:
            res.json({
              message: 'Producto agregado correctamente'
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function addProductos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.addProductos = addProductos;

var updateProducto = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, nombre, marca, imagen, largo, diametro, precio, fk_categorias, updateProducto;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, marca = _req$body2.marca, imagen = _req$body2.imagen, largo = _req$body2.largo, diametro = _req$body2.diametro, precio = _req$body2.precio, fk_categorias = _req$body2.fk_categorias;
            updateProducto = {
              nombre: nombre,
              marca: marca,
              imagen: imagen,
              largo: largo,
              diametro: diametro,
              precio: precio,
              fk_categorias: fk_categorias
            };
            _context4.next = 5;
            return _database["default"].query('UPDATE productos set ? WHERE id = ?', [updateProducto, id]);

          case 5:
            res.status(204).json();

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateProducto(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateProducto = updateProducto;

var deleteProducto = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _database["default"].query('DELETE FROM productos WHERE id = ?', [id]);

          case 3:
            res.status(204).json();

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteProducto(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteProducto = deleteProducto;

var getProductosByCategoria = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, datos;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.next = 3;
            return _database["default"].query('SELECT * FROM productos WHERE fk_categorias =  ?', [id]);

          case 3:
            datos = _context6.sent;
            res.json(datos);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getProductosByCategoria(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getProductosByCategoria = getProductosByCategoria;

var getTenProducts = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var datos;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _database["default"].query('SELECT * FROM productos LIMIT 0, 10');

          case 2:
            datos = _context7.sent;
            res.json(datos);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getTenProducts(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getTenProducts = getTenProducts;