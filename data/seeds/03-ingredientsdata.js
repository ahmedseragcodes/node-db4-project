
exports.seed = function(knex) {

  return knex('ingredients').insert([
    {ingredient_name: "beef burger patty"},
    {ingredient_name: "cheese"},
    {ingredient_name: "eggs"},
    {ingredient_name: "avocado"},
    
  ]);
};
