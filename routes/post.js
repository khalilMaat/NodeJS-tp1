const express = require("express");
const routerPost = express.Router();

routerPost.get("/all", (req, res) => {
    res.json({
        id: req.query.id,
        id: req.query.name
    })
})

routerPost.get("/", (req, res) => {
    res.json({
      id: req.query.id
  })  
})

module.exports = routerPost;