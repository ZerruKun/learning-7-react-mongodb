const express = require("express");
const router = express.Router();

router.get("/muggers", (req, res) => {
    res.send({methd: "GET"})
})

router.post("/muggers", (req, res) => {
    res.send({methd: "POST"})
})

router.put("/muggers/:id", (req, res) => {
    res.send({methd: "PUT"})
})

router.delete("/muggers/:id", (req, res) => {
    res.send({methd: "DELETE"})
})

module.exports = router;