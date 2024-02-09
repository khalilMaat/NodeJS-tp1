//import express
const express = require("express");
//import Router
const routerAuth = express.Router();


//Router
routerAuth.get("/login", (req, res) => {
    res.send("<h1>Page Login</h1>")
})

routerAuth.get("/register", (req, res) => {
    res.send("<h1>Page Register</h1>")
})

module.exports = routerAuth;