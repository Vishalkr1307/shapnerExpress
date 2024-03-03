const path=require("path")
const rootPath=path.join(path.dirname(process.mainModule.filename))
const Cart=require("..//model/cart")

const getCart=(req,res)=>{
    // console.log(req)
    Cart.getCartProduct(id,product.price)
    res.send("Cart ")


}
const updateCart=(req,res)=>{
    const id="9704"
    Cart.updateCart(id,{
        product:"let update",
        id:id
    })
    res.send("Cart updated ")

}
const deleteCart=(req,res)=>{
    const id="9704"
    Cart.deleteCart(id)
    res.send("Cart deleted")

}
module.exports={getCart,updateCart,deleteCart}