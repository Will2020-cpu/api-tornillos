import pool from '../database'


export const getClientes = async(req,res) =>{
    const datos = await pool.query('SELECT * FROM clientes')
    res.json(datos)
}


export const addClientes = async(req,res) =>{
    const { id, nombre, numero, producto } = req.body;
    const newCliente = {
        id,
        nombre,
        numero,
        fk_productos:producto
    }
    await pool.query('INSERT INTO clientes set ? ',[newCliente])
    res.json({message:"Agregado Correctamente"})
}
