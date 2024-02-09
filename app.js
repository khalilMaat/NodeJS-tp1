//import express
const express = require('express');
//make instance of express
const app = express();
//PORT
const PORT = 7000;

//use router
const auth = require("./routes/auth");
const post = require("./routes/post");

app.use("/auth", auth);
app.use("/post", post);

//Route
app.get("/", (req,res) => {
    res.send("<h1>Home page</h1>")
})
//Run the server
app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`);
})