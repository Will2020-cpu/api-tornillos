"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _package = _interopRequireDefault(require("../package.json"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

require("core-js/stable");

require("regenerator-runtime/runtime");

var _categorias = _interopRequireDefault(require("./routes/categorias.routes"));

var _productos = _interopRequireDefault(require("./routes/productos.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _tipos = _interopRequireDefault(require("./routes/tipos.routes"));

var _notifications = _interopRequireDefault(require("./routes/notifications.routes"));

var _clientes = _interopRequireDefault(require("./routes/clientes.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Importando rutas
var app = (0, _express["default"])(); //Configuraciones 

app.set('port', process.env.PORT || 5000);
app.set('informacion', _package["default"]);
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _helmet["default"])());
app.use((0, _cors["default"])());
app.get('/', function (req, res) {
  res.json({
    author: app.set('informacion').author,
    description: app.set('informacion').description,
    version: app.set('informacion').version
  });
});
app.use('/api/categorias', _categorias["default"]);
app.use('/api/productos', _productos["default"]);
app.use('/api/auth', _auth["default"]);
app.use('/api/tipos', _tipos["default"]);
app.use('/services/notificaciones', _notifications["default"]);
app.use('/api/clientes', _clientes["default"]);
var _default = app;
exports["default"] = _default;