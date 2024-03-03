const path=require("path")
const rootPath=path.join(path.dirname(process.mainModule.filename))
const Cart=require("..//model/cart")

const getCart=(req,res)=>{
    // console.log(req)
    Cart.getCartProduct(id,product.price)
    res.send("Cart ")


}
module.exports={getCart}