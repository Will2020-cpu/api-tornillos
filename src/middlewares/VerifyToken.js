import jwt from 'jsonwebtoken'
import config from '../config'
import pool from '../database'

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"]
        if (!token) return res.status(403).json({ error: "No hay token no puedes ingresar" })
        const pase = jwt.verify(token, config.SECRET)
        req.user = pase.email
        const datos = await pool.query('SELECT * FROM users WHERE email = ? AND password = ?', [pase.email, pase.password])
        if (datos.length < 0) return res.status(403).json({ error: "Esta es una ruta prohibida" })
    } catch (e) {
        return res.status(403).json({ error: e })
    }
    next()
}
