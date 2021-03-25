import { Router } from 'express'
import * as CategoriaController from '../controllers/categorias.controllers'
import * as VerifyToken from '../middlewares/VerifyToken'


const router = Router()

router.get('/',CategoriaController.getCategorias)
router.get('/:id',CategoriaController.getCategoriaById)
router.get('/get/:id',CategoriaController.getCategoriasByName)
router.post('/add',VerifyToken.verifyToken, CategoriaController.addCategorias)
router.put('/edit/:id',VerifyToken.verifyToken, CategoriaController.updateCategorias)
router.delete('/delete/:id',VerifyToken.verifyToken, CategoriaController.deleteCategoria)





export default router