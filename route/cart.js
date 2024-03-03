const express=require("express")
const router=express.Router()
const {getCart,updateCart,deleteCart}=require("..//contoller/cartController")

router.get("",getCart)
router.get("/updateCart/:id",updateCart)
router.get("/deleteCart/:id",deleteCart)

module.exports = router