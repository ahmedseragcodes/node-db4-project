//IMPORTS
const express=require("express");
const Recipes = require("./model");

//INSTANCE OF ROUTER
const router = express.Router();

//ENDPOINTS

//[GET] All Recipes 
router.get("/", (req, res, next)=>{
    Recipes.getAllRecipes()
    .then((allRecipes)=>{
        res.status(200).json(allRecipes);
    })
    .catch((err)=>{
        next(err);
    })
})

//[GET] All Recipes Ingredients

router.get("/:id/ingredients", (req, res, next)=>{
    Recipes.getRecipesIngredients(req.params.id)
    .then((allIngredients)=>{
        res.status(200).json(allIngredients);
    })
    .catch((err)=>{
        next(err);
    })
})

//[GET] All Recipes Instructions

router.get("/:id/instructions", (req,res,next)=>{
    Recipes.getRecipesInstructions(req.params.id)
    .then((allInstructions)=>{
        res.status(200).json(allInstructions);
    })
    .catch((err)=>{
        next(err);
    })
})


//EXPORTS
module.exports = router;