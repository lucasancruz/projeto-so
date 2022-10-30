import express from "express"
import PokemonController from "./src/controllers/pokemon.js"

const routes = express.Router()

routes.get("/pokemon", PokemonController.findAll)
routes.get("/pokemon/:name", PokemonController.findByName)

export { routes as default }