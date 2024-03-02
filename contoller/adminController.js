const path=require("path")
const rootPath=require("..//util/path")
const getAdmin=(req,res)=>{
    res.sendFile(path.join(rootPath,'views','appProduct.html'))
}
const postAdmin=(req,res,next)=>{
    // console.log(req.body)
    res.redirect('/')
}

module.exports={getAdmin,postAdmin}