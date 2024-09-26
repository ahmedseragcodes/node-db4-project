const express = require("express");
const recipesRouter = require("./api/recipes-router");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use("/api/recipes", recipesRouter);
server.use(cors());
server.use(helmet());

//Global Error Handling 
server.use((err, req, res, next)=>{
    res.status(500).json({message: err.message});
});

//Sanity Check Endpoint
server.get("/", (req, res, next)=>{
    res.json({message: "API Up"});
});

module.exports = server;


