
exports.seed = function(knex) {

      return knex('recipes').insert([
        {recipe_name: "keto cheeseburger"},
        {recipe_name: "scrambled eggs"},
        {recipe_name: "avocado and cheese"}
      ]);
};
