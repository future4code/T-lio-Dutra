import { app } from "./app"
import { getAllCountries } from "./endpoints/getAllCountries"
import { getCountryById } from "./endpoints/getCountryById"
import { getWithFilter } from "./endpoints/getWithFilter"
import { editCountry } from "./endpoints/editCountry"

app.get("/countries", getAllCountries)
app.get("/countries/search", getWithFilter)
app.get("/countries/:id", getCountryById)
app.post("/countries/:id", editCountry)