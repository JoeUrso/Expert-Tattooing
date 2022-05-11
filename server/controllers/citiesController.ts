/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

const knex = require("knex")(require("../../knexfile").development);
import { Request, Response } from "express";

interface Cities {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

// SEND CITIES TABLE
exports.index = (_req: Request, res: Response) => {
    knex("cities")
        .then((data: Cities) => {
            res.status(200).json(data);
        })
        .catch((err: string) =>
            res.status(400).send(`Error retrieving rappers: ${err}`)
        );
};
