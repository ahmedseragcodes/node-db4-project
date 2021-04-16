//IMPORTS
const express=require("express");
const Recipes = require("./model");

//INSTANCE OF ROUTER
const router = express.Router();

//ENDPOINTS
router.get("/", (req, res, next)=>{
    Recipes.getAllRecipes()
    .then((allRecipes)=>{
        res.status(200).json(allRecipes);
    })
    .catch((err)=>{
        next(err);
    })
})

//EXPORTS
module.exports = router;