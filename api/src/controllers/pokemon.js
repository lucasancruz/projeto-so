import Pokemon from '../models/pokemon.js'
import { Op } from 'sequelize'

async function findAll(req, res) {
    const pokemons = await Pokemon.findAll()
    return res.json(pokemons)
}

async function findByName(req, res) {
    const pokemon = await Pokemon.findAll({ 
        where: { 
            name: { [Op.like]: `%${req.params.name}%`} 
        } 
    })

    return res.json(pokemon)
}

export default { findAll, findByName }