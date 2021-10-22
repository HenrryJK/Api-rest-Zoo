import { response } from 'express'
import {pool} from '../database'

export const readAllZoologicos = async(req , res ) => {
    try {
        const response = await pool.query('select * from zoologico');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Ocurrio algo...');
    }
}

