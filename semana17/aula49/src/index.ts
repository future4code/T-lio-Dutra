import app from "./app"
import connection  from "./connection"
import { getUserByName } from "./endpoints/getUserByName"
import { getUserByType } from "./endpoints/getUserByType"

app.get("/users", getUserByName)
app.get("/users/:type", getUserByType)