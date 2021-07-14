import cors from "cors"
import express, { Express } from "express"

export const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    res.send("Hello from express")
})

app.listen(3003, () => {
    console.log("Server is ready");
})