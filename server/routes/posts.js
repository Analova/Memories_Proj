var express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
res.send("THIS WORKD")
})

module.exports = router