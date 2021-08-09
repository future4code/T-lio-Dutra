import express from "express"
import knex from "knex"
import dotenv from "dotenv"
import createUser from "./endpoits/createUser"
import getUserById from "./endpoits/getUserById"
import editUser from "./endpoits/editUser"
import createTask from "./endpoits/createTask"
import getTaskById from "./endpoits/getTaskById"

dotenv.config()

export const connection = knex({
    client:"mysql",
    connection:{
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: 3306
    }
})

const app = express()
app.use(express.json())

app.put("/user", createUser)
app.get("/user/:id", getUserById)
app.post("/user/edit/:id", editUser)
app.put("/task", createTask)
app.get("/task/:id", getTaskById)

app.listen(3003, () => {
    console.log("Server is running at 3003")
})

