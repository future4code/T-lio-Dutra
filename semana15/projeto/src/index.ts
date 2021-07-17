import express, { Express, Request, Response } from 'express'
import cors from 'cors'


const app: Express = express();
app.use(express.json());
app.use(cors());

type User = {
    name: string
    cpf: number
    birthday: number
}

let users: User[] = [
    {
        name: "Alice",
        cpf: 49970423421,
        birthday: 20101998
    },
    {
        name: "Julia",
        cpf: 29780534512,
        birthday: 15121976
    },
    {
        name: "Lucas",
        cpf: 18656223311,
        birthday: 15121976
    }
]

app.get("/users", (req: Request, res: Response) => {
    res.send(users)
}) 

app.post("/users", (req: Request, res: Response) => {
    try {
      const { name, cpf, birthday } = req.body
      let type = req.body.type as string
      
      if (!name || !cpf || !birthday) {
        throw new Error("Missing data in body to create user")
      }
  
      if (typeof name !== "string") {
        throw new Error("Invalid name")
      }
  
      if (typeof cpf !== "number") {
        throw new Error("Invalid cpf")
      }
  
      if (typeof birthday !== "number") {
        throw new Error("Invalid age")
      }
  
      users.forEach(user => {
        if (user.cpf === cpf) {
          throw new Error("Cpf already exists")
        }
      })
  
      const newUser: User = {
        name,
        cpf,
        birthday,
      }
  
      users.push(newUser)
  
      res.status(200).send({
        message: "user created successfuly",
        user: newUser
      })
    } catch (err) {
      res.status(400).send(err.message)
    }
  })

app.listen(3003, () => {
    console.log("Server is running at http://localhost:3003")
  })