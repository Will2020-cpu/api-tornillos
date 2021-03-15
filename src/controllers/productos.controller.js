import pool from '../database'
import { v4 as uuidv4 } from 'uuid'


export const getProductos = async(req,res) =>{
    const datos = await pool.query('SELECT * FROM productos')
    res.json(datos)
}


export const getProductosById  = async(req,res) =>{
    const { id } =  req.params;
    const datos = await pool.query('SELECT * FROM productos WHERE id = ?',[id])
    res.json(datos)
}

export const addProductos = async(req,res) =>{
    const { marca, largo, diametro, fk_categorias } = req.body;
    const newProducto  = {
        id: uuidv4(),
        marca,
        largo,
        diametro,
        fk_categorias
    }

    await pool.query('INSERT INTO productos set ?',[newProducto])
    res.json({message:'Producto agregado correctamente'})
}

export const updateProducto = async(req,res) =>{
    const { id } = req.params;
    const { marca,largo,diametro,fk_categorias } = req.body;
    const updateProducto = {
        marca,
        largo,
        diametro,
        fk_categorias
    } 
    await pool.query('UPDATE productos set ? WHERE id = ?',[id])
    res.status(204).json()
}

export const deleteProducto = async(req,res) =>{
    const { id } = req.params;
    await pool.query('DELETE FROM productos WHERE id = ?',[id])
    res.status(204).json()
}




