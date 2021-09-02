import { Request, Response } from "express"
import { updateUser } from "../data/updateUser"

export const editUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const {nome, apelido, email} = req.body
        const {id} = req.params

        if(nome === "" || apelido === "" || email === "" ){
            return res.status(400).send({error: "Preencha os campos."})
        }
        if(!nome && !apelido && !email){
            return res.status(400).send("Preencha o campo obrigatorio.")
        }
        await updateUser(id, nome, apelido, email)
        res.status(200).send(`Usuario editado com sucesso.`)
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}