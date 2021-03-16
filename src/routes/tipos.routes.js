import { Router } from 'express'
import * as TipoController from '../controllers/tipos.controller'


const router = Router()


router.get('/',TipoController.getTipos)
router.get('/:id',TipoController.getTiposByCategorias)
router.get('/categoria/:id',TipoController.getFilterCategories)


export default router
