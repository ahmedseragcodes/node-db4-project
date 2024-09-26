require("dotenv").config();
const express = require("express");
const server = require("./server");
const PORT = process.env.PORT || 1234;
const path = require("path");

server.listen(PORT, ()=>{
    console.log(`Listening On Port ${PORT}`);
});

//For Front-End connection if client folder is made and create react app is run within
// server.use(express.static(path.join(__dirname, "client/build")));

// server.use("*", (req, res)=>{
//     res.sendFile(path.join(__dirname, "client/build", "index.html"));
//     });

//remember to run npm run build before deployment