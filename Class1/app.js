const http=require("http");
const exress=require("express")
const bodyParser=require("body-parser")
const app=exress()
app.use(bodyParser.urlencoded({ extended:false}))


app.use("/add-product",(re,res,next)=>{
     
   return res.send('<form action="/product" method="POST"><input type="text" name="title"/> <input type="text" name="description"/> <button type="submit">addProduct</button></form>')
})
app.use("/product",(req,res,next)=>{
    console.log(req.body)

    return res.redirect("/")
})

app.use("/",(req,res)=>{
    return res.send("<h1>hello wolrd lets add the product</h1>")
})



// app.use((req,res,next)=>{
//     console.log("Starting Express")
//     // return res.send("<h1>Hello world</h1>")
//     next()

// })
// app.use((req,res,next)=>{
//     console.log("MIddle Express")
//     // return res.send("<h1>Hello world -2</h1>")
//     next()


// })
// app.use((req,res,next)=>{
//     console.log("End Express")
//     return res.send("<h1>Hello world -3</h1>")


// })




app.listen(3000,()=>{
    console.log(`Express listening on ${3000}`)
})