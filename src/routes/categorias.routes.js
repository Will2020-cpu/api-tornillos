import { Router } from 'express'
import * as CategoriaController from '../controllers/categorias.controllers'


const router = Router()

router.get('/',CategoriaController.getCategorias)
router.get('/:id',CategoriaController.getCategoriaById)
router.get('/get/:id',CategoriaController.getCategoriasByName)
router.post('/add',CategoriaController.addCategorias)
router.put('/edit/:id',CategoriaController.updateCategorias)
router.delete('/delete/:id',CategoriaController.deleteCategoria)





export default router