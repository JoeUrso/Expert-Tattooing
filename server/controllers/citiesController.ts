/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// TODO enable the above and fix the issues the right way

import { Request, Response } from "express";
const knex = require("knex")(require("../../knexfile").development);

interface Cities {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

class CitiesController {
    async read(req: Request, res: Response) {
        const cities: Cities = await knex("cities").select("*");

        return res.status(200).json(cities);
    }
}

export { CitiesController };
