import { Request, Response } from "express";
import { getAllPokemons } from "../data/getAllPokemons";

export const getAllPokes = async(req: Request, res: Response): Promise<any> => {
    try {
        const page: number = Number(req.query.page) || 1 
        const offset: number = (page - 1) * 12

        const listPages = await getAllPokemons(offset)
        if(!listPages.length){
            return res.status(404).send({error: "Pokemon not found."})
        }

        res.status(200).send(listPages)
    } catch (error: any) {
        res.send({error: error.message || error.sqlMessage})
    }
}