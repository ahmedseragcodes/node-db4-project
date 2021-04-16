const db=require("../data/db-config");

function getAllRecipes(){
    return db("recipes")
}

function getRecipesIngredients(recipeID){
    return db("recipes")
            .join("ingredients", "recipes.recipe_id", "ingredients.recipe_id")
            .where("recipes.recipe_id", recipeID) 
}

function getRecipesInstructions(recipeID){
    return db("recipes")
            .join("instructions", "recipes.recipe_id", "instructions.recipe_id")
            .where("recipes.recipe_id", recipeID)
}

module.exports={
    getAllRecipes,
    getRecipesIngredients,
    getRecipesInstructions
}