import { app } from "./app"
import { createCountry } from "./endpoints/createCountry"
import { deleteCountryById } from "./endpoints/deleteCountryById"
import { editCountry } from "./endpoints/editCountry"
import { getAllCountries } from "./endpoints/getAllCountries"
import { getCountryById } from "./endpoints/getCountryById"
import { getRandomCountry } from "./endpoints/getRandomCountry"
import { searchCountryFilters } from "./endpoints/searchCountryFilters"

app.get("/countries", getAllCountries) 
app.get("/countries/random", getRandomCountry)
app.get("/countries/search", searchCountryFilters)
app.get("/countries/:id", getCountryById)
app.post("/countries", createCountry)
app.post("/countries/:id", editCountry)
app.delete("/countries/:id", deleteCountryById)