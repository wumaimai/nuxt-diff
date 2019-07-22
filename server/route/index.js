const path = require("path");
const fs = require("fs");
const express = require("express");
const router = express.Router();

router.post("/bx/list", function(req, res,next){
    //console.log("我来了");
    const jsonPath = path.join(__dirname, "../mock/bxList.json");
    res.type("application/json").send(fs.readFileSync(jsonPath));
});

module.exports = router;