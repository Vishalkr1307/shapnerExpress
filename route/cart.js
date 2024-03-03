const express=require("express")
const router=express.Router()
const {getCart}=require("..//contoller/cartController")

router.get("",getCart)

module.exports = router