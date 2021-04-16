exports.seed = function(knex, Promise){
  return knex("ingredients").insert([
    {ingredient_one: "butter" , ingredient_two: "shredded cheese" , ingredient_three: "chicken eggs" , recipe_id: 1 },
    {ingredient_one: "pita bread" , ingredient_two: "tomatoe paste" , ingredient_three: "mozzarella cheese" , recipe_id: 2 },
    {ingredient_one: "butter" , ingredient_two: "beef burger patty" , ingredient_three: "seasonings" , recipe_id: 3 }
  ])

}