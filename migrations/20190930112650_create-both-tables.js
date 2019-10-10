
exports.up = function(knex) {
    return knex.schema.createTable("Recipes", (r) => {
        r.increments().unsigned().primary();
        r.string("Name");
    })

    .createTable("Steps", (s) => {
        s.increments().unsigned().primary();
        s.string("Ingredient");
        s.float("Quantity");
        s.integer("Recipe_id").unsigned().notNullable().references("id").inTable("Recipes");
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("Recipes")
        .dropTableIfExists("Steps")
};
