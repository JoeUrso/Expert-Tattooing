/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// TODO enable the above and fix the issues the right way

import { Request, Response } from "express";
const knex = require("knex")(require("../../knexfile").development);

type ContactInfo = {
    phone: string;
    email: string;
    other: string;
};

type Hours = {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
};

interface Shops {
    id: number;
    name: string;
    city_id: number;
    address: string;
    contact_info: ContactInfo;
    website: string;
    hours: Hours;
    about: string;
    location: string;
    instagram: string;
    created_at: string;
    updated_at: string;
}

class ShopsController {
    async read(req: Request, res: Response) {
        const shops: Shops = await knex("shops").select("*");

        return res.status(200).json(shops);
    }
}

export { ShopsController };
