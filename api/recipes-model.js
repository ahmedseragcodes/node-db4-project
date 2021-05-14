const db = require("../db-Config");

function findAllRecipes(){
    
   return db("recipes")
   .join("steps", "recipes.recipe_id", "steps.recipe_id")
   .join("rec_ing_assign", "recipes.recipe_id", "rec_ing_assign.recipe_id_one")
   .join("ingredients", "rec_ing_assign.ingredient_name", "ingredients.ingredient_name")
   .select("recipes.recipe_id", "recipes.recipe_name", "steps.step_id", "steps.step_description", "rec_ing_assign.ingredient_name", "rec_ing_assign.recipe_id_one" )
}

module.exports = {
    findAllRecipes
}