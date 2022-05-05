import { Knex } from "knex";

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
