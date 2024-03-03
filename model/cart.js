const path=require("path")
const rootPath=path.join(path.dirname(process.mainModule.filename))
const fs=require("fs")
const { isUtf8 } = require("buffer")
const { json } = require("body-parser")
const p=path.join(rootPath,'data','cart.json')

function readData(cb){
    fs.readFile(p, 'utf8', (err,data)=>{
        if(err){
            console.log("Error reading",err)
        }
        try{
            let data1 = JSON.parse(data)
            cb(data1)

        }
        catch(err){
            console.log("Error reading",err)
        }
    })

}
module.exports=class Cart{
    static addCartProduct(id,productPrice){
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
    static updateCart(id,data){
        readData((item)=>{
            const index=item.findIndex((item)=>item.id==id);
            item.splice(index,1,data);
            fs.writeFile(p,JSON.stringify(item),(err)=>{
                console.log(err);
            })
        })

    }
    static deleteCart(id){
        readData((item)=>{
            const index=item.findIndex((item)=>item.id==id);
            item.splice(index,1);
            fs.writeFile(p,JSON.stringify(item),(err)=>{
                console.log(err);
            })
        })

    }
}