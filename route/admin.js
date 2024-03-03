const express=require("express")
const router=express.Router()
const path=require("path")
const rootPath=require("..//util/path")
const {getAdmin,postAdmin,singleAdmin}=require("..//contoller/adminController")

router.get("/add-product",getAdmin)
router.post("/add-product",postAdmin)
router.get("/add-product/:id",singleAdmin)
module.exports=router