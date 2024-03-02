const express=require("express")
const router=express.Router()
const path=require("path")
const rootPath=require("..//util/path")
const {getContact,postController}=require("..//contoller/contactController")

router.get("",getContact)
router.post("/success",postController)
module.exports=router