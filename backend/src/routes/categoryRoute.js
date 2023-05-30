const express=require("express");
const {  } = require("../controllers/categoryController");
const  router=express.Router();

router.route("/register").post(createCategory)



module.exports=router;