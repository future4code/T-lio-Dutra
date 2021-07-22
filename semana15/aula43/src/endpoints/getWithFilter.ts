import { Request, Response } from "express"
import { countries } from "../data"
import { country } from "../types"

export const getWithFilter = (
    req: Request,
    res: Response
) => {
    let result: country[] = countries;
    try {
        if (!req.query.name && !req.query.capital && !req.query.continent) {
            throw new Error("Invalid Parameters");
        }
        if (req.query.name) {
            result = result.filter((country) =>
                country.name.includes(req.query.name as string)
            );
        }

        if (req.query.capital) {
            result = result.filter((country) =>
                country.capital.includes(req.query.capital as string)
            );
        }

        if (req.query.continent) {
            result = result.filter((country) =>
                country.continent.includes(req.query.continent as string)
            );
        }
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
};