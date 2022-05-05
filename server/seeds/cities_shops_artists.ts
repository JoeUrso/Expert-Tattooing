import { Knex } from "knex";
import artistsData from "../seed_data/artists";
import citiesData from "../seed_data/cities";
import shopsData from "../seed_data/shops";

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
