"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilterCategories = exports.getTiposByCategorias = exports.getTipos = void 0;

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getTipos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var datosMarca, datosLargo, datosDiametro;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _database["default"].query('SELECT DISTINCT marca FROM productos');

          case 2:
            datosMarca = _context.sent;
            _context.next = 5;
            return _database["default"].query('SELECT DISTINCT largo FROM productos');

          case 5:
            datosLargo = _context.sent;
            _context.next = 8;
            return _database["default"].query('SELECT DISTINCT diametro FROM productos');

          case 8:
            datosDiametro = _context.sent;
            res.json({
              marca: datosMarca,
              largo: datosLargo,
              diametro: datosDiametro
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getTipos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTipos = getTipos;

var getTiposByCategorias = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, datosMarca, datosLargo, datosDiametro;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _database["default"].query('SELECT DISTINCT marca FROM productos WHERE fk_categorias =?', [id]);

          case 3:
            datosMarca = _context2.sent;
            _context2.next = 6;
            return _database["default"].query('SELECT DISTINCT largo FROM productos WHERE fk_categorias =?', [id]);

          case 6:
            datosLargo = _context2.sent;
            _context2.next = 9;
            return _database["default"].query('SELECT DISTINCT diametro FROM productos WHERE fk_categorias =?', [id]);

          case 9:
            datosDiametro = _context2.sent;
            res.json({
              marca: datosMarca,
              largo: datosLargo,
              diametro: datosDiametro
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getTiposByCategorias(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTiposByCategorias = getTiposByCategorias;

var getFilterCategories = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, _req$query, filter_diametro, filter_marca, filter_largo, datos;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _req$query = req.query, filter_diametro = _req$query.filter_diametro, filter_marca = _req$query.filter_marca, filter_largo = _req$query.filter_largo;

            if (!(filter_diametro !== undefined || filter_marca !== undefined || filter_largo !== undefined)) {
              _context3.next = 9;
              break;
            }

            _context3.next = 5;
            return _database["default"].query('SELECT * FROM productos WHERE (marca = ? OR largo = ? OR diametro = ?) AND  fk_categorias = ?', [filter_marca, filter_largo, filter_diametro, id]);

          case 5:
            datos = _context3.sent;
            res.json(datos);
            _context3.next = 10;
            break;

          case 9:
            res.json({
              error: 'xd'
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getFilterCategories(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getFilterCategories = getFilterCategories;