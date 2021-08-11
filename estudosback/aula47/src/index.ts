import { app } from "./app"
import { connection } from "./connection"

app.get("/", async (req, res) => {
    try {
        // const result = await connection.raw(`
        //     SELECT * FROM Actor;
        // `)
        const result = await connection("Actor")

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

app.post("/actor", async (req, res) => {
    try {
        const {name, salary, birth_date, gender} = req.body;
        const novoAtor = {
            id: Date.now().toString(),
            name,
            salary,
            birth_date,
            gender
        }
        await connection("Actor")
        .insert(novoAtor)
        // await connection.raw(`
        // INSERT INTO Actor (id, name, salary,
        // birth_date, gender)
        // VALUES (
        //     ${Date.now().toString()},
        //     "${req.body.name}",
        //     ${req.body.salary},
        //     "${req.body.birth_date}",
        //     "${req.body.gender}"
        // );   
        // `)

        res.status(200).send("Dados enviados.")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

app.put("/actor/:id", async (req, res) => {
    try {
        await connection("Actor")
            .update({
                name: req.body.name,
                salary: req.body.salary,
                birth_date: req.body.birth_date,
                gender: req.body.gender
            })
            .where({id: req.params.id})

        res.status(200).send("Dados atualizados.")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

app.delete("/actor/:id", async (req, res) => {
    try {
        await connection("Actor")
            .delete()
            .where({id: req.params.id})
        
        res.status(200).send("Deletado com sucesso.")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

app.get("/actor", async (req, res) => {
    const name = req.body.name
    const result = await connection.raw(`
        SELECT * FROM Actor
        WHERE name = "${name}";
    `)
    return result
})