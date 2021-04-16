const db=require("../data/db-config");

function getAllRecipes(){
    return db("recipes")
}

module.exports={
    getAllRecipes,
}