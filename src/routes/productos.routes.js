import { Router } from 'express'
import * as ProductosController from '../controllers/productos.controller'
import * as VerifyToken from '../middlewares/VerifyToken'

const router = Router();

router.get('/',ProductosController.getProductos)
router.get('/:id',ProductosController.getProductosById)
router.get('/categoria/:id',ProductosController.getProductosByCategoria)
router.get('/cantidad/productos',ProductosController.getTenProducts)
router.post('/add',VerifyToken.verifyToken, ProductosController.addProductos)
router.put('/edit/:id',VerifyToken.verifyToken, ProductosController.updateProducto)
router.delete('/delete/:id',VerifyToken.verifyToken, ProductosController.deleteProducto)




export default router