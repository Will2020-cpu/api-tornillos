import pool from '../database';
import encrypt from '../libs/Encrypt';
import jwt from 'jsonwebtoken'
import config from '../config';

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const datos = await pool.query('SELECT * FROM users WHERE email =  ?', [email.toLowerCase()]);
        if (datos.length > 0) {
            const user = datos[0]
            const validPassword = await encrypt.matchPassword(password, user.password)
            if (validPassword) {
                const token = jwt.sign({ email: email.toLowerCase(), password: user.password }, config.SECRET)
                return res.status(200).json({ token })
            } else {
                return res.status(404).json({ error: 'Contrasena Incorrecta' })
            }
        }
        res.status(404).json({ error: "El email no se encuentra registrado" })
    } catch (e) {
        res.json({ error: e })
    }
}

export const signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const datos = await pool.query('SELECT * FROM users WHERE email = ?', [email.toLowerCase()]);
        if (datos.length > 0) {
            return res.json({ error: "El email ya se encuentra en uso" })
        }
        const encryptPassword = await encrypt.encryptPassword(password)
        const newUser = {
            email: email.toLowerCase(),
            password: encryptPassword
        }
        const token = jwt.sign({ email: newUser.email, password: newUser.password }, config.SECRET)
        await pool.query('INSERT INTO users set  ?', [newUser])
        res.json({ token })
    } catch (e) {
        res.json({ error:e })
    }
}

export const whoami = async (req,res) =>{
	try{
		const token = req.headers["x-access-token"]
		if(!token) return res.status(404).json({error:"No hay token no puedes ingresar"})
		const pase = jwt.verify(token,config.SECRET)
		const datos = await pool.query('SELECT * FROM users WHERE email = ? AND password = ?',[pase.email,pase.password])
		if(datos.length > 0){
			return res.json({exito:"success"})
		}else{
			return res.json({error:"Tu Token no es valido"})
		}

	}catch(e){
		return res.json({error:e})
	}
}
