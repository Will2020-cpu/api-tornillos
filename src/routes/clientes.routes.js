import { Router } from 'express'
import * as ClientesController from '../controllers/clientes.controller'


const router = Router()

router.get('/',ClientesController.getClientes)
router.post('/add',ClientesController.addClientes)





export default router