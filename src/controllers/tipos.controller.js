import pool from '../database'



export const getTipos = async(req,res) =>{
    const datosMarca = await pool.query('SELECT DISTINCT marca FROM productos')
    const datosLargo = await pool.query('SELECT DISTINCT largo FROM productos')
    const datosDiametro = await pool.query('SELECT DISTINCT diametro FROM productos')
    res.json({marca:datosMarca, largo:datosLargo, diametro:datosDiametro})
    
}

export const getTiposByCategorias = async(req,res) =>{
    const { id } = req.params;
    const datosMarca = await pool.query('SELECT DISTINCT marca FROM productos WHERE fk_categorias =?',[id])	
    const datosLargo = await pool.query('SELECT DISTINCT largo FROM productos WHERE fk_categorias =?',[id])	
    const datosDiametro = await pool.query('SELECT DISTINCT diametro FROM productos WHERE fk_categorias =?',[id])

		res.json({marca:datosMarca, largo:datosLargo, diametro:datosDiametro})
}


export const getFilterCategories = async(req,res) =>{
    const { id } = req.params;
		const { filter_diametro, filter_marca, filter_largo } = req.query;
    if(filter_diametro !== undefined && filter_marca !== undefined && filter_largo !== undefined){
      const datos = await pool.query('SELECT * FROM productos WHERE (marca = ? OR largo = ? OR diametro = ?) AND fk_categorias = ?',[filter_marca,filter_largo, filter_diametro,id])
      return res.json(datos)

    }else if (filter_diametro !== undefined && filter_marca !== undefined){
      const datos = await pool.query('SELECT * FROM productos WHERE (marca = ? OR diametro = ?) AND fk_categorias = ?',[filter_marca,filter_diametro,id])
      return res.json(datos)
    
    }else if(filter_diametro !== undefined && filter_largo !== undefined){
      const datos = await pool.query('SELECT * FROM productos WHERE (diametro = ? OR largo = ?) AND fk_categorias = ?',[filter_diametro,filter_largo,id])
      return res.json(datos)
    
    }else if(filter_marca !== undefined && filter_largo !== undefined){
      const datos = await pool.query('SELECT * FROM productos WHERE (marca = ? OR largo = ?) AND fk_categorias = ?',[filter_marca,filter_largo,id])
      return res.json(datos)
    
    }else if(filter_diametro !== undefined){
      const datos = await pool.query('SELECT * FROM productos WHERE diametro = ? AND fk_categorias = ?',[filter_diametro,id])
      return res.json(datos)
    
    }else if(filter_largo !== undefined){
      const datos = await pool.query('SELECT * FROM productos WHERE largo = ? AND fk_categorias = ?',[filter_largo,id])
      return res.json(datos)
    
    }else if(filter_marca !== undefined){
      const datos = await pool.query('SELECT * FROM productos WHERE marca = ? AND fk_categorias = ?',[filter_marca,id])
      return res.json(datos)
    }

	res.json({error:'xd'})
}
