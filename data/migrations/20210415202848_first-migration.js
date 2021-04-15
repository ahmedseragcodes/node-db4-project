
exports.up = function(knex) {
    return knex.schema
    .createTable("recipes", tbl=>{
        tbl.increments("recipe_id")
        tbl.string("recipe_name").notNullable().unique()
    })
    .createTable("instructions", tbl=>{
        tbl.increments("instructions_id")
        tbl.string("step_one").notNullable()
        tbl.string("step_two")
        tbl.string("step_three")
        tbl.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("recipe_id")
            .inTable("recipes")
            .onDelete("RESTRICT")
    })
    .createTable("ingredients", tbl=>{
        tbl.increments("ingredients_id")
        tbl.string("ingredient_one").notNullable()
        tbl.string("ingredient_two")
        tbl.string("ingredient_three")
        tbl.integer("recipie_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("restrict")
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("ingredients")
  .dropTableIfExists("instructions")
  .dropTableIfExists("recipes")
};
