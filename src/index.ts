import { app } from "./app";
import { getAllPokes } from "./endpoints/getAllPokes";
import { getByGenerations } from "./endpoints/getByGenerations";
import { getPokemonByName } from "./endpoints/getPokemonByName";
import { getPokemonsByType } from "./endpoints/getPokemonsByType";

// pegar todos com paginação
// pegar por nome
// pegar por tipo
// pegar por geração
app.get("/", getAllPokes)
app.get("/pokemons/:name", getPokemonByName)
app.get("/pokemons", getPokemonsByType)
app.get("/pokemons/generation/:generation", getByGenerations)