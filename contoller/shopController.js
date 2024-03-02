
const path=require("path")
const rootPath=require("..//util/path")

const getShop=(req,res)=>{
    console.log(req.body,"shop")
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
    // res.sendFile(path.join(__dirname,'..','views','shop.html'))
    res.sendFile(path.join(rootPath,'views','shop.html'))
}
module.exports={getShop}