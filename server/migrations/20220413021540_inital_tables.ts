import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable("cities", (table) => {
            table.increments("id").primary();
            table.string("name").notNullable();
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        })
        .createTable("shops", (table) => {
            table.increments("id").primary();
            table.string("name").notNullable();
            table.string("address").notNullable();
            table.jsonb("contact_info").notNullable();
            table.string("website");
            table.jsonb("hours").notNullable();
            table.string("about").notNullable();
            // TODO may need to change location from string to something else depending on how google maps api works
            table.string("location").notNullable();
            table.string("instagram");
            table
                .integer("city_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("cities")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        })
        .createTable("artists", (table) => {
            table.increments("id").primary();
            table.string("name").notNullable();
            table.string("instagram").notNullable();
            table.jsonb("contact_info").notNullable();
            table
                .integer("shop_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("shops")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.timestamp("updated_at").defaultTo(knex.fn.now());
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable("cities")
        .dropTable("shops")
        .dropTable("artists");
}
