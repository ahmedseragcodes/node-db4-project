
exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", (tbl)=>{
    tbl.increments("recipe_id")
    tbl.text("recipe_name").notNullable().unique()
  })
  .createTable("ingredients", (tbl)=>{
    tbl.increments("ingredient_id")
    tbl.text("ingredient_name").notNullable().unique()
  })
  .createTable("steps", (tbl)=>{
    tbl.increments("step_id")
    tbl.text("step_description").notNullable()
    tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE")
  })
  .createTable("rec_ing_assign", (tbl)=>{
      tbl.increments("rec_ing_id")
      tbl.text("ingredient_name")
        .notNullable()
        .references("ingredient_name")
        .inTable("ingredients")
      tbl.integer("recipe_id_one")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE");
     tbl.integer("recipe_id_two")
        .unsigned()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE");
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("rec_ing_assign")
  .dropTableIfExists("steps")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipes")
};