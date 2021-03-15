import express from 'express';
import informacion from '../package.json';
import cors from 'cors'
import morgan from 'morgan'
import 'core-js/stable';
import "regenerator-runtime/runtime";


//Importando rutas
import categoriasRoutes from './routes/categorias.routes'
import ProductosRouter from './routes/productos.routes'


const app = express();


//Configuraciones 
app.set('port',process.env.PORT || 5000)


app.set('informacion',informacion)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.get('/',(req,res)=>{
    res.json({
        author: app.set('informacion').author,
        description:app.set('informacion').description,
        version: app.set('informacion').version
    })
})

app.use('/api/categorias',categoriasRoutes)
app.use('/api/productos',ProductosRouter)


export default app;