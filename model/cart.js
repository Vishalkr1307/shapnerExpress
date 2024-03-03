const path=require("path")
const rootPath=path.join(path.dirname(process.mainModule.filename))
const fs=require("fs")
const { isUtf8 } = require("buffer")
module.exports=class Cart{
    static addCartProduct(id,productPrice){
        const p=path.join(rootPath,'data','cart.json')
        fs.readFile(p,isUtf8,(err,data)=>{
            let cart={product:[],price:0}
            if(err){
                console.error("Error reading file:", err);
                return;

            }
            try{
                cart=JSON.parse(data);
                const existingProductIndex=cart.product.findIndex((prod)=> prod.id==id)
                const existingProduct=cart.product[existingProductIndex]
                let updatedProduct;
                if(existingProduct){
                    updatedProduct={...existingProduct}
                    updatedProduct.qty=updatedProduct.qty+1
                    cart.product=[...cart.product]
                    cart.product[existingProduct]=updatedProduct


                }
                else{
                    updatedProduct={id:id,qty:1}
                    cart.product=[...cart.product,updatedProduct]
                    cart.price=cart.price+productPrice
                    fs.writeFile(p,JSON.stringify(cart),err=>{
                        console.log(err)
                    })
                }


            }
            catch(err){
                console.error("Error parsing JSON:", err)
            }
        })

    }
}