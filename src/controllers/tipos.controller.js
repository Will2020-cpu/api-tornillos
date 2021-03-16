import pool from '../database'

export const getTipos = async(req,res) =>{
    const datos = await pool.query('SELECT DISTINCT marca,largo,diametro FROM productos')
    res.json(datos)
}

export const getTiposByCategorias = async(req,res) =>{
    const { id } = req.params;
    const datos = await pool.query('SELECT DISTINCT marca,largo,diametro FROM productos WHERE fk_categorias =?',[id])
    res.json(datos)
}


export const getFilterCategories = async(req,res) =>{
    const { id } = req.params;
    const { filter } = req.body
    const datos = await pool.query('SELECT * FROM productos WHERE (marca = ? OR largo = ? OR diametro = ?) AND fk_categorias = ?',[filter,filter,filter,id])
    res.json(datos)
}
