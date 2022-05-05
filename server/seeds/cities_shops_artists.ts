import { Knex } from "knex";
const citiesData = require("../seed_data/cities");
const shopsData = require("../seed_data/shops");
const artistsData = require("../seed_data/artists");

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cities").del();
    await knex("shops").del();
    await knex("artists").del();

    // Inserts seed entries
    await knex("cities").insert(citiesData);
    await knex("shops").insert(shopsData);
    await knex("artists").insert(artistsData);
}
