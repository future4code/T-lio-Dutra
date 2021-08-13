import { countries } from "../data"
import { Request, Response } from "express"
import { country } from "../types"

export const createCountry = (
    req: Request,
    res: Response
): void => {
    let errorCode: number = 400;

    try {
        const authorization: string = req.headers.authorization as string;
        if (!authorization || authorization.length < 10) {
            errorCode = 401;
            throw new Error("Token invalido");
        }
        if (!req.body.name && !req.body.capital && !req.body.continent) {
            throw new Error("Parametros invalidos");
        }
        const countryName: number = countries.findIndex(
            (country) => country.name === req.body.name
        );

        if (countryName !== -1) {
            errorCode = 409;
            throw new Error("Esse pais ja existe.");
        }

        const newCountry: country = {
            id: Date.now(),
            name: req.body.name,
            capital: req.body.capital,
            continent: req.body.continent,
        };

        countries.push(newCountry);

        res.status(200).send({ message: "Criado com sucesso!", country: newCountry });
    } catch (error) {
        res.status(errorCode).send(error.message);
    }
}