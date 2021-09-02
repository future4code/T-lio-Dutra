import app from "./app";
import { createTask } from "./endpoints/createTask";
import { createUser } from "./endpoints/createUser";
import { editUser } from "./endpoints/editUser";
import { getAllTask } from "./endpoints/getAllTask";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getTaskById } from "./endpoints/getTaskById";
import { getUserById } from "./endpoints/getUserById";

app.get("/user/all", getAllUsers)
app.get("/task", getAllTask)
app.get("/user/:id", getUserById)
app.get("/task/:id", getTaskById)
app.put("/user", createUser)
app.put("/task", createTask)
app.put("/user/edit/:id", editUser)
