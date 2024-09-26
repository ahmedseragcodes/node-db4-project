const express = require("express");
const Recipes = require("./recipes-model");

const router = express.Router();

//ENDPOINTS

//[GET] All Recipes

router.get("/", (req, res, next)=>{

    Recipes.findAllRecipes()
    .then((allRecipes)=>{
        res.status(200).json(allRecipes);
    })
    .catch((err)=>{
        next(err);
    })

})

module.exports = router;