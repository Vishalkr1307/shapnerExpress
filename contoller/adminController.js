const path=require("path")
const rootPath=require("..//util/path")
const Product=require("..//model/product")
const getAdmin=(req,res)=>{
    
    Product.fetchAll((data)=>{

    })

    res.sendFile(path.join(rootPath,'views','appProduct.html'))
}
const singleAdmin=(req,res)=>{
    const id=req.params.id
    console.log(id)
    Product.fidById(id,(item)=>{
       res.send(`<html>
        <head>
        <title>Page-Detail</title>
        </head>
        <body>
        <h1>Page Details</h1>
        <p>${item.id}</p>
        <p>${item.product}</p>
        <body>
       </html>`)
    })

}
const postAdmin=(req,res,next)=>{
   
    
    const product=new Product(req.body.product)
    product.save()
    res.redirect('/')
}

module.exports={getAdmin,postAdmin,singleAdmin}