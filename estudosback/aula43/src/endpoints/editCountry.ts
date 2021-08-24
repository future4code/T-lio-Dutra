import { countries } from "../data"
import { Request, Response } from "express"

export const editCountry = (
    req: Request,
    res: Response
): void => {
    let errorCode: number = 400;
    try {
        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
        );

        if (countryIndex === -1) {
            errorCode = 404;
            throw new Error();
        }

        if (!req.body.name && !req.body.capital) {
            throw new Error("Parametros invalidos.");
        }

        if (req.body.name) {
            countries[countryIndex].name = req.body.name;
        }

        if (req.body.capital) {
            countries[countryIndex].capital = req.body.capital;
        }

        res.status(200).send("Pais atualizado com sucesso!")
    } catch (error) {
        res.status(errorCode).send(error.message);
    }
}