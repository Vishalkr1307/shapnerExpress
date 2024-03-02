const express=require("express")
const router=express.Router()
const path=require("path")
const rootPath=require("..//util/path")
const {getAdmin,postAdmin}=require("..//contoller/adminController")

router.get("/add-product",getAdmin)
router.post("/add-product",postAdmin)
module.exports=router