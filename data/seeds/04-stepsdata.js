
exports.seed = function(knex) {

  return knex('steps').insert([
    {step_description: "grill burgers for 5 minutes on each side" , recipe_id: 1},
    {step_description: "mix eggs with shredded cheese until fliffy and bright yellow" , recipe_id: 2},
    {step_description: "cut up avocado and layout string cheese over it" , recipe_id: 3},
  ]);
};
