import { count } from "console";
import app from "./app"
import connection from "./connection"

app.get("/", async (req, res) => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor
        `)

        res.status(200).send(result[0])
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
});

app.get("/actor", async (req, res) => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor
            WHERE name = "Tony Ramos"
        `)

        res.status(200).send(result[0])
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
});

app.get("/actors", async (req, res) => {
    try {
        const result = await connection.raw(`
            SELECT COUNT(*), gender
            FROM Actor
            GROUP BY gender
        `)

        res.status(200).send(result[0])
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
});

const updateActor = async (id: string, salary: number) => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id)
}

const deleteActor = async (id: string) => {
    await connection("Actor")
        .delete()
        .where("id", id)
}

const avgSalary = async (gender: string) => {
    const result = await connection("Actor")
        .avg("average salary")
        .where({ gender })

    return result[0].average
}

app.get("/actor/:id", async (req, res) => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor
            WHERE id = 001
        `)

        res.status(200).send(result[0])
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
});

app.get("/actor", async (req, res) => {
    try {
        const count = await connection.raw(`
            SELECT COUNT(*), gender
            FROM Actor
        `)

        res.status(200).send({
            quantity: count,
        })
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
});