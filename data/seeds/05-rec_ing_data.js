
exports.seed = function(knex) {

  return knex('ingredients').insert([
    {ingredient_name: "beef burger patty", recipe_id_one: 1},
    {ingredient_name: "cheese", recipe_id_one: 1, recipe_id_2: 2},
    {ingredient_name: "eggs", recipe_id_one: 1},
    {ingredient_name: "avocado", recipe_id_one: 3},
  ]);
};
