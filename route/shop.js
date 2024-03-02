const express=require("express")
const router=express.Router()
const path=require("path")
const rootPath=require("..//util/path")
const {getShop}=require("..//contoller/shopController")

router.get("/",getShop)

module.exports=router