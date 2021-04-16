exports.seed = function(knex, Promise){
  return knex("instructions").insert([
    {step_one: "melt butter" , step_two: "mix in cheese" , step_three: "mix in eggs" , recipe_id: 1 },
    {step_one: "cover pita bread in light layer of tomatoe paste" , step_two: "add mozzarella cheese" , step_three: "oven-bake at 400 degrees for 10 minutes" , recipe_id: 2 },
    {step_one: "melt butter" , step_two: "cook 1 side of beef patty at medium-high heat on oven-top for 4-5 minutes" , step_three: "flip burger and cook other side for 4-5 minutes" , recipe_id: 3 }
  ])

}