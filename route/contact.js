const express=require("express")
const router=express.Router()
const path=require("path")
const rootPath=require("..//util/path")

router.get("",(req,res)=>{
    res.sendFile(path.join(rootPath,'views','contact.html'));

})
router.post("/success",(req,res)=>{
    res.send("<h1>form successfully registered<h1>");
})
module.exports=router