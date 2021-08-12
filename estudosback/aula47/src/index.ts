import { app } from "./app"
import { connection } from "./connection"
import { Request, Response } from "express"

// Exercício 1
// a) Mostra o resultado da query e outras informações através de array de objetos

// b)
const searchByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor
        WHERE name = "${name}";
    `);
    return result
}

// c)
const countByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT (*) FROM Actor
        WHERE gender = "${gender}"
    `);
}

// Exercício 2
// a) 
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id)
}

// b)
const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
        .delete()
        .where("id", id);
}

// c) 
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary")
        .where({gender});

    return result[0];
}

// Exercício 3
// a) dúvida
// app.get("/actor/:id", async (req: Request, res: Response) => {
//     try {
        
//         res.status(200).send(actor)
//     } catch (error) {
//         res.status(400).send(error.sqlMessage || error.message)
//     }
// })

// b) dúvida

// Exercício 4: dúvidas
app.post("/actor", async (req, res) => {
    try {
        const { name, salary, birth_date, gender } = req.body;
        const novoAtor = {
            id: Date.now().toString(),
            name,
            salary,
            birth_date,
            gender
        }
        await connection("Actor")
            .insert(novoAtor)

        res.status(200).send("Dados enviados.")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

// a)
app.put("/actor/:id", async (req, res) => {
    try {
        await connection("Actor")
            .update({
                salary: req.body.salary
            })
            .where({ id: req.params.id })

        res.status(200).send("Salário atualizado.")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

// b)
app.delete("/actor/:id", async (req, res) => {
    try {
        await connection("Actor")
            .delete()
            .where({ id: req.params.id })

        res.status(200).send("Deletado com sucesso.")
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})
