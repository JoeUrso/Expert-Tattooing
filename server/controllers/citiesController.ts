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

// TODO this was an attempt to do it the way you did in bootcamp, delete?
// const knex = require("knex")(require("../../knexfile").development);
// import { Request, Response } from "express";

// // SEND CITIES TABLE
// exports.index = (_req: Request, res: Response) => {
//     knex("cities")
//         .then((data: Cities) => {
//             res.status(200).json(data);
//         })
//         .catch((err: string) =>
//             res.status(400).send(`Error retrieving rappers: ${err}`)
//         );
// };
