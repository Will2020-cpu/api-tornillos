import { Router } from 'express'
import * as ProductosController from '../controllers/productos.controller'


const router = Router();

router.get('/',ProductosController.getProductos)
router.get('/:id',ProductosController.getProductosById)
router.post('/add',ProductosController.addProductos)
router.put('/edit/:id',ProductosController.updateProducto)
router.delete('/delete/:id',ProductosController.deleteProducto)




export default router