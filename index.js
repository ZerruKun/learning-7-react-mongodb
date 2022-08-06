const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/muggers-db", {useNewUrlParser: true})

app.use(bodyParser.json());
app.use("/api", require("./api"))

app.listen(4000, () => {
    console.log("server is listening")
})

// + nodemon
// mongod --dbpath "D:\Program Files\MongoDB\data"