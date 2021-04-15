//IMPORTS
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const router = require("./router");

//INSTANCE OF THE SERVER
const server = express();

//GLOBAL MIDDLEWARE
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/recipes", router);

//SANITY TEST
server.get("/", (req, res, next)=>{
    res.send("<h2>Success</h2>")
})

//ERROR HANDLING
server.use((err, req, res, next)=>{
    res.status(500).json({message: err.message})
})

//EXPORTS
module.exports = server;