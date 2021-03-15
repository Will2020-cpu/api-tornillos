import { Router } from 'express'
import * as ProductosController from '../controllers/productos.controller'


const router = Router();

router.get('/',ProductosController.getProductos)
router.post('/add',ProductosController.addProductos)




export default router