// TODO Figure out how to make this work properly with ESlint/TS so you're not using require statements?

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Knex } from "knex";
// import { citiesData } from "../seed_data/cities";
// import { shopsData } from "../seed_data/shops";
// import { artistsData } from "../seed_data/artists.js";

// const artistsData = require("../seed_data/artists");
const shopsData = require("../seed_data/shops");
const citiesData = require("../seed_data/cities");

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cities").del();
    await knex("shops").del();
    // await knex("artists").del();

    // Inserts seed entries
    await knex("cities").insert(citiesData);
    await knex("shops").insert(shopsData);
    // await knex("artists").insert(artistsData);
}
