import { app } from "./app";
import { createNewUser } from "./endpoints/createNewUser";
import { deleteUserById } from "./endpoints/deleteUserById";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserById } from "./endpoints/getUserById";
import { getUserByName } from "./endpoints/getUserByName";
import { getUsersByType } from "./endpoints/getUsersByType";
import { updateUser } from "./endpoints/updateUser";

app.get("/users", getAllUsers)
app.get("/users", getUserByName)
app.get("/users", getUsersByType)
app.get("/users/:id", getUserById)
app.post("/users", createNewUser)
app.patch("/users", updateUser)
app.delete("/users/:id", deleteUserById)