import { app } from "./app";
import { getUsersByType } from "./endpoints/getUserByType";
import { getUsersByName } from "./endpoints/getUsersByName";


app.get("/user", getUsersByName)
app.get("/user/:type", getUsersByType)