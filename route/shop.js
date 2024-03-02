const express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{
    console.log(req.body,"shop")
    res.send('<h1>Hello this shop for product</h1>')
})

module.exports=router