import pool from '../database'


export const getClientes = async (req, res) => {
    var totalDatos = [];
    const datos = await pool.query('SELECT * FROM clientes')
    for (let index = 0; index < datos.length - 1; index++) {
        var probando = await pool.query('SELECT * FROM productos WHERE id = ?',[datos[index].fk_productos])
        var newCliente = {
            id:datos[index].id,
            email:datos[index].email,
            numero:datos[index].numero,
            producto:{
                nombre:probando[0].nombre,
                imagen:probando[0].imagen,
                precio:probando[0].precio
            },
        }
        totalDatos.push(newCliente) 
    }
    res.json(totalDatos)
}


export const addClientes = async (req, res) => {
    const { id, email, numero, producto } = req.body;
    const newCliente = {
        id,
        email,
        numero,
        fk_productos: producto
    }
    await pool.query('INSERT INTO clientes set ? ', [newCliente])
    res.json({ message: "Agregado Correctamente" })
}
