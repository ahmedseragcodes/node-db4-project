
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([   
    { recipe_name: 'Scrambled Eggs' },
    { recipe_name: 'Pita Pizza' },
    { recipe_name: 'Keto Burger' },
  ]);
};
