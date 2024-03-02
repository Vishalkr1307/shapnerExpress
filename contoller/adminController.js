const path=require("path")
const rootPath=require("..//util/path")
const Product=require("..//model/product")
const getAdmin=(req,res)=>{
    
    Product.fetchAll((data)=>{

    })

    res.sendFile(path.join(rootPath,'views','appProduct.html'))
}
const postAdmin=(req,res,next)=>{
   
    
    const product=new Product(req.body.product)
    product.save()
    res.redirect('/')
}

module.exports={getAdmin,postAdmin}