import pool from '../database'



export const getCategorias = async(req,res) =>{
   const datos = await pool.query('SELECT * FROM categorias')
   res.json(datos)
}


export const getCategoriaById = async(req,res) =>{
    const { id } =  req.params;
    const datos = await pool.query('SELECT * FROM categorias WHERE id = ?',[id])
    res.json(datos)
}

export const addCategorias = async(req,res)=>{
    const { nombre,imagen,tipo } = req.body;
    const newCategoria = {
        nombre,
        imagen,
        tipo
    }
    await pool.query('INSERT INTO categorias set ?',[newCategoria])
    res.json({message:'Dato agregado correctamente'})
}

export const updateCategorias = async(req,res) =>{
    const { id } = req.params;
    const { nombre,imagen,tipo } = req.body;
    const updateCategoria = {
        nombre,
        imagen,
        tipo
    }
    await pool.query('UPDATE categorias set ? WHERE id = ?',[updateCategoria,id])
    res.status(204).json()
}

export const deleteCategoria = async(req,res) =>{
    const { id } = req.params;
    await pool.query('DELETE FROM categorias WHERE id = ?',[id])
    res.status(204).json()
}

